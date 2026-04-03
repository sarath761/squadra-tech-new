export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Our Process", href: "/our-process" },
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
    showWebsite: false,
    image: "/images/seaverse.png",
    challenge: "Onboard 25,000+ users across multiple regions and connectivity issues requiring offline-first capability",
    solution: "Built enterprise-grade LMS with offline-first modules and designed custom workflows for training and compliance",
    impact: "25k+ users onboarded successfully and Scaled architecture ready for future growth",
    metric: "25k+ Users",
    metricLabel: "User Engagement Growth",
  },
  {
    title: "Novella Ice Cream",
    category: "FMCG / E-Commerce",
    link: "novellaicecream.ae",
    showWebsite: true,
    image: "/images/Novella.webp",
    challenge: "A premium UAE ice cream brand needed a digital presence that matched their luxury positioning with seamless online ordering",
    solution: "Designed and built a custom brand website with integrated e-commerce, delivery zone mapping, and bilingual Arabic-English support",
    impact: "35% increase in repeat customer rate and significant growth in direct-to-consumer online orders",
    description: "Custom brand website for a premium UAE ice cream label.",
    metric: "35% Repeat Rate",
    metricLabel: "Customer Loyalty Increase",
  },
  {
    title: "CAIC Ice Cream",
    category: "FMCG / E-Commerce",
    link: "caicicecream.ae",
    showWebsite: true,
    image: "/images/caicicecream.webp",
    challenge: "A UAE-based manufacturer needed a product showcase that could drive B2B and B2C engagement simultaneously",
    solution: "Built a product-focused brand website with catalogue browsing, distributor inquiry forms, and mobile-optimized ordering",
    impact: "20% increase in average order value through improved product discovery and upselling features",
    description: "Product and brand website for a UAE-based ice cream manufacturer.",
    metric: "+20% Order Value",
    metricLabel: "In-store Upselling Success",
  },
  {
    title: "New Property UAE",
    category: "Real Estate",
    link: "newpropertyuae.ae",
    showWebsite: true,
    image: "/images/newpropertyuae.webp",
    challenge: "The UAE off-plan property market needed a modern listings portal with real-time inventory and lead capture at scale",
    solution: "Developed a full property portal with advanced search filters, interactive floor plans, developer profiles, and CRM-integrated lead forms",
    impact: "3x increase in qualified lead generation and reduced sales cycle time through automated follow-ups",
    description: "Full property listings portal built for the UAE off-plan market.",
    metric: "3x Lead Gen",
    metricLabel: "Marketing Efficiency",
  },
  {
    title: "Trend and Silhouette",
    category: "Fashion Tech",
    link: "trendandsilhouette.com",
    showWebsite: true,
    image: "/images/trendandsilhouette.webp",
    challenge: "A growing fashion label needed an e-commerce platform that could handle seasonal collections with rapid product turnover",
    solution: "Built a Shopify-powered storefront with lookbook-style browsing, size guides, inventory management, and integrated payment gateways",
    impact: "50% reduction in sample production time through digital-first catalogue workflows and streamlined order management",
    description: "E-commerce and brand website for a fashion label.",
    metric: "-50% Sample Time",
    metricLabel: "Production Cycle Improvement",
  },
];

export const PROCESS_STEPS = [
  { number: "01", title: "Fill In The Form", timing: "Today", description: "Tell us about your business and what you need. Takes under 2 minutes." },
  { number: "02", title: "We Build Your Mockup", timing: "Within 48 Hours", description: "Our AI-powered team designs a high-fidelity Figma mockup built specifically for your brand." },
  { number: "03", title: "We Review Together", timing: "On Your Call", description: "We walk you through every screen, take your feedback and confirm the project scope." },
  { number: "04", title: "We Build and Launch", timing: "After Confirmation", description: "You approve, we build.Landing page in 5 to 7 days. Full site in 2 to 4 weeks." },
];

export const FAQ_ITEMS = [
  { question: "Is the mockup actually free?", answer: "Yes. Filling in the form and receiving the 48-hour mockup costs you nothing. You only pay once you decide to move forward with us." },
  { question: "What exactly will I see in 48 hours?", answer: "A high-fidelity Figma design with real screens, your branding and your content. Not a wireframe. An actual visual of what your site will look like." },
  { question: "How long does the full build take?", answer: "Landing page: 5 to 7 days. Full website: 2 weeks. You will get a clear timeline on the review call with no vague estimates." },
  { question: "Do you only build websites?", answer: "No. Squadra is a full-stack agency covering branding, marketing, content and photography." },
  { question: "I am based outside Bangalore. Can you still help?", answer: "Absolutely. We work with clients across India and the UAE, fully remote." },
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
  { category: "Languages & Frameworks", icon: "code", tools: ["TypeScript", "React.js", "Node.js", "Python", "Go", "Next.js", "Flutter"] },
  { category: "AI & Automation", icon: "smart_toy", tools: ["OpenAI API", "LangChain", "TensorFlow", "UiPath", "Make.com"] },
  { category: "Data & Analytics", icon: "analytics", tools: ["PostgreSQL", "Redis", "Snowflake", "Tableau", "Apache Spark"] },
  { category: "Cloud & DevOps", icon: "cloud", tools: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
  { category: "Security", icon: "shield", tools: ["OAuth 2.0", "Cloudflare", "SentinelOne", "Vault"] },
  { category: "Collaboration", icon: "diversity_3", tools: ["Jira", "Slack", "Figma", "Bitbucket", "GitHub"] },
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
