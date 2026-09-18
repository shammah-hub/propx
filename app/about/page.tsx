"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const PROCESS = [
  {
    num: "01",
    subtitle: "PHASE ONE",
    title: "Discover",
    body: "We walk the property, price it against real comparables in the area, and agree what 'sold' looks like for you.",
  },
  {
    num: "02",
    subtitle: "PHASE TWO",
    title: "Curate",
    body: "Photography, a written particular, and a shortlist of buyers already looking in that price band and location.",
  },
  {
    num: "03",
    subtitle: "PHASE THREE",
    title: "Close",
    body: "Viewings, offers, and paperwork handled end to end, with a lawyer we work with regularly on title and transfer.",
  },
];

// Real, appropriately-licensed professional headshots (Unsplash), swapped
// in to replace the previous placeholder imagery.
const TEAM = [
  {
    num: "01",
    name: "Adaeze Wariboko",
    role: "Founder & Principal Agent",
    exp: "11 YRS IN PORT HARCOURT",
    image:
      "https://images.unsplash.com/photo-1573497160825-0d94a2724d40?auto=format&fit=crop&w=900&q=80",
  },
  {
    num: "02",
    name: "Chidi Okonkwo",
    role: "Sales & Lettings Lead",
    exp: "PRIME RESIDENTIAL",
    image:
      "https://images.unsplash.com/photo-1688120320082-f23f0c1425be?auto=format&fit=crop&w=900&q=80",
  },
  {
    num: "03",
    name: "Ibinabo Peterside",
    role: "Client Relations Director",
    exp: "ADVISORY & LEGAL",
    image:
      "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=900&q=80",
  },
];

// Founder portrait used in the hero — kept separate from TEAM[0].image so
// a wider/taller crop can be used for the big hero frame.
const FOUNDER_HERO_IMAGE =
  "https://images.unsplash.com/photo-1573497160825-0d94a2724d40?auto=format&fit=crop&w=1200&q=80";

