import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Clock, Handshake, Lightbulb, Rocket } from "lucide-react";


const reasons = [
  { icon: Handshake, title: "Entendemos tu negocio", description: "No vendemos software genérico. Analizamos tus procesos y creamos soluciones que se adaptan a como trabajas." },
  { icon: Clock, title: "Rápido y sin complicaciones", description: "Implementación ágil sin papeleos excesivos. Tu sistema funcionando en semanas, no en meses." },
  { icon: Lightbulb, title: "Tecnología moderna", description: "Usamos herramientas de última generación para que tu software sea rápido, seguro y escalable." },
  { icon: Rocket, title: "Escalabilidad garantizada", description: "Tu software crece contigo. Desde un local hasta una cadena nacional, nuestra arquitectura lo soporta." },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".why-heading", { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".why-heading", start: "top 80%" },
      });
      gsap.fromTo(".why-card", { opacity: 0, y: 40, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".why-cards", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-q-bg relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(138,43,226,0.05) 0%, transparent 70%)" }} />

      <div className="section-padding relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 why-heading opacity-0">
            <span className="font-body text-label text-q-gold uppercase mb-4 block">Por que Quantum?</span>
            <h2 className="font-display text-h2 text-white mb-4">
              No somos un proveedor mas, somos tu <span className="text-gradient-purple">aliado tecnologico</span>
            </h2>
            <p className="font-body text-body text-q-text-secondary leading-relaxed">
              Trabajamos codo a codo con nuestros clientes. Entendemos el contexto de los negocios
              peruanos porque somos peruanos. Conocemos los retos de las MYPEs y diseñamos
              soluciones que realmente funcionan.
            </p>
          </div>

          <div className="lg:col-span-3 why-cards grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <WhyCard key={i} reason={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCard({ reason: r }: { reason: typeof reasons[0] }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      className="why-card bg-q-surface/60 backdrop-blur-sm border border-q-border rounded-card p-5 hover:border-q-purple/30 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden opacity-0"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(138,43,226,0.12) 0%, transparent 50%)` }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-q-purple/10 border border-q-purple/20 flex items-center justify-center group-hover:bg-q-purple/20 group-hover:scale-110 transition-all duration-300">
            <r.icon size={20} className="text-q-purple" />
          </div>
          <h3 className="font-display text-white font-medium">{r.title}</h3>
        </div>
        <p className="font-body text-sm text-q-text-secondary leading-relaxed">{r.description}</p>
      </div>
    </div>
  );
}
