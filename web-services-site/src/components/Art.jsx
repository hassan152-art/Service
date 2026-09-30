const W = "var(--surface)", L = "var(--line)", A = "var(--accent)", S = "var(--soft)", M = "var(--mint)", I = "var(--ink)", AI = "var(--accent-ink)";
const TILE = ["var(--soft)", "var(--mint)", "#FFE3A3", "#FFC9D4", "#CFE8FF", "#E3D4FF"];

const Win = ({ children, x = 40, y = 36, w = 320, h = 188 }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="12" fill={W} stroke={L} />
    {[16, 30, 44].map((d) => <circle key={d} cx={x + d} cy={y + 14} r="4" fill={L} />)}
    <line x1={x} x2={x + w} y1={y + 28} y2={y + 28} stroke={L} />
    {children}
  </g>
);

export function ServiceArt({ kind, alt }) {
  const art = {
    business: (
      <Win>
        <rect x="60" y="76" width="140" height="14" rx="4" fill={I} />
        <rect x="60" y="100" width="200" height="8" rx="4" fill={L} />
        <rect x="60" y="116" width="170" height="8" rx="4" fill={L} />
        <rect x="60" y="136" width="70" height="24" rx="6" fill={A} />
        {[0, 1, 2].map((i) => <rect key={i} x={60 + i * 98} y="174" width="86" height="38" rx="8" fill={S} />)}
        <circle className="float" cx="320" cy="110" r="26" fill={M} />
      </Win>
    ),
    store: (
      <g>
        <Win>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={56 + i * 100} y="74" width="88" height="128" rx="10" fill={S} />
              <circle cx={100 + i * 100} cy="110" r="22" fill={i % 2 ? M : A} />
              <rect x={70 + i * 100} y="146" width="60" height="8" rx="4" fill={I} />
              <rect x={70 + i * 100} y="162" width="34" height="8" rx="4" fill={L} />
              <rect x={70 + i * 100} y="178" width="60" height="16" rx="6" fill={A} />
            </g>
          ))}
        </Win>
        <g className="float">
          <circle cx="352" cy="50" r="24" fill={A} />
          <path d="M340 43h6l4 14h12l3-10h-19" stroke={AI} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    ),
    portfolio: (
      <Win>
        {TILE.map((c, i) => (
          <rect key={i} className={i === 1 ? "float2 float" : ""} x={56 + (i % 3) * 100} y={72 + Math.floor(i / 3) * 74} width="92" height="64" rx="8" fill={c} stroke={i === 1 ? A : "none"} strokeWidth="3" />
        ))}
      </Win>
    ),
    landing: (
      <g>
        <Win>
          <rect x="60" y="76" width="230" height="18" rx="5" fill={I} />
          <rect x="60" y="102" width="170" height="18" rx="5" fill={I} />
          <rect x="60" y="130" width="200" height="8" rx="4" fill={L} />
          <rect x="60" y="164" width="120" height="34" rx="8" fill={A} />
          <path d="M196 181h40m-10-9l10 9l-10 9" stroke={A} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </Win>
        <g className="float">
          <circle cx="336" cy="70" r="26" fill={M} />
          <text x="336" y="75" textAnchor="middle" fontSize="15" fontWeight="700" fill={I}>GO</text>
        </g>
      </g>
    ),
    app: (
      <Win>
        <rect x="48" y="72" width="44" height="144" rx="8" fill={S} />
        {[50, 80, 60, 100, 70].map((h, i) => (
          <rect key={i} className="grow" style={{ animationDelay: `${i * 120}ms` }} x={116 + i * 34} y={200 - h} width="22" height={h} rx="4" fill={A} />
        ))}
        <path d="M116 108L150 92L184 100L218 76L252 84" stroke={I} strokeWidth="3" fill="none" strokeDasharray="6 5" strokeLinecap="round" />
        <circle cx="322" cy="120" r="30" fill="none" stroke={S} strokeWidth="14" />
        <circle cx="322" cy="120" r="30" fill="none" stroke={A} strokeWidth="14" strokeDasharray="120 190" transform="rotate(-90 322 120)" />
      </Win>
    ),
    care: (
      <g>
        <path className="float" d="M200 40L282 70V132C282 176 244 206 200 222C156 206 118 176 118 132V70Z" fill={A} />
        <path d="M164 130l28 28l48-56" stroke={AI} strokeWidth="14" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle className="float float2" cx="90" cy="70" r="18" fill={W} stroke={L} />
        <circle className="float" cx="320" cy="200" r="14" fill={W} stroke={L} />
      </g>
    ),
  }[kind];
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label={kind} className="w-full h-full block">
      <rect width="400" height="260" fill={alt ? M : S} />
      {art}
    </svg>
  );
}

const PAL = [
  { a: "#2E7D4F", b: "#F4D35E", c: "#E8F5E9" }, { a: "#D1495B", b: "#EDAE49", c: "#FFF1E6" },
  { a: "#22223B", b: "#C9ADA7", c: "#F2E9E4" }, { a: "#0077B6", b: "#90E0EF", c: "#E0F4FF" },
  { a: "#7B2CBF", b: "#E0AAFF", c: "#F3E8FF" }, { a: "#F77F00", b: "#FCBF49", c: "#FFF3E0" },
];

