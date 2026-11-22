/* Career Tree data file: Industrial Design, India.
   Researched Nov 2026. Every company below has evidence of industrial/product design work in India:
   an in-house design studio or design roles in India (press, company site, job listings), and/or
   NID's Annual Report 2024-25 (placement participants, Phase 1 Nov 2024 / Phase 2 May 2024,
   and industry-sponsored graduation projects in NID's industrial design disciplines).
   The "src" field on each company records that evidence. It is not shown on screen.
   loc = design studio city in India (shown in the close-up). abroad = design studio outside India, if any.
   head = { name, role, src } only where press names the current design leader.
   what = what the company makes, shown under its name in the panel.
   Salary bands are NOT researched yet, so sub-branches carry no band. */
(window.CAREER_TREES = window.CAREER_TREES || []).push({
  meta: {
    id: "id-india", discipline: "Industrial Design", region: "India", linkedinRole: "industrial designer", title: "The Industrial Design Career Tree",
    subtitle: "Where a product designer can grow in India", region: "India", asOf: "Nov 2026",
    disclaimer: "Companies verified for design work in India (NID 2024-25 records, press, job listings)."
  },
  bands: [],  // salary bands not researched yet: no legend, all leaves the same size
  attributes: [
    { key: "size", label: "Company size" }, { key: "work", label: "Nature of work" },
    { key: "portfolio", label: "Portfolio they expect" }, { key: "evidence", label: "How we know" }
  ],
  branches: [
    { id: "auto", label: "Automotive & mobility",
      summary: "Cars, two-wheelers and EVs, designed in Indian studios.",
      notes: "Indian vehicle design has moved home. Mahindra opened a new design studio in Mumbai in 2025, Renault opened its largest design centre outside Europe in Chennai the same year, and Hero, TVS and Bajaj all run in-house studios. Transportation design students are now hired, not just interned.",
      detailNotes: "Car studios want exterior, interior and CMF specialists. Two-wheeler and EV makers want designers who can also talk packaging and engineering.",
      children: [
        { id: "cars", label: "Car makers",
          size: "Very large", work: "Exterior, interior, CMF, clay and digital modelling", portfolio: "Strong sketching, form language, Alias or Blender",
          evidence: "In-house design studios in India",
          companies: [
            { name: "Tata Motors", url: "https://cars.tatamotors.com", loc: "Pune", src: "Pune design studio (Autocar India, Mobility Outlook). Listed company renamed Tata Motors Passenger Vehicles Ltd in Oct 2025; cars.tatamotors.com is its official site (NSE filing)" },
            { name: "Mahindra & Mahindra", logo: "logos/mahindra.svg", what: "SUVs, EVs and tractors", url: "https://www.mahindra.com", loc: "Mumbai", head: { name: "Pratap Bose", role: "Chief Design Officer", src: "Autocar Professional; Mahindra press" }, src: "Mahindra India Design Studio, Mumbai, opened Apr 2025 (Mahindra press release)" },
            { name: "Maruti Suzuki", url: "https://www.marutisuzuki.com", loc: "Rohtak", src: "In-house design (ThePrint); NID placements Phase 1 and 2" },
            { name: "Renault", url: "https://www.renaultgroup.com", loc: "Chennai", src: "Renault Design Centre Chennai, opened 2025 (Renault Group)" } ] },
        { id: "twowheel", label: "Two-wheeler makers",
          size: "Very large", work: "Styling, ergonomics, CMF, accessories", portfolio: "Sketching, surfacing, motorcycle form",
          evidence: "In-house studios; NID placements and sponsored projects",
          companies: [
            { name: "Hero MotoCorp", url: "https://www.heromotocorp.com", loc: "Jaipur", src: "Centre of Innovation and Technology, Jaipur; Industrial Designer roles; NID placements Phase 1 and 2; NID TAD and Product Design project sponsor" },
            { name: "TVS Motor", what: "Motorcycles, scooters and EVs", url: "https://www.tvsmotor.com", loc: "Hosur", abroad: "Italy", head: { name: "Timothy Prentice", role: "VP Design", src: "TVS Motor press release" }, src: "Design team led by VP Design, Hosur; NID TAD, Lifestyle Accessory and Furniture project sponsor" },
            { name: "Bajaj Auto", url: "https://www.bajajauto.com", loc: "Pune", src: "Bajaj Auto Technology in-house design studio, Pune (India's Best Design Awards); NID placements Phase 1" } ] },
        { id: "ev", label: "EV makers",
          size: "Mid to large", work: "Vehicle form, CMF, packaging, accessories", portfolio: "Form plus engineering awareness",
          evidence: "In-house design teams in India",
          companies: [
            { name: "Ather Energy", url: "https://www.atherenergy.com", loc: "Bengaluru", src: "In-house design studio (India's Best Design Awards); NID placements Phase 1" },
            { name: "Ola Electric", what: "Electric scooters and motorcycles", url: "https://www.olaelectric.com", loc: "Bengaluru", src: "Industrial Designer roles in Bengaluru; NID placements Phase 1 (listed as Ola)" },
            { name: "Matter", url: "https://www.matter.in", loc: "Pune", src: "Design centre in Pune (Autocar Professional); NID TAD and Lifestyle Accessory project sponsor" },
            { name: "Ultraviolette", url: "https://www.ultraviolette.com", loc: "Bengaluru", src: "Design and product development team, Bengaluru" } ] }
      ] },
    { id: "devices", label: "Appliances & electronics",
      summary: "Home appliances, devices and audio, from global giants to Indian D2C brands.",
      notes: "Two very different worlds. Samsung, Whirlpool and Godrej run structured design centres in India with long product cycles. D2C brands like boAt and Noise ship new products every few months with small in-house teams.",
      detailNotes: "Appliance makers came to NID placements in both 2024 drives and sponsored Product Design graduation projects. That is the clearest hiring signal in this whole tree.",
      children: [
        { id: "appliances", label: "Appliance & device makers",
          size: "Very large", work: "Appliances, devices, CMF, user research", portfolio: "Research to production, DFM, CMF",
          evidence: "India design centres; NID placements and sponsored projects",
          companies: [
            { name: "Samsung Design Delhi", url: "https://design.samsung.com", loc: "Delhi", abroad: "Seoul, South Korea", src: "Samsung's India design studio (Samsung Newsroom); NID placements Phase 1" },
            { name: "Whirlpool", url: "https://www.whirlpoolindia.com", src: "Industrial Designer roles in India; NID placements Phase 1; two NID M.Des Product Design project sponsorships" },
            { name: "Godrej", url: "https://www.godrej.com", loc: "Mumbai", src: "Godrej Design Lab (Godrej Enterprises); NID placements Phase 1 (Godrej & Boyce)" },
            { name: "IFB", url: "https://www.ifbappliances.com", src: "NID placements Phase 1 and 2; NID B.Des Product Design project sponsor" },
            { name: "Crompton", url: "https://crompton.co.in", loc: "Mumbai", src: "R&D centre, Mumbai; NID Product Design and Universal Design project sponsor" } ] },
        { id: "d2c", label: "D2C hardware brands",
          size: "Small to mid", work: "Fast product cycles, audio, wearables, accessories", portfolio: "Rendering, CMF, DFM basics",
          evidence: "In-house industrial design teams",
          companies: [
            { name: "boAt", url: "https://www.boat-lifestyle.com", loc: "New Delhi", src: "In-house design (Core77, Autodesk case study)" },
            { name: "Noise", url: "https://www.gonoise.com", loc: "Gurugram", src: "Industrial Design lead role" },
            { name: "DailyObjects", url: "https://www.dailyobjects.com", loc: "New Delhi", src: "Design-led accessories brand, Delhi (BW Disrupt). A brand, not a studio" } ] }
      ] },
    { id: "lifestyle", label: "Lifestyle, home & toys",
      summary: "Watches, jewellery, furniture and toys, where craft and material matter most.",
      notes: "This is where NID's Lifestyle Accessory, Furniture and Toy & Game graduates go. Titan stands out: it came to both NID placement drives in 2024 and sponsored graduation projects.",
      detailNotes: "Smaller companies here, but closest to making things by hand. Material and craft knowledge matters more than software.",
      children: [
        { id: "accessories", label: "Lifestyle & accessories",
          size: "Very large to small", work: "Watches, eyewear, jewellery, home objects", portfolio: "Detailing, materials, trend sense",
          evidence: "NID placements and sponsored projects",
          companies: [
            { name: "Titan", what: "Watches, eyecare (Titan EyePlus) and jewellery", url: "https://www.titancompany.in", loc: "Bengaluru", src: "Central in-house design team of about 75 designing jewellery, watches and eyewear (Quartz); in-house eyewear design unit with local frame manufacturing (IBEF); NID placements Phase 1 and 2; two NID Lifestyle Accessory project sponsorships" },
            { name: "Nicobar", url: "https://www.nicobar.com", src: "NID Ceramic & Glass and Lifestyle Accessory project sponsor" } ] },
        { id: "furniture", label: "Furniture",
          size: "Small to mid", work: "Furniture and home products", portfolio: "Making, material knowledge, joinery",
          evidence: "NID placements and sponsored projects",
          companies: [
            { name: "Tianu Furniture", src: "NID placements Phase 1; NID M.Des Furniture project sponsor" } ] },
        { id: "toys", label: "Toys & learning",
          size: "Small", work: "Toys, games, learning kits", portfolio: "Play research, prototyping, safety",
          evidence: "NID placements and sponsored projects",
          companies: [
            { name: "Como Toys", src: "NID placements Phase 2; NID M.Des Ceramic & Glass project sponsor" },
            { name: "Skoodle", url: "https://www.skoodleplay.com", src: "Stone Sapphire India; NID placements Phase 2; NID Toy & Game project sponsor" } ] }
      ] },
    { id: "studios", label: "Product design studios",
      summary: "Consultancies that design products for many clients.",
      notes: "The best place to build range fast. India's independent industrial design studios now win global awards and design for overseas founders.",
      detailNotes: "Many of India's best-known studios were started by NID alumni: Elephant in 1989, Desmania in 1993, Foley Designs and Studio ABD by former Titan designers. Analogy was named India's Best Design Studio in 2023. Tata Elxsi is the large-scale option, closer to engineering services.",
      children: [
        { id: "pds", label: "NID alumni studios",
          size: "Small to mid", work: "Concept to production for many clients", portfolio: "Range, model making, storytelling",
          evidence: "Founded by NID alumni (studio sites, press, NID records)",
          companies: [
            { name: "Foley Designs", what: "Michael Foley's studio: products, packaging, spaces, identity", url: "https://www.foleydesigns.com", loc: "Bengaluru", head: { name: "Michael Foley", role: "Founder", src: "Asian Paints Beautiful Homes; FactorDaily" }, src: "Founded 2006 by Michael Foley (NID 1994, ex-Titan product designer); designed the 2010 Commonwealth Games baton and Titan EyePlus identity and stores; CII Design Excellence Award 2011" },
            { name: "Studio ABD", what: "Products, branding and packaging", url: "https://studioabd.in", loc: "Bengaluru", head: { name: "Abhijit Bansod", role: "Founder", src: "YourStory" }, src: "Founded 2008 by Abhijit Bansod (NID postgraduate, about 10 years in Titan's design team); Red Dot 2010 (YourStory, DesignWanted)" },
            { name: "Elephant Design", what: "Strategy, product and brand design", url: "https://www.elephantdesign.com", loc: "Pune", src: "Founded 1989 by NID Ahmedabad graduates Ashwini Deshpande, Ashish Deshpande and Partho Guha (Entrepreneur India, Wikipedia)" },
            { name: "Desmania Design", what: "Industrial and automotive design", url: "https://www.desmania.com", loc: "Gurugram", head: { name: "Anuj Prasad", role: "Founder and CEO", src: "UPES advisory board; Dexigner" }, src: "Co-founded 1993 by Anuj Prasad (M.Des Product Design, NID 1993); studio in Manesar, Gurugram; NID placements Phase 1" },
            { name: "Paul Studio", what: "Consumer products and toys", url: "https://paulstudio.in", loc: "Pune", src: "Founded 2005 by Paul Sandip (NID alumnus, two Red Dot awards) and Suhasini Paul (NID postgraduate, toy designer) (Clutch, WEAVE 2022, PrintWeek). Pune per Clutch; some profiles list New Delhi" },
            { name: "Lemon Design", what: "Branding, packaging, spaces and products", url: "https://lemondesign.co.in", loc: "Pune", src: "Founded 2001 by NID graduates Dipendra Baoni and Shalini Singh; NID furniture graduate Wasim Khan joined as co-founder (D'source)" },
            { name: "Onio Design", what: "Design research and product development", url: "https://www.oniodesign.com", loc: "Pune", src: "Founded 1997 by IIT Bombay and NID alumni (Village and IndiaMART directory listings; not confirmed on the studio's own site)" } ] },
        { id: "indep", label: "Other Indian studios",
          size: "Small", work: "Hardware and consumer product design", portfolio: "Making, prototyping, range",
          evidence: "Studio websites and design awards",
          companies: [
            { name: "Tata Elxsi", url: "https://www.tataelxsi.com", loc: "Bengaluru", src: "Industrial and product design services; NID TAD project sponsor" },
            { name: "Analogy", url: "https://www.analogydesign.co", loc: "Bengaluru", src: "Industrial design studio, Bengaluru; India's Best Design Studio 2023 (DesignIndia)" },
            { name: "Icarus", url: "https://www.icarus.co.in", loc: "Bengaluru", src: "Icarus Design Pvt Ltd, Bengaluru: industrial design and branding" },
            { name: "Every Day Things (EDT)", src: "UNCONFIRMED. Added by Sandeep. Research found 'Everyday Design and Technology', a home appliance brand. Check which company is meant" } ] }
      ] }
  ]
});
