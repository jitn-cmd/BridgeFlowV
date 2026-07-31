import { 
  TeamMember, 
  ClientItem, 
  SolutionCategory, 
  IndustryItem, 
  BlogPost, 
  TestimonialItem, 
  FAQItem, 
  WebsiteSettings,
  ContactMessage 
} from '../types';

export const initialSettings: WebsiteSettings = {
  siteName: "BridgeFlowV",
  tagline: "Premier Business Solutions Brokerage & Matchmaker",
  logoText: "BridgeFlowV",
  contactEmails: {
    general: "contact@bridgeflowv.com",
    legal: "legal@bridgeflowv.com",
    accounting: "accounting@bridgeflowv.com",
    marketing: "marketing@bridgeflowv.com",
    support: "support@bridgeflowv.com",
    careers: "careers@bridgeflowv.com",
  },
  phone: "+1 (800) 582-9402",
  whatsapp: "+1 (800) 582-9402",
  address: "75 Broad Street, 24th Floor, Financial District, New York, NY 10004",
  socialLinks: {
    linkedin: "https://linkedin.com/company/bridgeflowv",
    twitter: "https://twitter.com/bridgeflowv",
    facebook: "https://facebook.com/bridgeflowv",
    youtube: "https://youtube.com/@bridgeflowv",
    github: "https://github.com/bridgeflowv"
  },
  footerDescription: "BridgeFlowV is a business solutions consultancy platform. We help businesses connect with elite experts, vetted partner agencies, and dedicated outsourced teams to accelerate operational excellence.",
  copyrightText: "© 2026 BridgeFlowV Consultancy Services. All rights reserved.",
  adminPasskey: "BridgeFlowV@2026",
  adminRecoveryCode: "RECOVERY-BRIDGEFLOW-2026"
};

