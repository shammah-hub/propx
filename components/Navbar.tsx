"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "/", label: "Home", num: "01" },
  { href: "/listings", label: "Listings", num: "02" },
  { href: "/about", label: "About", num: "03" },
  { href: "/contact", label: "Contact", num: "04" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fcfcfc]/90 backdrop-blur-md font-sans">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        
        {/* LOGO / BRAND MARK */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono text-[10px] text-black/40 tracking-widest font-bold group-hover:text-black transition-colors">
            STUDIO
          </span>
          <span className="text-xl font-black tracking-tight text-black">
            PropX<span className="text-black/30 font-light">.</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase py-1"
                >
                  <span
                    className={`text-[9px] transition-colors ${
                      isActive ? "text-black font-bold" : "text-black/30 group-hover:text-black/60"
                    }`}
                  >
                    {link.num}
                  </span>
                  <span
                    className={`transition-colors ${
                      isActive
                        ? "text-black font-bold border-b-2 border-black"
                        : "text-black/60 hover:text-black"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-[10px] font-mono text-black/40 uppercase tracking-widest">
            PH, NG
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-all rounded-sm shadow-sm"
          >
            <span>Talk Property</span>
            <span>→</span>
          </Link>
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden focus:outline-none"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-6 bg-black transition-transform"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="h-[2px] w-6 bg-black transition-opacity"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-6 bg-black transition-transform"
          />
        </button>
      </nav>

      {/* MOBILE FULL-SCREEN EDITORIAL MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#fcfcfc] px-6 pt-28 pb-12 md:hidden"
          >
            {/* GRID LINES overlay for consistency */}
            <div className="pointer-events-none absolute inset-0 grid grid-cols-4 border-x border-black/5 px-6 z-0">
              <div className="border-r border-black/5 h-full" />
              <div className="border-r border-black/5 h-full" />
              <div className="border-r border-black/5 h-full" />
              <div className="h-full" />
            </div>

            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div className="flex flex-col divide-y divide-black/10">
                {LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 * i, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-baseline justify-between py-6 text-3xl font-black tracking-tight text-black uppercase"
                      >
                        <span className={isActive ? "underline underline-offset-8" : ""}>
                          {link.label}
                        </span>
                        <span className="font-mono text-xs font-normal text-black/40">
                          / {link.num}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Menu Footer Info */}
              <div className="border-t border-black/10 pt-8 space-y-4">
                <div className="flex justify-between items-end font-mono text-xs text-black/50">
                  <div>
                    <span className="block font-bold text-black uppercase">PROPX STUDIO</span>
                    <span>PORT HARCOURT, NIGERIA</span>
                  </div>
                  <span>EST. 2015</span>
                </div>

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-between bg-black text-white px-6 py-4 text-xs font-bold uppercase tracking-widest rounded-sm"
                >
                  <span>Start a conversation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}