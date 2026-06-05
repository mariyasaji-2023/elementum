import { useState, useEffect, useRef, useCallback } from "react";
import meetingPhoto from "../assets/image 348.png";
import collaborationPhoto from "../assets/image-348-1.png";

const injectFonts = () => {
  if (document.getElementById("el-fonts")) return;
  const link = document.createElement("link");
  link.id = "el-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap";
  document.head.appendChild(link);
};

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function useSR() {
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

export default function AboutSection() {
  useEffect(() => { injectFonts(); }, []);
  const [ref1, v1] = useInView();
  const [ref2, v2] = useInView();

  // per-element SR refs — row 1
  const srH1   = useSR(); const srP1  = useSR(); const srL1  = useSR(); const srImg1 = useSR();
  // per-element SR refs — row 2
  const srH2   = useSR(); const srP2  = useSR(); const srL2  = useSR(); const srImg2 = useSR();

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      {/* ══════════════════════════════════
          ROW 1 — Tomorrow should be better
      ══════════════════════════════════ */}
      <section
        ref={ref1}
        className="about-row"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 8% 60px",
          minHeight: "460px",
          overflow: "hidden",
        }}
      >
        {/* Pink radial glow background — top-right area */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "120px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(251,207,232,0.55) 0%, rgba(255,255,255,0) 70%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Pink outlined square — top center-right */}
        <div
          className="about-square-1"
          style={{
            position: "absolute",
            top: "60px",
            right: "calc(40% - 20px)",
            width: "80px",
            height: "80px",
            border: "2.5px solid #f9a8d4",
            background: "rgba(249,168,212,0.18)",
            zIndex: 1,
          }}
        />

        {/* Red filled square (smaller, overlapping) */}
        <div
          className="about-square-2"
          style={{
            position: "absolute",
            top: "52px",
            right: "calc(40% - 50px)",
            width: "55px",
            height: "55px",
            background: "#ef4444",
            zIndex: 2,
            opacity: 0.85,
          }}
        />

        {/* ── LEFT: Text ── */}
        <div
          style={{
            flex: "0 0 44%",
            position: "relative",
            zIndex: 2,
            opacity: v1 ? 1 : 0,
            transform: v1 ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Heading with yellow outline box */}
          <div ref={srH1} className="sr sr--left" style={{ position: "relative", display: "inline-block", marginBottom: "24px" }}>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "#111",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Tomorrow should<br />be better than today
            </h2>
            {/* Yellow rectangle outline around heading */}
            <div
              style={{
                position: "absolute",
                top: "-8px",
                left: "-12px",
                right: "-12px",
                bottom: "-8px",
                border: "2px solid #facc15",
                pointerEvents: "none",
                zIndex: -1,
              }}
            />
          </div>

          <p
            ref={srP1}
            className="sr sr--up sr-d2"
            style={{
              fontSize: "0.93rem",
              color: "#666",
              lineHeight: 1.8,
              maxWidth: "380px",
              margin: "0 0 28px",
              fontWeight: 300,
            }}
          >
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse to
            play things safe.
          </p>

          {/* Read more link with line */}
          <a
            ref={srL1}
            className="sr sr--up sr-d4 about-read-more"
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "0.88rem",
              color: "#111",
              textDecoration: "none",
              fontWeight: 400,
            }}
          >
            Read more
            <span
              className="read-line"
              style={{
                display: "inline-block",
                width: "60px",
                height: "1px",
                background: "#111",
              }}
            />
          </a>
        </div>

        {/* ── RIGHT: Circular photo ── */}
        <div
          style={{
            flex: "0 0 48%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
            opacity: v1 ? 1 : 0,
            transform: v1 ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <img
            ref={srImg1}
            src={meetingPhoto}
            alt="Team meeting"
            className="sr sr--scale about-img"
            style={{
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* Red curved connecting line between the two sections */}
      <div style={{ position: "relative", height: "80px", overflow: "visible", zIndex: 1 }}>
        <svg
          style={{ position: "absolute", top: "-40px", left: 0, width: "100%", overflow: "visible" }}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M 650 0 Q 900 80 1100 60 Q 1150 55 1200 20"
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ══════════════════════════════════
          ROW 2 — See how we can help
      ══════════════════════════════════ */}
      <section
        ref={ref2}
        className="about-row about-row--reverse"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 8% 100px",
          minHeight: "460px",
          overflow: "visible",
        }}
      >
        {/* ── LEFT: Circular photo + red triangles ── */}
        <div
          style={{
            flex: "0 0 46%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: v2 ? 1 : 0,
            transform: v2 ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Red triangle — top-left (outline-ish) */}
          <div
            style={{
              position: "absolute",
              top: "-30px",
              left: "20px",
              width: 0,
              height: 0,
              borderLeft: "55px solid transparent",
              borderRight: "55px solid transparent",
              borderBottom: "95px solid #ef4444",
              opacity: 0.9,
              zIndex: 3,
            }}
          />

          {/* Red triangle — bottom-right (larger) */}
          <div
            style={{
              position: "absolute",
              bottom: "-50px",
              right: "30px",
              width: 0,
              height: 0,
              borderLeft: "70px solid transparent",
              borderRight: "70px solid transparent",
              borderBottom: "120px solid #ef4444",
              opacity: 0.9,
              zIndex: 0,
            }}
          />

          <img
            ref={srImg2}
            src={collaborationPhoto}
            alt="Team collaboration"
            className="sr sr--scale about-img"
            style={{
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              position: "relative",
              zIndex: 2,
            }}
          />
        </div>

        {/* ── RIGHT: Text ── */}
        <div
          style={{
            flex: "0 0 48%",
            position: "relative",
            zIndex: 2,
            opacity: v2 ? 1 : 0,
            transform: v2 ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <h2
            ref={srH2}
            className="sr sr--right"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#111",
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            {/* "See how we can" — normal */}
            See how we can<br />
            {/* "help you progress" — with yellow underline */}
            <span style={{ position: "relative", display: "inline-block" }}>
              help you progress
              <svg
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  width: "100%",
                  height: "10px",
                  overflow: "visible",
                }}
                viewBox="0 0 300 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 7 Q37 1 75 7 Q112 13 150 7 Q187 1 225 7 Q262 13 300 7"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p
            ref={srP2}
            className="sr sr--up sr-d2"
            style={{
              fontSize: "0.93rem",
              color: "#666",
              lineHeight: 1.8,
              maxWidth: "400px",
              margin: "0 0 28px",
              fontWeight: 300,
            }}
          >
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>

          {/* Read more link with line */}
          <a
            href="#"
            className="about-read-more"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "0.88rem",
              color: "#111",
              textDecoration: "none",
              fontWeight: 400,
            }}
          >
            Read more
            <span
              className="read-line"
              style={{
                display: "inline-block",
                width: "60px",
                height: "1px",
                background: "#111",
              }}
            />
          </a>
        </div>
      </section>

      <style>{`
        @keyframes floatDeco    { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-8px) rotate(2deg)} }
        @keyframes floatDecoAlt { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-6px) rotate(-2deg)} }

        .about-square-1 { animation: floatDeco    5s ease-in-out infinite; }
        .about-square-2 { animation: floatDecoAlt 4s ease-in-out infinite; }

        .about-img { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .about-img:hover { transform: scale(1.04); box-shadow: 0 16px 48px rgba(0,0,0,0.16) !important; }

        .about-read-more { position: relative; }
        .about-read-more .read-line { transition: width 0.35s ease; }
        .about-read-more:hover .read-line { width: 90px !important; }
        .about-read-more:hover { opacity: 0.7; }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .about-row { padding: 60px 6% !important; gap: 32px; }
          .about-row > div { flex: 0 0 48% !important; }
          .about-img { width: 280px !important; height: 280px !important; }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .about-row {
            flex-direction: column !important;
            padding: 48px 6% !important;
            text-align: center;
            min-height: unset !important;
          }
          .about-row--reverse { flex-direction: column-reverse !important; }
          .about-row > div   { flex: unset !important; width: 100% !important; }
          .about-row > div:not(:last-child) { margin-bottom: 36px; }
          .about-img { width: 240px !important; height: 240px !important; }
          .about-square-1, .about-square-2 { display: none !important; }
          .about-read-more { justify-content: center; }
          /* override useInView translateX so it doesn't break stacked layout */
          .about-row > div[style] {
            transform: none !important;
            opacity: 1 !important;
          }
        }

        @media (max-width: 380px) {
          .about-img { width: 200px !important; height: 200px !important; }
          .about-row { padding: 36px 5% !important; }
        }
      `}</style>
    </div>
  );
}