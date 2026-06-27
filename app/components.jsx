import Link from "next/link";
import {
  bidSteps,
  colorCharts,
  dashboardMetrics,
  heroStats,
  navItems,
  pipelineRows,
  proofBlocks,
  sampleProject,
  selectedSystem,
  serviceCards,
  timeline,
  uploads,
  xpsProducts
} from "@/lib/data";

export function TopBars({ active }) {
  return (
    <header className="siteHeader">
      <div className="utilityBar">
        <span className="utilityMark">✦</span>
        <span>Powered by Xtreme Polishing Systems</span>
        <span className="goldText">America's #1 Epoxy Super Store</span>
        <span>70+ Locations Nationwide</span>
        <span>Certified Trainers</span>
        <span>Manufacturers with 30+ Years of Experience</span>
      </div>
      <nav className="mainNav">
        <Link href="/" className="brandLockup">
          <span className="brandBird">◆</span>
          <span>
            <strong>National</strong>
            <em>Epoxy Pros</em>
          </span>
        </Link>
        <div className="navLinks">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={active === item.label ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/#digital-bid" className="goldButton navCta">
          Start My Digital Bid
        </Link>
        <a className="phoneLink" href="tel:4808008246">
          (480) 800-8246
        </a>
      </nav>
    </header>
  );
}

export function XpsPowered({ dark = true }) {
  return (
    <div className={`xpsPowered ${dark ? "dark" : "light"}`}>
      <img src="/images/xps-logo.jpg" alt="Xtreme Polishing Systems logo" />
      <span>
        <small>Powered by</small>
        <strong>America's #1 Epoxy Super Store</strong>
      </span>
    </div>
  );
}

export function HeroStats() {
  return (
    <div className="heroStats">
      {heroStats.map(([value, label]) => (
        <div className="heroStat" key={label}>
          <span className="goldIcon">◎</span>
          <strong>{value}</strong>
          <small>{label}</small>
        </div>
      ))}
    </div>
  );
}

export function SwatchVisual({ type }) {
  if (type === "flake") {
    return (
      <div className="swatchCluster">
        <span className="flake one" />
        <span className="flake two" />
        <span className="flake three" />
      </div>
    );
  }
  if (type === "metallic") {
    return (
      <div className="swatchCluster">
        <span className="metal silver" />
        <span className="metal gray" />
        <span className="metal champagne" />
      </div>
    );
  }
  if (type === "solid") {
    return (
      <div className="swatchCluster">
        <span className="solid black" />
        <span className="solid gray" />
        <span className="solid gold" />
      </div>
    );
  }
  return (
    <div className="fanDeck">
      {Array.from({ length: 8 }).map((_, index) => (
        <span key={index} style={{ rotate: `${index * 9 - 28}deg` }} />
      ))}
    </div>
  );
}

export function ServiceCards() {
  return (
    <div className="serviceGrid" id="systems">
      <div className="beforeAfter">
        <div className="beforePane">
          <span>Before</span>
        </div>
        <div className="afterPane">
          <span>After</span>
        </div>
        <div className="splitHandle">↔</div>
      </div>
      {serviceCards.map((card) => (
        <Link href={card.type === "fan" ? "/design-center" : "/visualizer"} className="systemCard" key={card.title}>
          <SwatchVisual type={card.type} />
          <h3>{card.title}</h3>
          <h4>{card.subtitle}</h4>
          <p>{card.body}</p>
          <strong>{card.link} →</strong>
        </Link>
      ))}
    </div>
  );
}

export function BidProcess() {
  return (
    <section className="lowerPanels" id="process">
      <div className="processPanel">
        <h2>The Simple 7-Step Digital Bid Process</h2>
        <div className="processSteps">
          {bidSteps.map(([num, title, sub], index) => (
            <div className="processStep" key={title}>
              <div className="stepCircle">{num}</div>
              <h3>{title}</h3>
              <p>{sub}</p>
              {index < bidSteps.length - 1 && <span className="stepLine">→</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="proofPanel" id="proof">
        <h2>Trusted By Thousands Of Homeowners & Businesses</h2>
        <div className="proofGrid">
          {proofBlocks.map(([value, title, sub]) => (
            <div key={title}>
              <strong>{value}</strong>
              <h3>{title}</h3>
              <p>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PromoStrip() {
  return (
    <div className="promoStrip">
      <span>Get 15% off your project with our digital bid system - fast - easy - accurate</span>
      <Link href="/#digital-bid">Get My 15% Estimate →</Link>
    </div>
  );
}

export function DigitalBidForm({ compact = false }) {
  return (
    <form className={`digitalBidForm ${compact ? "compact" : ""}`} id="digital-bid">
      <div className="formHead">
        <h2>Digital Bid</h2>
        <p>Fast XPS-backed estimate with finish selection, uploads, and dashboard handoff.</p>
      </div>
      <div className="fieldGrid">
        {["Full Name", "Phone", "Email", "ZIP Code", "Project Type", "Square Feet"].map((field) => (
          <label key={field}>
            <span>{field}</span>
            <input placeholder={field} />
          </label>
        ))}
      </div>
      <div className="uploadRow">
        {uploads.map((item) => (
          <button type="button" key={item.id} className="uploadTile">
            <span>+</span>
            {item.label}
          </button>
        ))}
      </div>
      <button className="goldButton formSubmit" type="button">
        Submit and Open Client Dashboard
      </button>
    </form>
  );
}

export function ColorChartGrid({ limit }) {
  const charts = limit ? colorCharts.slice(0, limit) : colorCharts;
  return (
    <div className="chartGrid">
      {charts.map((chart) => (
        <article className="chartCard" key={chart.name}>
          <img src={chart.image} alt={chart.name} />
          <div>
            <h3>{chart.name}</h3>
            <Link href="/visualizer">Use in Visualizer →</Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function VisualizerWorkspace({ dashboard = false }) {
  return (
    <div className={`visualizerWorkspace ${dashboard ? "dashboardMode" : ""}`}>
      <div className="visualPreview">
        <img src="/images/homepage-reference.png" alt="Glossy epoxy floor garage preview" />
        <div className="previewCaption">
          <h3>Live Floor Preview</h3>
          <p>Selected XPS system shown with uploaded project-photo context.</p>
        </div>
      </div>
      <div className="systemSelector">
        <h3>Selected XPS System</h3>
        {selectedSystem.map(([label, value]) => (
          <div className="systemLine" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
        <div className="miniCharts">
          {colorCharts.slice(0, dashboard ? 4 : 6).map((chart) => (
            <img src={chart.image} alt={chart.name} key={chart.name} />
          ))}
        </div>
        <button className="goldButton">Approve Finish Direction</button>
      </div>
    </div>
  );
}

export function ProductGrid() {
  return (
    <div className="productGrid">
      {xpsProducts.map((product) => (
        <article className="productCard" key={product.name}>
          <img src={product.image} alt={product.name} />
          <span>{product.category}</span>
          <h3>{product.name}</h3>
          <p>{product.detail}</p>
        </article>
      ))}
    </div>
  );
}

export function DashboardShell({ role = "client", title, children }) {
  const nav = ["Dashboard", "My Project", "Visualizer", "Color Charts", "Uploads", "Messages", "Proposal", "Payments", "Settings"];
  return (
    <main className="dashboardShell">
      <aside className="dashSidebar">
        <Link href="/" className="dashBrand">
          <strong>National</strong>
          <span>Epoxy Pros</span>
        </Link>
        <XpsPowered />
        <nav>
          {nav.map((item, index) => (
            <Link href={index === 0 ? "/dashboard" : "#"} className={index === 0 ? "active" : ""} key={item}>
              {item}
            </Link>
          ))}
        </nav>
      </aside>
      <section className="dashMain">
        <header className="dashTop">
          <div>
            <h1>{title}</h1>
            <p>National Epoxy Pros operating dashboard for {role} workflow.</p>
          </div>
          <button className="goldButton">Start Chat</button>
        </header>
        {children}
      </section>
    </main>
  );
}

export function MetricRow({ metrics = dashboardMetrics.admin }) {
  return (
    <div className="metricRow">
      {metrics.map(([value, label]) => (
        <div className="metricCard" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function ClientDashboardContent() {
  return (
    <>
      <MetricRow metrics={[["In Progress", "Project Status"], [sampleProject.bidDate, "Bid Date"], [sampleProject.total, "Project Total"], [`${sampleProject.progress}%`, "Proposal Ready"]]} />
      <div className="clientGrid">
        <section className="dashPanel wide">
          <h2>Floor Visualizer</h2>
          <VisualizerWorkspace dashboard />
        </section>
        <section className="dashPanel">
          <h2>Project Timeline</h2>
          <div className="timeline">
            {timeline.map(([status, label]) => (
              <div className={`timelineItem ${status}`} key={label}>
                <span />
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </section>
        <section className="dashPanel">
          <h2>Add Pictures</h2>
          <div className="uploadStack">
            {uploads.map((item) => (
              <button className="uploadTile" key={item.id}>
                <span>+</span>
                {item.label}
              </button>
            ))}
          </div>
        </section>
        <section className="dashPanel darkPanel">
          <XpsPowered />
          <h2>Need Help?</h2>
          <p>Ask about flake, metallic, glitter, solid base coats, dye/stain systems, proposal status, or install scheduling.</p>
          <button className="goldButton">Message My Project Team</button>
        </section>
      </div>
    </>
  );
}

export function OpsDashboardContent({ metrics, title }) {
  return (
    <>
      <MetricRow metrics={metrics} />
      <div className="opsGrid">
        <section className="dashPanel">
          <h2>{title}</h2>
          <div className="pipelineList">
            {pipelineRows.map(([label, status]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{status}</strong>
              </div>
            ))}
          </div>
        </section>
        <section className="dashPanel">
          <h2>Visualizer / Color Approval</h2>
          <ColorChartGrid limit={2} />
          <div className="uploadStack horizontal">
            <button className="uploadTile"><span>+</span> Job Photos</button>
            <button className="uploadTile"><span>+</span> Finish Proof</button>
          </div>
        </section>
        <section className="dashPanel darkPanel">
          <XpsPowered />
          <h2>Automation Status</h2>
          <p>Twilio, HubSpot, Google Calendar, review prompts, and AI proposal actions are shown as sandbox workflow states until production approval.</p>
        </section>
      </div>
    </>
  );
}
