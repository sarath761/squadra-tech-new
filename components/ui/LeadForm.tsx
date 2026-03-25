"use client";

import { useState } from "react";
import { FORM_OPTIONS } from "@/lib/constants";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! We will be in touch within 24 hours.");
    setFormData({ firstName: "", lastName: "", company: "", phone: "", industry: "", challenge: "", website: "" });
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
      <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all">
        Get My Free Assessment →
      </button>
    </form>
  );
}
