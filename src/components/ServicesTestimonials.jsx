import { useState, useEffect, useRef } from "react";

function useSR() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("sr--visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
import ellipse263 from "../assets/Ellipse 263.png";
import ellipse266 from "../assets/Ellipse 266.png";
import ellipse267 from "../assets/Ellipse 267.png";
import ellipse268 from "../assets/Ellipse 268.png";
import ellipse264 from "../assets/Ellipse 264.png";
import ellipse265 from "../assets/Ellipse 265.png";
import ellipse269 from "../assets/Ellipse 269.png";
import ellipse270 from "../assets/Ellipse 270.png";

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

const services = [
  {
    tag: "Office of multiple interest content",
    title: "Colaborative & partnership",
  },
  {
    tag: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    tag: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

const testimonialAvatars = {
  left: [
    { src: ellipse263, size: 64, pos: { top: "0px", left: "0px" } },
    { src: ellipse266, size: 44, pos: { top: "78px", left: "-14px" } },
    { src: ellipse267, size: 52, pos: { top: "152px", left: "-10px" } },
  ],
  right: [
    { src: ellipse270, size: 60, pos: { top: "0px", right: "70px" } },
    { src: ellipse265, size: 80, pos: { top: "0px", right: "0px" } },
    { src: ellipse264, size: 52, pos: { top: "95px", right: "30px" } },
    { src: ellipse269, size: 110, pos: { top: "160px", right: "0px" } },
  ],
};

export default function ServicesTesti() {
  useEffect(() => { injectFonts(); }, []);
  const [sRef, sVis] = useInView(0.1);
  const [tRef, tVis] = useInView(0.1);

  const srSvcHeading  = useSR();
  const srTestiHead   = useSR();
  const srLeftAvatar  = useSR();
  const srCenterPort  = useSR();
  const srQuoteCard   = useSR();
  const srRightAvatar = useSR();

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", overflow: "hidden" }}>

      {/* ══════════════════════════════
          SECTION 3 — SERVICES
      ══════════════════════════════ */}
      <section
        ref={sRef}
        style={{
          position: "relative",
          padding: "80px 8% 80px",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Red curved line top-right decoration */}
        <svg
          style={{ position: "absolute", top: 0, right: 0, width: "320px", height: "120px", overflow: "visible", pointerEvents: "none" }}
          viewBox="0 0 320 120"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 80 Q 80 10 180 30 Q 260 50 320 0"
            fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"
          />
        </svg>

        {/* Heading */}
        <div
          ref={srSvcHeading}
          className="sr sr--up"
          style={{
            opacity: sVis ? 1 : 0,
            transform: sVis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity .7s ease, transform .7s ease",
            marginBottom: "56px",
          }}
        >
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#111",
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            What we{" "}
            <span
              style={{
                background: "#bbf7d0",
                borderRadius: "8px",
                padding: "2px 14px",
                fontStyle: "italic",
              }}
            >
              can
            </span>
            <br />
            <span style={{ position: "relative", display: "inline-block" }}>
              offer you!
              {/* Yellow wavy underline under "offer" */}
              <svg
                style={{ position: "absolute", bottom: "-6px", left: 0, width: "58%", height: "10px", overflow: "visible" }}
                viewBox="0 0 180 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 7 Q22 1 45 7 Q67 13 90 7 Q112 1 135 7 Q157 13 180 7"
                  fill="none" stroke="#facc15" strokeWidth="3" strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Service rows */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #e5e5e5",
                padding: "28px 0",
                opacity: sVis ? 1 : 0,
                transform: sVis ? "translateY(0)" : "translateY(20px)",
                transition: `opacity .6s ease ${0.1 + i * 0.12}s, transform .6s ease ${0.1 + i * 0.12}s`,
                cursor: "pointer",
              }}
              className="svc-row"
              onMouseEnter={e => e.currentTarget.style.background = "#fafafa"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {/* Left: small tag */}
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "#888",
                  lineHeight: 1.5,
                  maxWidth: "130px",
                  flex: "0 0 130px",
                  fontWeight: 300,
                }}
              >
                {s.tag}
              </span>

              {/* Center: service title */}
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)",
                  fontWeight: 400,
                  color: "#111",
                  letterSpacing: "-0.015em",
                  flex: 1,
                  paddingLeft: "32px",
                }}
              >
                {s.title}
              </span>

              {/* Right: arrow */}
              <span className="svc-arrow" style={{ fontSize: "1.4rem", color: "#111", marginLeft: "24px", lineHeight: 1 }}>
                ⟶
              </span>
            </div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid #e5e5e5" }} />
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 4 — TESTIMONIALS
      ══════════════════════════════ */}
      <section
        ref={tRef}
        style={{
          position: "relative",
          padding: "80px 8% 100px",
          background: "#fff",
          overflow: "visible",
        }}
      >
        {/* Heading */}
        <div
          ref={srTestiHead}
          className="sr sr--up"
          style={{
            textAlign: "center",
            marginBottom: "60px",
            opacity: tVis ? 1 : 0,
            transform: tVis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .7s ease, transform .7s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 400,
              color: "#111",
              letterSpacing: "-0.02em",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            What our customer<br />says About Us
          </h2>
        </div>

        {/* Testimonial layout: left circles | center portrait | quote card | right circles */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
            opacity: tVis ? 1 : 0,
            transform: tVis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity .8s ease .15s, transform .8s ease .15s",
          }}
        >
          {/* Left avatars — 3 small stacked */}
          <div ref={srLeftAvatar} className="sr sr--left" style={{ position: "relative", width: "80px", height: "220px", flexShrink: 0 }}>
            {testimonialAvatars.left.map((av, i) => (
              <img
                key={i}
                src={av.src}
                alt="Customer"
                className="testi-avatar"
                style={{
                  position: "absolute",
                  width: av.size,
                  height: av.size,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #fff",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                  ...av.pos,
                }}
              />
            ))}
          </div>

          {/* Center featured portrait */}
          <img
            ref={srCenterPort}
            src={ellipse268}
            alt="Featured customer"
            className="sr sr--scale sr-d2 center-portrait"
            style={{
              width: "135px",
              height: "135px",
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
              border: "3px solid #fff",
              boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
            }}
          />

          {/* Quote card */}
          <div
            ref={srQuoteCard}
            className="sr sr--up sr-d3"
            style={{
              background: "#f0fdf4",
              borderRadius: "16px",
              padding: "32px 36px",
              maxWidth: "380px",
              position: "relative",
              flex: "0 0 auto",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "4rem",
                color: "#6b7280",
                lineHeight: 0.6,
                display: "block",
                marginBottom: "16px",
              }}
            >
              "
            </span>
            <p
              style={{
                fontSize: "0.88rem",
                color: "#444",
                lineHeight: 1.85,
                margin: "0 0 16px",
                fontWeight: 300,
              }}
            >
              Elementum delivered the site with inthe timeline as they
              requested. Inthe end, the client found a 50% increase in traffic
              with in days since its launch. They also had an impressive ability
              to use technologies that the company hasn't used, which have also
              proved to be easy to use and reliable
            </p>
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "4rem",
                color: "#6b7280",
                lineHeight: 0.6,
                display: "block",
                textAlign: "right",
                marginTop: "8px",
              }}
            >
              "
            </span>
          </div>

          {/* Right avatars — 4 circles varying sizes */}
          <div ref={srRightAvatar} className="sr sr--right sr-d4" style={{ position: "relative", width: "160px", height: "300px", flexShrink: 0 }}>
            {testimonialAvatars.right.map((av, i) => (
              <img
                key={i}
                src={av.src}
                alt="Customer"
                className="testi-avatar"
                style={{
                  position: "absolute",
                  width: av.size,
                  height: av.size,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #fff",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                  ...av.pos,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 6% !important; }
          h2 { font-size: 2rem !important; }
          .testi-inner { flex-direction: column !important; }
        }

        @keyframes avatarFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes portraitGlow {
          0%, 100% { box-shadow: 0 2px 16px rgba(0,0,0,0.12); }
          50%       { box-shadow: 0 8px 32px rgba(109,40,217,0.25); }
        }

        .svc-row {
          transition: background 0.25s ease, padding-left 0.25s ease;
        }
        .svc-row:hover { padding-left: 8px !important; }
        .svc-arrow {
          transition: transform 0.3s ease;
          display: inline-block;
        }
        .svc-row:hover .svc-arrow { transform: translateX(10px); }

        .testi-avatar {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
        }
        .testi-avatar:hover {
          transform: scale(1.12) !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.18) !important;
          z-index: 10;
        }

        .center-portrait {
          animation: portraitGlow 4s ease-in-out infinite;
          transition: transform 0.35s ease;
        }
        .center-portrait:hover { transform: scale(1.06); }
      `}</style>
    </div>
  );
}