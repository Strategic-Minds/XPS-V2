import "./globals.css";

export const metadata = {
  title: "National Epoxy Pros",
  description:
    "Premium XPS-backed epoxy floor systems, digital bids, visualizer, and client dashboard."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
