import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { CONFIG } from "../config.js";

const types = ["Business website", "Online store", "Portfolio", "Landing page", "Web app", "Redesign"];
const budgets = ["Under Rs 20,000", "Rs 20,000 to 50,000", "Rs 50,000 to 100,000", "Over Rs 100,000", "Not sure yet"];

export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", type: types[0], budget: budgets[0], message: "" });
  const [note, setNote] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const wa = `https://wa.me/${CONFIG.whatsapp}`;
  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.message.trim()) return setNote("Please add your name and a short message about the project.");
    const text = `Hi, I'm ${f.name.trim()}.\nProject: ${f.type}\nBudget: ${f.budget}${f.phone ? `\nPhone: ${f.phone}` : ""}\n\n${f.message.trim()}`;
    setNote("Opening WhatsApp with your message...");
    window.open(`${wa}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };
  return (
    <>
      <PageHeader title="Let's build your website" text="Fill in the form and your message opens in WhatsApp, ready to send. I reply the same day." />
      <section className="sec !pt-8"><div className="wrap grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <ul className="list-none p-0 grid gap-4">
            <li className="card lift"><b>WhatsApp</b><p><a href={wa} className="underline">{CONFIG.phoneDisplay}</a></p></li>
            <li className="card lift"><b>Email</b><p><a href={`mailto:${CONFIG.email}`} className="underline">{CONFIG.email}</a></p></li>
            <li className="card lift"><b>Social</b><p className="flex gap-4">{Object.entries(CONFIG.social).map(([n, h]) => <a key={n} href={h} className="underline">{n}</a>)}</p></li>
          </ul>
        </Reveal>
        <Reveal delay={150}>
          <form onSubmit={submit} noValidate className="grid gap-3.5 card">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <label className="field">Name<input value={f.name} onChange={set("name")} autoComplete="name" required /></label>
              <label className="field">Phone<input type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" /></label>
            </div>
            <div className="grid gap-3.5 sm:grid-cols-2">
              <label className="field">Project type<select value={f.type} onChange={set("type")}>{types.map((t) => <option key={t}>{t}</option>)}</select></label>
              <label className="field">Budget<select value={f.budget} onChange={set("budget")}>{budgets.map((b) => <option key={b}>{b}</option>)}</select></label>
            </div>
            <label className="field">Tell me about your project<textarea rows={5} value={f.message} onChange={set("message")} required /></label>
            <button className="btn" type="submit">Send on WhatsApp</button>
            <p role="status" className="min-h-[1.4em] text-[.95rem] text-muted">{note}</p>
          </form>
        </Reveal>
      </div></section>
    </>
  );
}