export const initialSolutions: SolutionCategory[] = [
  {
    id: "sol-legal",
    title: "Legal Solutions",
    department: "Legal",
    slug: "legal-solutions",
    iconName: "Scale",
    shortDescription: "Specialized legal process outsourcing, paralegal support, litigation services, and practice management for law firms, law groups, and attorneys.",
    fullDescription: "Empower your legal practice, law firm, or corporate counsel with vetted legal process outsourcing (LPO). We connect law groups, solo attorneys, and legal practices with experienced paralegals, contract specialists, and legal analysts across Personal Injury, Family Law, Estate Planning, Bankruptcy, Commercial & Civil Litigation, and specialized practice areas.",
    subServices: [
      { title: "Personal Injury & Accident Law Support", description: "Case intake, medical records retrieval, demand letter drafting, and trial prep for automobile, motorcycle, truck, railroad, and drunk driving injury claims." },
      { title: "Family Law & Matrimonial Services", description: "Divorce litigation prep, child custody documentation, adoption filings, father's rights advocacy support, same-sex family law, and mediation prep." },
      { title: "Estate Planning, Wills & Trust Law", description: "Drafting estate planning packages, living trusts, wills, probate law documentation, power of attorney, and elder law compliance." },
      { title: "Business, Commercial & Intellectual Property", description: "Corporate formation, commercial law contracts, IP trademark/patent search, securities regulation support, and labor & employment compliance." },
      { title: "Bankruptcy, Real Estate & Civil Litigation", description: "Chapter 7/13 bankruptcy filing prep, real estate closing review, civil & criminal litigation support, juvenile law, and e-discovery." },
      { title: "Legal Process Outsourcing (LPO) & Paralegals", description: "Dedicated certified paralegals for trial preparation, court filings, legal research, contract redlining, and high-volume document review." }
    ],
    practiceTags: [
      "Personal Injury Attorney",
      "Accident Attorney",
      "Automobile Injury Law",
      "Motorcycle Injury Law",
      "Truck Injury Law",
      "Railroad Injury Law",
      "Drunk Driving Injuries Law",
      "Family Law",
      "Divorce Litigation",
      "Child Custody",
      "Adoption",
      "Father's Rights",
      "Same Sex Family Law",
      "Mediation Law",
      "Estate Planning",
      "Estate Attorney",
      "Estate Lawyers",
      "Will & Trust Attorney",
      "Probate Law",
      "Elder Law",
      "Bankruptcy Attorney",
      "Civil Litigation",
      "Litigation Lawyer",
      "Criminal Law Attorney",
      "Juvenile Law",
      "Business Law",
      "Commercial Law",
      "Intellectual Property",
      "Labor & Employment",
      "Securities Law",
      "Real Estate Lawyers / Attorney",
      "Immigration Law",
      "Law Firm / Law Group Support"
    ],
    keyBenefits: ["Up to 60% operational cost reduction", "24/7 turnaround on document drafting & redlines", "ISO 27001 data security & strict client confidentiality"],
    typicalTimeline: "3 to 5 business days for onboarding",
    contactEmail: "legal@bridgeflowv.com",
    featured: true,
    order: 1
  },
  {
    id: "sol-accounting",
    title: "Accounting & Finance",
    department: "Accounting & Finance",
    slug: "accounting-finance",
    iconName: "Calculator",
    shortDescription: "Precision bookkeeping, CPA assistance, tax compliance, payroll processing, and executive financial reporting.",
    fullDescription: "Streamline your financial backend with dedicated accounting pods. We match accounting firms, SaaS startups, and mid-market enterprises with certified accountants, payroll officers, and financial analysts fluent in QuickBooks, Xero, NetSuite, and GAAP/IFRS standards.",
    subServices: [
      { title: "Bookkeeping", description: "Daily transaction recording, ledger reconciliations, accounts payable/receivable management, and monthly closes." },
      { title: "Payroll Management", description: "Global multi-currency payroll processing, tax withholdings, direct deposits, and compliance reporting." },
      { title: "Tax Preparation & Compliance", description: "Comprehensive tax document compilation, corporate filing assistance, sales tax compliance, and R&D tax credit support." },
      { title: "CPA Support Teams", description: "Scalable backend capacity for CPA firms during tax season peak loads and audit preparations." },
      { title: "Financial Reporting & Modeling", description: "CFO-level financial dashboards, cash flow forecasting, P&L analysis, and investor reporting packs." }
    ],
    keyBenefits: ["Zero error reconciliation guarantee", "Audit-ready financial records", "Scalable support during tax season"],
    typicalTimeline: "2 to 4 business days",
    contactEmail: "accounting@bridgeflowv.com",
    featured: true,
    order: 2
  },
  {
    id: "sol-va",
    title: "Virtual Assistant Solutions",
    department: "Virtual Assistant",
    slug: "virtual-assistant",
    iconName: "UserCheck",
    shortDescription: "Executive, real estate, medical, and legal VAs trained to reclaim founder and executive bandwidth.",
    fullDescription: "Delegate administrative overhead to top 1% vetted Virtual Assistants. Whether you need executive calendar management, real estate listing coordination, HIPAA-compliant medical scheduling, or legal intake assistance, we place specialized VAs matched to your work culture.",
    subServices: [
      { title: "Executive VA", description: "Complex inbox management, flight & travel logistics, calendar coordination, meeting transcription, and task tracking." },
      { title: "Real Estate VA", description: "MLS listing creation, property management coordination, cold lead follow-ups, transaction coordination, and CRM management." },
      { title: "Medical VA", description: "HIPAA-compliant patient scheduling, insurance verification, medical record entry, and telehealth administrative support." },
      { title: "Legal VA", description: "Client intake screening, court calendar tracking, document filing, retainer follow-ups, and billable hour logging." }
    ],
    keyBenefits: ["Bilingual & multi-timezone coverage", "99% executive retention rate", "Pre-vetted in specialized software"],
    typicalTimeline: "24 to 48 hours match",
    contactEmail: "support@bridgeflowv.com",
    featured: true,
    order: 3
  },
  {
    id: "sol-marketing",
    title: "Marketing & Growth",
    department: "Marketing",
    slug: "marketing-growth",
    iconName: "TrendingUp",
    shortDescription: "Data-driven SEO, Google Ads management, social growth campaigns, automated email marketing, and lead generation.",
    fullDescription: "Accelerate your revenue engine with elite digital marketing growth teams. From technical SEO audits and high-converting performance media to automated cold outreach and conversion rate optimization (CRO), we connect you with proven boutique agencies.",
    subServices: [
      { title: "Search Engine Optimization (SEO)", description: "Technical SEO, topical authority building, high-intent keyword optimization, and premium backlink acquisition." },
      { title: "Google Ads & PPC Management", description: "High-ROI paid search, shopping ads, display retargeting, and aggressive conversion optimization." },
      { title: "Social Media Marketing", description: "End-to-end content strategy, video short creation, community management, and paid social scale." },
      { title: "Email Marketing & Automation", description: "Klaviyo & HubSpot campaign design, lifecycle sequence flows, list hygiene, and deliverability optimization." },
      { title: "Lead Generation Engines", description: "B2B targeted account prospecting, multi-channel outreach, meeting booking, and pipeline enrichment." }
    ],
    keyBenefits: ["Transparent ROI reporting dashboards", "Dedicated PPC & SEO campaign leads", "No long-term lock-in contracts"],
    typicalTimeline: "5 business days launch",
    contactEmail: "marketing@bridgeflowv.com",
    featured: true,
    order: 4
  },
  {
    id: "sol-web",
    title: "Web & Software Engineering",
    department: "Web & Software",
    slug: "web-software",
    iconName: "Code",
    shortDescription: "Custom Web Application development, modern React & Next.js builds, WordPress themes, and Shopify stores.",
    fullDescription: "Build high-performance digital products engineered for speed, conversion, and security. We match product leaders and founders with elite full-stack engineering pods proficient in React, Next.js, TypeScript, Node.js, Python, WordPress, and Shopify ecosystems.",
    subServices: [
      { title: "Website Development", description: "Pixel-perfect, ultra-fast corporate websites built for brand storytelling and lead conversion." },
      { title: "WordPress Development", description: "Custom headless or traditional WordPress builds with custom Gutenberg blocks, security hardening, and fast loading." },
      { title: "React & Next.js Engineering", description: "Scalable Single Page Applications (SPAs) and Server-Side Rendered web platforms with high test coverage." },
      { title: "Shopify & Ecommerce", description: "Custom Shopify theme development, subscription model integrations, payment gateway setups, and speed optimization." }
    ],
    keyBenefits: ["Lighthouse 95+ performance scores", "Agile sprint delivery with daily commits", "Senior architect code reviews"],
    typicalTimeline: "Sprint starts within 7 days",
    contactEmail: "contact@bridgeflowv.com",
    featured: true,
    order: 5
  },
  {
    id: "sol-ai",
    title: "AI Solutions & Automation",
    department: "AI Solutions",
    slug: "ai-solutions",
    iconName: "Cpu",
    shortDescription: "Custom AI workflows, autonomous AI agents, enterprise chatbots, and LLM API integrations.",
    fullDescription: "Modernize operational workflows with enterprise-grade Artificial Intelligence solutions. We help businesses design custom RAG pipelines, deploy intelligent multi-agent customer support systems, and automate repetitive manual processes using LLMs and automation tools.",
    subServices: [
      { title: "AI Workflow Automation", description: "Zapier/Make/n8n custom integrations paired with LLM processing for automated document parsing and data routing." },
      { title: "AI Chatbots & Virtual Reps", description: "Custom trained AI assistants grounded in your company knowledge base for 24/7 lead conversion and customer support." },
      { title: "AI Agents & Autonomous Tasking", description: "Multi-agent orchestration for deep research, competitor monitoring, automated summary generation, and data extraction." }
    ],
    keyBenefits: ["80%+ reduction in repetitive task hours", "Enterprise data privacy and zero retention models", "Custom fine-tuning & prompt engineering"],
    typicalTimeline: "1 to 2 weeks prototype delivery",
    contactEmail: "contact@bridgeflowv.com",
    featured: true,
    order: 6
  },
  {
    id: "sol-design",
    title: "UI/UX & Brand Design",
    department: "Design",
    slug: "ui-ux-design",
    iconName: "Palette",
    shortDescription: "User-centric UI/UX design, design systems, visual branding identity, and graphic design subscription models.",
    fullDescription: "Elevate your visual identity with product design teams that blend typography, spatial rhythm, and intuitive user experiences. We match companies with Figma masters, brand strategists, and graphic designers experienced in enterprise SaaS and consumer apps.",
    subServices: [
      { title: "UI/UX Design", description: "Comprehensive user interface design, interactive wireframing, high-fidelity prototypes, and usability testing." },
      { title: "Branding & Visual Identity", description: "Logo design, color palette architecture, typographic design systems, brand guidelines, and pitch decks." },
      { title: "Graphic Design", description: "Custom marketing collateral, social banners, newsletter graphics, whitepaper layouts, and ad creatives." }
    ],
    keyBenefits: ["Figma design system handoff", "WCAG AA accessible interface compliance", "Fast 48-hour revision cycles"],
    typicalTimeline: "3 to 5 business days",
    contactEmail: "marketing@bridgeflowv.com",
    featured: false,
    order: 7
  },
  {
    id: "sol-support",
    title: "Business Support & Operations",
    department: "Business Support",
    slug: "business-support",
    iconName: "Briefcase",
    shortDescription: "24/7 Omnichannel customer support, structured data entry, talent recruitment, and back-office operations.",
    fullDescription: "Scale your operational infrastructure seamlessly. We place dedicated back-office specialists, omnichannel live chat agents, and talent acquisition recruiters to handle operational bottlenecks with high accuracy and speed.",
    subServices: [
      { title: "Customer Support (24/7)", description: "Omnichannel coverage via Live Chat, Zendesk, Freshdesk, Email, and Inbound Phone with strict SLA resolution rates." },
      { title: "Data Entry & Clean-up", description: "High-speed, dual-verification data entry, database scrubbing, migration cleanup, and inventory tagging." },
      { title: "Talent Recruitment Outsourcing (RPO)", description: "End-to-end candidate sourcing, resume screening, initial interview vetting, and onboarding logistics." },
      { title: "Back-Office Processing", description: "Order fulfillment processing, claims processing, document indexation, and vendor management." }
    ],
    keyBenefits: ["98.7% CSAT average score", "Rapid team scale-up from 1 to 50+ reps", "ISO quality assured processes"],
    typicalTimeline: "48 hours team deployment",
    contactEmail: "support@bridgeflowv.com",
    featured: false,
    order: 8
  }
];

