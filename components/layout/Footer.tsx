import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/squadra-media.png"
                alt="Squadra Tech Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Your Technology Partner for What&apos;s Next. Based in
              Indiranagar, Bangalore.
            </p>
            <div className="flex gap-4">
              <a
                className="text-slate-400 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">language</span>
              </a>
              <a
                className="text-slate-400 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </a>
              <a
                className="text-slate-400 hover:text-primary transition-colors"
                href={`mailto:${COMPANY_INFO.emailL1}`}
              >
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h6 className="font-bold mb-6">Industries</h6>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  BFSI
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="font-bold mb-6">Company</h6>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/case-studies"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/how-we-do"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h6 className="font-bold mb-6">Subscribe</h6>
            <p className="text-sm text-slate-500 mb-4">
              Get the latest insights on AI and scale.
            </p>
            <div className="flex gap-2">
              <input
                className="bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-primary"
                placeholder="Email"
                type="email"
              />
              <button className="p-2 bg-primary rounded-lg text-white">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Squadra Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="hover:text-primary transition-colors" href="#">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}