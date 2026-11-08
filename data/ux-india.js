/* Career Tree data file: UX Design, India.
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
*/
(window.CAREER_TREES = window.CAREER_TREES || []).push({
  meta: {
    id: "ux-india",
    discipline: "UX Design",
    title: "The UX Career Tree",
    subtitle: "Where a UX designer can grow in India",
    region: "India",
    asOf: "Oct 2026",
    disclaimer: "Indicative fresher CTC (0 to 2 yrs). Varies by school, portfolio and city. Draft data, verify before quoting."
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
          companies: [{ name: "Swiggy" }, { name: "Zomato / Blinkit" }, { name: "Zepto" }, { name: "Flipkart Minutes" }] },
        { id: "fintech", label: "Fintech", band: "₹₹₹",
          size: "Mid to large", work: "Trust, clarity, compliance", pace: "Fast", fresher: "Low",
          portfolio: "Complex flows made simple", growth: "Strong IC and manager tracks",
          companies: [{ name: "PhonePe" }, { name: "CRED" }, { name: "Groww" }, { name: "Paytm", band: "₹₹" }] },
        { id: "mobility", label: "Mobility & travel", band: "₹₹",
          size: "Large", work: "Multi-sided systems (rider, driver, ops)", pace: "Fast", fresher: "Medium",
          portfolio: "Service thinking, edge cases", growth: "Broad product exposure",
          companies: [{ name: "Uber", band: "₹₹₹" }, { name: "Rapido" }, { name: "Ola" }, { name: "MakeMyTrip" }] },
        { id: "content", label: "Content & social", band: "₹₹",
          size: "Mid", work: "Engagement, creators, video", pace: "Very fast", fresher: "High",
          portfolio: "Visual craft, motion, storytelling", growth: "Depends on company health",
          companies: [{ name: "JioHotstar" }, { name: "ShareChat" }, { name: "Pocket FM" }] }
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
          companies: [{ name: "Atlassian" }, { name: "Freshworks", band: "₹₹" }, { name: "Postman" }, { name: "Zoho", band: "₹" }] },
        { id: "security", label: "Security & cloud", band: "₹₹₹",
          size: "Very large", work: "Data heavy, expert users", pace: "Steady", fresher: "Low",
          portfolio: "Dashboards, info design, research", growth: "Domain depth = rare and valued",
          companies: [{ name: "Google Cloud" }, { name: "Microsoft" }, { name: "Palo Alto Networks" }, { name: "Cisco" }] },
        { id: "erp", label: "ERP & business apps", band: "₹₹₹",
          size: "Very large", work: "Scale, consistency, legacy", pace: "Slow", fresher: "Medium",
          portfolio: "Structured process, tables and forms", growth: "Stable, slower titles",
          companies: [{ name: "Oracle", band: "₹₹" }, { name: "SAP" }, { name: "Salesforce" }, { name: "Adobe" }] },
        { id: "infra", label: "Infra & dev tools", band: "₹₹",
          size: "Mid to large", work: "Technical users, CLI to GUI", pace: "Steady", fresher: "Medium",
          portfolio: "Comfort with technical topics", growth: "Niche, high demand later",
          companies: [{ name: "Nutanix" }, { name: "BrowserStack" }, { name: "Broadcom / VMware" }] }
      ]
    },
    {
      id: "startup", label: "Startups",
      summary: "Small teams, big ownership. Learn fast, risk is real.",
      notes: "You will be the only designer, sometimes the first. You learn product, research and visual craft in one year. Ask about funding runway before you join. Equity is a lottery ticket, not salary.",
      detailNotes: "Early stage pays less but teaches the most. Growth stage is the sweet spot for pay plus ownership.",
      children: [
        { id: "early", label: "Early stage (Seed to A)", band: "₹",
          size: "Tiny (5 to 50)", work: "Everything, end to end", pace: "Chaotic", fresher: "High",
          portfolio: "Range and speed over polish", growth: "Fast titles, unstructured",
          companies: [{ name: "AI-first seed startups" }, { name: "YC-backed Indian startups" }, { name: "Incubator cohorts" }] },
        { id: "growth", label: "Growth stage (B and beyond)", band: "₹₹",
          size: "Small to mid", work: "Building the design function", pace: "Fast", fresher: "Medium",
          portfolio: "Shipped work, ownership stories", growth: "Early leadership chances",
          companies: [{ name: "Razorpay", band: "₹₹₹" }, { name: "Cult.fit" }, { name: "Spinny" }, { name: "Licious" }] }
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
          companies: [{ name: "YUJ Designs" }, { name: "Lollypop" }, { name: "Think Design" }, { name: "Tenet" }, { name: "Fractal Ink" }, { name: "Red Baton" }] },
        { id: "product", label: "Product & brand studios", band: "₹",
          size: "Small (10 to 150)", work: "Physical + digital, brand, packaging", pace: "Project based", fresher: "High",
          portfolio: "Range across media, making skills", growth: "Become a multi-disciplinary lead",
          companies: [{ name: "Elephant Design" }, { name: "Moonraft (UST)", band: "₹₹" }] },
        { id: "global", label: "Global design firms", band: "₹₹",
          size: "Mid, global network", work: "Strategy + design", pace: "Project based", fresher: "Low",
          portfolio: "Thinking process, storytelling", growth: "Strategy and leadership exposure",
          companies: [{ name: "frog" }, { name: "Designit" }, { name: "Fjord legacy teams" }] }
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
          companies: [{ name: "Accenture Song" }, { name: "Deloitte Digital" }, { name: "McKinsey Design", band: "₹₹₹" }, { name: "EY Design Studio" }] },
        { id: "itsvc", label: "IT services design arms", band: "₹",
          size: "Massive (1 lakh+)", work: "Delivery for global clients", pace: "Steady", fresher: "High",
          portfolio: "Fundamentals, tool fluency", growth: "Slow unless you switch",
          companies: [{ name: "Infosys / WONGDOODY" }, { name: "TCS Interactive" }, { name: "Wipro" }, { name: "HCLTech" }] }
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
          companies: [{ name: "JPMorgan Chase" }, { name: "Goldman Sachs" }, { name: "American Express", band: "₹₹" }] },
        { id: "retail", label: "Retail & consumer brands", band: "₹₹",
          size: "Very large", work: "E-commerce, store and supply tools", pace: "Steady", fresher: "Medium",
          portfolio: "End to end flows, research", growth: "Good scope for ownership",
          companies: [{ name: "Walmart Global Tech", band: "₹₹₹" }, { name: "Target" }, { name: "Lowe's" }, { name: "Tesco" }] }
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
          companies: [{ name: "Microsoft Research India", band: "₹₹₹" }, { name: "Google Research" }, { name: "IIT / IISc labs", band: "₹" }] },
        { id: "govtech", label: "Govtech & social impact", band: "₹",
          size: "Small to mid", work: "Field research, inclusion, scale", pace: "Mission driven", fresher: "High",
          portfolio: "Field work, empathy, clarity", growth: "Rare, meaningful expertise",
          companies: [{ name: "eGov Foundation" }, { name: "EkStep" }, { name: "Samagra" }, { name: "NPCI", band: "₹₹" }] }
      ]
    }
  ]
});
