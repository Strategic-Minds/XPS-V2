import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { PWAInstallPrompt } from "./components/PWAInstallPrompt";

export const metadata = {
  title: "National Epoxy Pros — Premium Epoxy & Concrete Floors | 70+ Locations",
  description: "America's #1 epoxy floor network. Garage floors, metallic epoxy, polished concrete. Powered by Xtreme Polishing Systems. Get your free digital bid today.",
  keywords: "epoxy floor, garage floor coating, concrete polishing, metallic epoxy, epoxy contractor",
  openGraph: {
    title: "National Epoxy Pros — Premium Floors Built To Last",
    description: "High-performance epoxy, concrete coatings, and polished floors for homes, businesses, and industrial spaces. 70+ locations nationwide.",
    url: "https://nationalepoxypros.com",
    siteName: "National Epoxy Pros",
    type: "website",
  },
  themeColor: "#F6B800",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="National Epoxy Pros" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "National Epoxy Pros",
              "description": "Premium epoxy floor coatings, polished concrete, and decorative floor systems powered by Xtreme Polishing Systems.",
              "url": "https://nationalepoxypros.com",
              "telephone": "(480) 800-8246",
              "email": "leads@nationalepoxypros.com",
              "areaServed": "United States",
              "priceRange": "$$",
              "sameAs": ["https://xtremepolishingsystems.com"],
            })
          }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
