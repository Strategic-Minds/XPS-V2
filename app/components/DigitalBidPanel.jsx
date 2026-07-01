"use client";
import { useState } from "react";
import Link from "next/link";
export function DigitalBidPanel() {
  const [form, setForm] = useState({ type:"", sqft:"", address:"", system:"" });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const up = (k,v) => setForm(p => ({...p,[k]:v}));
  const submit = async () => {
    if (!form.address) return;
    setLoading(true);
    try { await fetch("/api/digital-bid",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)}); } catch {}
    setTimeout(() => { setLoading(false); setDone(true); }, 900);
  };
  return (
    <section className="bid" id="digital-bid">
      <div className="w">
        <div className="bid-l">
          <div className="bid-card">
            <div className="bid-tag">📋 Project Bid</div>
            <p style={{fontSize:"0.68rem",color:"var(--muted)",marginBottom:"4px",fontStyle:"italic"}}>Fast. Easy. Accurate. OUR PRIORITY.</p>
            {done ? (
              <div style={{textAlign:"center",padding:"24px 0"}}>
                <div style={{fontSize:"2.5rem",marginBottom:"10px"}}>✅</div>
                <div style={{fontWeight:700,marginBottom:"6px"}}>Bid Submitted!</div>
                <div style={{fontSize:"0.78rem",color:"var(--muted)"}}>Your estimate arrives within 24 hours. 15% discount applied.</div>
              </div>
            ) : (
              <>
                <div className="bid-form">
                  <div className="bf"><label>Project Type</label><select className="bf select" value={form.type} onChange={e=>up("type",e.target.value)}><option value="">Select...</option><option>Commercial</option><option>Residential</option><option>Industrial</option></select></div>
                  <div className="bf"><label>Square Footage</label><select value={form.sqft} onChange={e=>up("sqft",e.target.value)} style={{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"var(--r-sm)",color:"var(--white)",fontFamily:"var(--font-b)",fontSize:".78rem",padding:"8px 10px",outline:"none",width:"100%"}}><option value="">Select...</option><option>Under 500</option><option>500–1,000</option><option>1,000–2,500</option><option>5,000+</option></select></div>
                  <div className="bf"><label>Project Address</label><input placeholder="City, ST" value={form.address} onChange={e=>up("address",e.target.value)} style={{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"var(--r-sm)",color:"var(--white)",fontFamily:"var(--font-b)",fontSize:".78rem",padding:"8px 10px",outline:"none",width:"100%"}}/></div>
                  <div className="bf"><label>Floor System</label><select value={form.system} onChange={e=>up("system",e.target.value)} style={{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"var(--r-sm)",color:"var(--white)",fontFamily:"var(--font-b)",fontSize:".78rem",padding:"8px 10px",outline:"none",width:"100%"}}><option value="">Select...</option><option>Flake System</option><option>Metallic Epoxy</option><option>Quartz</option><option>Solid Color</option><option>Polished Concrete</option></select></div>
                </div>
                <button className="btn btn-gold" style={{width:"100%",justifyContent:"center",padding:"13px"}} onClick={submit} disabled={loading}>{loading?"Submitting...":"Get My Instant Bid →"}</button>
              </>
            )}
          </div>
        </div>
        <div className="bid-r">
          <h2 className="bid-h">Deadlines Don&apos;t Wait.<br/><span style={{color:"var(--gold)"}}>Neither Should You.</span></h2>
          <p className="bid-sub">Get a fast, easy, and accurate epoxy-floor estimate in minutes with our Digital Bid System. Perfect for urgent projects and tight timelines.</p>
          <div className="bid-chks">
            <div className="bid-chk"><div className="chk-dot">✓</div>24-Hour Bid Response Guarantee</div>
            <div className="bid-chk"><div className="chk-dot">✓</div>Accurate Pricing You Can Trust</div>
            <div className="bid-chk"><div className="chk-dot">✓</div>No Phone Tag. No Delays.</div>
          </div>
          <Link href="/digital-bid" className="btn btn-gold btn-lg" style={{alignSelf:"flex-start"}}>Start My Digital Bid Now →</Link>
        </div>
      </div>
    </section>
  );
}