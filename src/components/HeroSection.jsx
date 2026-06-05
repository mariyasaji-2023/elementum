import { useState, useEffect, useRef } from "react";
import teamPhotos from "../assets/team-photos.png";

const injectFonts = () => {
  if (document.getElementById("el-fonts")) return;
  const link = document.createElement("link");
  link.id = "el-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap";
  document.head.appendChild(link);
};

function Photo({ src, size, left, top }) {
  const [hovered, setHovered] = useState(false);
  return (
    <img
      src={src}
      alt="Team member"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        left,
        top,
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover",
        objectPosition: "center top",
        transform: hovered
          ? "scale(1.08) translateY(-6px)"
          : "scale(1) translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 12px 32px rgba(0,0,0,0.18)"
          : "0 2px 8px rgba(0,0,0,0.08)",
        cursor: "pointer",
      }}
    />
  );
}

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("sr--visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // per-element scroll reveal refs
  const srNav      = useScrollReveal();
  const srLine1    = useScrollReveal();
  const srLine2    = useScrollReveal();
  const srLine3    = useScrollReveal();
  const srSubtext  = useScrollReveal();
  const srTeam     = useScrollReveal();

  useEffect(() => {
    injectFonts();
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fadeIn = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  const fadeInDelay = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
  };

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 60px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "1.3rem",
            fontWeight: 400,
            color: "#111",
            letterSpacing: "-0.01em",
          }}
        >
          Elementum
        </span>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "48px",
            margin: 0,
            padding: 0,
          }}
          className="el-desktop-nav"
        >
          {["Home", "Studio", "Services", "Contact", "FAQs"].map((l) => (
            <li key={l}>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#111",
                  fontSize: "0.92rem",
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.5")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger — always visible as in Figma */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "#111",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "#111",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "#111",
              borderRadius: "2px",
            }}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "#fff",
            borderBottom: "1px solid #eee",
            padding: "8px 60px 16px",
          }}
        >
          {["Home", "Studio", "Services", "Contact", "FAQs"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                display: "block",
                padding: "10px 0",
                color: "#111",
                textDecoration: "none",
                fontSize: "1rem",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}

      {/* ── HERO SECTION ── */}
      <section
        style={{
          position: "relative",
          padding: "10px 0 40px",
          overflow: "hidden",
        }}
      >
        {/* ── LEFT DECORATION: pink arc + black curve ── */}
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            zIndex: 0,
            width: "120px",
            height: "280px",
          }}
        >
          {/* Pink right-half circle outline */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "110px",
              height: "220px",
              borderRadius: "0 110px 110px 0",
              border: "3.5px solid #f9a8d4",
              borderLeft: "none",
            }}
          />
          {/* Black curved tail at bottom */}
          <div
            style={{
              position: "absolute",
              left: "22px",
              top: "150px",
              width: "65px",
              height: "110px",
              borderLeft: "3px solid #111",
              borderBottom: "3px solid #111",
              borderRadius: "0 0 0 65px",
            }}
          />
        </div>

        {/* ── RIGHT DECORATION: purple crescent/leaf ── */}
        <div
          className="el-teardrop"
          style={{
            position: "absolute",
            right: "55px",
            top: "0px",
            width: "80px",
            height: "125px",
            background: "#6d28d9",
            clipPath: "path('M 40 0 Q 80 30 80 75 Q 80 118 40 125 Q 0 118 0 75 Q 0 30 40 0 Z')",
            transform: "rotate(-15deg)",
            zIndex: 0,
          }}
        />

        {/* ── HEADLINE ── */}
        <div
          style={{
            ...fadeIn,
            textAlign: "center",
            padding: "0 80px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(3.2rem, 7vw, 6.8rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              color: "#111",
              margin: "0 0 28px",
              letterSpacing: "-0.025em",
            }}
          >
            {/* LINE 1: "The thinkers and" */}
            <span ref={srLine1} className="sr sr--up" style={{ display: "block" }}>
              The{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                thinkers
                {/* Yellow wavy underline */}
                <svg
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: "-4px",
                    width: "calc(100% + 8px)",
                    height: "12px",
                    overflow: "visible",
                  }}
                  viewBox="0 0 220 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 8 Q27 2 55 8 Q82 14 110 8 Q138 2 165 8 Q192 14 220 8"
                    fill="none"
                    stroke="#facc15"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              and
            </span>

            {/* LINE 2: "doers were changing" — "changing" in pink rounded blob */}
            <span ref={srLine2} className="sr sr--up sr-d2" style={{ display: "block" }}>
              doers were{" "}
              <span
                style={{
                  background: "#f9a8d4",
                  borderRadius: "60px",
                  padding: "6px 32px 6px 24px",
                  fontStyle: "italic",
                  display: "inline-block",
                  lineHeight: 1.1,
                }}
              >
                changing
              </span>
            </span>

            {/* LINE 3: "the status Quo with" — "status" in mint green box */}
            <span ref={srLine3} className="sr sr--up sr-d4" style={{ display: "block" }}>
              the{" "}
              <span
                style={{
                  background: "#bbf7d0",
                  borderRadius: "10px",
                  padding: "2px 20px",
                  fontStyle: "italic",
                  display: "inline-block",
                }}
              >
                status
              </span>{" "}
              Quo with
            </span>
          </h1>

          <p
            ref={srSubtext}
            className="sr sr--up sr-d5"
            style={{
              fontSize: "1rem",
              color: "#666",
              lineHeight: 1.8,
              maxWidth: "540px",
              margin: "0 auto 64px",
              fontWeight: 300,
            }}
          >
            We are a team of strategists, designers communicators, researchers.
            Togeather,
            <br />
            we belive that progress only hghappens when you refuse to play
            things safe.
          </p>
        </div>


        {/* ── TEAM PHOTO STRIP (from Figma export) ── */}
        <div
          ref={srTeam}
          className="sr sr--up sr-d6"
          style={{
            ...fadeInDelay,
            width: "100%",
            overflow: "hidden",
            lineHeight: 0,
          }}
        >
          <img
            src={teamPhotos}
            alt="Our team"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .el-desktop-nav { display: none !important; }
        }
        @media (max-width: 600px) {
          nav { padding: 18px 24px !important; }
        }

        @keyframes floatShape {
          0%, 100% { transform: rotate(-15deg) translateY(0px); }
          50%       { transform: rotate(-15deg) translateY(-14px); }
        }
        @keyframes floatLeft {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes softPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.75; transform: scale(1.04); }
        }
        .el-teardrop   { animation: floatShape 5s ease-in-out infinite; }
        .el-left-deco  { animation: floatLeft  6s ease-in-out infinite; }
        .el-nav-link   { position: relative; }
        .el-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: #111;
          transition: width 0.3s ease;
        }
        .el-nav-link:hover::after { width: 100%; }
      `}</style>
    </div>
  );
}