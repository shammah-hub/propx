import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { LISTINGS } from "@/lib/image";

export default function ListingsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#fcfcfc] text-[#111111] overflow-hidden font-sans">
      {/* ---------- FIXED SOFT BACKGROUND SHAPES ----------
          position: fixed (not absolute) so this stays pinned to the
          viewport at every scroll depth — matching the homepage's
          approach. The previous absolute version stretched across the
          full page height, so at any given scroll position the blobs
          could be screens away from the actual cards, leaving nothing
          for backdrop-blur to diffuse. Fixed guarantees a blob is
          always present behind whatever's on screen. */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-blue-200/25 blur-3xl" />
        <div className="absolute top-1/3 right-[-160px] h-[520px] w-[520px] rounded-full bg-amber-200/25 blur-3xl" />
        <div className="absolute bottom-[-200px] left-1/4 h-[460px] w-[460px] rounded-full bg-pink-200/25 blur-3xl" />
        <div className="absolute top-2/3 right-1/4 h-[380px] w-[380px] rounded-full bg-black/[0.06] blur-3xl" />
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

      {/* ---------- PAGE HEADER ---------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 md:pt-28 md:pb-20">
        <Reveal>
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40 block mb-4">
            PORT HARCOURT / CURATED PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-black leading-none">
            All Listings.
          </h1>
          <p className="text-sm md:text-base text-black/60 max-w-xl mt-6 leading-relaxed">
            A curated selection of properties, each individually assessed for
            architectural merit, location value, and long-term investment
            quality.
          </p>
        </Reveal>
      </section>

      {/* ---------- LISTINGS GRID ---------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {LISTINGS.map((listing, i) => (
            <Reveal key={listing.slug} delay={i * 0.08}>
              <Link
                href={`/listings/${listing.slug}`}
                className="group relative block border border-white/50 bg-white/30 backdrop-blur-xl backdrop-saturate-150 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_8px_30px_-6px_rgba(0,0,0,0.12)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_16px_40px_-8px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black/5 mb-6">
                  <Image
                    src={listing.image}
                    alt={listing.location}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-black uppercase">
                    {listing.tag}
                  </div>
                  <div className="absolute top-4 right-4 bg-black text-white h-8 w-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    →
                  </div>
                </div>

                {/* Details */}
                <div className="p-2 space-y-3">
                  <div className="flex justify-between items-baseline font-mono text-xs text-black/50">
                    <span>REF. ARCH-{listing.slug.toUpperCase()}</span>
                    <span>{listing.specs}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-black tracking-tight text-black group-hover:text-black/70 transition">
                      {listing.price}
                    </h3>
                    <span className="text-xs font-bold text-black/40 text-right">
                      {listing.location}
                    </span>
                  </div>

                  <p className="text-xs text-black/60 line-clamp-2 leading-relaxed">
                    {listing.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}