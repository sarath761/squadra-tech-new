export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "How We Do", href: "/how-we-do" },
  { label: "About", href: "/about" },
];

export const SERVICES = [
  { title: "Mobile App Development", description: "iOS and Android apps.", icon: "📱", tags: ["React Native", "Flutter"] },
  { title: "E-commerce Solutions", description: "Scalable online stores.", icon: "🛍️", tags: ["Shopify", "Magento"] },
  { title: "Cloud Architecture", description: "AWS, Azure, and Google Cloud.", icon: "☁️", tags: ["AWS", "Azure"] },
  { title: "DevOps & CI/CD", description: "Seamless deployment pipelines.", icon: "🚀", tags: ["Docker", "Kubernetes"] },
  { title: "Custom CRM Systems", description: "Customer relationship management.", icon: "💼", tags: ["Salesforce", "Custom"] },
  { title: "Learning Management Systems (LMS)", description: "Educational platforms.", icon: "🎓", tags: ["Moodle", "Custom"] },
  { title: "AI & Machine Learning", description: "Intelligent automation.", icon: "🤖", tags: ["Python", "TensorFlow"] },
  { title: "UI/UX Design", description: "User-centric interfaces.", icon: "🎨", tags: ["Figma", "Sketch"] },
  { title: "Web Application Development", description: "Complex web platforms.", icon: "💻", tags: ["Next.js", "React"] },
  { title: "Cybersecurity Services", description: "Security audits and implementation.", icon: "🔒", tags: ["Audit", "Compliance"] },
];

export const CASE_STUDIES = [
  { title: "Global E-commerce Scale", category: "E-commerce", description: "Scaling a nationwide retail brand.", challenge: "High traffic events crashing the site.", solution: "Microservices architecture on AWS.", impact: "Zero downtime during flash sales.", metric: "400% increase in peak handling", image: "/images/case-studies/1.jpg" },
  { title: "Fintech Mobile App", category: "Mobile Apps", description: "Secure banking for millennial users.", challenge: "Complex onboarding process.", solution: "Streamlined KYC and biometric login.", impact: "Increased user retention.", metric: "65% faster onboarding", image: "/images/case-studies/2.jpg" },
  { title: "Healthcare CRM Integration", category: "CRM", description: "Patient management system.", challenge: "Fragmented patient data.", solution: "Unified secure CRM.", impact: "Improved patient outcomes.", metric: "30% reduction in wait times", image: "/images/case-studies/3.jpg" },
  { title: "Corporate LMS Platform", category: "LMS", description: "Training platform for 10k+ employees.", challenge: "Low engagement rates.", solution: "Gamified learning modules.", impact: "Higher course completion.", metric: "85% completion rate", image: "/images/case-studies/4.jpg" },
  { title: "AI Supply Chain Optimization", category: "AI/ML", description: "Predictive inventory management.", challenge: "Stockouts and overstock.", solution: "AI forecasting model.", impact: "Optimized inventory levels.", metric: "20% cost savings", image: "/images/case-studies/5.jpg" },
  { title: "Cloud Logistics Dashboard", category: "Cloud", description: "Real-time fleet tracking.", challenge: "Poo real-time visibility.", solution: "IoT integration to cloud dashboard.", impact: "Accurate delivery estimates.", metric: "99.9% uptime tracking", image: "/images/case-studies/6.jpg" },
  { title: "Enterprise Security Audit", category: "Cybersecurity", description: "Bank security overhaul.", challenge: "Outdated compliance.", solution: "Zero-trust architecture.", impact: "Passed all regulatory audits.", metric: "0 breaches", image: "/images/case-studies/7.jpg" },
];

export const PROCESS_STEPS = [
  { number: "01", title: "Discovery & Alignment", timing: "Week 1-2", description: "Stakeholder workshops, system audit, success metrics, delivery plan." },
  { number: "02", title: "Solution Design", timing: "Week 3-4", description: "Architecture, backlog, roadmap, SLAs, security baseline, proof of concept." },
  { number: "03", title: "Build & Integrate", timing: "Week 5-10", description: "Agile sprints, code reviews, AI-assisted testing, secure API integrations." },
  { number: "04", title: "Validate & Harden", timing: "Week 11-12", description: "Automated QA, performance testing, load testing, UAT sign-off, compliance." },
  { number: "05", title: "Launch & Adoption", timing: "Week 13", description: "Cutover runbook, training, change management, analytics dashboards." },
  { number: "06", title: "Operate & Improve", timing: "Ongoing", description: "SRE monitoring, incident response, cost optimization, quarterly reviews." },
];

