export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "How We Do", href: "/how-we-do" },
  { label: "About", href: "/about" },
];

export const SERVICES = [
  { title: "E-Commerce", description: "Custom storefronts and seamless shopping experiences optimized for conversion. We build high-performance retail platforms that handle scale and provide intuitive user journeys from landing to checkout.", icon: "shopping_cart", tags: ["Shopify", "Magento", "WooCommerce"] },
  { title: "Mobile Development", description: "Native and cross-platform mobile apps built with performance and UX in mind. Our mobile solutions are designed to engage users across iOS and Android with fluid animations.", icon: "smartphone", tags: ["Flutter", "React Native", "Swift"] },
  { title: "Platform Engineering", description: "Scalable infrastructure and architecture design for modern enterprise applications. We create developer-centric platforms that automate delivery and ensure operational excellence.", icon: "layers", tags: ["Kubernetes", "Docker", "Microservices"] },
  { title: "CRM Solutions", description: "Streamline your sales and customer relations with integrated management systems. We implement and customize CRM platforms that provide a 360-degree view of your customer lifecycle.", icon: "groups", tags: ["Salesforce", "Hubspot", "Zoho"] },
  { title: "LMS Platforms", description: "Next-generation learning management systems for corporate training and educational institutions. We develop engaging, interactive platforms with deep tracking and analytics.", icon: "school", tags: ["Moodle", "Canvas", "Custom LMS"] },
  { title: "Cloud & DevOps", description: "Accelerate deployment cycles with robust cloud infrastructure and automation. We help organizations migrate to the cloud and adopt CI/CD pipelines that ensure stability and speed.", icon: "cloud_done", tags: ["AWS", "Azure", "Google Cloud"] },
  { title: "Data Analytics", description: "Unlock actionable insights through advanced data processing and visualization. We turn raw data into strategic assets that drive decision-making and operational improvements.", icon: "query_stats", tags: ["Python", "PowerBI", "Tableau"] },
  { title: "Cybersecurity", description: "Comprehensive security audits and implementation to protect your digital assets. We provide end-to-end protection from threat detection to incident response and compliance management.", icon: "security", tags: ["Pen-Testing", "IAM", "SOC"] },
  { title: "Managed Services", description: "Proactive monitoring and maintenance to keep your operations running smoothly 24/7. Our dedicated support teams ensure your systems are always patched, secure, and performant.", icon: "support_agent", tags: ["24/7 Support", "IT Strategy"] },
  { title: "System Integrations", description: "Connecting disparate systems for unified data flow and operational efficiency. We specialize in complex middleware solutions that bridge legacy systems with modern SaaS applications.", icon: "hub", tags: ["REST APIs", "GraphQL", "Middleware"] },
];

