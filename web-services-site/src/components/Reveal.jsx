import { useEffect, useRef, useState } from "react";
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return setShow(true);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${show ? "in" : ""} ${className}`} style={{ "--d": `${delay}ms` }}>{children}</Tag>;
}
