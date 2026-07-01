import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div className="footerBrand">
          <div className="footerLogoText">National <span style={{color:"#F6B800"}}>Epoxy</span> Pros</div>
          <div className="footerLogoSub">Powered by Xtreme Polishing Systems</div>
          <p className="footerDesc">America's premier epoxy floor network. Serving 70+ cities nationwide with high-performance floor systems, certified crews, and the backing of the #1 epoxy products brand.</p>
          <div style={{marginTop:"20px",display:"flex",gap:"12px"}}>
            <a href="tel:4808008246" style={{color:"#F6B800",fontWeight:700,fontSize:"0.875rem"}}>📞 (480) 800-8246</a>
          </div>
        </div>
        <div>
          <div className="footerColTitle">Services</div>
          <div className="footerLinks">
            {["Garage Floor Epoxy","Metallic Epoxy","Solid Color Epoxy","Polished Concrete","Commercial Floors","Industrial Coatings"].map(l=>(
              <Link key={l} href="/services" className="footerLink">{l}</Link>
            ))}
          </div>
        </div>
        <div>
          <div className="footerColTitle">Company</div>
          <div className="footerLinks">
            {[["About","about"],["Gallery","gallery"],["Training","training"],["Design Center","design-center"],["Locations","locations"],["Reviews","reviews"]].map(([l,h])=>(
              <Link key={l} href={`/${h}`} className="footerLink">{l}</Link>
            ))}
          </div>
        </div>
        <div>
          <div className="footerColTitle">Get Started</div>
          <div className="footerLinks">
            {[["Free Digital Bid","estimate"],["Contact Us","contact"],["Partner Program","partners"],["Contractor Training","training"],["XPS Products","https://xtremepolishingsystems.com"]].map(([l,h])=>(
              <a key={l} href={h.startsWith("http")?h:`/${h}`} className="footerLink" target={h.startsWith("http")?"_blank":""}>{l}</a>
            ))}
          </div>
          <div style={{marginTop:"24px"}}>
            <Link href="/estimate" style={{display:"block",background:"#F6B800",color:"#0a0a0a",fontWeight:800,fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"0.08em",padding:"12px 20px",borderRadius:"8px",textAlign:"center"}}>
              Get 15% Off — Digital Bid
            </Link>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p className="footerCopyright">© {year} National Epoxy Pros. All rights reserved.</p>
        <p className="footerXps">Powered by Xtreme Polishing Systems · America's #1 Epoxy Super Store</p>
      </div>
    </footer>
  );
}