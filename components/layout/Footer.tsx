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
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-md text-slate-500 gap-4">
          <p className="font-display font-light">© {new Date().getFullYear()} Squadra Tech. All rights reserved.</p>
          <div className="flex gap-6 font-display font-light">
            <div className="flex items-center justify-center sm:justify-start space-x-6 sm:ml-8">
                <Link
                  href="/privacy-policy"
                  className="text-md hover:text-white transition-colors whitespace-nowrap"
                >
                  Terms of services
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-md hover:text-white transition-colors whitespace-nowrap"
                >
                  Privacy policy
                </Link>
              </div>
          </div>
        <div className="flex items-center justify-center lg:justify-end space-x-4 text-white">
              <span className="text-md text-gray-400 whitespace-nowrap">
                Follow Us
              </span>
              <div className="flex items-center space-x-4">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/squadra_media_?igsh=MW1lZWJjMW51NXhweA=="
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg
                    className="transition duration-300 hover:filter hover:invert"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#888888"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>

                <Link
                  target="_blank"
                  href="https://youtube.com/@squadramedia5111?si=11QTz6g7FJE8yBBh"
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg
                    className="transition duration-300 hover:filter hover:invert"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#888888"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Link>

                <Link
                  target="_blank"
                  href="https://x.com/squadramedia"
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg
                    className="transition duration-300 hover:filter hover:invert"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#888888"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>

                <Link
                  target="_blank"
                  href="https://www.facebook.com/squadramediabangalore"
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg
                    className="transition duration-300 hover:filter hover:invert"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#888888"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
}