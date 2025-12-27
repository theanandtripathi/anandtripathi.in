import React from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  // simple, static form — no JS interception so Netlify can detect & process it
  // (keep field names identical to the hidden static form in index.html)

  return (
    <section id="contact" className="py-12">
      <div className="section-container">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>

        {/* Netlify-compatible form: name must match the hidden form in index.html */}
        <form
          name="contact"
          method="POST"
          action="/message-sent.html"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="max-w-lg"
        >
          <input type="hidden" name="form-name" value="contact" />

          {/* honeypot field (hidden from users) */}
          <div style={{ display: "none" }}>
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </div>

          <label className="block mb-2">
            <span className="text-sm">Name</span>
            <input required name="name" className="w-full mt-1 p-2 rounded bg-background/50" />
          </label>

          <label className="block mb-2">
            <span className="text-sm">Email</span>
            <input required type="email" name="email" className="w-full mt-1 p-2 rounded bg-background/50" />
          </label>

          <label className="block mb-4">
            <span className="text-sm">Message</span>
            <textarea required name="message" rows={6} className="w-full mt-1 p-2 rounded bg-background/50" />
          </label>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
