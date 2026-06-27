export const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Floor Systems", href: "/#systems" },
  { label: "Design Center", href: "/design-center" },
  { label: "Visualizer", href: "/visualizer" },
  { label: "Resources", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/#proof" },
  { label: "Contact", href: "/contact" }
];

export const heroStats = [
  ["70+", "Locations Nationwide"],
  ["Monthly", "Crew Training Program"],
  ["XPS", "Standards Nationwide"],
  ["Faster", "Digital Estimate"],
  ["Fast", "Response No Phone Tag Ever"]
];

export const serviceCards = [
  {
    title: "Top Flake",
    subtitle: "Floor Systems",
    body: "Decorative, slip-resistant, and built to last.",
    link: "View Flake Colors",
    type: "flake"
  },
  {
    title: "Metallic",
    subtitle: "Epoxy Floors",
    body: "High-gloss, custom metallic finishes.",
    link: "Explore Metallics",
    type: "metallic"
  },
  {
    title: "Solid Color",
    subtitle: "Epoxy Floors",
    body: "Clean, modern, seamless looks.",
    link: "View Solid Colors",
    type: "solid"
  },
  {
    title: "Design",
    subtitle: "Center",
    body: "Visualize your floor before you buy.",
    link: "Start Designing",
    type: "fan"
  }
];

export const bidSteps = [
  ["01", "Enter Info", "Takes 60 seconds"],
  ["02", "Prefill Estimate", "We gather project details"],
  ["03", "Pick Finish", "Select system and color"],
  ["04", "Visualizer", "See your floor direction"],
  ["05", "Upload Photos", "Your photos. Our system."],
  ["06", "Submit Bid", "Get your 15% discount"],
  ["07", "Dashboard", "Track every step"]
];

export const proofBlocks = [
  ["★★★★★", "5-Star Rated", "Consistently rated high by customers"],
  ["10,000+", "Projects Completed", "Residential, commercial, industrial"],
  ["Licensed", "& Insured", "Professional crews you can trust"],
  ["70+", "Locations Nationwide", "National systems. Local teams."],
  ["XPS", "Backed Standards", "Training, products, and quality"],
  ["Fast", "Response", "No phone tag. Ever."]
];

export const xpsProducts = [
  {
    name: "Epoxy Coating for Floor - Rockhard USA Clear 3 Gal. Kit",
    category: "Epoxy",
    image: "/images/rockhard-epoxy.png",
    detail: "Rockhard epoxy base system for premium garage, commercial, and industrial floors."
  },
  {
    name: "Flexible Epoxy Primer - XPS ECTM 3 Gal. Kit",
    category: "Primer",
    image: "/images/xps-ectm.webp",
    detail: "Primer and substrate-prep system for prepared concrete."
  },
  {
    name: "Poly Floor Coating Kit - XPS Medium Cure 2 Gal. Kit",
    category: "Polyaspartic",
    image: "/images/xps-poly-products.png",
    detail: "Low VOC polyaspartic coating option for durable topcoat performance."
  },
  {
    name: "Epoxy Floor Polymer Flakes - Torginol Collection",
    category: "Flake",
    image: "/images/xps-flake-boxes.png",
    detail: "Decorative broadcast flake system for slip-resistant finished floors."
  },
  {
    name: "Concrete Floor Polisher - Concrete Genie / Genie X550",
    category: "Equipment",
    image: "/images/concrete-grinder.webp",
    detail: "Surface preparation and polishing equipment for certified install crews."
  },
  {
    name: "Metallic Epoxy Flooring Pigments - Powder",
    category: "Pigment",
    image: "/images/chart-metallic-colors.webp",
    detail: "Metallic color family for custom high-gloss epoxy floors."
  }
];

export const colorCharts = [
  {
    name: "Solid Color Epoxy Base Coats",
    image: "/images/chart-solid-color-base-coats.webp",
    type: "solid"
  },
  {
    name: "Top 12 Epoxy Flake Colors",
    image: "/images/chart-top-12-flake.png",
    type: "flake"
  },
  {
    name: "Approved Top Flake Colors",
    image: "/images/chart-approved-flake.webp",
    type: "flake"
  },
  {
    name: "Top Metallic Colors",
    image: "/images/chart-metallic-colors.webp",
    type: "metallic"
  },
  {
    name: "Top Glitter Additive Colors",
    image: "/images/chart-glitter-additives.webp",
    type: "glitter"
  },
  {
    name: "Concrete Dye & Stain Colors",
    image: "/images/chart-concrete-dye-stain.webp",
    type: "stain"
  }
];

export const selectedSystem = [
  ["Primer", "Flexible Epoxy Primer - XPS ECTM 3 Gal. Kit"],
  ["Base", "Epoxy Coating for Floor - Rockhard USA Clear 3 Gal. Kit"],
  ["Broadcast", "Epoxy Floor Polymer Flakes - Torginol Collection"],
  ["Topcoat", "Polyaspartic Floor Coating - Rockhard Garage Poly 2 Gal. Kit"],
  ["Option", "Metallic Epoxy Flooring Pigments - Powder"]
];

export const sampleProject = {
  id: "NEP-4826",
  customer: "John Smith",
  status: "Proposal Review",
  progress: 62,
  bidDate: "May 28, 2026",
  total: "$3,480",
  address: "Scottsdale, AZ",
  finish: "Torginol Collection / Domino Blend",
  squareFeet: 740,
  nextStep: "Approve finish direction in the visualizer"
};

export const timeline = [
  ["complete", "Digital bid submitted"],
  ["complete", "Photos uploaded"],
  ["complete", "Finish selected"],
  ["active", "Proposal review"],
  ["pending", "Contract & deposit"],
  ["pending", "Install scheduled"],
  ["pending", "Final walkthrough"]
];

export const dashboardMetrics = {
  admin: [
    ["38", "New Leads"],
    ["14", "Proposal Queue"],
    ["92%", "SMS Response"],
    ["7", "Urgent Items"]
  ],
  owner: [
    ["$4.25M", "Total Revenue"],
    ["1,248", "Projects"],
    ["34.5%", "Conversion"],
    ["18m", "Response Time"]
  ],
  crew: [
    ["18", "Assigned Jobs"],
    ["12", "In Progress"],
    ["6", "Ready Today"],
    ["5", "Signatures"]
  ],
  pm: [
    ["26", "Active Projects"],
    ["8", "Ready to Schedule"],
    ["4", "Blocked"],
    ["6", "Crews Live"]
  ]
};

export const pipelineRows = [
  ["Digital bid submitted", "Complete"],
  ["Photos uploaded", "Complete"],
  ["Color approval pending", "Open"],
  ["Proposal ready", "Review"],
  ["Crew scheduled", "Pending"],
  ["Final walkthrough", "Pending"]
];

export const uploads = [
  { id: "up_01", label: "Existing floor", status: "received" },
  { id: "up_02", label: "Dream finish", status: "needed" },
  { id: "up_03", label: "Cracks / damage", status: "needed" }
];

export const apiNotice =
  "Sandbox response only. CRM, SMS, Supabase, payments, and production automations are approval-gated.";
