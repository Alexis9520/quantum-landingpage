import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Target, Users, Code2, TrendingUp, ArrowRight } from "lucide-react";


const values = [
  { icon: Target, title: "Innovación", desc: "Tecnología avanzada que impulsa tu negocio al siguiente nivel.", color: "text-q-purple", border: "border-q-purple/20", bg: "bg-q-purple/5" },
  { icon: Users, title: "Cercanía", desc: "Entendemos las necesidades de MYPEs y pequeños negocios peruanos.", color: "text-q-fuchsia", border: "border-q-fuchsia/20", bg: "bg-q-fuchsia/5" },
  { icon: Code2, title: "Calidad", desc: "Código limpio, escalable y mantenible con las mejores prácticas.", color: "text-q-gold", border: "border-q-gold/20", bg: "bg-q-gold/5" },
  { icon: TrendingUp, title: "Resultados", desc: "Software que resuelve problemas reales y genera impacto medible.", color: "text-cyan-400", border: "border-cyan-400/20", bg: "bg-cyan-400/5" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-text", { opacity: 0, x: -60 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".about-text", start: "top 80%" },
      });
      gsap.fromTo(".value-card", { opacity: 0, y: 40, rotateX: -15 }, {
        opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".value-cards", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-q-bg">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="about-text">
              <span className="font-body text-label text-q-gold uppercase mb-4 block">Sobre Nosotros</span>
              <h2 className="font-display text-h2 text-white mb-6">
                Somos un equipo apasionado por la{" "}
                <span className="text-gradient-purple">tecnología</span>
              </h2>
              <p className="font-body text-body text-q-text-secondary leading-relaxed mb-4">
                En <strong className="text-white">Quantum</strong> llevamos 5 años desarrollando soluciones
                digitales inteligentes para negocios peruanos. Somos un equipo de 4 personas comprometidas
                con transformar la manera en que las empresas operan a través de la tecnología.
              </p>
              <p className="font-body text-body text-q-text-secondary leading-relaxed mb-6">
                Nos especializamos en crear software a medida para restaurantes, boticas, complejos
                deportivos y cualquier negocio que busque optimizar sus procesos con herramientas
                tecnológicas modernas e intuitivas.
              </p>
              <Link to="/about"
                className="font-body inline-flex items-center gap-2 text-sm text-q-purple hover:text-q-fuchsia transition-colors group">
                Conócenos <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="value-cards grid grid-cols-2 gap-4" style={{ perspective: "600px" }}>
              {values.map((v, i) => (
                <div key={i} className={`value-card ${v.bg} border ${v.border} rounded-card p-6 hover:-translate-y-2 hover:shadow-glow-purple transition-all duration-500 group cursor-default`}>
                  <v.icon size={28} className={`${v.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="font-display text-white font-medium mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-q-text-secondary">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
