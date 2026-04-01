export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Wave background */}
        <div className="absolute inset-0 bg-slate-900/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-blob mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/15 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#14181e] to-transparent z-[2]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Terms and Conditions */}
          <div className="mb-20">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-[0.9] mb-12">
              Terms and Conditions for Squadra
            </h1>

            <div className="space-y-10">
              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">1. Introduction</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  Welcome to Squadra. These terms and conditions (the &quot;Terms&quot;) govern your use of our services, available through our website. By accessing or using Squadra, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, do not use the Platform.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">2. User Registration and Account Security</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  You must create an account to access certain services on the Platform. You are responsible for ensuring that your account information is accurate and up to date. You must keep your login credentials secure and promptly notify us of any unauthorized use of your account. Squadra is not liable for any loss or damage resulting from your failure to maintain the confidentiality of your credentials.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">3. User Conduct</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed mb-3">
                  Users may only use the Platform for lawful purposes. You may not:
                </p>
                <ul className="list-disc pl-5 text-md text-slate font-display font-light leading-relaxed space-y-1">
                  <li>Engage in activities that disrupt or interfere with the operation of Squadra or its security.</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Platform.</li>
                  <li>Use the Platform in any way that infringes on the rights of Squadra or third parties.</li>
                  <li>Post, upload, or distribute content that is illegal, defamatory, offensive, or violates intellectual property rights.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">4. Intellectual Property</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  All content provided by Squadra, including but not limited to text, images, graphics, logos, and design elements, is protected by intellectual property laws and is owned exclusively by Squadra. You are granted a non-exclusive, limited, non-transferable license to use the Platform solely for personal, non-commercial use. Ownership of any content provided on the Platform remains with Squadra.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">5. User-Generated Content</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  If you submit any content, including feedback, reviews, or any user-generated material, you grant Squadra a non-exclusive, royalty-free, worldwide license to use, modify, adapt, publish, translate, distribute, and display such content for any purpose related to the Platform.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">6. Privacy and Data Protection</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  Squadra values your privacy and complies with GDPR and other applicable data protection laws. We collect personal data and usage data as described in our Privacy Policy. Users have rights under data protection laws, including rights to access, correct, delete, or restrict their personal data. For more information, refer to our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">7. Payment and Billing</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  Squadra may offer paid services or subscriptions. All transactions are processed in compliance with applicable payment terms. Billing policies, cancellations, and refund terms are outlined in our Refund Policy. In-app purchases made through Squadra&apos;s mobile apps are subject to Apple&apos;s or Google&apos;s payment terms, as applicable.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">8. Third-Party Services and Links</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  The Platform may contain links to third-party websites or services. Squadra is not responsible for the content, privacy practices, or functionality of these third-party services. Your use of third-party services is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">9. Limitations of Liability</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  Squadra provides the Platform &quot;as-is&quot; and disclaims all warranties, express or implied, to the fullest extent permitted by law. We do not guarantee that the Platform will be available at all times, free of errors, or without interruption. Squadra shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the Platform.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">10. Indemnification</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Squadra, its officers, employees, and affiliates from any claims, damages, liabilities, and expenses arising from your use of the Platform, your violation of these Terms, or your infringement of any rights of a third party.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">11. Modification of Terms</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  Squadra reserves the right to modify these Terms at any time. Any changes will be communicated to you, and your continued use of the Platform following such changes signifies your acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">12. Termination</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  Squadra may suspend or terminate your access to the Platform at its discretion if you violate these Terms or engage in behavior that is harmful to Squadra or other users.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">13. Governing Law</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  These Terms are governed by the laws of India. Any disputes arising under or in connection with these Terms will be resolved in the courts of Bengaluru, Karnataka.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">14. Dispute Resolution</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  Any disputes will first be attempted to be resolved through mediation. If mediation fails, disputes will be subject to binding arbitration, with the location and terms determined by Squadra.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">15. Force Majeure</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  Squadra is not liable for any failure to perform its obligations due to events beyond its control, including natural disasters, acts of war, terrorism, and government regulations.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">16. Severability</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall remain in full force and effect.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">17. Entire Agreement</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  These Terms, along with the Privacy Policy and Refund Policy, constitute the entire agreement between you and Squadra regarding your use of the Platform and supersede any prior agreements.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

          {/* Privacy Policy */}
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-[0.9] mb-12">
              Privacy Policy for Squadra
            </h1>

            <div className="space-y-10">
              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">1. Data Collection</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  Squadra collects personal data, such as names, email addresses, and payment details, as well as usage data related to user interactions on the Platform. This data is used to manage accounts, personalise content, and improve services.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">2. Legal Basis for Data Processing</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  We process your data based on legitimate interests, user consent, or as necessary to fulfill our contract with you.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">3. Data Retention</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  Personal data is retained for as long as necessary to provide services, meet legal requirements, or fulfill our business purposes. Once no longer needed, data is securely deleted.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">4. Data Sharing</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  Squadra shares data with trusted third parties for purposes such as payment processing and analytics. All third parties adhere to stringent data protection standards.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">5. Data Security</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  We implement robust security measures to safeguard your data and promptly notify users of any significant data breaches.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-display font-bold text-white mb-2">6. Your Rights</h2>
                <p className="text-md text-slate font-display font-light leading-relaxed">
                  You have rights under GDPR, including the right to access, correct, or delete your personal data. You may contact us at info@squadramedia.com to exercise these rights or file a complaint with your local data protection authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}