export function ProjectArt({ i = 0, image, title }) {
  if (image) return <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />;
  const p = PAL[i % PAL.length], v = i % 3, G = "#D9D9D9";
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label={title} className="w-full h-full block">
      <rect width="400" height="260" fill={p.c} />
      <rect width="400" height="28" fill="#fff" />
      {[0, 1, 2].map((k) => <circle key={k} cx={14 + k * 13} cy="14" r="4" fill={G} />)}
      <rect x="250" y="11" width="30" height="6" rx="3" fill={G} /><rect x="290" y="11" width="30" height="6" rx="3" fill={G} /><rect x="330" y="8" width="56" height="12" rx="6" fill={p.a} />
      {v === 0 && (
        <g>
          <rect x="30" y="70" width="170" height="16" rx="4" fill={p.a} /><rect x="30" y="96" width="130" height="16" rx="4" fill={p.a} />
          <rect x="30" y="126" width="150" height="7" rx="3" fill={G} /><rect x="30" y="140" width="120" height="7" rx="3" fill={G} />
          <rect x="30" y="170" width="90" height="28" rx="8" fill={p.a} />
          <circle cx="310" cy="145" r="72" fill={p.b} />
          <rect className="float" x="268" y="112" width="92" height="92" rx="16" fill={p.a} />
        </g>
      )}
      {v === 1 && (
        <g>
          <rect x="24" y="46" width="190" height="16" rx="4" fill={p.a} /><rect x="24" y="70" width="130" height="8" rx="4" fill={G} />
          {[0, 1, 2, 3].map((k) => (
            <g key={k}>
              <rect x={24 + k * 92} y="98" width="84" height="132" rx="10" fill="#fff" />
              <circle cx={66 + k * 92} cy="140" r="24" fill={k % 2 ? p.a : p.b} />
              <rect x={38 + k * 92} y="176" width="56" height="8" rx="4" fill={G} />
              <rect x={38 + k * 92} y="194" width="30" height="8" rx="4" fill={p.a} />
            </g>
          ))}
        </g>
      )}
      {v === 2 && (
        <g>
          <rect y="28" width="400" height="150" fill={p.a} />
          <circle className="float" cx="340" cy="66" r="46" fill={p.b} />
          <rect x="100" y="70" width="200" height="16" rx="4" fill="#fff" /><rect x="140" y="96" width="120" height="8" rx="4" fill="#fff" opacity=".6" />
          <rect x="160" y="126" width="80" height="26" rx="8" fill={p.b} />
          {[0, 1, 2].map((k) => <rect key={k} x={24 + k * 124} y="192" width="112" height="54" rx="8" fill="#fff" />)}
        </g>
      )}
    </svg>
  );
}

export function HeroArt() {
  return (
    <svg viewBox="0 0 480 380" role="img" aria-label="Website design illustration" className="w-full h-auto block">
      <circle cx="240" cy="190" r="170" fill={S} />
      <g className="float float2">
        <rect x="70" y="60" width="330" height="220" rx="16" fill={W} stroke={L} strokeWidth="2" />
        {[92, 108, 124].map((x) => <circle key={x} cx={x} cy="82" r="5" fill={L} />)}
        <line x1="70" x2="400" y1="102" y2="102" stroke={L} />
        <rect x="96" y="128" width="170" height="20" rx="5" fill={I} />
        <rect x="96" y="156" width="120" height="20" rx="5" fill={I} />
        <rect x="96" y="190" width="190" height="8" rx="4" fill={L} /><rect x="96" y="206" width="150" height="8" rx="4" fill={L} />
        <rect x="96" y="232" width="100" height="30" rx="8" fill={A} />
        <circle cx="336" cy="180" r="44" fill={M} /><rect x="312" y="156" width="48" height="48" rx="12" fill={A} opacity=".9" />
      </g>
      <g className="float">
        <rect x="24" y="200" width="84" height="150" rx="14" fill={W} stroke={L} strokeWidth="2" />
        <rect x="36" y="222" width="60" height="30" rx="6" fill={M} /><rect x="36" y="262" width="60" height="7" rx="3" fill={L} /><rect x="36" y="276" width="44" height="7" rx="3" fill={L} /><rect x="36" y="300" width="60" height="20" rx="6" fill={A} />
      </g>
      <g className="float float2">
        <rect x="330" y="252" width="130" height="80" rx="14" fill={W} stroke={L} strokeWidth="2" />
        {[0, 1, 2, 3].map((k) => <rect key={k} className="grow" style={{ animationDelay: `${k * 150}ms` }} x={348 + k * 26} y={312 - [20, 34, 26, 46][k]} width="16" height={[20, 34, 26, 46][k]} rx="3" fill={A} />)}
      </g>
      <g className="float">
        <circle cx="400" cy="52" r="26" fill={A} />
        <path d="M388 52l9 9l16-18" stroke={AI} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function Avatar() {
  return (
    <svg viewBox="0 0 300 300" role="img" aria-label="Developer illustration" className="w-full h-full block">
      <rect width="300" height="300" fill={M} />
      <circle className="float" cx="60" cy="70" r="26" fill={S} /><circle className="float float2" cx="248" cy="228" r="34" fill={S} />
      <path d="M50 300c0-60 44-96 100-96s100 36 100 96z" fill={A} />
      <rect x="132" y="168" width="36" height="40" rx="12" fill="#E8B796" />
      <circle cx="150" cy="130" r="48" fill="#F1C7A8" />
      <path d="M102 124c0-36 22-56 50-56s48 20 46 56c-14-16-28-24-52-24s-34 8-44 24z" fill={I} />
      <circle cx="132" cy="136" r="4" fill={I} /><circle cx="168" cy="136" r="4" fill={I} />
      <path d="M136 154q14 12 28 0" stroke={I} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <rect x="86" y="236" width="128" height="64" rx="8" fill={W} stroke={L} strokeWidth="2" />
      <circle cx="150" cy="264" r="8" fill={A} />
    </svg>
  );
}
