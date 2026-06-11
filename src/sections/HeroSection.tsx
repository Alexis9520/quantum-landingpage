import { useEffect, useRef, Suspense } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LightPillar from "../components/threejs/LightPillar";

function PillarFallback() {
  return (
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(138,43,226,0.3) 0%, rgba(245,158,11,0.15) 40%, transparent 70%)" }} />
  );
}

export default function HeroSection() {
  const sloganRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(sloganRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(headingRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 }, "-=0.3")
      .fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-q-bg pt-16">
      {/* LightPillar Three.js Background */}
      <Suspense fallback={<PillarFallback />}>
        <LightPillar
          topColor="#6A0DAD"
          bottomColor="#F5A623"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </Suspense>

      {/* Dark vignette for text readability */}
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.7) 70%, #0B0B0B 100%)" }} />

      <div className="relative z-10 section-padding max-w-4xl mx-auto w-full text-center">
        <div ref={sloganRef} className="flex items-center justify-center gap-3 mb-6 opacity-0">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-q-purple/50" />
          <span className="font-body text-xs tracking-[0.15em] uppercase text-q-gold">Soluciones digitales inteligentes</span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-q-fuchsia/50" />
        </div>

        <h1 ref={headingRef} className="font-display text-[clamp(36px,8vw,80px)] leading-[1.05] tracking-[-0.02em] text-white mb-8 opacity-0">
          <span className="block">Innovación digital</span>
          <span className="block">
            <span className="text-gradient-purple">a la medida</span> de tu empresa.
          </span>
        </h1>

        <p ref={subRef} className="font-body text-lg text-q-text-secondary max-w-2xl mx-auto mb-10 opacity-0" style={{ fontSize: '19.0921px' }}>
          Somos <strong className="text-white">Quantum</strong>, especialistas en desarrollo de software
          a medida para restaurantes, boticas, canchas deportivas y negocios que buscan crecer con tecnología.
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4 opacity-0">
          <a href="https://wa.me/51965665045" target="_blank" rel="noopener noreferrer"
            className="font-body inline-flex items-center gap-2 bg-gradient-to-r from-q-purple to-q-fuchsia text-white text-sm font-medium px-8 py-4 rounded-button hover:opacity-90 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(138,43,226,0.4)] transition-all duration-300 shadow-glow-purple">
            Hablemos de tu proyecto <ArrowRight size={16} />
          </a>
          <Link to="/products"
            className="font-body inline-flex items-center gap-2 bg-q-btn-dark text-white text-sm font-medium px-6 py-4 rounded-button border border-q-border hover:border-q-purple hover:bg-q-purple/5 transition-all duration-300">
            Conoce nuestros productos
          </Link>
        </div>
      </div>
    </section>
  );
}
