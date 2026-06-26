export const metadata = { title: "About | National Epoxy Pros", description: "Learn about National Epoxy Pros — expert epoxy flooring services across the nation." };
export default function AboutPage() {
  return (
    <main style={{minHeight:"100vh",background:"#0a0a0a",color:"#fff",padding:"80px 20px",maxWidth:"900px",margin:"0 auto"}}>
      <h1 style={{fontSize:"2.5rem",fontWeight:900,color:"#F6B800",marginBottom:"20px"}}>About National Epoxy Pros</h1>
      <p style={{fontSize:"1.1rem",lineHeight:1.7,marginBottom:"20px",color:"#ccc"}}>National Epoxy Pros is powered by Xtreme Polishing Systems — 20+ years of epoxy and polished concrete expertise. We operate in 70+ cities nationwide.</p>
      <p style={{fontSize:"1.1rem",lineHeight:1.7,color:"#ccc"}}>Our mission: deliver the highest quality epoxy flooring at competitive prices, backed by industry-leading technology and AI-powered design tools.</p>
      <a href="/get-quote" style={{display:"inline-block",marginTop:"30px",background:"#F6B800",color:"#000",padding:"14px 32px",borderRadius:"8px",fontWeight:700,textDecoration:"none",fontSize:"1rem"}}>Get a Free Quote</a>
    </main>
  );
}