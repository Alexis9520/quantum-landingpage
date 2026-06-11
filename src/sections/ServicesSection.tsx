import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Globe, Smartphone, Workflow, Gauge, Shield, Headphones } from "lucide-react";


const services = [
  { icon: Globe, title: "Sistemas Web Modernos", description: "Aplicaciones web responsivas, rápidas y escalables construidas con tecnología de punta." },
  { icon: Smartphone, title: "Apps Moviles", description: "Desarrollo nativo y multiplataforma para iOS y Android que tus usuarios amaran." },
  { icon: Workflow, title: "Software a Medida", description: "Soluciones personalizadas diseñadas específicamente para los procesos de tu empresa." },
  { icon: Gauge, title: "Optimizacion de Procesos", description: "Analizamos y mejoramos tus flujos de trabajo para maximizar la eficiencia." },
  { icon: Shield, title: "Seguridad y Soporte", description: "Tus datos protegidos con los más altos estándares de seguridad y soporte continuo." },
  { icon: Headphones, title: "Consultoria Tecnologica", description: "Te guiamos para tomar las mejores decisiones tecnológicas para tu negocio." },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".serv-heading", { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".serv-heading", start: "top 80%" },
      });
      gsap.fromTo(".service-card", { opacity: 0, y: 40, rotateX: -10 }, {
        opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-q-bg" id="services">
      <div className="section-padding">
        <div className="serv-heading text-center mb-14 opacity-0">
          <span className="font-body text-label text-q-gold uppercase mb-4 block">Servicios</span>
          <h2 className="font-display text-h2 text-white mb-4">
            Desarrollo de software <span className="text-gradient-gold">a medida</span>
          </h2>
          <p className="font-body text-body text-q-text-secondary max-w-2xl mx-auto">
            Somos expertos en transformar ideas en productos digitales.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" style={{ perspective: "600px" }}>
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s }: { service: typeof services[0] }) {
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
      className="service-card bg-q-surface border border-q-border rounded-card p-6 hover:border-q-purple/40 hover:-translate-y-2 hover:shadow-glow-purple transition-all duration-500 group opacity-0 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(138,43,226,0.15) 0%, transparent 50%)` }}
      />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-q-purple/10 border border-q-purple/20 flex items-center justify-center mb-4 group-hover:bg-q-purple/20 group-hover:scale-110 transition-all duration-300">
          <s.icon size={22} className="text-q-purple" />
        </div>
        <h3 className="font-display text-white font-medium mb-2">{s.title}</h3>
        <p className="font-body text-sm text-q-text-secondary leading-relaxed">{s.description}</p>
      </div>
    </div>
  );
}