export const initialIndustries: IndustryItem[] = [
  {
    id: "ind-law",
    name: "Law Firms & Legal Practices",
    iconName: "Shield",
    shortDescription: "Mitigate attorney burnout and reduce non-billable hours with specialized paralegals, contract drafters, and document review teams.",
    commonChallenges: ["Excessive time spent on document review", "High overhead cost for full-time paralegals", "Trial deadline bottlenecks"],
    recommendedSolutions: ["Legal Solutions (LPO)", "Legal VA Support", "Document Review Pods"],
    caseStudyHighlight: "Reduced litigation discovery prep time by 65% for a top NYC boutique law firm."
  },
  {
    id: "ind-accounting",
    name: "Accounting & CPA Firms",
    iconName: "Calculator",
    shortDescription: "Scale seasonal capacity during tax surges without expensive temporary local hires.",
    commonChallenges: ["Tax season capacity constraints", "High turnover of staff accountants", "Delayed client monthly closes"],
    recommendedSolutions: ["Accounting & Finance Pods", "CPA Tax Prep Teams", "Bookkeeping Automation"],
    caseStudyHighlight: "Helped a 12-person CPA firm process 350+ additional corporate tax returns seamlessly."
  },
  {
    id: "ind-realestate",
    name: "Real Estate & Property Management",
    iconName: "Building2",
    shortDescription: "Free up brokers and property managers to focus on deal closings with real estate specialized VAs and listing teams.",
    commonChallenges: ["Managing multi-MLS listings", "Unanswered inbound buyer leads", "Repetitive lease agreement drafting"],
    recommendedSolutions: ["Real Estate Virtual Assistants", "Lead Generation", "Legal Contract Drafting"],
    caseStudyHighlight: "Increased lead response time from 4 hours to 3 minutes for a Florida commercial broker group."
  },
  {
    id: "ind-healthcare",
    name: "Healthcare & Medical Clinics",
    iconName: "Activity",
    shortDescription: "HIPAA-compliant administrative support, medical billing coordination, and AI appointment scheduling.",
    commonChallenges: ["Patient no-shows and scheduling gaps", "Heavy insurance verification workload", "Front-desk staff fatigue"],
    recommendedSolutions: ["Medical Virtual Assistants", "AI Chatbots & Schedulers", "24/7 Patient Support"],
    caseStudyHighlight: "Reduced patient no-show rates by 42% via automated AI multi-channel reminders."
  },
  {
    id: "ind-construction",
    name: "Construction & Engineering",
    iconName: "HardHat",
    shortDescription: "Streamline permit applications, sub-contractor billing, payroll processing, and project management support.",
    commonChallenges: ["Complex payroll across union & non-union sites", "Permit paperwork delays", "Vendor invoice backlogs"],
    recommendedSolutions: ["Payroll & Accounting", "Executive VA", "Data Entry & Processing"],
    caseStudyHighlight: "Accelerated vendor payment processing times by 70% across 18 concurrent job sites."
  },
  {
    id: "ind-finance",
    name: "Financial Services & Investment",
    iconName: "DollarSign",
    shortDescription: "Analytical research support, financial modeling, compliance documentation, and investor reporting.",
    commonChallenges: ["Time-consuming financial modeling", "Strict regulatory compliance reporting", "Investor communication upkeep"],
    recommendedSolutions: ["Financial Analyst Pods", "Paralegal Compliance Support", "UI/UX Investor Portals"],
    caseStudyHighlight: "Delivered customized quarterly investor decks for a $120M private equity fund."
  },
  {
    id: "ind-saas",
    name: "SaaS & Tech Companies",
    iconName: "Layers",
    shortDescription: "Accelerate feature shipping, level up customer success SLAs, and scale performance marketing engines.",
    commonChallenges: ["Developer talent shortages", "24/7 customer support demands", "High CAC customer acquisition costs"],
    recommendedSolutions: ["React & Next.js Engineering", "24/7 Customer Support", "Google Ads & SEO"],
    caseStudyHighlight: "Lowered Customer Acquisition Cost (CAC) by 38% while scaling ARR from $1M to $3.5M."
  },
  {
    id: "ind-startups",
    name: "High-Growth Startups",
    iconName: "Zap",
    shortDescription: "Flexible multi-disciplinary teams (devs, designers, VAs, marketers) that adapt as your startup pivots and scales.",
    commonChallenges: ["Constrained seed/Series A runway", "Need for multi-role expertise quickly", "Lack of established operational SOPs"],
    recommendedSolutions: ["Full-Stack Web Dev", "UI/UX & Branding", "Executive VA", "AI Automation"],
    caseStudyHighlight: "Built and launched MVP in 4 weeks, enabling startup to secure $2M seed funding."
  },
  {
    id: "ind-ecommerce",
    name: "Ecommerce & DTC Brands",
    iconName: "ShoppingCart",
    shortDescription: "Custom Shopify development, high-converting PPC campaigns, automated email lifecycle flows, and order support.",
    commonChallenges: ["Cart abandonment rates", "Shopify theme custom limitations", "Customer return ticket spikes"],
    recommendedSolutions: ["Shopify & Web Engineering", "Email Marketing & Klaviyo", "Customer Support Pods"],
    caseStudyHighlight: "Boosted repeat customer purchase rate by 28% through custom email automation flows."
  }
];

