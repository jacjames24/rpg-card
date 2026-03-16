import { useState, useEffect } from "react";

const stats = [
  { label: "Full-Stack Dev", value: 88, color: "#4fc3f7", icon: "⚙️" },
  { label: "Android/Mobile", value: 72, color: "#81c784", icon: "📱" },
  { label: "People Management", value: 85, color: "#ce93d8", icon: "👑" },
  { label: "Japanese (Language)", value: 45, color: "#ffb74d", icon: "🗾" },
  { label: "AI / LLM Tinkering", value: 70, color: "#f48fb1", icon: "🤖" },
  { label: "Gaming", value: 92, color: "#ff8a65", icon: "🎮" },
  { label: "Interior Design Eye", value: 78, color: "#a5d6a7", icon: "🏛️" },
  { label: "Cozy Introvert", value: 95, color: "#b0bec5", icon: "🌙" },
];

const traits = [
  "Dev Manager",
  "Rakuten",
  "Android Veteran",
  "Cat Person",
  "JRPG Enjoyer",
  "Japan Resident",
  "Fashionably Minimal",
  "Lore Keeper",
];

const equipment = [
  { slot: "Watch", item: "Cartier Tank / Longines DolceVita" },
  { slot: "Shoes", item: "Adidas Gazelle / Nike Air Max" },
  { slot: "Workstation", item: "RTX 4070 Super Beast" },
  { slot: "Mobile Dev", item: "MacBook Air M3" },
  { slot: "Side Quest", item: "Open-Source Chatbot" },
];

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    stats.forEach((stat, i) => {
      setTimeout(() => {
        let start = 0;
        const interval = setInterval(() => {
          start += 2;
          setAnimatedValues((prev) => {
            const next = [...prev];
            next[i] = Math.min(start, stat.value);
            return next;
          });
          if (start >= stat.value) clearInterval(interval);
        }, 12);
      }, 300 + i * 120);
    });
  }, []);

  const level = 31;
  const expPercent = 67;

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at 20% 20%, #0d1b2a 0%, #050d15 60%, #0a0a12 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Cinzel', 'Georgia', serif",
      padding: "24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        @keyframes float0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(15px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes float3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(18px)} }
        @keyframes float4 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes glow { 0%,100%{box-shadow:0 0 10px #4fc3f740} 50%{box-shadow:0 0 25px #4fc3f770} }
        .stat-bar:hover { filter: brightness(1.3); }
        .trait-tag:hover { background: rgba(79,195,247,0.2) !important; color: #4fc3f7 !important; }
      `}</style>

      {/* Background grid */}
      <div style={{
        position: "fixed", inset: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(#4fc3f7 1px, transparent 1px), linear-gradient(90deg, #4fc3f7 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{
          position: "fixed",
          width: `${[120, 80, 60, 100, 70][i]}px`,
          height: `${[120, 80, 60, 100, 70][i]}px`,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${["#4fc3f730","#ce93d825","#81c78420","#f48fb115","#ffb74d20"][i]}, transparent)`,
          left: `${[10, 75, 30, 60, 85][i]}%`,
          top: `${[15, 25, 70, 60, 80][i]}%`,
          animation: `float${i} ${[8, 10, 7, 9, 11][i]}s ease-in-out infinite`,
          pointerEvents: "none",
        }} />
      ))}

      <div style={{
        width: "100%", maxWidth: "820px",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s ease",
      }}>

        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, rgba(13,27,42,0.95) 0%, rgba(15,20,35,0.98) 100%)",
          border: "1px solid rgba(79,195,247,0.3)",
          borderRadius: "16px 16px 0 0",
          padding: "28px 32px 20px",
          position: "relative",
          overflow: "hidden",
          animation: "glow 4s ease-in-out infinite",
        }}>
          {["◈", "◈"].map((r, i) => (
            <span key={i} style={{
              position: "absolute", top: 16,
              [i === 0 ? "left" : "right"]: 16,
              color: "rgba(79,195,247,0.4)", fontSize: "18px",
            }}>{r}</span>
          ))}

          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "2px",
            background: "linear-gradient(90deg, transparent, #4fc3f7, #ce93d8, #4fc3f7, transparent)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s linear infinite",
          }} />

          <div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
            <div style={{
              width: "90px", height: "90px", flexShrink: 0,
              background: "linear-gradient(135deg, #0d2137, #1a0a2e)",
              border: "2px solid rgba(206,147,216,0.6)",
              borderRadius: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "40px",
              boxShadow: "0 0 20px rgba(206,147,216,0.3), inset 0 0 20px rgba(206,147,216,0.1)",
              position: "relative",
            }}>
              🌸
              <div style={{
                position: "absolute", bottom: "-8px", left: "50%", transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #ce93d8, #9c27b0)",
                color: "#fff", fontSize: "10px", fontWeight: "700",
                padding: "2px 8px", borderRadius: "10px",
                fontFamily: "'Crimson Text', serif", letterSpacing: "1px",
                whiteSpace: "nowrap",
              }}>LVL {level}</div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#4fc3f7", marginBottom: "4px", opacity: 0.8 }}>
                ── CHARACTER PROFILE ──
              </div>
              <h1 style={{
                margin: 0, fontSize: "32px", fontWeight: "900",
                background: "linear-gradient(135deg, #fff 0%, #b0c8e8 50%, #ce93d8 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                letterSpacing: "2px", lineHeight: 1.1,
              }}>JACKIE</h1>
              <div style={{
                fontSize: "13px", color: "rgba(206,147,216,0.9)", marginTop: "4px",
                fontFamily: "'Crimson Text', serif", fontStyle: "italic", letterSpacing: "1px",
              }}>
                ✦ The Engineering Sovereign ✦
              </div>
              <div style={{ fontSize: "11px", color: "rgba(176,200,232,0.6)", marginTop: "6px", letterSpacing: "1px" }}>
                CLASS: Dev Manager &nbsp;|&nbsp; ORIGIN: Philippines → Japan &nbsp;|&nbsp; GUILD: Rakuten
              </div>

              <div style={{ marginTop: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "10px", color: "rgba(255,183,77,0.8)", letterSpacing: "2px" }}>EXPERIENCE</span>
                  <span style={{ fontSize: "10px", color: "rgba(255,183,77,0.8)" }}>{expPercent}% → LV {level + 1}</span>
                </div>
                <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%", width: `${expPercent}%`,
                    background: "linear-gradient(90deg, #ffb74d, #ff8a65)",
                    borderRadius: "3px",
                    boxShadow: "0 0 8px #ffb74d80",
                    transition: "width 1.5s ease",
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>

          {/* Stats */}
          <div style={{
            background: "rgba(8,16,28,0.97)",
            border: "1px solid rgba(79,195,247,0.2)",
            borderTop: "none", borderRight: "none",
            padding: "24px 28px",
          }}>
            <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#4fc3f7", marginBottom: "16px", opacity: 0.7 }}>
              ── ABILITY SCORES ──
            </div>
            {stats.map((stat, i) => (
              <div key={i}
                className="stat-bar"
                style={{ marginBottom: "14px", cursor: "default", transition: "filter 0.2s" }}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px", alignItems: "center" }}>
                  <span style={{
                    fontSize: "11px",
                    color: hoveredStat === i ? stat.color : "rgba(176,200,232,0.85)",
                    transition: "color 0.2s", letterSpacing: "0.5px",
                    fontFamily: "'Crimson Text', serif",
                  }}>
                    {stat.icon} {stat.label}
                  </span>
                  <span style={{
                    fontSize: "13px", fontWeight: "700", color: stat.color,
                    fontFamily: "'Cinzel', serif", minWidth: "32px", textAlign: "right",
                  }}>{animatedValues[i]}</span>
                </div>
                <div style={{ height: "5px", background: "rgba(255,255,255,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${animatedValues[i]}%`,
                    background: `linear-gradient(90deg, ${stat.color}80, ${stat.color})`,
                    borderRadius: "3px",
                    boxShadow: `0 0 6px ${stat.color}60`,
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Right panel */}
          <div style={{
            background: "rgba(8,16,28,0.97)",
            border: "1px solid rgba(79,195,247,0.2)",
            borderTop: "none", borderLeft: "none",
            padding: "24px 28px",
            display: "flex", flexDirection: "column", gap: "20px",
          }}>
            {/* Traits */}
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#ce93d8", marginBottom: "12px", opacity: 0.7 }}>
                ── PASSIVE TRAITS ──
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {traits.map((t, i) => (
                  <span key={i} className="trait-tag" style={{
                    fontSize: "10px", padding: "4px 10px",
                    background: "rgba(206,147,216,0.08)",
                    border: "1px solid rgba(206,147,216,0.25)",
                    borderRadius: "4px", color: "rgba(206,147,216,0.8)",
                    letterSpacing: "0.5px", cursor: "default",
                    transition: "all 0.2s",
                    fontFamily: "'Crimson Text', serif",
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#81c784", marginBottom: "12px", opacity: 0.7 }}>
                ── EQUIPPED ITEMS ──
              </div>
              {equipment.map((eq, i) => (
                <div key={i} style={{
                  display: "flex", gap: "8px", marginBottom: "8px",
                  padding: "6px 10px",
                  background: "rgba(129,199,132,0.04)",
                  border: "1px solid rgba(129,199,132,0.1)",
                  borderRadius: "6px",
                }}>
                  <span style={{ fontSize: "10px", color: "rgba(129,199,132,0.5)", minWidth: "70px", letterSpacing: "0.5px" }}>
                    {eq.slot}
                  </span>
                  <span style={{ fontSize: "11px", color: "rgba(200,230,200,0.85)", fontFamily: "'Crimson Text', serif" }}>
                    {eq.item}
                  </span>
                </div>
              ))}
            </div>

            {/* Active Quest */}
            <div style={{
              background: "linear-gradient(135deg, rgba(255,183,77,0.06), rgba(255,138,101,0.04))",
              border: "1px solid rgba(255,183,77,0.25)",
              borderRadius: "8px", padding: "14px",
            }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#ffb74d", marginBottom: "8px", opacity: 0.8 }}>
                ── ACTIVE QUEST ──
              </div>
              <div style={{ fontSize: "13px", color: "#ffe0b2", fontFamily: "'Crimson Text', serif", fontStyle: "italic" }}>
                "The Endless Grind"
              </div>
              <div style={{ fontSize: "11px", color: "rgba(255,224,178,0.6)", marginTop: "4px", lineHeight: 1.5 }}>
                Staying the course at Rakuten. Explore coding and AI on the side. Level up management skills.
              </div>
              <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
                {["AI Tinkering", "Code Exploration", "Manager Arc"].map((q) => (
                  <span key={q} style={{
                    fontSize: "9px", padding: "3px 7px",
                    background: "rgba(255,183,77,0.1)", border: "1px solid rgba(255,183,77,0.2)",
                    borderRadius: "3px", color: "rgba(255,183,77,0.7)", letterSpacing: "0.5px",
                  }}>⬦ {q}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          background: "rgba(6,12,22,0.98)",
          border: "1px solid rgba(79,195,247,0.2)",
          borderTop: "1px solid rgba(79,195,247,0.1)",
          borderRadius: "0 0 16px 16px",
          padding: "10px 32px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontSize: "9px", color: "rgba(79,195,247,0.3)", letterSpacing: "2px" }}>
            LOCATION: JAPAN &nbsp;|&nbsp; EST. 2015
          </span>
          <div style={{ display: "flex", gap: "16px" }}>
            {["🐱 Cat Lover", "📖 Reader", "🎮 Gamer", "☕ Introvert"].map((t) => (
              <span key={t} style={{ fontSize: "10px", color: "rgba(176,200,232,0.35)", letterSpacing: "0.5px" }}>{t}</span>
            ))}
          </div>
          <span style={{ fontSize: "9px", color: "rgba(79,195,247,0.3)", letterSpacing: "2px" }}>
            PARTNER: PAULO &nbsp;|&nbsp; ❤
          </span>
        </div>

      </div>
    </div>
  );
}
