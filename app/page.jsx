const utilityItems = [
  "Powered By Xtreme Polishing Systems",
  "America's #1 Epoxy Super Store",
  "70+ Locations Nationwide",
  "Certified Trainers",
  "Manufacturers With 30+ Years Of Experience",
];

const navItems = [
  "Services",
  "Floor Systems",
  "Design Center",
  "Visualizer",
  "Resources",
  "About",
  "Reviews",
  "Contact",
];

const stats = [
  ["pin", "70+", "Locations", "Nationwide"],
  ["crew", "Monthly", "Crew Training", "Program"],
  ["shield", "Built On", "XPS Standards", "Nationwide"],
  ["bolt", "Faster", "Digital", "Estimate"],
  ["check", "Fast Response", "No Phone Tag", "Ever"],
];

const products = [
  ["flake", "Top Flake", "Floor Systems", "Decorative, slip-resistant, and built to last.", "View Flake Colors"],
  ["metallic", "Metallic", "Epoxy Floors", "High-gloss, custom metallic finishes.", "Explore Metallics"],
  ["solid", "Solid Color", "Epoxy Floors", "Clean, modern, and seamless looks.", "View Solid Colors"],
  ["design", "Design", "Center", "Visualize your floor before you buy.", "Start Designing"],
];

const process = [
  ["form", "01", "Enter Info", "Takes 60 seconds"],
  ["person", "02", "Prefill Estimate", "We gather your project details"],
  ["palette", "03", "Pick Finish", "Select system and color"],
  ["screen", "04", "Visualizer", "See your floor direction"],
  ["upload", "05", "Upload Photos", "Your photos. Our system."],
  ["approve", "06", "Submit Bid", "Get your 15% discount"],
  ["dashboard", "07", "Dashboard", "Track every step in one place"],
];

const trust = [
  ["stars", "5-Star Rated", "Consistently rated high by customers"],
  ["crew", "10,000+ Projects", "Completed"],
  ["shield", "Licensed & Insured", "Professional crews you can trust"],
  ["chart", "70+ Locations", "Nationwide"],
  ["badge", "Backed By XPS Standards", "National systems. Local teams."],
  ["clock", "Fast Response", "No phone tag. We respect your time"],
];

function Icon({ type }) {
  return <span className={`lineIcon ${type}`} aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <header className="utilityBar" aria-label="National Epoxy Pros trust bar">
        {utilityItems.map((item) => (
          <span key={item}>
            <Icon type="utility" />
            {item}
          </span>
        ))}
      </header>

      <nav className="mainNav" aria-label="Primary navigation">
        <a className="brandLockup" href="/" aria-label="National Epoxy Pros home">
          <span className="brandMark" aria-hidden="true">
            NEP
          </span>
          <span>
            <b>National</b>
            <small>Epoxy Pros</small>
          </span>
        </a>

        <div className="navLinks">
          {navItems.map((item) => (
            <a key={item} href={item === "Design Center" ? "/design-center" : `#${item.toLowerCase().replaceAll(" ", "-")}`}>
              {item}
            </a>
          ))}
        </div>

        <div className="navCtas">
          <a className="goldCta" href="#digital-bid">
            Start My Digital Bid
          </a>
          <a className="phone" href="tel:+14808008246">
            (480) 800-8246
          </a>
        </div>
      </nav>

      <main className="homeCanvas">
        <section className="heroMatch" aria-label="Premium epoxy garage hero">
          <div className="heroText">
            <h1>
              <span>Premium Floors.</span>
              <span>Built To Last.</span>
              <strong>Built By Pros.</strong>
            </h1>
            <p>High-performance epoxy, concrete coatings, and polished floors for homes, businesses, and industrial spaces.</p>
            <ul>
              <li>Durable. Beautiful. Easy to Maintain.</li>
              <li>Installed by Certified Professionals.</li>
              <li>Backed by America's #1 Epoxy Super Store.</li>
            </ul>
            <div className="heroActions">
              <a className="goldCta large" href="#digital-bid">
                Start My Digital Bid
              </a>
              <a className="outlineCta" href="#systems">
                Explore Floor Systems
              </a>
            </div>
          </div>

          <aside className="statsPanel" aria-label="Trust metrics">
            {stats.map(([icon, top, middle, bottom]) => (
              <article key={`${top}-${middle}`}>
                <Icon type={icon} />
                <b>{top}</b>
                <span>{middle}</span>
                <small>{bottom}</small>
              </article>
            ))}
          </aside>
        </section>

        <section id="digital-bid" className="promoStrip">
          <span>Get 15% off your project with our digital bid system - fast - easy - accurate</span>
          <a href="#contact">Get My 15% Estimate</a>
        </section>

        <section id="systems" className="productBand">
          <article className="comparisonCard" aria-label="Before and after floor preview">
            <img src="/images/before-after-garage.svg" alt="Before and after epoxy garage floor preview" />
          </article>

          <div className="productCards">
            {products.map(([kind, title, subtitle, copy, link]) => (
              <article className="productCard" key={kind}>
                <div className={`productArt ${kind}`} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{copy}</p>
                <a href="#digital-bid">{link}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="bottomGrid" id="process">
          <article className="processPanel">
            <h2>The Simple 7-Step Digital Bid Process</h2>
            <div className="stepsRow">
              {process.map(([icon, num, title, copy]) => (
                <div className="stepItem" key={num}>
                  <Icon type={icon} />
                  <b>{num}</b>
                  <strong>{title}</strong>
                  <small>{copy}</small>
                </div>
              ))}
            </div>
          </article>

          <article className="trustPanel" id="reviews">
            <h2>Trusted By Thousands Of Homeowners &amp; Businesses</h2>
            <div className="trustRow">
              {trust.map(([icon, title, copy]) => (
                <div className="trustItem" key={title}>
                  <Icon type={icon} />
                  <b>{title}</b>
                  <small>{copy}</small>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="screenReaderTail" id="contact" aria-label="Digital bid contact path">
          <h2>Start Your National Epoxy Pros Digital Bid</h2>
          <p>Submit project photos, choose your finish direction, and request the next step through the digital bid workflow.</p>
        </section>
      </main>
    </>
  );
}
