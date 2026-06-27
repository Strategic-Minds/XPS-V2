import { ProductGrid, TopBars } from "../components";

export default function ProductsPage() {
  return (
    <main>
      <TopBars active="Products" />
      <section className="pageHero compactHero">
        <h1>Products & Equipment</h1>
        <p>Exact Xtreme Polishing Systems products, coatings, flakes, pigments, and concrete preparation equipment used by National Epoxy Pros.</p>
      </section>
      <section className="contentBand">
        <ProductGrid />
      </section>
    </main>
  );
}