export const initialTeamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Alexander Vance",
    designation: "Managing Director & Solutions Principal",
    department: "Executive",
    shortDescription: "15+ years advising Fortune 500 leadership on global business process outsourcing, agency matchmaking, and operational scaling.",
    skills: ["Strategic Consulting", "Enterprise Matchmaking", "M&A Advisory", "Operational Design"],
    email: "alexander.vance@bridgeflowv.com",
    phone: "+1 (212) 555-0192",
    linkedIn: "https://linkedin.com/in/alexandervance-bridgeflowv",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    active: true,
    order: 1
  },
  {
    id: "team-2",
    name: "Eleanor Sterling, JD",
    designation: "Head of Legal Solutions & LPO Practice",
    department: "Legal",
    shortDescription: "Former senior corporate counsel specializing in legal process outsourcing, cross-border contract compliance, and paralegal team vetting.",
    skills: ["Legal Outsourcing", "Contract Law", "Litigation Strategy", "ISO Compliance"],
    email: "eleanor.sterling@bridgeflowv.com",
    phone: "+1 (212) 555-0144",
    linkedIn: "https://linkedin.com/in/eleanorsterling-bridgeflowv",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    active: true,
    order: 2
  },
  {
    id: "team-3",
    name: "Marcus Thorne, CPA",
    designation: "Director of Accounting & Financial Services",
    department: "Accounting & Finance",
    shortDescription: "Certified Public Accountant with deep expertise structuring outsourced accounting pods, CPA support teams, and tax workflows.",
    skills: ["Financial Architecture", "CPA Advisory", "Tax Strategy", "NetSuite & QuickBooks"],
    email: "marcus.thorne@bridgeflowv.com",
    phone: "+1 (212) 555-0188",
    linkedIn: "https://linkedin.com/in/marcusthorne-bridgeflowv",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    active: true,
    order: 3
  },
  {
    id: "team-4",
    name: "Samantha Chen",
    designation: "Head of AI & Technology Solutions",
    department: "Web & Software",
    shortDescription: "Full-stack cloud architect and AI pioneer helping companies integrate custom Next.js applications and automated AI agent systems.",
    skills: ["AI Workflows", "React/Next.js Architecture", "LLM Fine-Tuning", "Cloud Infrastructure"],
    email: "samantha.chen@bridgeflowv.com",
    phone: "+1 (212) 555-0176",
    linkedIn: "https://linkedin.com/in/samanthachen-bridgeflowv",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    active: true,
    order: 4
  },
  {
    id: "team-5",
    name: "David Ross",
    designation: "Director of Digital Marketing & Growth",
    department: "Marketing",
    shortDescription: "Growth strategist having managed over $30M in performance media across Google Ads, technical SEO, and B2B lead generation engines.",
    skills: ["PPC Strategy", "Technical SEO", "Lead Gen Funnels", "Conversion Rate Optimization"],
    email: "david.ross@bridgeflowv.com",
    phone: "+1 (212) 555-0131",
    linkedIn: "https://linkedin.com/in/davidross-bridgeflowv",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    active: true,
    order: 5
  },
  {
    id: "team-6",
    name: "Sophia Martinez",
    designation: "Head of Virtual Assistant & Business Support",
    department: "Virtual Assistant",
    shortDescription: "Operations leader managing talent screening, training frameworks, and retention for executive, medical, and real estate VAs.",
    skills: ["Talent Management", "SOP Optimization", "Executive Support", "HIPAA Compliance Training"],
    email: "sophia.martinez@bridgeflowv.com",
    phone: "+1 (212) 555-0165",
    linkedIn: "https://linkedin.com/in/sophiamartinez-bridgeflowv",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    active: true,
    order: 6
  }
];

