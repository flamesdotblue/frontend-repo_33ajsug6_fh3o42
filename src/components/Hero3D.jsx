import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-black/60 ring-1 ring-white/10">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for depth (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20 backdrop-blur">
          <Sparkles size={14} /> Futuristic 3D To‑Do
        </div>
        <h1 className="font-bold tracking-tight text-3xl sm:text-5xl md:text-6xl">
          Organize your mind in 3D
        </h1>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/80">
          A cyberpunk‑inspired task system with shimmering gradients, motion, and a living 3D scene.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#tasks"
            className="group inline-flex items-center gap-2 rounded-xl bg-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/30 transition hover:translate-y-[-2px] hover:bg-fuchsia-500"
          >
            <Rocket size={16} className="transition-transform group-hover:rotate-12" />
            Start Creating
          </a>
          <a
            href="#overview"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
          >
            Preview Overview
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
