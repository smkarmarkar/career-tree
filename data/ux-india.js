/* Career Tree data file: Product Design, India.
   Swap or add files like this one. The renderer (index.html) never changes.
   Schema:
   meta        { id, discipline, title, subtitle, region, asOf, disclaimer }
   bands       [{ id, label, range }]  smallest to largest; leaf size follows this order
   attributes  [{ key, label }]        fields shown on every sub-branch card, in order
   branches    [{ id, label, summary, notes, detailNotes, color (1-7, optional),
                  children: [{ id, label, band, <attribute keys>, notes,
                               companies: [{ name, band (optional) }] }] }]
   steps       optional. Default = intro, then for each branch: reveal, detail, then overview.
               Custom: [{ branch: "id", view: "reveal" | "detail", notes: "..." }]
   companies[].src  optional evidence note (not shown on screen). Companies checked Nov 2026 against
               NID Annual Report 2024-25 (placements Nov 2024 / May 2024, sponsored graduation projects),
               plus press, company sites and job listings.
*/
(window.CAREER_TREES = window.CAREER_TREES || []).push({
  meta: {
    id: "ux-india",
    discipline: "Product Design",
    title: "The Product Design Career Tree",
    subtitle: "Where a product designer can grow in India",
    region: "India",
    asOf: "Nov 2026",
    disclaimer: "Companies checked Nov 2026."
  },
  bands: [
    { id: "₹",   label: "Modest", range: "₹4 to 8 LPA" },
    { id: "₹₹",  label: "Good",   range: "₹8 to 16 LPA" },
    { id: "₹₹₹", label: "High",   range: "₹16 to 35+ LPA" }
  ],
  attributes: [
    { key: "size",      label: "Company size" },
    { key: "work",      label: "Nature of work" },
    { key: "pace",      label: "Pace" },
    { key: "fresher",   label: "Fresher friendly" },
    { key: "portfolio", label: "Portfolio they expect" },
    { key: "growth",    label: "Growth path" }
  ],
  branches: [
    {
      id: "b2c", label: "Consumer tech (B2C)",
      summary: "Apps used by millions. Fast feedback, metrics driven, high visibility.",
      notes: "Most students start dreaming here. Your work ships to crores of users and you see the impact in days. The flip side: everything is an A/B test and craft often loses to conversion.",
      detailNotes: "Point out that fintech pays the most in this branch. Quick commerce is the most intense pace in the country right now.",
      children: [
        { id: "qcom", label: "Quick commerce & food", band: "₹₹",
          size: "Large (5k+)", work: "Craft + growth experiments", pace: "Very fast", fresher: "Medium",
          portfolio: "Shipped app flows, metrics thinking", growth: "IC to Lead in 4 to 6 yrs",
          companies: [{ name: "Swiggy", url: "https://www.swiggy.com" }, { name: "Zomato / Blinkit", url: "https://www.zomato.com", src: "Zomato Ltd (renamed Eternal Ltd in 2025); NID placements Phase 1 and 2" }, { name: "Zepto", url: "https://www.zepto.com" }, { name: "Flipkart Minutes", url: "https://www.flipkart.com" }] },
        { id: "fintech", label: "Fintech", band: "₹₹₹",
          size: "Mid to large", work: "Trust, clarity, compliance", pace: "Fast", fresher: "Low",
          portfolio: "Complex flows made simple", growth: "Strong IC and manager tracks",
          companies: [{ name: "PhonePe", url: "https://www.phonepe.com" }, { name: "CRED", url: "https://www.cred.club" }, { name: "Groww", url: "https://www.groww.in" }, { name: "Paytm", url: "https://www.paytm.com", band: "₹₹" }] },
        { id: "mobility", label: "Mobility & travel", band: "₹₹",
          size: "Large", work: "Multi-sided systems (rider, driver, ops)", pace: "Fast", fresher: "Medium",
          portfolio: "Service thinking, edge cases", growth: "Broad product exposure",
          companies: [{ name: "Uber", url: "https://www.uber.com", band: "₹₹₹", src: "NID Information Design project sponsor (Uber India R&D)" }, { name: "Rapido", url: "https://www.rapido.bike", src: "NID M.Des project sponsor (Roppen Transportation)" }, { name: "Ola", url: "https://www.olacabs.com", src: "NID placements Phase 1" }, { name: "MakeMyTrip", url: "https://www.makemytrip.com" }] },
        { id: "content", label: "Content & social", band: "₹₹",
          size: "Mid", work: "Engagement, creators, video", pace: "Very fast", fresher: "High",
          portfolio: "Visual craft, motion, storytelling", growth: "Depends on company health",
          companies: [{ name: "JioHotstar", url: "https://www.jiohotstar.com" }, { name: "ShareChat", url: "https://www.sharechat.com", src: "UX designer roles" }, { name: "Pocket FM", url: "https://www.pocketfm.com", src: "Lead and senior product designer roles, Bengaluru" }] },
        { id: "games", label: "Games & play", band: "₹₹",  // Glassdoor Oct 2026: Zynga game designer 0-1 yr ~9 LPA, 1-3 yrs 9-16 LPA (101 reports); SplashLearn 10-19 LPA (3 reports)
          size: "Small to large", work: "Game UX, systems, onboarding, kids' learning", pace: "Fast", fresher: "Medium",
          portfolio: "Game feel, systems thinking, playtesting", growth: "Specialist track, global studios",
          companies: [
            { name: "Zynga", url: "https://www.zynga.com", src: "Bengaluru studio, game designer roles; NID placements Phase 1; two NID Digital Game Design project sponsorships" },
            { name: "SplashLearn", url: "https://www.splashlearn.com", src: "NID Digital Game Design project sponsor" },
            { name: "PlayShifu", url: "https://www.playshifu.com", src: "Two NID Digital Game Design project sponsorships" } ] }
      ]
    },
    {
      id: "b2b", label: "Enterprise & B2B",
      summary: "Software businesses run on. Deep problems, long cycles, best pay.",
      notes: "The least glamorous branch and the best paid. Users are admins, engineers, analysts. You need to understand the domain before you can design for it. That depth is exactly why it pays.",
      detailNotes: "Security and cloud is where systems thinking is rewarded most. Zoho is the exception on pay but a great school.",
      children: [
        { id: "saas", label: "SaaS & collaboration", band: "₹₹₹",
          size: "Large, global", work: "Systems, workflows, design systems", pace: "Steady", fresher: "Medium",
          portfolio: "Problem framing, complex workflows", growth: "Clear IC ladder to Principal",
          companies: [{ name: "Atlassian", url: "https://www.atlassian.com", src: "NID Information Design project sponsor" }, { name: "Freshworks", url: "https://www.freshworks.com", band: "₹₹" }, { name: "Postman", url: "https://www.postman.com" }, { name: "Zoho", url: "https://www.zoho.com", band: "₹" }, { name: "Intuit", url: "https://www.intuit.com", src: "NID placements Phase 2; NID M.Des project sponsor in several disciplines" }, { name: "ServiceNow", url: "https://www.servicenow.com", src: "NID placements Phase 1; NID M.Des project sponsor" }] },
        { id: "security", label: "Security & cloud", band: "₹₹₹",
          size: "Very large", work: "Data heavy, expert users", pace: "Steady", fresher: "Low",
          portfolio: "Dashboards, info design, research", growth: "Domain depth = rare and valued",
          companies: [{ name: "Google Cloud", url: "https://cloud.google.com" }, { name: "Microsoft", url: "https://www.microsoft.com" }, { name: "Palo Alto Networks", url: "https://www.paloaltonetworks.com" }, { name: "Cisco", url: "https://www.cisco.com" }] },
        { id: "erp", label: "ERP & business apps", band: "₹₹₹",
          size: "Very large", work: "Scale, consistency, legacy", pace: "Slow", fresher: "Medium",
          portfolio: "Structured process, tables and forms", growth: "Stable, slower titles",
          companies: [{ name: "Oracle", url: "https://www.oracle.com", band: "₹₹", src: "NID placements Phase 1" }, { name: "SAP", url: "https://www.sap.com", src: "SAP Labs India; NID placements Phase 1" }, { name: "Salesforce", url: "https://www.salesforce.com", src: "NID placements Phase 1" }, { name: "Adobe", url: "https://www.adobe.com", src: "NID placements Phase 1" }] },
        { id: "infra", label: "Infra & dev tools", band: "₹₹",
          size: "Mid to large", work: "Technical users, CLI to GUI", pace: "Steady", fresher: "Medium",
          portfolio: "Comfort with technical topics", growth: "Niche, high demand later",
          companies: [{ name: "Nutanix", url: "https://www.nutanix.com", src: "NID placements Phase 2; NID Interaction and Information Design project sponsor" }, { name: "BrowserStack", url: "https://www.browserstack.com" }] }
      ]
    },
    {
      id: "startup", label: "Startups",
      summary: "Small teams, big ownership. Learn fast, risk is real.",
      notes: "You will be the only designer, sometimes the first. You learn product, research and visual craft in one year. Ask about funding runway before you join. Equity is a lottery ticket, not salary.",
      detailNotes: "Early stage pays less but teaches the most. Growth stage is the sweet spot for pay plus ownership.",
      children: [
        { id: "early", label: "Early stage (Seed to A)", band: "₹",
          size: "Small (5 to 200)", work: "Everything, end to end", pace: "Chaotic", fresher: "High",
          portfolio: "Range and speed over polish", growth: "Fast titles, unstructured",
          companies: [{ name: "Atomicwork", url: "https://www.atomicwork.com", src: "Series A Jan 2025 (Khosla Ventures, Z47); NID placements Phase 2" }, { name: "DevRev", url: "https://www.devrev.ai", src: "Series A Aug 2024, but already a unicorn with a large team; NID placements Phase 2" }] },
        { id: "growth", label: "Growth stage (B and beyond)", band: "₹₹",
          size: "Small to mid", work: "Building the design function", pace: "Fast", fresher: "Medium",
          portfolio: "Shipped work, ownership stories", growth: "Early leadership chances",
          companies: [{ name: "Razorpay", url: "https://www.razorpay.com", band: "₹₹₹", src: "NID placements Phase 2" }, { name: "Cult.fit", url: "https://www.cult.fit", src: "NID Information Design project sponsor (Curefit)" }, { name: "Spinny", url: "https://www.spinny.com", src: "Product designer roles" }, { name: "Licious", url: "https://www.licious.in", src: "Senior product designer role" }, { name: "Atlan", url: "https://www.atlan.com", src: "Series C; NID M.Des project sponsor" }, { name: "Wishlink", url: "https://www.wishlink.com", src: "Series B Feb 2026; NID placements Phase 1" }] }
      ]
    },
    {
      id: "studio", label: "Design studios",
      summary: "Many clients, many problems. Range and craft, lower pay.",
      notes: "The best place to build range. Six projects a year across domains. Pay is lower and hours can be long, but two years here makes your portfolio very hard to ignore.",
      detailNotes: "Global firms pay better and expose you to strategy work. Indian studios give you more hands-on craft early.",
      children: [
        { id: "indie", label: "Indian UX studios", band: "₹",
          size: "Small (20 to 300)", work: "Client projects, high craft", pace: "Deadline driven", fresher: "High",
          portfolio: "Visual and interaction craft", growth: "Lead projects in 2 to 3 yrs",
          companies: [{ name: "YUJ Design", url: "https://www.yujdesigns.com" }, { name: "Lollypop", url: "https://www.lollypop.design", src: "Owned by Terralogic since 2019" }, { name: "Think Design", url: "https://www.think.design", src: "Owned by Havas" }, { name: "Tenet", url: "https://www.wearetenet.com", src: "UI/UX agency, Bengaluru (wearetenet.com)" }, { name: "Red Baton", url: "https://redbaton.digital" }] },
        { id: "product", label: "Product & brand studios", band: "₹",
          size: "Small (10 to 150)", work: "Physical + digital, brand, packaging", pace: "Project based", fresher: "High",
          portfolio: "Range across media, making skills", growth: "Become a multi-disciplinary lead",
          companies: [{ name: "Elephant Design", url: "https://www.elephantdesign.com" }, { name: "UST / Moonraft", url: "https://www.ust.com", band: "₹₹", src: "Moonraft is part of UST; UST came to NID placements Phase 1. Both names shown by request" }] },
        { id: "global", label: "Global design firms", band: "₹₹",
          size: "Mid, global network", work: "Strategy + design", pace: "Project based", fresher: "Low",
          portfolio: "Thinking process, storytelling", growth: "Strategy and leadership exposure",
          companies: [{ name: "frog", url: "https://www.frog.co", src: "Bengaluru studio (frog.co)" }, { name: "Designit", url: "https://www.designit.com", src: "Bengaluru studio, Wipro (designit.com)" }] }
      ]
    },
    {
      id: "consulting", label: "Consulting & IT services",
      summary: "Design inside large service firms. Stability, scale, client exposure.",
      notes: "Many of you will get your first offer here through campus. It is a real career, not a fallback. Pick teams that do actual design, not slide decoration, and move on if you stop learning.",
      detailNotes: "Ask in the interview: how many designers, who leads them, and what shipped last year.",
      children: [
        { id: "digital", label: "Digital consultancies", band: "₹₹",
          size: "Very large", work: "Strategy, CX, transformation", pace: "Project based", fresher: "Medium",
          portfolio: "Research, synthesis, communication", growth: "Consulting ladder, travel",
          companies: [{ name: "Accenture Song (Reinvention Services)", url: "https://accenture.com/in-en/about/accenture-song-index", src: "Accenture is folding Song into its Reinvention Services unit (announced 2025). Fjord merged in 2022" }, { name: "Deloitte Digital", url: "https://www.deloittedigital.com", src: "NID placements Phase 1 (Deloitte Consulting)" }, { name: "McKinsey Design", url: "https://mckinsey.com/capabilities/mckinsey-design/how-we-help-clients", band: "₹₹₹" }, { name: "EY Design Studio", url: "https://www.ey.com", src: "Design studio roles, Bengaluru and Gurugram" }] },
        { id: "itsvc", label: "IT services design arms", band: "₹",
          size: "Massive (1 lakh+)", work: "Delivery for global clients", pace: "Steady", fresher: "High",
          portfolio: "Fundamentals, tool fluency", growth: "Slow unless you switch",
          companies: [{ name: "Infosys / WONGDOODY", url: "https://www.wongdoody.com", src: "NID placements Phase 1 (Infosys); WONGDOODY design roles" }, { name: "TCS Interactive", url: "https://www.tcs.com", src: "NID placements Phase 1 (TCS)" }, { name: "Wipro", url: "https://www.wipro.com" }, { name: "HCLTech", url: "https://www.hcltech.com" }] }
      ]
    },
    {
      id: "gcc", label: "Global capability centres",
      summary: "Indian hubs of global companies. Big budgets, steady growth.",
      notes: "The fastest growing employer of designers in India. Banks, retailers and insurers now build their products from Bangalore, Hyderabad and Pune. Good pay, good balance, less hype.",
      detailNotes: "Check whether the India team owns products or only executes specs from HQ. That one question decides your growth.",
      children: [
        { id: "bfsi", label: "Banking & finance", band: "₹₹₹",
          size: "Very large", work: "Internal tools + customer apps", pace: "Steady", fresher: "Medium",
          portfolio: "Complex data, accessibility", growth: "Structured, well paid",
          companies: [{ name: "JPMorgan Chase", url: "https://www.jpmorganchase.com" }, { name: "Goldman Sachs", url: "https://www.goldmansachs.com" }, { name: "American Express", url: "https://www.americanexpress.com", band: "₹₹" }, { name: "Capital One", url: "https://www.capitalone.com", src: "NID placements Phase 2" }, { name: "UBS", url: "https://www.ubs.com", src: "NID placements Phase 2" }] },
        { id: "retail", label: "Retail & consumer brands", band: "₹₹",
          size: "Very large", work: "E-commerce, store and supply tools", pace: "Steady", fresher: "Medium",
          portfolio: "End to end flows, research", growth: "Good scope for ownership",
          companies: [{ name: "Walmart Global Tech", url: "https://tech.walmart.com", band: "₹₹₹", src: "NID placements Phase 1; most frequent NID digital design project sponsor in 2024-25" }, { name: "Target", url: "https://www.target.com", src: "NID M.Des project sponsor" }, { name: "Lowe's", url: "https://www.lowes.com" }, { name: "Tesco", url: "https://www.tesco.com" }] },
        { id: "rnd", label: "Engineering & R&D centres", band: "₹₹",  // Glassdoor Oct 2026: Samsung R&D UX designer avg ~8.4 LPA, typical 5-13 LPA, 1-3 yrs 12-16 LPA (23 reports); Bosch India UX avg ~8.4 LPA (3 reports)
          size: "Very large", work: "Devices, automotive and platform UX", pace: "Steady", fresher: "Medium",
          portfolio: "Systems, prototyping, research", growth: "Global product exposure",
          companies: [
            { name: "Samsung R&D", url: "https://research.samsung.com", src: "Samsung R&D Institute Bengaluru; NID placements Phase 1 and 2; NID project sponsor in several disciplines" },
            { name: "Bosch", url: "https://www.bosch.com", src: "Bosch Global Software Technologies (RBEI); two NID M.Des project sponsorships" } ] }
      ]
    },
    {
      id: "impact", label: "Research & public impact",
      summary: "Design for a billion people. Meaning over money.",
      notes: "India is building digital public infrastructure the world copies. Designing for first-time internet users in 12 languages is the hardest UX problem there is. Pay is lower, impact is not.",
      detailNotes: "Research labs are rare and competitive. Govtech and foundations are open to strong freshers with field research skills.",
      children: [
        { id: "labs", label: "Research labs", band: "₹₹",
          size: "Small teams in big orgs", work: "Research, prototyping, papers", pace: "Slow, deep", fresher: "Low",
          portfolio: "Research rigour, writing", growth: "Specialist, academic links",
          companies: [{ name: "Microsoft Research India", url: "https://microsoft.com/en-us/research/lab/microsoft-research-india", band: "₹₹₹" }, { name: "Google Research", url: "https://research.google" }, { name: "IIT / IISc labs", band: "₹", src: "IISc in NID placements Phase 2; IISc UTSAAH Lab sponsored several NID projects" }] },
        { id: "govtech", label: "Govtech & social impact", band: "₹",
          size: "Small to mid", work: "Field research, inclusion, scale", pace: "Mission driven", fresher: "High",
          portfolio: "Field work, empathy, clarity", growth: "Rare, meaningful expertise",
          companies: [{ name: "eGov Foundation", url: "https://egov.org.in" }, { name: "EkStep", url: "https://www.ekstep.org", src: "Active foundation; Sunbird digital public good" }, { name: "Samagra", url: "https://www.samagragovernance.in" }, { name: "NPCI", url: "https://npci.org.in", band: "₹₹", src: "Lead Product Design and UI/UX roles, Mumbai" }] }
      ]
    }
  ]
});
