"use client";

import { useState } from "react";
import { FORM_OPTIONS } from "@/lib/constants";
import { toast } from "react-hot-toast";
import { apiPost, apiFetch, API_ENDPOINTS } from "@/lib/api";

export default function LeadForm({ className = "" }: { className?: string }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    challenge: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.company ||
      !formData.phone ||
      !formData.industry ||
      !formData.challenge
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[+]?[\d\s-]{7,16}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    if (formData.website && !formData.website.startsWith("http")) {
      toast.error("Please enter a valid website URL starting with http:// or https://");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Submitting your request...");

    try {
      const phone = formData.phone.replace(/\s/g, "");

      // 1. Send to Zoho CRM
      await apiPost(API_ENDPOINTS.ZOHO, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: phone,
        message: `Industry: ${formData.industry}, Challenge: ${formData.challenge}`,
        leadSource: "Squadra Tech Website - IT Landing Page",
        service: formData.industry || "Technology Inquiry",
        company: formData.company,
      });

      // 2. Send email notification (fire and forget)
      apiFetch(API_ENDPOINTS.SEND_EMAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          cc: [
            process.env.NEXT_PUBLIC_EMAIL_CC,
            process.env.NEXT_PUBLIC_EMAIL_CC_2,
            process.env.NEXT_PUBLIC_EMAIL_CC_3,
          ].filter(Boolean),
          bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC].filter(Boolean),
          message: {
            subject: "New Lead — Squadra Tech IT Landing Page",
            text: "New contact form submission from Squadra Tech website",
            html: `
              <html>
                  <head></head>
                  <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:30px 0;">
                      <tr>
                        <td align="center">
                          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                            
                            <!-- Header -->
                            <tr>
                              <td style="background-color:#082346; padding:30px 40px; text-align:center;">
                                <h1 style="margin:0; color:#F9B51D; font-size:22px; font-weight:700; letter-spacing:0.5px;">New Technology Inquiry</h1>
                                <p style="margin:6px 0 0; color:#ffffff; font-size:13px; opacity:0.7;">Squadra Tech — IT Landing Page</p>
                              </td>
                            </tr>

                            <!-- Body -->
                            <tr>
                              <td style="padding:30px 40px;">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td style="padding:10px 0; border-bottom:1px solid #eee;">
                                      <span style="color:#082346; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">First Name</span><br/>
                                      <span style="color:#333; font-size:15px;">${formData.firstName}</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding:10px 0; border-bottom:1px solid #eee;">
                                      <span style="color:#082346; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">Last Name</span><br/>
                                      <span style="color:#333; font-size:15px;">${formData.lastName}</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding:10px 0; border-bottom:1px solid #eee;">
                                      <span style="color:#082346; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">Email</span><br/>
                                      <span style="color:#333; font-size:15px;">${formData.email}</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding:10px 0; border-bottom:1px solid #eee;">
                                      <span style="color:#082346; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">Phone</span><br/>
                                      <span style="color:#333; font-size:15px;">${phone}</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding:10px 0; border-bottom:1px solid #eee;">
                                      <span style="color:#082346; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">Company</span><br/>
                                      <span style="color:#333; font-size:15px;">${formData.company}</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding:10px 0; border-bottom:1px solid #eee;">
                                      <span style="color:#082346; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">Industry</span><br/>
                                      <span style="color:#333; font-size:15px;">${formData.industry}</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding:10px 0; border-bottom:1px solid #eee;">
                                      <span style="color:#082346; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">Challenge</span><br/>
                                      <span style="color:#333; font-size:15px;">${formData.challenge}</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding:10px 0;">
                                      <span style="color:#082346; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">Website</span><br/>
                                      <span style="color:#333; font-size:15px;">${formData.website || "N/A"}</span>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>

                            <!-- Timestamp bar -->
                            <tr>
                              <td style="padding:15px 40px; background-color:#F9B51D;">
                                <span style="color:#082346; font-size:12px; font-weight:700;">Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</span>
                              </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                              <td style="background-color:#082346; padding:20px 40px; text-align:center;">
                                <p style="margin:0; color:#ffffff; font-size:13px; opacity:0.8;">Thank you & Regards</p>
                                <p style="margin:4px 0 0; color:#F9B51D; font-size:14px; font-weight:700;">Squadra Tech Team</p>
                              </td>
                            </tr>

                          </table>
                        </td>
                      </tr>
                    </table>
                  </body>
                </html>
            `,
          },
        }),
      }).catch((err) => console.error("Background email send failed:", err));

      toast.success("Form submitted! We will be in touch within 24 hours.", { id: toastId });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        industry: "",
        challenge: "",
        website: "",
      });
    } catch {
      toast.error("An error occurred while submitting. Please try again.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className={`space-y-4 ${className}`} onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            First Name *
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="John"
            type="text"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Last Name *
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Doe"
            type="text"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
          Email Address *
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          placeholder="john@company.com"
          type="email"
          required
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
          Company Name *
        </label>
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          placeholder="Acme Corp"
          type="text"
          required
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
          Phone Number *
        </label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          placeholder="+91 98765 43210"
          type="tel"
          required
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
          Industry *
        </label>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-400"
          required
        >
          <option value="">Select your industry</option>
          {FORM_OPTIONS.industries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
          Current Challenge *
        </label>
        <textarea
          name="challenge"
          value={formData.challenge}
          onChange={handleChange}
          className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
          placeholder="Describe your current challenge..."
          rows={4}
          required
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
          Website URL <span className="font-normal normal-case">(optional)</span>
        </label>
        <input
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          placeholder="https://yoursite.com"
          type="url"
        />
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all"
      >
        {isSubmitting ? (
          <>
            <span className="material-symbols-outlined animate-spin text-lg">refresh</span>
            Submitting...
          </>
        ) : (
          "Get My Free Assessment →"
        )}
      </button>
    </form>
  );
}