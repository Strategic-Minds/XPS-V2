import { ColorChartGrid, TopBars } from "../components";

export default function DesignCenterPage() {
  return (
    <main>
      <TopBars active="Design Center" />
      <section className="pageHero compactHero">
        <h1>Design Center</h1>
        <p>Canonical XPS color charts for solid base coats, flakes, metallics, glitter additives, and concrete dye/stain systems.</p>
      </section>
      <section className="contentBand">
        <ColorChartGrid />
      </section>
    </main>
  );
}
