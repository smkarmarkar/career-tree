/* Career Tree data file: Industrial Design, India. PLACEHOLDER to prove the data swap. Not researched yet. */
(window.CAREER_TREES = window.CAREER_TREES || []).push({
  meta: {
    id: "id-india", discipline: "Industrial Design", title: "The Industrial Design Career Tree",
    subtitle: "Sample data, not researched", region: "India", asOf: "Oct 2026",
    disclaimer: "Placeholder data to test the renderer. Do not present."
  },
  bands: [
    { id: "₹", label: "Modest", range: "₹4 to 7 LPA" },
    { id: "₹₹", label: "Good", range: "₹7 to 12 LPA" },
    { id: "₹₹₹", label: "High", range: "₹12 to 25 LPA" }
  ],
  attributes: [
    { key: "size", label: "Company size" }, { key: "work", label: "Nature of work" },
    { key: "fresher", label: "Fresher friendly" }, { key: "portfolio", label: "Portfolio they expect" }
  ],
  branches: [
    { id: "auto", label: "Automotive & EV", summary: "Vehicles, interiors, CMF.", notes: "Sample.",
      children: [
        { id: "ev", label: "EV makers", band: "₹₹", size: "Mid to large", work: "Form, CMF, ergonomics", fresher: "Medium", portfolio: "Sketching, CAD, clay",
          companies: [{ name: "Ather Energy" }, { name: "Ola Electric" }, { name: "Ultraviolette" }] },
        { id: "oem", label: "Auto OEMs", band: "₹₹₹", size: "Very large", work: "Exterior, interior", fresher: "Low", portfolio: "Strong form language",
          companies: [{ name: "Tata Motors" }, { name: "Mahindra" }, { name: "Maruti Suzuki" }] }
      ] },
    { id: "consumer", label: "Consumer electronics", summary: "Wearables, audio, appliances.", notes: "Sample.",
      children: [
        { id: "d2c", label: "D2C hardware", band: "₹₹", size: "Mid", work: "Fast product cycles", fresher: "High", portfolio: "Rendering, DFM basics",
          companies: [{ name: "boAt" }, { name: "Noise" }, { name: "Atomberg" }] },
        { id: "lifestyle", label: "Lifestyle & wearables", band: "₹₹", size: "Very large", work: "Watches, eyewear, jewellery, CMF", fresher: "Medium", portfolio: "Form, detailing, materials",
          companies: [{ name: "Titan" }] }
      ] },
    { id: "studios", label: "Product design studios", summary: "Client work across categories.", notes: "Sample.",
      children: [
        { id: "pds", label: "Indian ID studios", band: "₹", size: "Small", work: "Concept to production", fresher: "High", portfolio: "Range, model making",
          companies: [{ name: "Studio ABD" }, { name: "Tata Elxsi" }, { name: "Elephant Design" }] },
        { id: "indep", label: "Independent studios", band: "₹", size: "Small", work: "Objects, furniture, lifestyle products", fresher: "High", portfolio: "Making, prototyping, range",
          companies: [{ name: "DailyObjects" }, { name: "Every Day Things (EDT)" }, { name: "Analogy" }, { name: "Icarus" }] }
      ] }
  ]
});