export const FAQ_ITEMS = [
  { question: "What sizes of companies do you work with?", answer: "We primarily partner with mid-market to enterprise companies, though we also work with well-funded startups looking to scale their technology." },
  { question: "How long does a typical project take?", answer: "Most initial MVP or phase-one projects take between 3 to 4 months from discovery to launch. Complex enterprise systems can span 6+ months." },
  { question: "Do you offer post-launch support?", answer: "Absolutely. We offer comprehensive SLAs and retainers for ongoing maintenance, Feature enhancements, and SRE monitoring." },
  { question: "What is your typical tech stack?", answer: "We specialize in Next.js, React, Node.js, Python, AWS, and Azure. However, we are technology agnostic and choose the best tools for the specific business problem." },
  { question: "How do you handle project security and compliance?", answer: "Security is built-in from day one. We follow OWASP guidelines, conduct regular automated vulnerability testing, and comply with GDPR, HIPAA, and SOC2 depending on client requirements." },
  { question: "Can you augment our existing engineering team?", answer: "Yes, we offer staff augmentation and co-managed delivery models where our experts seamlessly integrate with your internal teams." },
];

export const STATS = [
  { number: 5, suffix: "+", label: "Years Experience" },
  { number: 150, suffix: "+", label: "Projects Delivered" },
  { number: 200, suffix: "K+", label: "Lines of Code" },
  { number: 100, suffix: "+", label: "Tech Experts" },
];

export const AI_STATS = [
  { number: 3, suffix: "x", label: "Faster Delivery" },
  { number: 60, suffix: "%", label: "Cost Reduction" },
  { number: 1, suffix: "", label: "Day 1 Value" },
];

export const WHY_SQUADRA = [
  { title: "Enterprise Grade", description: "Scalable, secure, and compliant architectures." },
  { title: "AI-First Approach", description: "Integrating AI to accelerate development and operations." },
  { title: "Transparent Process", description: "No surprises. Full visibility into sprints and progress." },
  { title: "Business Focused", description: "We build technology that drives measurable business outcomes." },
];

export const CLIENT_NAMES = [
  "Acme Corp", "Globex", "Initech", "Umbrella Corp", "Soylent Corp", "Stark Industries", "Wayne Enterprises", "Cyberdyne Systems"
];

export const INDUSTRIES = [
  { name: "BFSI", emoji: "🏦" },
  { name: "Shipping", emoji: "🚢" },
  { name: "Healthcare", emoji: "🏥" },
  { name: "Retail", emoji: "🛍️" },
  { name: "Gaming", emoji: "🎮" },
  { name: "Food Services", emoji: "🍱" },
  { name: "Education", emoji: "🎓" },
  { name: "Hospitality", emoji: "🏨" },
];

export const TEAM_COMPOSITION = {
  leadership: ["Tarush", "Anu", "Sandesh"],
  engineering: ["Frontend", "Backend", "DevOps", "QA"],
  design: ["UI", "UX", "Product"]
};

export const TECH_STACKS = [
  { category: "Frontend", tools: ["Next.js", "React", "Vue", "Tailwind CSS"] },
  { category: "Backend", tools: ["Node.js", "Python", "Java", "Go"] },
  { category: "Cloud & DevOps", tools: ["AWS", "Azure", "Docker", "Kubernetes"] },
  { category: "Database", tools: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
  { category: "Mobile", tools: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { category: "AI/ML", tools: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face"] },
];

export const COMPANY_INFO = {
  name: "Squadra Tech",
  parent: "Squadra Media Private Limited",
  address: "5th Floor, No. 1134, Shreeram Niwas, 100 Feet Rd, HAL 2nd Stage, Bengaluru, Karnataka 560038",
  phone: "+91 63667 26494",
  emailL1: "info@squadramedia.com",
  emailL2: "squadramedia.in@gmail.com",
  cofounders: ["Tarush", "Anu", "Sandesh"],
  teamSize: "100+",
  location: "Indiranagar, Bangalore, Karnataka, India",
};

export const FORM_OPTIONS = {
  industries: ["Fintech", "Healthcare", "E-commerce", "Education", "Logistics", "Other"],
  challenges: ["Legacy Modernization", "Cloud Migration", "Custom App Development", "Team Augmentation", "Other"],
};
