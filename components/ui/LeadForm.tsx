"use client";

import { useState } from "react";
import { FORM_OPTIONS } from "@/lib/constants";
import { toast } from "react-hot-toast";

export default function LeadForm({ className = "" }: { className?: string }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    industry: "",
    challenge: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.company || !formData.phone || !formData.industry || !formData.challenge) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    // Basic phone validation (just checking if it has enough digits)
    const phoneRegex = /^[+]?[\d\s-]{7,16}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    if (formData.website && !formData.website.startsWith('http')) {
       toast.error("Please enter a valid website URL starting with http:// or https://");
       return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Submitting your request...");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        toast.success("Form submitted! We will be in touch within 24 hours.", { id: toastId });
        setFormData({ firstName: "", lastName: "", company: "", phone: "", industry: "", challenge: "", website: "" });
      } else {
        toast.error(data.message || "Failed to submit form.", { id: toastId });
      }
    } catch (error) {
      toast.error("An error occurred while submitting. Please try again.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className={`space-y-4 ${className}`} onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">First Name *</label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John" type="text" required />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Last Name *</label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" type="text" required />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Company Name *</label>
        <input name="company" value={formData.company} onChange={handleChange} className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Acme Corp" type="text" required />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Phone Number *</label>
        <input name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" type="tel" required />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Industry *</label>
        <select name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-400" required>
          <option value="">Select your industry</option>
          {FORM_OPTIONS.industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Current Challenge *</label>
        <select name="challenge" value={formData.challenge} onChange={handleChange} className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-400" required>
          <option value="">What do you need help with?</option>
          {FORM_OPTIONS.challenges.map(cha => <option key={cha} value={cha}>{cha}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Website URL <span className="font-normal normal-case">(optional)</span></label>
        <input name="website" value={formData.website} onChange={handleChange} className="w-full bg-white/5 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="https://yoursite.com" type="url" />
      </div>
      <button disabled={isSubmitting} type="submit" className="w-full flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all">
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
