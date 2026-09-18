import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: "#", label: "IG" },
  { href: "#", label: "TW" },
  { href: "#", label: "FB" },
  { href: "#", label: "LI" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-[#fcfcfc] font-sans">
      {/* BACKGROUND COLUMN GRID LINES for consistency with rest of site */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 border-x border-black/5 max-w-7xl mx-auto px-4 md:px-8 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        {/* TOP SECTION: BRAND + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-black/10">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40 block">
              PropX Studio
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black leading-tight max-w-xl">
              Looking for your next property investment?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-all rounded-sm shadow-sm"
            >
              <span>Talk to us</span>
              <span>→</span>
            </Link>
          </div>

          {/* NAV COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 block">
              Navigate
            </span>
            <ul className="space-y-2 text-sm font-mono">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black/60 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT COLUMN */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 block">
              Contact
            </span>
            <div className="space-y-2 text-sm font-mono text-black/60">
              <p>Port Harcourt, Nigeria</p>
              <a
                href="mailto:studio@propx.com"
                className="block hover:text-black transition-colors"
              >
                studio@propx.com
              </a>
              <a
                href="tel:+2340000000000"
                className="block hover:text-black transition-colors"
              >
                +234 000 000 0000
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: COPYRIGHT + SOCIALS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] font-mono text-black/50">
          <p>© {new Date().getFullYear()} PROPX STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 font-semibold">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-black transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}