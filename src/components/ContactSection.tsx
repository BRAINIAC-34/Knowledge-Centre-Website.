import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Phone, Mail, Clock, MessageCircle, Monitor } from "lucide-react";

const PHONE_NUMBER = "+919405543053";
const WHATSAPP_URL = "https://wa.me/919405543053";
const EMAIL = "info@knowledgecentre.online";

type ContactSectionProps = {
  audience?: "tuition" | "school";
};

const tuitionGrades = [
  "8th Grade",
  "9th Grade",
  "10th Grade",
  "11th Commerce",
  "12th Commerce",
  "Vedic Maths Only",
];

const schoolPrograms = [
  "School - Playgroup",
  "School - Nursery",
  "School - Junior KG",
  "School - Senior KG",
  "School - Admission Enquiry",
];

const ContactSection = ({ audience = "tuition" }: ContactSectionProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const isSchool = audience === "school";
  const options = isSchool ? schoolPrograms : tuitionGrades;
  const [form, setForm] = useState({
    parent_name: "",
    student_name: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.parent_name || !form.student_name || !form.phone || !form.grade) {
      toast({ title: "Error", description: "Please fill all required fields", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      // Save to database
      const { error: dbError } = await supabase.from("enquiries").insert({
        parent_name: form.parent_name,
        student_name: form.student_name,
        phone: form.phone,
        email: form.email || null,
        grade: form.grade,
        message: form.message || null,
      });

      if (dbError) throw dbError;

      // Send email notification
      await supabase.functions.invoke("send-enquiry-notification", {
        body: form,
      });

      toast({ title: "Success!", description: "Your enquiry has been submitted. We'll get back to you within 24 hours." });
      setForm({ parent_name: "", student_name: "", phone: "", email: "", grade: "", message: "" });
    } catch (err) {
      console.error("Error submitting enquiry:", err);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
            {isSchool ? "Enquire About Preschool Admissions" : "Book Your Free Demo Class"}
          </h2>
          <p className="text-muted-foreground">
            {isSchool
              ? "Share your details and we'll help you with programs, visits, and admission next steps."
              : "Take the first step towards academic excellence. Fill in your details and we'll get back to you within 24 hours."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">Admission Enquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Parent's Name *</label>
                <Input
                  value={form.parent_name}
                  onChange={(e) => setForm({ ...form, parent_name: e.target.value })}
                  placeholder="Enter parent's name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Student's Name *</label>
                <Input
                  value={form.student_name}
                  onChange={(e) => setForm({ ...form, student_name: e.target.value })}
                  placeholder="Enter student's name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Phone Number *</label>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Enter phone number"
                  type="tel"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email (Optional)</label>
                <Input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter email address"
                  type="email"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">{isSchool ? "Select Program *" : "Select Grade *"}</label>
                <Select value={form.grade} onValueChange={(val) => setForm({ ...form, grade: val })}>
                  <SelectTrigger>
                    <SelectValue placeholder={isSchool ? "Select preschool program" : "Select student's grade"} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option.replace("School - ", "")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message (Optional)</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Any specific questions or requirements?"
                  rows={3}
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Submitting..." : "Submit Enquiry"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Monitor className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-bold text-foreground">{isSchool ? "Preschool" : "Platform"}</h4>
              </div>
              <p className="text-muted-foreground">{isSchool ? "Playgroup, Nursery, Junior KG & Senior KG" : "Online Live Classes"}</p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-bold text-foreground">Call Us</h4>
              </div>
              <a href={`tel:${PHONE_NUMBER}`} className="text-primary font-medium hover:underline">{PHONE_NUMBER}</a>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-bold text-foreground">Email Us</h4>
              </div>
              <a href={`mailto:${EMAIL}`} className="text-primary font-medium hover:underline">{EMAIL}</a>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-bold text-foreground">{isSchool ? "School Enquiry Hours" : "Class Hours"}</h4>
              </div>
              <p className="text-muted-foreground">{isSchool ? "Mon - Sat: 9:00 AM - 5:00 PM" : "Mon - Sat: 7:00 AM - 9:00 PM"}</p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-accent" />
                <h4 className="font-heading font-bold text-foreground">Quick Response on WhatsApp</h4>
              </div>
              <p className="text-muted-foreground mb-3">Get instant answers to your queries</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="sm">Chat Now</Button>
              </a>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
              <h4 className="font-heading font-bold text-foreground mb-2">{isSchool ? "Visit & Admission Support" : "100% Online Classes"}</h4>
              <p className="text-sm text-muted-foreground mb-3">
                {isSchool
                  ? "Ask about age criteria, program fit, school visits, and admission availability for your child."
                  : "Join our live interactive classes from anywhere in India. All you need is a smartphone/laptop and internet connection. No travel required!"}
              </p>
              <div className="flex gap-2">
                {(isSchool ? ["Admissions", "School Visit", "Parent Guidance"] : ["Live Classes", "Recorded Sessions", "24/7 Support"]).map((item) => (
                  <span key={item} className="bg-accent/20 text-accent text-xs font-medium px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
