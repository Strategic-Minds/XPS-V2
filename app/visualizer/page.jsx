import { DigitalBidForm, TopBars, VisualizerWorkspace } from "../components";

export default function VisualizerPage() {
  return (
    <main>
      <TopBars active="Visualizer" />
      <section className="pageHero compactHero">
        <h1>Floor Visualizer</h1>
        <p>Preview exact XPS coating assemblies with uploaded project photos before approving your floor direction.</p>
      </section>
      <section className="contentBand visualizerPageGrid">
        <VisualizerWorkspace />
        <DigitalBidForm compact />
      </section>
    </main>
  );
}
