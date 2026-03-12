const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const NOTIFICATION_EMAIL = "info@knowledgecentre.online";

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { parent_name, student_name, phone, email, grade, message } = await req.json();

    console.log(`New enquiry received from ${parent_name} for ${student_name} (${grade})`);
    console.log(`Phone: ${phone}, Email: ${email || 'N/A'}`);
    console.log(`Message: ${message || 'N/A'}`);
    console.log(`Notification would be sent to: ${NOTIFICATION_EMAIL}`);

    // Try sending email via Supabase's built-in email if available
    // For now, log the enquiry details for notification
    const enquiryDetails = {
      parent_name,
      student_name,
      phone,
      email: email || "Not provided",
      grade,
      message: message || "No message",
      submitted_at: new Date().toISOString(),
    };

    console.log("Enquiry details:", JSON.stringify(enquiryDetails));

    return new Response(
      JSON.stringify({ success: true, message: "Notification processed" }),
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
