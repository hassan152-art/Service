import { CONFIG } from "../config.js";
export default function WhatsAppButton() {
  return (
    <a href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hi, I want a website.")}`} aria-label="Chat on WhatsApp"
       className="fixed right-[18px] bottom-[18px] z-20 bg-[#1FA855] text-white font-semibold px-[18px] py-3 rounded-full shadow-lg no-underline">WhatsApp</a>
  );
}