export const initialClients: ClientItem[] = [
  {
    id: "client-1",
    companyName: "Vanguard Legal Group LLP",
    logoUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80",
    industry: "Law Firms",
    country: "United States",
    description: "Multi-state corporate litigation firm utilizing BridgeFlowV for contract redlining and document review support.",
    website: "https://vanguardlegal.example.com",
    featured: true,
    order: 1
  },
  {
    id: "client-2",
    companyName: "Apex Financial Partners",
    logoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80",
    industry: "Finance",
    country: "United Kingdom",
    description: "London-based wealth management asset manager leveraging full outsourced financial reporting and CPA support.",
    website: "https://apexfinance.example.com",
    featured: true,
    order: 2
  },
  {
    id: "client-3",
    companyName: "Horizon Real Estate Capital",
    logoUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=200&q=80",
    industry: "Real Estate",
    country: "Canada",
    description: "Commercial property holding firm scaling acquisitions with dedicated Real Estate Virtual Assistants.",
    website: "https://horizonrealestate.example.com",
    featured: true,
    order: 3
  },
  {
    id: "client-4",
    companyName: "BioHealth Diagnostics",
    logoUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=200&q=80",
    industry: "Healthcare",
    country: "United States",
    description: "Telehealth provider using HIPAA-compliant Medical VAs and automated AI scheduling chatbots.",
    website: "https://biohealth.example.com",
    featured: true,
    order: 4
  },
  {
    id: "client-5",
    companyName: "NexGen SaaS Technologies",
    logoUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80",
    industry: "SaaS",
    country: "Singapore",
    description: "High-growth AI developer tools startup utilizing React/Next.js engineering pods and 24/7 technical customer support.",
    website: "https://nexgensaas.example.com",
    featured: true,
    order: 5
  },
  {
    id: "client-6",
    companyName: "Strata Construction Global",
    logoUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=200&q=80",
    industry: "Construction",
    country: "Australia",
    description: "Infrastructure enterprise utilizing outsourced payroll, back-office processing, and vendor billing management.",
    website: "https://strataconstruction.example.com",
    featured: false,
    order: 6
  }
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Jonathan Sterling",
    clientTitle: "Managing Partner",
    companyName: "Sterling & Partners Law Firm",
    logoUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=150&q=80",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "BridgeFlowV connected us with an incredible legal process outsourcing pod within 48 hours. Our attorneys now focus 100% on trial advocacy while paralegal discovery prep runs seamlessly overnight.",
    industry: "Law Firms",
    solutionCategory: "Legal Solutions",
    approved: true,
    order: 1
  },
  {
    id: "test-2",
    clientName: "Miriam O'Connor",
    clientTitle: "Chief Financial Officer",
    companyName: "OmniLogistics International",
    logoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=80",
    avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "Finding qualified CPA-level support during audit season used to take months of headhunting. BridgeFlowV matched us with a pre-vetted accounting team that closed our year-end books two weeks ahead of schedule.",
    industry: "Finance",
    solutionCategory: "Accounting & Finance",
    approved: true,
    order: 2
  },
  {
    id: "test-3",
    clientName: "Rohan Patel",
    clientTitle: "Founder & CEO",
    companyName: "CloudPulse Tech",
    logoUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&q=80",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "The Next.js engineering team and Google Ads performance marketers vetted by BridgeFlowV helped us double our monthly recurring revenue in less than 6 months. Exceptional quality and professionalism.",
    industry: "SaaS",
    solutionCategory: "Web & Software",
    approved: true,
    order: 3
  },
  {
    id: "test-4",
    clientName: "Victoria Vance",
    clientTitle: "VP of Operations",
    companyName: "Highland Real Estate Group",
    logoUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=150&q=80",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "Our executive virtual assistants from BridgeFlowV are proactive, meticulous, and fully trained in our property software. They saved our leadership team over 25 hours per week.",
    industry: "Real Estate",
    solutionCategory: "Virtual Assistant Solutions",
    approved: true,
    order: 4
  }
];

