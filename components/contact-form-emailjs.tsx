"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export function ContactFormEmailJS() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-6 hover:border-indigo-500/40 transition-colors duration-300">
        <h3 className="text-lg font-semibold mb-5">Send Me a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="from_name"
            placeholder="Your Name"
            value={form.from_name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="bg-slate-900/60 border-slate-600 focus:border-indigo-500 text-white placeholder:text-slate-500"
          />
          <Input
            name="from_email"
            type="email"
            placeholder="Your Email"
            value={form.from_email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="bg-slate-900/60 border-slate-600 focus:border-indigo-500 text-white placeholder:text-slate-500"
          />
          <Input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="bg-slate-900/60 border-slate-600 focus:border-indigo-500 text-white placeholder:text-slate-500"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="bg-slate-900/60 border-slate-600 focus:border-indigo-500 text-white placeholder:text-slate-500"
          />
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white border-0"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>Sending...</>
            ) : (
              <>
                Send Message <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
