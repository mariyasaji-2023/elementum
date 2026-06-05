import { useState, useEffect, useRef } from "react";

const injectFonts = () => {
  if (document.getElementById("el-fonts")) return;
  const link = document.createElement("link");
  link.id = "el-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap";
  document.head.appendChild(link);
};

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function NewsletterFooter() {
  useEffect(() => { injectFonts(); }, []);
  const [ref, visible] = useInView(0.1);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", overflow: "hidden" }}>

      {/* ══════════════════════════════
          NEWSLETTER — mint green bg
      ══════════════════════════════ */}
      <section
        ref={ref}
        style={{
          background: "#d1fae5",
          position: "relative",
          padding: "80px 6% 0",
          overflow: "hidden",
        }}
      >
        {/* Red squiggle line — top center decoration */}
        <svg
          style={{
            position: "absolute", top: "24px", left: "50%",
            transform: "translateX(-50%)",
            width: "120px", height: "40px", overflow: "visible",
            pointerEvents: "none",
          }}
          viewBox="0 0 120 40"
        >
          <path
            d="M10 30 Q30 5 50 20 Q70 35 90 15 Q105 5 115 18"
            fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"
          />
        </svg>

        {/* Purple teardrop — right side */}
        <div
          style={{
            position: "absolute", right: "8%", top: "30px",
            width: "52px", height: "72px",
            background: "#7c3aed",
            borderRadius: "50% 50% 44% 44% / 56% 56% 44% 44%",
            transform: "rotate(-10deg)",
          }}
        />

        {/* Content */}
        <div
          style={{
            textAlign: "center",
            position: "relative", zIndex: 1,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity .7s ease, transform .7s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              color: "#111",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              margin: "0 0 16px",
            }}
          >
            Subscribe to<br />our newsletter
          </h2>

          <p
            style={{
              fontSize: "0.88rem",
              color: "#555",
              marginBottom: "28px",
              fontWeight: 300,
            }}
          >
            To make your stay special and even more memorable
          </p>

          {/* Subscribe button */}
          <button
            onClick={() => setSubscribed(true)}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "12px 32px",
              fontSize: "0.88rem",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "background .2s, transform .15s",
              marginBottom: "60px",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#333"}
            onMouseLeave={e => e.currentTarget.style.background = "#111"}
          >
            {subscribed ? "✓ Subscribed!" : "Subscribe Now"}
          </button>
        </div>

        {/* Horizontal divider */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)", margin: "0 0 0" }} />

        {/* ══ FOOTER inside same mint green bg ══ */}
        <footer
          style={{
            padding: "40px 0 20px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity .7s ease .2s, transform .7s ease .2s",
          }}
        >
          {/* 4-column grid */}
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            {/* Col 1 — Company */}
            <div>
              <h4 style={colHead}>Company</h4>
              <ul style={linkList}>
                {["Home", "Studio", "Service", "Blog"].map(l => (
                  <li key={l}><a href="#" style={linkStyle}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Col 2 — Terms & Policies */}
            <div>
              <h4 style={colHead}>Terms &amp; Policies</h4>
              <ul style={linkList}>
                {["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"].map(l => (
                  <li key={l}><a href="#" style={linkStyle}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Follow Us */}
            <div>
              <h4 style={colHead}>Follow Us</h4>
              <ul style={linkList}>
                {["Instagram", "LinkedIn", "Youtube", "Twitter"].map(l => (
                  <li key={l}><a href="#" style={linkStyle}>{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Terms & Policies (contact) */}
            <div>
              <h4 style={colHead}>Terms &amp; Policies</h4>
              <ul style={{ ...linkList, gap: "6px" }}>
                <li style={{ fontSize: "0.78rem", color: "#444", lineHeight: 1.5, fontWeight: 300 }}>
                  1494w Huron ave, STE<br />20 Chicago, IL 43641
                </li>
                <li style={{ fontSize: "0.78rem", color: "#444", fontWeight: 300, marginTop: "6px" }}>
                  (123) 456789100
                </li>
                <li style={{ fontSize: "0.78rem", color: "#444", fontWeight: 300, marginTop: "2px" }}>
                  info@elementum.com
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)", paddingTop: "20px", textAlign: "center" }}>
            <p style={{ fontSize: "0.78rem", color: "#666", fontWeight: 300 }}>
              ©2023 Elementum. All rights reserved.
            </p>
          </div>
        </footer>
      </section>

      <style>{`
        /* ── Tablet ── */
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
        }
        /* ── Mobile ── */
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px 16px !important; }
          section[style] { padding: 48px 5% 0 !important; }
        }
        /* ── Very small ── */
        @media (max-width: 380px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

const colHead = {
  fontSize: "0.82rem",
  fontWeight: 500,
  color: "#111",
  marginBottom: "14px",
  letterSpacing: "0.01em",
};

const linkList = {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: 0,
  margin: 0,
};

const linkStyle = {
  fontSize: "0.78rem",
  color: "#555",
  textDecoration: "none",
  fontWeight: 300,
  transition: "color .2s",
};