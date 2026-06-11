import { useEffect, useRef, Suspense } from "react";
import gsap from "gsap";
import { MessageCircle, ArrowRight } from "lucide-react";
import Strands from "../components/webgl/Strands";


function StrandsFallback() {
  return (
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, rgba(138,43,226,0.15) 0%, rgba(236,72,153,0.1) 40%, transparent 70%)" }} />
  );
}

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-content", { opacity: 0, y: 60, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".cta-content", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-q-bg overflow-hidden min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center">
      {/* Strands WebGL Background */}
      <Suspense fallback={<StrandsFallback />}>
        <Strands
          colors={["#6A0DAD", "#FF2D95", "#F5A623"]}
          count={3}
          speed={0.3}
          amplitude={1}
          waviness={2.1}
          thickness={0.7}
          glow={2.05}
          taper={2.6}
          spread={1}
          intensity={0.6}
          saturation={2}
          opacity={1}
          scale={1.2}
          glass={false}
          refraction={1}
          dispersion={1}
          glassSize={1}
          hueShift={0}
        />
      </Suspense>

      {/* Dark vignette edges */}
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 0%, #0B0B0B 75%)" }} />

      <div className="section-padding relative z-10">
        <div className="cta-content max-w-3xl mx-auto text-center opacity-0">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-q-purple/50" />
            <div className="w-2 h-2 rounded-full bg-q-purple animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-q-fuchsia/50" />
          </div>

          <h2 className="font-display text-h2 text-white mb-6">
            Listo para transformar tu negocio con{" "}
            <span className="text-gradient-purple">tecnología</span>?
          </h2>
          <p className="font-body text-lg text-q-text-secondary mb-8 max-w-xl mx-auto" style={{ fontSize: '19.0921px' }}>
            Escríbenos por WhatsApp y conversemos sobre cómo podemos ayudarte.
            Sin compromiso, solo una charla para entender tus necesidades.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="https://wa.me/51965665045" target="_blank" rel="noopener noreferrer"
              className="font-body inline-flex items-center gap-2 bg-gradient-to-r from-q-purple to-q-fuchsia text-white text-sm font-medium px-8 py-4 rounded-button hover:opacity-90 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] transition-all duration-300 shadow-glow-purple">
              <MessageCircle size={18} /> Escribir por WhatsApp <ArrowRight size={16} />
            </a>
          </div>

          <p className="font-body text-xs text-q-text-tertiary mt-6 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            +51 965 665 045 · marketing@quantify.net.pe
          </p>
        </div>
      </div>
    </section>
  );
}