export const initialBlogs: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Strategic Guide to Legal Process Outsourcing (LPO) in 2026",
    slug: "strategic-guide-legal-process-outsourcing-2026",
    category: "Legal Solutions",
    excerpt: "How forward-thinking law firms and corporate legal departments are leveraging specialized offshore legal teams to lower billing friction and boost margins.",
    content: `Legal Process Outsourcing (LPO) has evolved from simple document storage into a high-value strategic asset for corporate law firms globally. 

### Why LPO is Necessary for Modern Law Practices

Traditional law practice models often force senior partners and associate attorneys to spend upwards of 35% of their billable hours on administrative documentation, contract drafting boilerplate, and preliminary document reviews.

By partnering with pre-vetted legal process outsourcing providers, firms can:
1. **Reduce Non-Billable Overhead:** Delegate discovery processing, privilege logging, and NDA redlining to certified paralegals.
2. **Accelerate Turnaround Times:** Leverage time-zone differentials for overnight document completion.
3. **Maintain Strict Data Privacy:** Work with providers enforcing ISO 27001 certifications and strict NDAs.

### Key Workflows Best Suited for Outsourcing

* **Contract Lifecycle Management (CLM):** First-pass contract reviews, redlining standard commercial agreements, and vendor contract tracking.
* **Litigation Preparation:** E-discovery coding, deposition summaries, trial binder preparation, and legal research memos.
* **IP & Trademark Audits:** Patent search reports, trademark filing compilation, and portfolio monitoring.

BridgeFlowV helps law practices connect with verified, insured LPO teams tailored to your specific jurisdiction.`,
    authorName: "Eleanor Sterling, JD",
    authorRole: "Head of Legal Practice",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    publishedDate: "July 24, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["Legal", "LPO", "Outsourcing", "Law Firm Growth"]
  },
  {
    id: "blog-2",
    title: "Scaling Accounting Capacity Without the Overhead of Tax Season Hires",
    slug: "scaling-accounting-capacity-tax-season-2026",
    category: "Accounting & Finance",
    excerpt: "Discover how CPA firms and financial institutions are maintaining work-life balance while expanding client volume through outsourced bookkeeping pods.",
    content: `Tax season burnout is one of the leading causes of talent attrition in accounting practices worldwide. Every spring, CPA firms face a familiar dilemma: turn away profitable new accounts or push internal teams to breaking points.

### The Solution: Dedicated Accounting Pods

Rather than relying on hasty temporary hires, modern financial leadership utilizes dedicated accounting pods that function as seamless extensions of their internal team.

### Primary Advantages

* **System Integration:** Professional accounting pods arrive fluent in Xero, QuickBooks Online, NetSuite, Sage, and Drake Software.
* **Audit Readiness:** Double-check reconciliation workflows ensure 99.8% precision across multi-currency ledgers.
* **Flexible Scale:** Easily ramp up capacity from November through April and adjust gracefully during off-peak periods.

BridgeFlowV carefully audits financial service providers to guarantee ISO security compliance and CPA-level oversight.`,
    authorName: "Marcus Thorne, CPA",
    authorRole: "Director of Accounting",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    publishedDate: "July 18, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["Accounting", "Tax Season", "CPA", "Finance"]
  },
  {
    id: "blog-3",
    title: "Deploying AI Agents in Enterprise Workflows: Best Practices",
    slug: "deploying-ai-agents-enterprise-workflows-2026",
    category: "AI Solutions",
    excerpt: "A practical framework for integrating autonomous AI chatbots, RAG knowledge bases, and document parsing agents into existing business systems.",
    content: `Artificial Intelligence has shifted from novelty prototypes into operational core infrastructure. For mid-market and enterprise businesses, autonomous AI agents represent the next leap in productivity.

### Where AI Delivers Immediate ROI

1. **24/7 Intelligent Support:** AI Chatbots grounded on internal technical documentation resolve up to 70% of tier-1 support tickets without human escalation.
2. **Automated Document Intelligence:** Parse incoming PDFs, invoices, legal contracts, and medical forms into structured JSON data in seconds.
3. **Multi-Agent Orchestration:** Agents that research, draft summaries, generate social copy, and trigger CRM updates autonomously.

BridgeFlowV guides enterprises through vendor selection, ensuring enterprise data security and zero model-training retention policies.`,
    authorName: "Samantha Chen",
    authorRole: "Head of AI Solutions",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    publishedDate: "July 10, 2026",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["AI", "Automation", "Chatbots", "Tech Architecture"]
  }
];

