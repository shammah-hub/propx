import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { LISTINGS } from "@/lib/image";

export function generateStaticParams() {
  return LISTINGS.map((l) => ({ slug: l.slug }));
}

// Static content until these become per-listing fields on the Listing type.
const HIGHLIGHTS = [
  "24/7 estate security",
  "Private borehole & water treatment",
  "Dedicated generator house",
  "Fitted kitchen, imported finishes",
  "Ensuite in all bedrooms",
  "Paved compound & gated parking",
];

const AGENT = {
  name: "Adaeze Wariboko",
  role: "Founder & Principal Agent",
  phone: "+234 800 000 0000",
  email: "hello@propx.ng",
};

export default async function ListingDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = LISTINGS.find((l) => l.slug === slug);
  if (!listing) return notFound();

  const similar = LISTINGS.filter(
    (l) => l.slug !== listing.slug && l.tag === listing.tag
  ).slice(0, 3);

  return (
    <div className="relative min-h-screen w-full bg-[#fcfcfc] text-[#111111] overflow-hidden font-sans">
      {/* ---------- SOFT BACKGROUND SHAPES ----------
          Gives the frosted panels (sidebar card, chips) something real to
          diffuse. Kept low-opacity so the page overall still reads white. */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[60vh] -left-32 h-[460px] w-[460px] rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute top-[90vh] right-[-180px] h-[540px] w-[540px] rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute bottom-[-200px] left-1/3 h-[480px] w-[480px] rounded-full bg-pink-200/20 blur-3xl" />
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

      {/* ---------- HERO SECTION: EDITORIAL BANNER ---------- */}
      <section className="relative h-[70svh] min-h-[520px] w-full overflow-hidden text-white">
        <Image
          src={listing.image}
          alt={listing.location}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

        <div className="relative z-10 mx-auto max-w-7xl h-full flex flex-col justify-between p-6 md:p-12">
          {/* Top Navigation Bar — now includes a breadcrumb trail */}
          <div className="flex items-center justify-between text-xs font-mono tracking-widest uppercase">
            <div className="flex items-center gap-3">
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md transition hover:bg-white hover:text-black"
              >
                <span>←</span>
                <span>ALL LISTINGS</span>
              </Link>
              <span className="hidden sm:inline text-white/40 normal-case tracking-normal font-sans text-[11px]">
                Listings / {listing.location.split(",")[0]} / {listing.slug}
              </span>
            </div>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              {listing.tag}
            </span>
          </div>

          {/* Bottom Hero Content */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-mono text-white/70 tracking-widest uppercase">
              <span>REF. ARCH-{listing.slug.toUpperCase()}</span>
              <span>/</span>
              <span>PORT HARCOURT</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              {listing.price}
            </h1>
            
            <p className="text-lg md:text-2xl font-light text-white/90 max-w-2xl tracking-wide">
              {listing.location}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- MAIN CONTENT LAYOUT ---------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          
          {/* LEFT COLUMN: DESCRIPTION, HIGHLIGHTS, GALLERY, NEIGHBORHOOD */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Overview / Narrative */}
            <Reveal className="space-y-6 border-b border-black/10 pb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40 block">
                PROJECT OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">
                About this property.
              </h2>
              <p className="text-base leading-relaxed text-black/70 max-w-[62ch]">
                {listing.description}
              </p>
            </Reveal>

            {/* Property Highlights — new section */}
            <Reveal className="space-y-6 border-b border-black/10 pb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40 block">
                PROPERTY HIGHLIGHTS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {HIGHLIGHTS.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-black/70">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Asymmetrical Gallery Layout */}
            {listing.gallery && listing.gallery.length > 0 && (
              <section className="space-y-6">
                <Reveal className="flex justify-between items-baseline border-b border-black/10 pb-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40">
                    ARCHITECTURAL PHOTOGRAPHY
                  </h3>
                  <span className="font-mono text-xs text-black/40">
                    01 / {listing.gallery.length.toString().padStart(2, "0")}
                  </span>
                </Reveal>

                {/* Asymmetric Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {listing.gallery.map((src, i) => (
                    <Reveal key={i} delay={i * 0.1} className={i === 0 ? "md:col-span-2" : ""}>
                      <div className={`group relative overflow-hidden rounded-sm border border-black/10 bg-black/5 shadow-md ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                        <Image
                          src={src}
                          alt={`${listing.location} photo ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-2 left-2 bg-white/70 backdrop-blur-md border border-white/40 px-2 py-1 text-[9px] font-mono text-black">
                          FIG. { (i + 1).toString().padStart(2, "0") }
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            {/* Neighborhood — new section */}
            <Reveal className="space-y-6 border-b border-black/10 pb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40 block">
                THE NEIGHBORHOOD
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-black">
                Living in {listing.location.split(",")[0]}.
              </h3>
              <p className="text-sm leading-relaxed text-black/70 max-w-[62ch]">
                A well-established Port Harcourt address, close to schools, private hospitals,
                and the main commercial corridors. Quiet, low-traffic streets with a strong
                resident association and consistent power/security infrastructure — the
                practical basics that hold long-term value here.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-black/10 text-xs font-mono">
                <div>
                  <span className="block text-black/40 uppercase tracking-widest mb-1">Schools</span>
                  <span className="font-bold text-black">~10 min drive</span>
                </div>
                <div>
                  <span className="block text-black/40 uppercase tracking-widest mb-1">Hospital</span>
                  <span className="font-bold text-black">~8 min drive</span>
                </div>
                <div>
                  <span className="block text-black/40 uppercase tracking-widest mb-1">City Centre</span>
                  <span className="font-bold text-black">~15 min drive</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: STICKY SPECS, AGENT CARD, ENQUIRY CTA */}
          <div className="lg:col-span-5 lg:pl-6 space-y-8">
            <Reveal delay={0.15}>
              <div className="sticky top-28 space-y-8">
                
                {/* Key Specifications — now frosted glass, grid layout instead of a bare list */}
                <div className="bg-white/30 backdrop-blur-xl backdrop-saturate-150 border border-white/50 p-8 md:p-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_8px_30px_-6px_rgba(0,0,0,0.12)] rounded-sm space-y-8">
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                      KEY SPECIFICATIONS
                    </span>
                    <span className="font-mono text-xs font-bold text-black">PROPX</span>
                  </div>

                  <div className="grid grid-cols-2 gap-6 text-xs font-mono">
                    <div className="space-y-1 border-b border-black/5 pb-3">
                      <span className="block text-black/40 uppercase tracking-wider">Specs</span>
                      <span className="font-bold text-black">{listing.specs}</span>
                    </div>
                    <div className="space-y-1 border-b border-black/5 pb-3">
                      <span className="block text-black/40 uppercase tracking-wider">Status</span>
                      <span className="font-bold text-black uppercase">{listing.tag}</span>
                    </div>
                    <div className="space-y-1 border-b border-black/5 pb-3 col-span-2">
                      <span className="block text-black/40 uppercase tracking-wider">Location</span>
                      <span className="font-bold text-black">{listing.location}</span>
                    </div>
                    <div className="space-y-1 col-span-2">
                      <span className="block text-black/40 uppercase tracking-wider">Price</span>
                      <span className="font-black text-lg text-black">{listing.price}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="flex w-full items-center justify-between bg-black text-white px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:bg-black/80 rounded-sm shadow-md group"
                    >
                      <span>Enquire about property</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>

                  <p className="text-[10px] text-black/40 text-center uppercase tracking-wider">
                    Direct Line: Private Agent Viewings Available
                  </p>
                </div>

                {/* Agent Card — new section */}
                <div className="bg-white/30 backdrop-blur-xl backdrop-saturate-150 border border-white/50 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_8px_30px_-6px_rgba(0,0,0,0.12)] rounded-sm flex items-center gap-4">
                  <div className="h-14 w-14 shrink-0 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                    {AGENT.name[0]}
                  </div>
                  <div className="min-w-0 space-y-0.5">
                    <p className="text-sm font-bold text-black truncate">{AGENT.name}</p>
                    <p className="text-[11px] text-black/60">{AGENT.role}</p>
                    <div className="flex gap-3 pt-1 text-[10px] font-mono">
                      <a href={`tel:${AGENT.phone}`} className="text-black hover:underline">
                        Call
                      </a>
                      <span className="text-black/20">/</span>
                      <a href={`mailto:${AGENT.email}`} className="text-black hover:underline">
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

        {/* ---------- SIMILAR LISTINGS — new section ---------- */}
        {similar.length > 0 && (
          <section className="mt-24 pt-16 border-t border-black/10 space-y-10">
            <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40 block mb-1">
                  YOU MAY ALSO LIKE
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">
                  Similar listings.
                </h2>
              </div>
              <Link
                href="/listings"
                className="text-xs font-bold uppercase tracking-widest text-black/50 hover:text-black transition"
              >
                View all →
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similar.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.1}>
                  <Link
                    href={`/listings/${item.slug}`}
                    className="group block border border-black/10 bg-white p-3 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="relative h-56 w-full overflow-hidden bg-black/5 mb-4">
                      <Image
                        src={item.image}
                        alt={item.location}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-mono font-bold tracking-widest text-black uppercase">
                        {item.tag}
                      </div>
                    </div>
                    <div className="p-1 space-y-1">
                      <h3 className="text-lg font-black tracking-tight text-black group-hover:text-black/70 transition">
                        {item.price}
                      </h3>
                      <p className="text-xs text-black/50">{item.location}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}