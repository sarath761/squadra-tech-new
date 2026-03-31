import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-slate-200 dark:border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section — Logo + description */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/squadra-media.png"
                alt="Squadra Tech Logo"
                width={160}
                height={48}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-slate-500 text-md leading-relaxed mb-4 font-display font-light">
              Your Technology Partner for What&apos;s Next. Based in Indiranagar, Bangalore.
            </p>
            <div className="flex gap-4">
              <a className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Website">
                <span className="material-symbols-outlined" aria-hidden="true">language</span>
              </a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Global presence">
                <span className="material-symbols-outlined" aria-hidden="true">public</span>
              </a>
              <a className="text-slate-400 hover:text-primary transition-colors" href={`mailto:${COMPANY_INFO.emailL1}`} aria-label="Send us an email">
                <span className="material-symbols-outlined" aria-hidden="true">mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Industries */}
          <div>
            <h6 className="font-display font-semibold text-white mb-5">Industries</h6>
            <ul className="space-y-3 text-md text-slate-500 font-display font-light">
              <li><Link className="hover:text-primary transition-colors" href="/services">BFSI</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Healthcare</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Retail</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Education</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Shipping</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h6 className="font-display font-semibold text-white mb-5">Solutions</h6>
            <ul className="space-y-3 text-md text-slate-500 font-display font-light">
              <li><Link className="hover:text-primary transition-colors" href="/services">Digital Experience</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Product Engineering</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">E-Commerce</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Modernization</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Managed Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="font-display font-semibold text-white mb-5">Services</h6>
            <ul className="space-y-3 text-md text-slate-500 font-display font-light">
              <li><Link className="hover:text-primary transition-colors" href="/services">Mobile App Development</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Cloud &amp; DevOps</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Data &amp; Analytics</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">CRM &amp; Business Systems</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">Security &amp; Compliance</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/services">System Integrations</Link></li>
            </ul>

            <h6 className="font-display font-semibold text-white mt-8 mb-5">Innovation &amp; Insights</h6>
            <ul className="space-y-3 text-md text-slate-500 font-display font-light">
              <li><Link className="hover:text-primary transition-colors" href="/case-studies">Case Studies</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/how-we-do">Our Process</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="font-display font-semibold text-white mb-5">Company</h6>
            <ul className="space-y-3 text-md text-slate-500 font-display font-light">
              <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/about">Leadership</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/case-studies">Clients</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/contact">Our Location</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="font-display font-semibold text-white mb-5">Get in Touch</h6>
            <ul className="space-y-3 text-md text-slate-500 font-display font-light">
              <li>
                <a className="hover:text-primary transition-colors" href={`mailto:${COMPANY_INFO.emailL1}`}>
                  {COMPANY_INFO.emailL1}
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}>
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="text-slate-600 leading-relaxed pt-2">
                {COMPANY_INFO.address}
              </li>
            </ul>

            <Link
              href="/contact"
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-md font-display font-semibold text-white inline-flex items-center gap-2 mt-6 hover:scale-105 transition-all duration-300"
            >
              Contact Us
              <span className="material-symbols-outlined text-md">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p className="font-display font-light">© {new Date().getFullYear()} Squadra Tech. All rights reserved.</p>
          <div className="flex gap-6 font-display font-light">
            <Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link>
            <Link className="hover:text-primary transition-colors" href="#">Terms of Service</Link>
            <Link className="hover:text-primary transition-colors" href="#">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}