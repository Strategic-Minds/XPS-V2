import './globals.css';

export const metadata = {
  title: 'National Epoxy Pros | Digital Bid System',
  description: 'National epoxy floor lead generation, design center, visualizer, digital bid, WhatsApp updates, and customer dashboard system powered by Xtreme Polishing Systems.',
  manifest: '/manifest.json',
  appleWebApp: { capable: true, title: 'National Epoxy', statusBarStyle: 'black-translucent' }
};

export const viewport = { themeColor: '#d99a00', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}<script dangerouslySetInnerHTML={{ __html: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){})})}" }} /></body></html>;
}