export const CASE_STUDIES = [
  {
    title: "Seaverse Marine Learning",
    category: "EdTech",
    link: "seaverse.com",
    image: "/images/seaverse.png",
    challenge: "Low engagement in traditional maritime training manuals and high dropout rates in offshore certification programs.",
    solution: "Developed an immersive LMS with 3D simulations and adaptive learning paths tailored to maritime regulations.",
    impact: "Streamlined training for 5,000+ crew members with a significant boost in safety compliance scores.",
    metric: "+40% Retention",
    metricLabel: "User Engagement Growth",
  },
  {
    title: "B.Bath",
    category: "E-Commerce",
    link: "bbath.com",
    image: "/images/bBath.WebP",
    challenge: "Outdated legacy storefront resulting in slow page loads and high cart abandonment during peak sales.",
    solution: "Replatformed to a headless Shopify architecture with Next.js, optimizing the entire checkout flow.",
    impact: "Achieved sub-second page loads and a massive conversion rate lift across all device types.",
    metric: "-2.5s Load Time",
    metricLabel: "Performance Improvement",
  },
  {
    title: "Novella Ice Cream",
    category: "F&B",
    link: "novella.ae",
    image: "/images/Novella.WebP",
    description: "Custom ERP integration with a mobile app that syncs real-time inventory and tracks customer rewards across 15+ locations.",
    metric: "35% Repeat Rate",
    metricLabel: "Customer Loyalty Increase",
  },
  {
    title: "CAIC Ice Cream",
    category: "Retail",
    link: "caic.shop",
    image: "/images/caicicecream.WebP",
    description: "Built a gesture-based touchscreen interface with high-fidelity 3D renders of toppings and flavors for in-store kiosks.",
    metric: "+20% Order Value",
    metricLabel: "In-store Upselling Success",
  },
  {
    title: "New Property UAE",
    category: "Real Estate",
    link: "newpropertyuae.com",
    image: "/images/newpropertyuae.WebP",
    description: "AI-powered recommendation engine that matches buyers to properties based on investment goals and lifestyle preferences.",
    metric: "3x Lead Gen",
    metricLabel: "Marketing Efficiency",
  },
  {
    title: "Trend and Silhouette",
    category: "Fashion Tech",
    link: "trend-silhouette.com",
    image: "/images/trendandsilhouette.WebP",
    description: "A B2B collaborative platform for tech-pack sharing, real-time feedback, and automated shipping logistics.",
    metric: "-50% Sample Time",
    metricLabel: "Production Cycle Improvement",
  }
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


export const WHY_SQUADRA = [
  { title: "Enterprise Grade", description: "Scalable, secure, and compliant architectures." },
  { title: "AI-First Approach", description: "Integrating AI to accelerate development and operations." },
  { title: "Transparent Process", description: "No surprises. Full visibility into sprints and progress." },
  { title: "Business Focused", description: "We build technology that drives measurable business outcomes." },
];

export const WHY_PARTNER = [
  { icon: "analytics", title: "Outcomes First", description: "We don't just deliver code; we deliver results. Every feature is tied back to a specific business KPI and objective." },
  { icon: "corporate_fare", title: "Enterprise-Grade", description: "Built for scale, security, and reliability. We follow rigorous architecture standards to ensure future-proof stability." },
  { icon: "bolt", title: "Agile Execution", description: "Speed is a competitive advantage. Our iterative cycles ensure constant feedback and rapid market entry." },
  { icon: "support_agent", title: "Long-term Vision", description: "We provide managed services and ongoing support to ensure your technology matures as your business grows." },
  { icon: "verified_user", title: "Uncompromising Security", description: "Compliance-first approach with rigorous data privacy and protection protocols across all projects." }
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
  { category: "Languages & Frameworks", icon: "code", tools: ["TypeScript", "React.js", "Node.js", "Python", "Go", "Next.js"] },
  { category: "AI & Automation", icon: "smart_toy", tools: ["OpenAI API", "LangChain", "TensorFlow", "UiPath", "Make.com"] },
  { category: "Data & Analytics", icon: "analytics", tools: ["PostgreSQL", "Redis", "Snowflake", "Tableau", "Apache Spark"] },
  { category: "Cloud & DevOps", icon: "cloud", tools: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
  { category: "Security", icon: "shield", tools: ["OAuth 2.0", "Cloudflare", "SentinelOne", "Vault"] },
  { category: "Collaboration", icon: "diversity_3", tools: ["Jira", "Slack", "Figma", "GitHub"] },
];

export const ACHIEVEMENTS = [
  { metric: "200k+", label: "LMS Active Users", icon: "groups" },
  { metric: "500+", label: "AI Automations", icon: "rocket_launch" },
  { metric: "99%", label: "Success Rate", icon: "verified" },
  { metric: "40%", label: "Efficiency Boost", icon: "timer" },
  { metric: "150+", label: "Enterprise Clients", icon: "business" },
  { metric: "24/7", label: "Managed Support", icon: "support_agent" },
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


export const AI_STATS = [
  {
    number: 3,
    suffix: "x",
    display: "3x",
    isText: false,
    title: "Faster to market",
    description:
      "AI-powered agencies ship in days. Traditional agencies are still in kick-off calls.",
  },
  {
    number: 60,
    suffix: "%",
    display: "60%",
    isText: false,
    title: "Less back and forth",
    description:
      "When you see the mockup first, approvals happen faster and revisions drop significantly.",
  },
  {
    number: 0,
    suffix: "",
    display: "100%",
    isText: true,
    title: "Built for growth",
    description:
      "Every site we build is optimised for speed, search and conversion from the very first line of code.",
  },
];
