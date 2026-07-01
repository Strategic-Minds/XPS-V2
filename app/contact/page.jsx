"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:"",email:"",phone:"",message:""});
  const update = (k,v) => setForm(f=>({...f,[k]:v}));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await fetch("/api/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...form,source:"contact-page"})}); } catch {}
    setSent(true);
  };

  return (
    <div style={{background:"#111",minHeight:"100vh",padding:"80px 24px"}}>
      <div style={{maxWidth:"800px",margin:"0 auto"}}>
        <h1 style={{fontFamily:"Barlow Condensed,Impact,sans-serif",fontSize:"clamp(2.5rem,5vw,3.5rem)",fontWeight:900,textTransform:"uppercase",marginBottom:"8px"}}>
          Get In <span style={{color:"#F6B800"}}>Touch</span>
        </h1>
        <p style={{color:"#9CA3AF",marginBottom:"48px"}}>We respond to all inquiries within 4 business hours.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px"}}>
          <div>
            {sent ? (
              <div style={{background:"#1a1a1a",border:"1px solid rgba(246,184,0,0.3)",borderRadius:"12px",padding:"40px",textAlign:"center"}}>
                <div style={{fontSize:"3rem",marginBottom:"12px"}}>✅</div>
                <h3 style={{fontFamily:"Barlow Condensed,Impact,sans-serif",fontSize:"1.5rem",fontWeight:900,textTransform:"uppercase"}}>Message Sent!</h3>
                <p style={{color:"#9CA3AF",marginTop:"8px",fontSize:"0.875rem"}}>We will reach out to {form.email} within 4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                {[["Name","text","name","John Smith"],["Email","email","email","john@example.com"],["Phone","tel","phone","(480) 555-0100"]].map(([l,t,k,p])=>(
                  <div key={k} style={{display:"flex",flexDirection:"column",gap:"6px"}}>
                    <label style={{fontSize:"0.75rem",fontWeight:700,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:"0.08em"}}>{l}</label>
                    <input type={t} required placeholder={p} value={form[k]} onChange={e=>update(k,e.target.value)}
                      style={{background:"#0a0a0a",border:"1px solid #404040",borderRadius:"8px",color:"#fff",fontFamily:"inherit",fontSize:"0.95rem",padding:"12px 16px",outline:"none"}} />
                  </div>
                ))}
                <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
                  <label style={{fontSize:"0.75rem",fontWeight:700,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:"0.08em"}}>Message</label>
                  <textarea required value={form.message} onChange={e=>update("message",e.target.value)} rows={5}
                    placeholder="Tell us about your project..."
                    style={{background:"#0a0a0a",border:"1px solid #404040",borderRadius:"8px",color:"#fff",fontFamily:"inherit",fontSize:"0.95rem",padding:"12px 16px",resize:"vertical",outline:"none"}} />
                </div>
                <button type="submit" style={{background:"#F6B800",color:"#0a0a0a",fontWeight:800,fontSize:"0.875rem",textTransform:"uppercase",letterSpacing:"0.08em",padding:"16px",borderRadius:"8px",border:"none",cursor:"pointer"}}>
                  Send Message
                </button>
              </form>
            )}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
            {[["📞","Phone","(480) 800-8246","tel:4808008246"],["📧","Email","leads@nationalepoxypros.com","mailto:leads@nationalepoxypros.com"],["📍","Headquarters","Phoenix, AZ — Serving 70+ Cities","#"],["🕐","Hours","Mon–Fri 7am–7pm · Sat 8am–5pm","#"]].map(([ic,l,v,h])=>(
              <a key={l} href={h} style={{background:"#1a1a1a",border:"1px solid #2d2d2d",borderRadius:"12px",padding:"20px",display:"flex",alignItems:"flex-start",gap:"16px",textDecoration:"none",transition:"border-color 0.2s"}}>
                <span style={{fontSize:"1.5rem"}}>{ic}</span>
                <div><div style={{fontWeight:700,fontSize:"0.875rem",marginBottom:"4px"}}>{l}</div><div style={{color:"#9CA3AF",fontSize:"0.85rem"}}>{v}</div></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}