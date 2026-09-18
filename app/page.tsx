"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Play,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  ArrowUpRight,
  Compass,
  Building2,
  CheckCircle2,
  Send,
  Layers,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  year: string;
  area: string;
  client: string;
  image: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Villa Aurora & Wind Pavilion",
    slug: "villa-aurora",
    category: "Residential",
    location: "Old GRA, Port Harcourt",
    year: "2026",
    area: "620 sqm",
    client: "Aurora Heritage Group",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    description:
      "A subterranean glass and brutalist stone design engineered for seamless ambient wind flow, thermal balance, and acoustic resonance.",
  },
  {
    id: "02",
    title: "Minimalist Concrete Hub",
    slug: "minimalist-concrete-hub",
    category: "Commercial",
    location: "Zurich, Switzerland",
    year: "2025",
    area: "1,450 sqm",
    client: "Voxel Tech International",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    description:
      "Cantilevered monolithic raw concrete layout designed to maximize natural sunlight propagation across multi-tiered corporate workspaces.",
  },
  {
    id: "03",
    title: "Glasshouse Residence",
    slug: "glasshouse-residence",
    category: "Residential",
    location: "Kyoto, Japan",
    year: "2025",
    area: "510 sqm",
    client: "Private Collector",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    description:
      "Frameless low-iron glass facades floating seamlessly over traditional timber decking and reflective Japanese water gardens.",
  },
  {
    id: "04",
    title: "Zenith Tower & Atrium",
    slug: "zenith-tower",
    category: "Interior",
    location: "Berlin, Germany",
    year: "2024",
    area: "3,800 sqm",
    client: "Zenith Cultural Foundation",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    description:
      "An interior atrium restructuring focused on acoustic paneling, patinated brass details, and multi-story vertical green corridors.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Research & Micro-Climate Study",
    desc: "We rigorously analyze natural solar angles, prevailing wind paths, soil topology, and surrounding urban syntax before drawing the first line.",
  },
  {
    num: "02",
    title: "Volumetric Concept & Geometry",
    desc: "Translating physical laws into pure geometric forms—balancing raw concrete structural integrity with light, breathable sanctuary spaces.",
  },
  {
    num: "03",
    title: "Materiality & Tactile Detail",
    desc: "Selecting unrefined local stone, low-carbon glass, patinated metals, and warm acoustic timber to evoke timeless sensory responses.",
  },
  {
    num: "04",
    title: "Precision Execution & Craft",
    desc: "Overseeing engineering down to sub-millimeter tolerances to ensure real-world structures surpass theoretical renderings.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Amazing Architects designed a living space that feels less like a house and more like a meditative, sculptural landscape.",
    author: "Elena Rostova",
    role: "Founder, Zenith Art Foundation",
    location: "Zurich",
  },
  {
    quote:
      "Their radical approach to natural air circulation and structural geometry completely transformed our corporate headquarters.",
    author: "Kenji Takahashi",
    role: "Design Principal, Soar Design Studio",
    location: "Tokyo",
  },
  {
    quote:
      "The precision in material execution and tactile warmth makes Villa Aurora one of the finest addresses in the region.",
    author: "Marcus Vance",
    role: "Managing Director, PropX Properties",
    location: "Port Harcourt",
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  // Filter projects based on active pill
  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  // The project currently shown in the hero carousel
  const heroProject = PROJECTS[heroSlideIndex % PROJECTS.length];

  // Keyboard accessibility for modals
  useEffect(() => {
    const handleKeyDown = (e: { key: string; }) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setVideoModalOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen w-full text-[#111111] font-sans antialiased selection:bg-black selection:text-white overflow-x-hidden">
      {/* PAGE-WIDE FIXED BACKGROUND — stays pinned behind every section as you scroll, so frosted-glass panels have something real to blur */}
      <div className="fixed inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#fcfcfc]/55" />
      </div>
      {}
      <div className="pointer-events-none fixed inset-0 z-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 border-x border-black/5 max-w-7xl mx-auto px-4 md:px-8">
        <div className="border-r border-black/[0.04] h-full" />
        <div className="border-r border-black/[0.04] h-full" />
        <div className="border-r border-black/[0.04] h-full" />
        <div className="border-r border-black/[0.04] h-full hidden md:block" />
        <div className="border-r border-black/[0.04] h-full hidden md:block" />
        <div className="border-r border-black/[0.04] h-full hidden lg:block" />
        <div className="border-r border-black/[0.04] h-full hidden lg:block" />
        <div className="h-full" />
      </div>

      
      <section
        id="hero"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-20 min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden"
      >
        {/* HERO BACKGROUND IMAGE — sits behind the grid lines, changes with the carousel */}
        <div className="absolute inset-0 -z-10">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroProject.id}
              src={heroProject.image}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          {/* Light fade to the page background so the grid lines and text stay legible, while still letting the photo read through */}
          <div className="absolute inset-0 bg-[#fcfcfc]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc]/90 via-[#fcfcfc]/25 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-auto py-6">
          {/* LEFT COLUMN: MAIN HEADLINE & METADATA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-8 bg-black/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/50">
                  New Architecture Concept
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.93] text-black">
                Amazing & <br />
                <span className="relative inline-block">
                  Beautiful wind.
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-black/15" />
                </span>
              </h1>
            </div>

            {/* Metadata Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-black/10 text-xs">
              <div className="space-y-1">
                <span className="block text-[9px] uppercase font-bold tracking-[0.25em] text-black/40">
                  UI / UX
                </span>
                <p className="font-bold text-black text-[13px]">Designed By ARSHAKIR</p>
              </div>

              <div className="space-y-1">
                <span className="block text-[9px] uppercase font-bold tracking-[0.25em] text-black/40">
                  PHOTOGRAPHY
                </span>
                <p className="font-bold text-black text-[13px]">Soar Design Studio</p>
              </div>

              <div className="space-y-1">
                <span className="block text-[9px] uppercase font-bold tracking-[0.25em] text-black/40">
                  ABOUT
                </span>
                <p className="text-black/60 leading-relaxed text-[11px]">
                  On the first floor, it is suitable for shoulders and shoulders with ambient airflow.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: FLOATING COMPOSITIONS */}
          <div className="lg:col-span-5 relative min-h-[460px] md:min-h-[520px] flex flex-col justify-end pt-8 lg:pt-0">
            {/* FLOATING VIDEO MINIATURE CARD */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              onClick={() => setVideoModalOpen(true)}
              className="absolute top-0 left-0 z-20 w-48 sm:w-56 bg-black text-white p-2.5 rounded-sm shadow-2xl cursor-pointer group transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-28 w-full overflow-hidden bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                  alt="Video Process Preview"
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-2 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase">
                <span>VIDEO PROCESS</span>
                <span className="text-white/50">01:42</span>
              </div>
            </motion.div>

            {/* WHITE ABOUT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl border border-white/30 p-6 sm:p-8 pt-10 shadow-lg rounded-sm space-y-4 max-w-sm ml-auto relative z-10 mb-6"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold tracking-tight text-black max-w-[14ch] leading-snug">
                  About Beautiful Wind Project
                </h3>
                <span className="text-[10px] font-mono text-black/40 font-bold">01 / 02</span>
              </div>

              <div className="flex gap-1.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
              </div>

              <p className="text-xs text-black/60 leading-relaxed">
                A study in spatial aerofoil dynamics. Every wall vector guides ambient wind currents to naturally cool internal spaces without motorized air systems.
              </p>

              <button
                type="button"
                onClick={() => setSelectedProject(heroProject)}
                className="w-full pt-2 flex items-center justify-between border-t border-black/5 group cursor-pointer"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-black/40 group-hover:text-black transition-colors">
                  Read Case Study
                </span>
                <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* OVERLAPPING HERO IMAGE — now a frosted-glass carousel tied to heroSlideIndex */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="relative z-0 p-2 rounded-sm bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl"
            >
              <div className="relative h-64 sm:h-72 w-full rounded-sm overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroProject.id}
                    src={heroProject.image}
                    alt={heroProject.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-xs font-mono">
                  <p className="font-bold uppercase tracking-widest">{heroProject.title}</p>
                  <p className="text-[10px] opacity-75">{heroProject.location}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* HERO FOOTER NAVIGATION BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-black/10 pt-6 text-xs gap-4">
          <div className="flex items-center gap-6 font-mono text-[11px] text-black/50">
            <span className="font-black text-black">
              {(heroSlideIndex % PROJECTS.length) + 1}{" / "}{PROJECTS.length.toString().padStart(2, "0")}
            </span>
            <button
              onClick={() => setHeroSlideIndex((prev) => (prev + 1) % PROJECTS.length)}
              className="tracking-widest uppercase text-[10px] font-sans font-bold text-black/80 flex items-center gap-2 hover:text-black transition"
            >
              NEXT PROJECT
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-6 text-black/60 font-semibold text-[11px] tracking-widest">
            <span className="uppercase text-[9px] text-black/40 tracking-[0.25em]">
              OUR SOCIAL MEDIA SITES
            </span>
            <a href="#" className="hover:text-black transition">
              IG
            </a>
            <a href="#" className="hover:text-black transition">
              TW
            </a>
            <a href="#" className="hover:text-black transition">
              FB
            </a>
          </div>
        </div>
      </section>

      {}
      <section id="concept" className="relative z-10 border-t border-black/10 bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Vertical Marker Column */}
            <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-between h-full py-4 border-r border-black/5">
              <span className="text-[10px] font-mono rotate-90 origin-left text-black/40 tracking-widest uppercase">
                PHILOSOPHY // 02
              </span>
              <div className="h-24 w-[1px] bg-black/20 my-12" />
              <span className="text-xs font-bold font-mono">2026</span>
            </div>

            {/* Philosophy Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 text-black text-[10px] font-mono tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5" />
                Design Ethos
              </div>

              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-black">
                We design structures that do not oppose nature, but carve avenues for it to pass through.
              </h2>

              <p className="text-sm md:text-base text-black/60 leading-relaxed max-w-2xl">
                Modern minimalist design shouldn't mean sterile box concrete. We approach architectural spatial planning through environmental physics—light vectors, wind thermal paths, and geological textures—creating living sculptures that evolve across seasons.
              </p>

              {/* Key Architectural Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-black/10">
                <div>
                  <span className="text-3xl md:text-4xl font-black font-mono block text-black">
                    84+
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-black/50">
                    Projects Done
                  </span>
                </div>
                <div>
                  <span className="text-3xl md:text-4xl font-black font-mono block text-black">
                    18
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-black/50">
                    Global Awards
                  </span>
                </div>
                <div>
                  <span className="text-3xl md:text-4xl font-black font-mono block text-black">
                    12 Yrs
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-black/50">
                    Studio Practice
                  </span>
                </div>
                <div>
                  <span className="text-3xl md:text-4xl font-black font-mono block text-black">
                    145k
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-black/50">
                    Sqm Designed
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Concept Card */}
            <div className="lg:col-span-4 relative">
              <div className="bg-[#f2f2f2] p-8 border border-black/10 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
                <Building2 className="w-10 h-10 text-black stroke-[1.5]" />
                <h3 className="text-xl font-bold tracking-tight text-black">
                  Spatial Sculptures
                </h3>
                <p className="text-xs text-black/60 leading-relaxed">
                  Every structural angle serves a twin function: load distribution and micro-climate thermal control.
                </p>
                <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-black/50">LOCATION STUDY</span>
                  <span className="font-bold text-black">PORT HARCOURT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-2 w-2 bg-black" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/50">
                Selected Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black">
              Featured Projects.
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            {["All", "Residential", "Commercial", "Interior"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 transition ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "bg-black/5 text-black/70 hover:bg-black/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer border border-white/30 bg-white/10 backdrop-blur-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-neutral-100 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-black uppercase">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-black text-white h-8 w-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Project Details */}
              <div className="p-2 space-y-3">
                <div className="flex justify-between items-baseline font-mono text-xs text-black/50">
                  <span>
                    {project.id} // {project.year}
                  </span>
                  <span>{project.area}</span>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-black tracking-tight text-black group-hover:text-black/70 transition">
                    {project.title}
                  </h3>
                  <span className="text-xs font-bold text-black/40">
                    {project.location}
                  </span>
                </div>

                <p className="text-xs text-black/60 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section
        id="process"
        className="relative z-10 border-t border-black/10 bg-black text-white py-28"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/50 block mb-2">
              Execution Blueprint
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Our Architectural Process.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="relative border-l border-white/20 pl-6 space-y-4 py-2 group hover:border-white transition duration-300"
              >
                <span className="text-4xl font-mono font-black text-white/20 group-hover:text-white transition duration-300">
                  {step.num}
                </span>

                <h3 className="text-xl font-bold tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="text-xs text-white/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="press" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28">
        <div className="bg-white/10 backdrop-blur-xl border border-white/30 p-8 md:p-16 shadow-lg relative overflow-hidden">
          <div className="flex justify-between items-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
              Client & Press Recognition
            </span>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
                  )
                }
                className="h-10 w-10 border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
                  )
                }
                className="h-10 w-10 border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <blockquote className="text-2xl md:text-4xl font-black tracking-tight text-black leading-tight max-w-4xl mb-10">
            "{TESTIMONIALS[currentTestimonial].quote}"
          </blockquote>

          <div className="flex items-center gap-4 font-mono text-xs">
            <div className="h-8 w-8 bg-black text-white flex items-center justify-center font-bold">
              {TESTIMONIALS[currentTestimonial].author[0]}
            </div>
            <div>
              <p className="font-bold text-black uppercase">
                {TESTIMONIALS[currentTestimonial].author}
              </p>
              <p className="text-black/50 text-[10px]">
                {TESTIMONIALS[currentTestimonial].role} —{" "}
                {TESTIMONIALS[currentTestimonial].location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer id="contact" className="relative z-10 border-t border-black/10 bg-[#f8f8f8] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            {/* CTA Heading */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40 block">
                Start a Dialogue
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-black leading-tight">
                Let's build something remarkable together.
              </h2>
              <p className="text-sm text-black/60 max-w-md leading-relaxed">
                We accept a limited number of bespoke architectural commissions annually to ensure uncompromising conceptual focus.
              </p>

              <div className="pt-6 space-y-2 text-xs font-mono text-black/70">
                <p>
                  <strong>STUDIO LOCATION:</strong> Port Harcourt / Zurich / Kyoto
                </p>
                <p>
                  <strong>DIRECT ENQUIRIES:</strong> studio@amazingarchitects.com
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/30 p-8 shadow-md">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
                  <h3 className="text-2xl font-bold tracking-tight">Enquiry Received</h3>
                  <p className="text-xs text-black/60">
                    Our lead architect will review your project parameters within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black/50 mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full border border-black/15 p-3 text-xs focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black/50 mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="sarah@domain.com"
                      className="w-full border border-black/15 p-3 text-xs focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black/50 mb-1">
                      Project Brief / Location
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe site area, budget expectations, and timing..."
                      className="w-full border border-black/15 p-3 text-xs focus:outline-none focus:border-black resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white p-4 font-bold text-xs uppercase tracking-widest hover:bg-black/80 transition shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Copyright & Social Bar */}
          <div className="border-t border-black/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-black/50 font-mono gap-4">
            <p>© 2026 AMAZING ARCHITECTS STUDIO. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 font-semibold">
              <a href="#" className="hover:text-black">
                IG
              </a>
              <a href="#" className="hover:text-black">
                TW
              </a>
              <a href="#" className="hover:text-black">
                FB
              </a>
              <a href="#" className="hover:text-black">
                LI
              </a>
            </div>
          </div>
        </div>
      </footer>

      {}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white/10 backdrop-blur-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/30 shadow-2xl relative p-6 sm:p-10 space-y-6">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-black text-white hover:bg-black/80 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black/50">
                {selectedProject.category} // {selectedProject.year}
              </span>
              <h3 className="text-3xl font-black tracking-tight text-black">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-bold text-black/60">
                {selectedProject.location} — {selectedProject.area}
              </p>
            </div>

            <div className="h-80 w-full overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-black/70 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="pt-4 border-t border-black/10 flex justify-between items-center">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-black text-white px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-black/80 transition"
              >
                Inquire About Similar Architecture
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-black border border-white/20 max-w-4xl w-full relative p-4 space-y-4">
            <div className="flex justify-between items-center text-white text-xs font-mono">
              <span>VIDEO PROCESS // AMAZING ARCHITECTS STUDIO</span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1 hover:text-white/60"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video w-full bg-neutral-900 flex items-center justify-center relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Video poster"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-3">
                <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <p className="font-mono text-xs uppercase tracking-widest">
                  Architectural Aerodynamic Stream Preview
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}