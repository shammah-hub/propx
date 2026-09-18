"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#fcfcfc] text-[#111111] overflow-hidden font-sans">
      {/* ---------- SOFT BACKGROUND SHAPES ----------
          Without something translucent/colored behind them, frosted-glass
          cards render identically to flat white boxes. These give the
          backdrop-blur something real to diffuse, kept low-opacity so the
          page overall still reads as clean white. */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[460px] w-[460px] rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute top-1/4 right-[-180px] h-[540px] w-[540px] rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute bottom-[-220px] left-1/3 h-[480px] w-[480px] rounded-full bg-pink-200/20 blur-3xl" />
      </div>

      {/* ---------- BACKGROUND COLUMN GRID LINES ---------- */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 border-x border-black/5 max-w-7xl mx-auto px-4 md:px-8 z-0">
        <div className="border-r border-black/5 h-full" />
        <div className="border-r border-black/5 h-full" />
        <div className="border-r border-black/5 h-full" />
        <div className="border-r border-black/5 h-full" />
        <div className="border-r border-black/5 h-full" />
        <div className="h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-16">
        
        {/* ---------- PAGE TITLE / HEADER ---------- */}
        <section className="pt-8 border-b border-black/10 pb-12">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40 block mb-2">
                  DIRECT CONSULTATION & INQUIRIES
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-black">
                  Let&apos;s talk <br /> property.
                </h1>
              </div>

              <div className="max-w-xs text-xs text-black/60 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-black/40 block">01 / PRIVATE ADVISORY</span>
                <p className="leading-relaxed">
                  Buying, selling, or evaluating market yields across Port Harcourt—reach out to speak directly with our team.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------- MAIN GRID: FORM & DIRECTORY ---------- */}
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          
          {/* LEFT COLUMN: ARCHITECTURAL CONTACT FORM — now frosted glass */}
          <div className="lg:col-span-7">
            <Reveal>
              {sent ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-sm border border-white/50 bg-white/30 backdrop-blur-xl backdrop-saturate-150 p-10 md:p-14 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_8px_30px_-6px_rgba(0,0,0,0.12)] space-y-4"
                >
                  <div className="flex items-center gap-2 font-mono text-xs text-black/40 uppercase tracking-widest">
                    <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span>INQUIRY RECEIVED</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-black">
                    Message confirmed.
                  </h3>
                  <p className="text-xs text-black/60 leading-relaxed max-w-md">
                    Thank you. A senior agent from PropX Studio will review your specifications and get in touch within 24 hours.
                  </p>
                  <div className="pt-4 border-t border-black/10">
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="text-xs font-mono font-bold uppercase tracking-widest text-black hover:underline"
                    >
                      ← Submit another inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="bg-white/30 backdrop-blur-xl backdrop-saturate-150 border border-white/50 p-8 md:p-12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_8px_30px_-6px_rgba(0,0,0,0.12)] rounded-sm space-y-8"
                >
                  <div className="border-b border-black/10 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 block">
                      FORM ARCHITECTURE
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-black mt-1">
                      Send an Inquiry
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <Field label="FULL NAME" id="name" type="text" placeholder="e.g. Chukwuma Nnamdi" />
                    <Field label="EMAIL ADDRESS" id="email" type="email" placeholder="you@example.com" />

                    <div className="space-y-2">
                      <label htmlFor="interest" className="block font-mono text-[10px] font-bold uppercase tracking-widest text-black/60">
                        OBJECTIVE
                      </label>
                      <select
                        id="interest"
                        className="w-full rounded-sm border border-black/15 bg-white/50 px-4 py-3.5 text-xs font-medium text-black focus:border-black focus:bg-white/80 focus:outline-none transition-colors"
                      >
                        <option>Buy a property</option>
                        <option>Sell a property</option>
                        <option>Rent / Lease</option>
                        <option>Valuation & Advisory</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="msg" className="block font-mono text-[10px] font-bold uppercase tracking-widest text-black/60">
                        SPECIFICATIONS & MESSAGE
                      </label>
                      <textarea
                        id="msg"
                        rows={5}
                        placeholder="Detail your preferred location, budget band, or property requirements..."
                        className="w-full resize-y rounded-sm border border-black/15 bg-white/50 px-4 py-3.5 text-xs font-medium text-black placeholder:text-black/30 focus:border-black focus:bg-white/80 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-between bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-all rounded-sm shadow-md group"
                  >
                    <span>Send Message</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </form>
              )}
            </Reveal>
          </div>

          {/* RIGHT COLUMN: OFFICE DIRECTORY & HOURS — now frosted glass */}
          <div className="lg:col-span-5 lg:pl-6">
            <Reveal
              delay={0.15}
              className="space-y-8 bg-white/30 backdrop-blur-xl backdrop-saturate-150 border border-white/50 p-8 md:p-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_8px_30px_-6px_rgba(0,0,0,0.12)] rounded-sm"
            >
              
              {/* Head Office */}
              <div className="border-b border-black/10 pb-8 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 block">
                  HEAD OFFICE
                </span>
                <h4 className="text-lg font-bold text-black tracking-tight">Port Harcourt Studio</h4>
                <p className="text-xs text-black/70 leading-relaxed font-mono">
                  14 Aba Road, Old GRA <br />
                  Port Harcourt, Rivers State, Nigeria
                </p>
              </div>

              {/* Direct Channels */}
              <div className="border-b border-black/10 pb-8 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 block">
                  DIRECT CONTACT
                </span>
                <div className="space-y-1 font-mono text-xs">
                  <a href="mailto:hello@propx.ng" className="block font-semibold text-black hover:underline">
                    hello@propx.ng
                  </a>
                  <a href="tel:+2348000000000" className="block font-semibold text-black hover:underline">
                    +234 800 000 0000
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 block">
                  OPERATING HOURS
                </span>
                <div className="font-mono text-xs text-black/70 space-y-1">
                  <p className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-bold text-black">09:00 – 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-bold text-black">By Appointment</span>
                  </p>
                </div>
              </div>

              {/* Map/Location Teaser Box — kept as a slightly darker inset chip so it reads distinct from the glass panel around it */}
              <div className="pt-4">
                <div className="p-4 bg-black/5 backdrop-blur-sm border border-black/10 rounded-sm flex items-center justify-between text-[11px] font-mono">
                  <span className="text-black/50">COORDINATES: 4.8156° N, 7.0498° E</span>
                  <span className="font-bold text-black">OLD GRA</span>
                </div>
              </div>

            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  type,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block font-mono text-[10px] font-bold uppercase tracking-widest text-black/60">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-sm border border-black/15 bg-white/50 px-4 py-3.5 text-xs font-medium text-black placeholder:text-black/30 focus:border-black focus:bg-white/80 focus:outline-none transition-colors"
      />
    </div>
  );
}