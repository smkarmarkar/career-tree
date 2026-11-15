/* Career Tree data file: Industrial Design, outside India.
   Researched Nov 2026. Each company has a verified design studio outside India (press, company sites, job listings).
   Company fields:
     loc     main design studio outside India (shown in the close-up)
     india   design presence in India, if any (adds an India LinkedIn search link)
     url     company website (the company name links to it in the side panel)
     li      LinkedIn company page, only where the address was seen in search results
     head    { name, role, src } only where press names the current design leader
     src     evidence note (not shown on screen)
   No salary bands: pay outside India is not comparable with Indian CTC and was not researched. */
(window.CAREER_TREES = window.CAREER_TREES || []).push({
  meta: {
    id: "id-global", discipline: "Industrial Design", region: "Outside India",
    title: "The Industrial Design Career Tree", subtitle: "Where a product designer can grow outside India", asOf: "Nov 2026",
    linkedinRole: "industrial designer",
    disclaimer: "Studios verified Nov 2026 (press, company sites, job listings). Heads of design shown only where press names them."
  },
  bands: [],
  attributes: [
    { key: "size", label: "Company size" }, { key: "work", label: "Nature of work" },
    { key: "portfolio", label: "Portfolio they expect" }
  ],
  branches: [
    { id: "g-auto", label: "Automotive & mobility",
      summary: "Global car and motorcycle studios, including Indian-owned ones abroad.",
      notes: "Two Indian groups design abroad: Tata owns Jaguar Land Rover, whose studio is in Gaydon, and Royal Enfield designs from its UK Technology Centre. TVS bought an Italian engineering firm in 2025 to set up a global design centre. Indian designers can join these through the Indian parent.",
      detailNotes: "European and Korean car studios hire through masters programmes and internships. A strong transportation portfolio matters more than the school name.",
      children: [
        { id: "g-cars", label: "Car makers", size: "Very large", work: "Exterior, interior, CMF, colour and trim", portfolio: "Sketching, digital modelling, form language",
          companies: [
            { name: "Jaguar Land Rover", url: "https://www.jlr.com", loc: "Gaydon, UK", src: "Gaydon design studio (JLR media). Owned by Tata Motors. Design chief Gerry McGovern left Mar 2026; successor not confirmed" },
            { name: "BMW Group", url: "https://www.bmwgroup.com", loc: "Munich, Germany", src: "BMW Group Design, Munich; Designworks studio in Santa Monica, USA (BMW Group press)" },
            { name: "Mercedes-Benz", url: "https://www.mercedes-benz.com", loc: "Sindelfingen, Germany", src: "Design headquarters Sindelfingen (Mercedes-Benz)" },
            { name: "Volvo Cars", url: "https://www.volvocars.com", loc: "Gothenburg, Sweden", head: { name: "Thomas Ingenlath", role: "Head of Design", src: "Returned Jan 2026 (Car Design News, WardsAuto)" }, src: "Design centre Gothenburg (Volvo Cars media)" },
            { name: "Hyundai", url: "https://www.hyundai.com", loc: "Namyang, South Korea", src: "Namyang design and R&D centre (Hyundai)" } ] },
        { id: "g-moto", label: "Motorcycle makers", size: "Large", work: "Styling, ergonomics, CMF, accessories", portfolio: "Motorcycle form, surfacing, sketching",
          companies: [
            { name: "Royal Enfield", url: "https://www.royalenfield.com", loc: "Bruntingthorpe, UK", india: "Chennai", src: "UK Technology Centre (Motorcycle News, Autocar Pro). Indian company" },
            { name: "TVS Motor", url: "https://www.tvsmotor.com", loc: "Italy", india: "Hosur", head: { name: "Timothy Prentice", role: "VP Design", src: "TVS Motor press release" }, src: "Global design centre in Italy after acquiring Engines Engineering S.p.A. (Autocar India)" },
            { name: "Norton", url: "https://www.nortonmotorcycles.com", loc: "UK", src: "Owned by TVS; Manx R won Red Dot Best of the Best (2026)" } ] }
      ] },
    { id: "g-devices", label: "Devices & electronics",
      summary: "The in-house design teams behind the world's best-known products.",
      notes: "These teams are small, senior and highly selective. Students usually get in through internships or after a masters abroad. Samsung is the exception with a real India link: Samsung Design Delhi is one of its global studios.",
      detailNotes: "Apple's design leadership has been changing in 2026, so no head is named here.",
      children: [
        { id: "g-dev", label: "Device & appliance makers", size: "Very large", work: "Consumer devices, appliances, CMF", portfolio: "Exceptional form, detailing, production awareness",
          companies: [
            { name: "Apple", url: "https://www.apple.com", loc: "Cupertino, USA", src: "Industrial Design group, Apple Park" },
            { name: "Samsung", url: "https://www.samsung.com", loc: "Seoul, South Korea", india: "Delhi", src: "Samsung Design Seoul office and Design Innovation Center, San Francisco (Samsung)" },
            { name: "Dyson", url: "https://www.dyson.com", loc: "Malmesbury, UK", li: "https://www.linkedin.com/company/dyson", src: "Industrial Designer and Lead Industrial Designer roles (Dyson careers)" },
            { name: "Philips", url: "https://www.philips.com", loc: "Eindhoven, Netherlands", src: "Philips Design headquarters, Eindhoven" } ] }
      ] },
    { id: "g-life", label: "Furniture, lifestyle & sport",
      summary: "Furniture, home and sports brands with large in-house design teams.",
      notes: "IKEA is the best story for students: Akanksha Deo Sharma, an Indian designer who studied at NIFT, designs for IKEA and works from Gurugram.",
      detailNotes: "Sports brands hire many footwear and product designers. Furniture makers value making skills and material knowledge.",
      children: [
        { id: "g-furn", label: "Furniture & home", size: "Very large", work: "Furniture, home products, materials", portfolio: "Making, materials, systems thinking",
          companies: [
            { name: "IKEA", url: "https://www.ikea.com", loc: "Älmhult, Sweden", india: "Gurugram", src: "Designer Akanksha Deo Sharma works for IKEA in Gurugram (Wikipedia, IKEA Museum)" },
            { name: "MillerKnoll", url: "https://www.millerknoll.com", loc: "Zeeland, Michigan, USA", src: "Headquarters Zeeland, Michigan (MillerKnoll)" } ] },
        { id: "g-sport", label: "Sport & footwear", size: "Very large", work: "Footwear, apparel equipment, innovation", portfolio: "Footwear sketching, materials, storytelling",
          companies: [
            { name: "Nike", url: "https://www.nike.com", loc: "Beaverton, Oregon, USA", src: "World Headquarters design spaces (Nike)" },
            { name: "adidas", url: "https://www.adidas.com", loc: "Herzogenaurach, Germany", src: "Global headquarters (adidas)" } ] }
      ] },
    { id: "g-studios", label: "Design studios",
      summary: "World-famous consultancies. Small teams, big names, intense competition.",
      notes: "These studios shape the profession's reputation. They hire few people and favour portfolios with a clear point of view. frog also has a studio in Bengaluru, which is a way in from India.",
      detailNotes: "Layer and Map Project Office are both in London. IDEO and fuseproject are in the San Francisco Bay Area. Teague is in Seattle.",
      children: [
        { id: "g-us", label: "US studios", size: "Small to mid", work: "Product, experience and brand", portfolio: "Point of view, range, storytelling",
          companies: [
            { name: "IDEO", url: "https://www.ideo.com", loc: "San Francisco Bay Area, USA", head: { name: "Mike Peng", role: "CEO", src: "Appointed Apr 2025 (Business Wire, Fortune)" }, src: "IDEO studios in the Bay Area and London" },
            { name: "frog", url: "https://www.frog.co", loc: "San Francisco, USA", india: "Bengaluru", src: "frog Bengaluru studio (frog.co)" },
            { name: "fuseproject", url: "https://www.fuseproject.com", loc: "San Francisco, USA", head: { name: "Yves Béhar", role: "Founder", src: "Cooper Hewitt, Wikipedia" }, src: "San Francisco studio" },
            { name: "Teague", url: "https://www.teague.com", loc: "Seattle, USA", li: "https://www.linkedin.com/company/teague", src: "Seattle (IDSA directory, Wikipedia)" } ] },
        { id: "g-uk", label: "London studios", size: "Small", work: "Product, furniture, brand", portfolio: "Craft, clarity, strong concepts",
          companies: [
            { name: "Layer", url: "https://www.layerdesign.com", loc: "London, UK", head: { name: "Benjamin Hubert", role: "Founder", src: "Wikipedia" }, src: "London studio (Domus, Wikipedia)" },
            { name: "Map Project Office", url: "https://www.mapprojectoffice.com", loc: "London, UK", src: "London; part of AKQA (Wikipedia, AKQA)" } ] }
      ] }
  ]
});
