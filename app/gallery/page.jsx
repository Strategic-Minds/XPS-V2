export const metadata = { title: "Gallery | National Epoxy Pros", description: "View our epoxy flooring gallery — garages, commercial, residential." };
export default function GalleryPage() {
  const systems = ["Flake Systems","Metallic Systems","Quartz Systems","Solid Epoxy","Commercial Grade","Decorative Concrete"];
  return (
    <main style={{minHeight:"100vh",background:"#0a0a0a",color:"#fff",padding:"80px 20px",maxWidth:"1100px",margin:"0 auto"}}>
      <h1 style={{fontSize:"2.5rem",fontWeight:900,color:"#F6B800",marginBottom:"10px"}}>Our Work</h1>
      <p style={{color:"#aaa",marginBottom:"40px",fontSize:"1rem"}}>Hundreds of completed projects across the nation.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"20px"}}>
        {systems.map(s => (
          <div key={s} style={{background:"#161616",border:"1px solid #2a2a2a",borderRadius:"12px",height:"200px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"10px"}}>
            <div style={{width:"60px",height:"60px",background:"#F6B800",borderRadius:"50%",opacity:0.3}}/>
            <span style={{color:"#ccc",fontWeight:600}}>{s}</span>
          </div>
        ))}
      </div>
      <div style={{textAlign:"center",marginTop:"40px"}}>
        <a href="/get-quote" style={{display:"inline-block",background:"#F6B800",color:"#000",padding:"14px 32px",borderRadius:"8px",fontWeight:700,textDecoration:"none"}}>Get Your Free Quote</a>
      </div>
    </main>
  );
}