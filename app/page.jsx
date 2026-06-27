const stats = [
  ["70+", "Locations Nationwide", "National XPS-backed installer support network."],
  ["Monthly", "Crew Training Program", "Ongoing installer education and product updates."],
  ["30+ yrs", "Manufacturer Experience", "Built on proven epoxy and concrete systems."],
  ["Fast", "Digital Estimate Path", "Photos, finish direction, and scope in one guided flow."],
  ["No Tag", "Fast Response", "A clearer next step without endless phone back-and-forth."],
];

const floorSystems = [
  {
    title: "Top Flake Systems",
    tag: "Most requested",
    copy: "High-traction garage floors with broadcast flake depth and clean showroom contrast.",
    colors: ["#d9d6cb", "#777a76", "#f1eee4"],
  },
  {
    title: "Metallic Systems",
    tag: "Showroom look",
    copy: "Layered movement for retail, interiors, luxury garages, and feature spaces.",
    colors: ["#24487f", "#7e4c2a", "#caa873"],
  },
  {
    title: "Solid Color Floors",
    tag: "Clean utility",
    copy: "Simple, durable base coats for workshops, storage, commercial, and service areas.",
    colors: ["#e6e6e1", "#aeb7b6", "#cdd7d2"],
  },
  {
    title: "Design Center",
    tag: "Choose first",
    copy: "Browse finish direction before you request a bid so the estimate starts smarter.",
    colors: ["#f0c15a", "#242424", "#8e8a78"],
  },
];

const processSteps = [
  ["01", "Open Digital Bid", "Start at nationalepoxypros.com and choose your project type."],
  ["02", "Pick Finish Direction", "Browse flake, metallic, quartz, solid, and custom looks."],
  ["03", "Upload Floor Photos", "Show the actual concrete, coatings, cracks, and access points."],
  ["04", "Add Project Details", "Size, timing, use case, location, and must-have finish goals."],
  ["05", "Review Smart Scope", "Get a clearer install path before an appointment is booked."],
  ["06", "Confirm Next Step", "Move from curiosity to a real bid conversation with less friction."],
  ["07", "Install With Confidence", "Work with XPS-backed standards, products, and training support."],
];

const trustItems = [
  ["XPS", "Powered by Xtreme Polishing Systems"],
  ["70+", "Locations nationwide"],
  ["30+", "Years of manufacturer experience"],
  ["Certified", "Training and product support"],
];

export default function Home() {
  return (
    <>
      <header className="utilityBar" aria-label="National Epoxy Pros trust bar">
        <span>Powered by Xtreme Polishing Systems</span>
        <span>America&apos;s #1 Epoxy Super Store</span>
        <span>70+ Locations Nationwide</span>
        <span>Certified Trainers</span>
        <span>Manufacturers with 30+ Years of Experience</span>
      </header>

      <nav className="mainNav" aria-label="Primary navigation">
        <a className="siteBrand" href="/">
          <span className="brandMark" aria-hidden="true">
            NEP
          </span>
          <span>
            <b>NATIONAL</b>
            <small>EPOXY PROS</small>
          </span>
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#systems">Floor Systems</a>
          <a href="/design-center">Design Center</a>
          <a href="#process">Visualizer</a>
          <a href="#trust">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navActions">
          <a className="phoneLink" href="tel:+14808008246">
            (480) 800-8246
          </a>
          <a className="goldButton" href="#digital-bid">
            Start My Digital Bid
          </a>
        </div>
      </nav>

      <main>
        <section className="heroShell">
          <div className="heroScene" aria-hidden="true">
            <div className="garageLines" />
            <div className="floorGlow" />
            <div className="carSilhouette" />
          </div>

          <div className="heroContent">
            <p className="eyebrow">National Epoxy Pros</p>
            <h1>
              PREMIUM FLOORS.
              <span> BUILT TO LAST.</span>
              BUILT BY NATIONAL.
            </h1>
            <p className="heroLead">
              Transform your garage, showroom, patio, or commercial concrete with XPS-backed epoxy
              systems and a faster digital bid experience at nationalepoxypros.com.
            </p>

            <ul className="heroChecks" aria-label="Digital bid benefits">
              <li>
                <span className="checkMark" aria-hidden="true" />
                Choose flake, metallic, solid, quartz, or custom floor direction.
              </li>
              <li>
                <span className="checkMark" aria-hidden="true" />
                Upload floor photos so the first estimate starts with real context.
              </li>
              <li>
                <span className="checkMark" aria-hidden="true" />
                Get a clear next step without quote confusion or phone tag.
              </li>
            </ul>

            <div className="heroButtons">
              <a className="goldButton large" href="#digital-bid">
                Start My Digital Bid
              </a>
              <a className="darkButton large" href="/design-center">
                View Floor Options
              </a>
            </div>
          </div>
        </section>

        <section className="statsPanel" aria-label="Trust metrics">
          {stats.map(([value, label, copy]) => (
            <article key={label}>
              <span className="metricIcon" aria-hidden="true" />
              <b>{value}</b>
              <h2>{label}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </section>

        <section id="digital-bid" className="promoStrip">
          <strong>GET 15% OFF YOUR PROJECT WITH OUR DIGITAL BID SYSTEM</strong>
          <span>Fast - Easy - Accurate</span>
          <a href="#contact">Claim Offer</a>
        </section>

        <section id="systems" className="systemsSection">
          <div className="beforeAfterCard">
            <div className="beforePane">
              <span>Before</span>
            </div>
            <div className="afterPane">
              <span>After</span>
            </div>
            <div className="sliderHandle" aria-hidden="true" />
            <div className="beforeAfterCopy">
              <p className="eyebrow">Before / After</p>
              <h2>See the transformation before the appointment.</h2>
              <p>
                The homepage sells the visual result first, then routes serious visitors into the
                digital bid path.
              </p>
            </div>
          </div>

          <div id="services" className="systemCards">
            {floorSystems.map((system) => (
              <article className="systemCard" key={system.title}>
                <div className="cardImage" aria-hidden="true">
                  {system.colors.map((color) => (
                    <i key={color} style={{ background: color }} />
                  ))}
                </div>
                <span>{system.tag}</span>
                <h2>{system.title}</h2>
                <p>{system.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="processSection">
          <div className="sectionHeader">
            <p className="eyebrow">7-step digital bid process</p>
            <h2>From floor idea to install-ready conversation.</h2>
          </div>
          <div className="processGrid">
            {processSteps.map(([step, title, copy]) => (
              <article key={step}>
                <b>{step}</b>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="trust" className="trustSection">
          <div>
            <p className="eyebrow">Trusted national epoxy platform</p>
            <h2>Built on product knowledge, installer training, and national reach.</h2>
            <p>
              National Epoxy Pros positions the brand as a premium, XPS-backed floor system with a
              polished bid workflow, strong visual proof, and a clear conversion path.
            </p>
          </div>
          <div className="trustGrid">
            {trustItems.map(([value, label]) => (
              <article key={label}>
                <b>{value}</b>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="siteFooter">
        <div className="siteBrand">
          <span className="brandMark" aria-hidden="true">
            NEP
          </span>
          <span>
            <b>NATIONAL</b>
            <small>EPOXY PROS</small>
          </span>
        </div>
        <p>nationalepoxypros.com</p>
        <a className="goldButton" href="#digital-bid">
          Start My Digital Bid
        </a>
      </footer>
    </>
  );
}
