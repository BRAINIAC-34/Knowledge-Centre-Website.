const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const DEFAULT_NOTIFICATION_EMAIL = "info@knowledgecentre.online";
const DEFAULT_FROM_EMAIL = "Knowledge Centre <onboarding@resend.dev>";

type EnquiryPayload = {
  enquiry_id?: string;
  audience?: "tuition" | "school";
  parent_name: string;
  student_name: string;
  phone: string;
  email?: string;
  grade: string;
  message?: string;
};

const escapeHtml = (value: string | null | undefined) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const getFormNumber = async () => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/enquiries?select=id`, {
    method: "GET",
    headers: {
      apikey: serviceRoleKey,
      authorization: `Bearer ${serviceRoleKey}`,
      prefer: "count=exact",
      range: "0-0",
    },
  });

  if (!response.ok) {
    console.error("Unable to count enquiries:", await response.text());
    return null;
  }

  const contentRange = response.headers.get("content-range");
  const total = contentRange?.split("/")[1];
  return total && total !== "*" ? Number(total) : null;
};

const sendEmail = async ({
  to,
  from,
  subject,
  html,
  text,
  replyTo,
}: {
  to: string;
  from: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) => {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");

  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${resendApiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      text,
      reply_to: replyTo || undefined,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend email failed: ${await response.text()}`);
  }

  return response.json();
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { enquiry_id, audience, parent_name, student_name, phone, email, grade, message } =
      (await req.json()) as EnquiryPayload;

    console.log(`New enquiry received from ${parent_name} for ${student_name} (${grade})`);
    console.log(`Phone: ${phone}, Email: ${email || 'N/A'}`);
    console.log(`Message: ${message || 'N/A'}`);
    console.log(`Notification will be sent to: ${Deno.env.get("NOTIFICATION_EMAIL") || DEFAULT_NOTIFICATION_EMAIL}`);

    const formNumber = await getFormNumber();
    const subject = formNumber ? `FORM-#${formNumber}` : `FORM-#${enquiry_id?.slice(0, 8) || "NEW"}`;
    const notificationEmail = Deno.env.get("NOTIFICATION_EMAIL") || DEFAULT_NOTIFICATION_EMAIL;
    const fromEmail = Deno.env.get("NOTIFICATION_FROM_EMAIL") || DEFAULT_FROM_EMAIL;
    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const enquiryDetails = {
      form_number: formNumber,
      enquiry_id,
      audience: audience || "tuition",
      parent_name,
      student_name,
      phone,
      email: email || "Not provided",
      grade,
      message: message || "No message",
      submitted_at: submittedAt,
    };

    console.log("Enquiry details:", JSON.stringify(enquiryDetails));

    const html = `
      <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
        <h1 style="margin: 0 0 16px; color: #111827;">${escapeHtml(subject)}</h1>
        <p style="margin: 0 0 20px;">A new ${escapeHtml(audience === "school" ? "school" : "tuition")} enquiry was submitted.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
          <tbody>
            <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Parent Name</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(parent_name)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Student Name</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(student_name)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
            <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(email || "Not provided")}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Enquiry Type</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(audience || "tuition")}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Grade / Program</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(grade)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(message || "No message")}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Submitted At</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(submittedAt)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Enquiry ID</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${escapeHtml(enquiry_id || "Not provided")}</td></tr>
          </tbody>
        </table>
      </div>
    `;

    const text = [
      subject,
      `Enquiry Type: ${audience || "tuition"}`,
      `Parent Name: ${parent_name}`,
      `Student Name: ${student_name}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Grade / Program: ${grade}`,
      `Message: ${message || "No message"}`,
      `Submitted At: ${submittedAt}`,
      `Enquiry ID: ${enquiry_id || "Not provided"}`,
    ].join("\n");

    await sendEmail({
      to: notificationEmail,
      from: fromEmail,
      subject,
      html,
      text,
      replyTo: email,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Notification sent", subject }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error processing notification:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to process notification" }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
