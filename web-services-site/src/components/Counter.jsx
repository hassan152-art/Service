import { useEffect, useRef, useState } from "react";
export default function Counter({ to, suffix = "", label }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf;
    const run = () => {
      const t0 = performance.now();
      const step = (t) => { const k = Math.min((t - t0) / 1400, 1); setN(Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) raf = requestAnimationFrame(step); };
      raf = requestAnimationFrame(step);
    };
    if (!("IntersectionObserver" in window)) { setN(to); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect(); } });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-extrabold text-4xl md:text-5xl text-accent">{n}{suffix}</div>
      <div className="text-muted text-sm mt-1">{label}</div>
    </div>
  );
}