export const initialFAQs: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is BridgeFlowV and how does the consultancy model work?",
    answer: "BridgeFlowV is a business solutions consultancy and brokerage platform. We do not directly employ all execution staff; instead, we diagnose your business challenges, match you with top-vetted partner agencies, specialized outsourced pods, or dedicated talent, and oversee the onboarding to ensure success."
  },
  {
    id: "faq-2",
    category: "Vetting & Quality",
    question: "How does BridgeFlowV vet partner agencies and specialized teams?",
    answer: "Our rigorous 5-stage vetting protocol checks operational track records, technical skill assessments, data security standards (ISO 27001, SOC 2, HIPAA), client reference calls, and financial stability before any provider enters our network."
  },
  {
    id: "faq-3",
    category: "Pricing & Models",
    question: "What pricing models are available for business solutions?",
    answer: "We offer flexible models tailored to your needs: Dedicated Monthly Retainer (full-time staff pods), Project-Based Fixed Fee (web builds, brand launches), and Time & Materials for ongoing advisory. Our matchmaking consultation is completely free."
  },
  {
    id: "faq-4",
    category: "Onboarding",
    question: "How fast can a team or specialist be deployed to my company?",
    answer: "Virtual Assistants and standard customer support reps can be deployed in as little as 24–48 hours. Complex legal process outsourcing pods, Next.js dev teams, or accounting pods typically launch within 3 to 7 business days."
  },
  {
    id: "faq-5",
    category: "Security & NDA",
    question: "How is my company's confidential data and intellectual property protected?",
    answer: "We sign comprehensive Mutual Non-Disclosure Agreements (MNDAs) prior to any scoping discussions. All vetted partners operate under strict IP assignment clauses, secure VPN access, end-to-end encryption, and compliant workstation security."
  }
];

export const initialContactMessages: ContactMessage[] = [
  {
    id: "msg-101",
    fullName: "David Miller",
    email: "david@millerlawfirm.com",
    phone: "+1 (312) 555-0199",
    company: "Miller & Associates Law",
    department: "Legal",
    solutionOfInterest: "Legal Process Outsourcing & Contract Redlining",
    budgetRange: "$5,000 - $15,000 / mo",
    message: "We are seeking a dedicated 3-person paralegal pod to handle contract drafting and preliminary litigation document review.",
    submittedAt: "2026-07-29T14:32:00Z",
    status: "new"
  },
  {
    id: "msg-102",
    fullName: "Rachel Adams",
    email: "rachel@adamscpa.com",
    phone: "+1 (415) 555-0122",
    company: "Adams Financial Advisory",
    department: "Accounting & Finance",
    solutionOfInterest: "CPA Support & Bookkeeping",
    budgetRange: "$15,000 - $30,000 / mo",
    message: "Need 5 full-time backend accountants fluent in QuickBooks and Xero to assist our CPA firm with upcoming audit workload.",
    submittedAt: "2026-07-28T09:15:00Z",
    status: "in_progress",
    notes: "Followed up on July 29th. Sent proposal deck."
  }
];