export default function About() {
  return (
    <div className="relative min-h-screen w-full bg-[#fcfcfc] text-[#111111] overflow-hidden font-sans">
      {/* ---------- BACKGROUND COLUMN GRID LINES ---------- */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 border-x border-black/5 max-w-7xl mx-auto px-4 md:px-8 z-0">
        <div className="border-r border-black/5 h-full" />
        <div className="border-r border-black/5 h-full" />
        <div className="border-r border-black/5 h-full" />
        <div className="border-r border-black/5 h-full" />
        <div className="border-r border-black/5 h-full" />
        <div className="h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-32">
        {/* ---------- PAGE HEADER / TITLE ---------- */}
        <section className="pt-8 border-b border-black/10 pb-12">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40 block mb-2">
                  OUR PHILOSOPHY & PRACTICE
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-black">
                  About <br /> PropX Studio.
                </h1>
              </div>

              <div className="max-w-xs text-xs text-black/60 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-black/40 block">01 / ARCHITECTURE OF REAL ESTATE</span>
                <p className="leading-relaxed">
                  Port Harcourt&apos;s most considered real estate consultancy—built around clarity, market mastery, and direct human engagement.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------- HERO: FOUNDER QUOTE, PORTRAIT & STAT RAIL ---------- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Badge Layer */}
          <div className="lg:col-span-5 relative">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-xl border border-black/10 bg-black/5">
                <Image
                  src={FOUNDER_HERO_IMAGE}
                  alt="Adaeze Wariboko, founder of PropX"
                  fill
                  priority
                  className="object-cover"
                />
                {/* Subtle bottom gradient so the badge below reads cleanly against skin/hair tones */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </Reveal>

            {/* Asymmetrical Floating Badge Overlay */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-6 -right-4 md:-right-8 z-20 bg-white border border-black/10 p-6 shadow-2xl max-w-xs rounded-sm space-y-2"
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-black/40">
                <span>FOUNDER</span>
                <span>EST. 2015</span>
              </div>
              <p className="text-sm font-bold tracking-tight text-black">Adaeze Wariboko</p>
              <p className="text-[11px] text-black/60 leading-tight">
                11 years navigating Port Harcourt&apos;s prime residential & investment corridors.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Editorial Quote + Stat Rail */}
          <div className="lg:col-span-7 lg:pl-8 space-y-10 lg:pt-4">
            <Reveal delay={0.15}>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 block">
                PRINCIPLE STATEMENT
              </span>
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15] text-black">
                &ldquo;PropX started as an app. What people actually wanted wasn&apos;t another login screen—it was someone who picks up the phone and knows the market cold.&rdquo;
              </blockquote>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="pt-6 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="block font-bold text-black uppercase tracking-wider">Adaeze Wariboko</span>
                  <span className="text-black/50 text-[11px]">Founder & Principal Agent</span>
                </div>
                <span className="text-black/40">PORT HARCOURT, NG</span>
              </div>
            </Reveal>

            {/* Stat rail — new addition, replaces the old bare quote block below the fold */}
            <Reveal delay={0.35}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-black/10">
                <div>
                  <span className="text-3xl md:text-4xl font-black font-mono block text-black">220+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-black/50">
                    Properties Sold
                  </span>
                </div>
                <div>
                  <span className="text-3xl md:text-4xl font-black font-mono block text-black">11</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-black/50">
                    Years Active
                  </span>
                </div>
                <div>
                  <span className="text-3xl md:text-4xl font-black font-mono block text-black">3</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-black/50">
                    Core Team
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- PROCESS: THREE STAGES ARCHITECTURAL TIMELINE ---------- */}
        <section className="space-y-16">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-6 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40 block mb-1">
                EXECUTION FRAMEWORK
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">
                How a sale moves.
              </h2>
            </div>
            <p className="text-xs text-black/60 max-w-xs">
              Three transparent stages from valuation to transfer. Nothing hidden in between.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROCESS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="group relative border-t-2 border-black/20 pt-6 transition-all hover:border-black space-y-4">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-3xl font-black text-black">{step.num}</span>
                    <span className="text-[10px] tracking-widest text-black/40 uppercase">{step.subtitle}</span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-black">
                    {step.title}
                  </h3>

                  <p className="text-xs text-black/60 leading-relaxed max-w-[32ch]">
                    {step.body}
                  </p>

                  <div className="pt-4 text-[10px] font-mono text-black/30 group-hover:text-black transition-colors">
                    PHASE {step.num} / 03 ›
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- TEAM SECTION: OFFSET PORTRAIT CARDS ---------- */}
        <section className="space-y-16">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-6 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40 block mb-1">
                OUR PEOPLE
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">
                The team.
              </h2>
            </div>
            <p className="text-xs text-black/60 max-w-xs">
              Small on purpose—everyone here handles their own clients directly.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {TEAM.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.1}>
                <div className="group relative">
                  {/* Portrait Container — square crop, offset number tag, no top-left badge overlap on the face */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-black/5 border border-black/10 shadow-sm">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>

                  {/* Number tag now floats below-left of the frame instead of over the face */}
                  <span className="absolute -top-3 -left-3 bg-black text-white text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-xs shadow-md">
                    {person.num}
                  </span>

                  {/* Metadata */}
                  <div className="space-y-1 border-t border-black/10 pt-3 mt-4">
                    <h3 className="font-bold text-lg tracking-tight text-black">{person.name}</h3>
                    <p className="text-xs text-black/70 font-medium">{person.role}</p>
                    <span className="block text-[10px] font-mono text-black/40 uppercase tracking-wider pt-1">
                      {person.exp}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- BOTTOM CALLOUT / CONTACT BANNER ---------- */}
        <section className="border border-black/10 bg-white p-8 md:p-14 rounded-sm shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-lg">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 block">
              WORK WITH PROPX
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-black tracking-tight">
              Ready to discuss your property?
            </h3>
            <p className="text-xs text-black/60 leading-relaxed">
              Whether you are listing a residence in Old GRA or exploring commercial sites, we provide straightforward guidance from day one.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-all rounded-sm whitespace-nowrap shadow-md"
          >
            <span>Start a conversation</span>
            <span>→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}