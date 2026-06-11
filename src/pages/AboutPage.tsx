import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Target, Eye, Heart, Shield, Lightbulb, Users, Zap, Award,
  MapPin, Calendar, Mail, Phone,
  Search, PenTool, Code2, TestTube, Rocket, HeadphonesIcon,
  Trophy, Code
} from "lucide-react";
import SEO from "../components/SEO";


const stats = [
  { value: "5+", label: "Años de experiencia", icon: Trophy },
  { value: "4", label: "Productos desarrollados", icon: Zap },
  { value: "4+", label: "Sectores atendidos", icon: Users },
  { value: "100%", label: "Soporte post-lanzamiento", icon: HeadphonesIcon },
];

const valores = [
  { icon: Heart, title: "Pasión", desc: "Amamos lo que hacemos. Cada línea de código la escribimos con el compromiso de crear algo que realmente importa.", color: "#EC4899", border: "border-q-fuchsia/20", bg: "bg-q-fuchsia/5", glow: "hover:shadow-[0_8px_32px_rgba(236,72,153,0.15)]" },
  { icon: Shield, title: "Integridad", desc: "Transparencia total en cada proyecto. Sin costos ocultos, sin promesas exageradas. Dilo, hazlo.", color: "#8A2BE2", border: "border-q-purple/20", bg: "bg-q-purple/5", glow: "hover:shadow-glow-purple" },
  { icon: Lightbulb, title: "Innovación", desc: "Adoptamos tecnologías modernas y mejores prácticas. Tu software no envejece, evoluciona.", color: "#F59E0B", border: "border-q-gold/20", bg: "bg-q-gold/5", glow: "hover:shadow-[0_8px_32px_rgba(245,158,11,0.15)]" },
  { icon: Users, title: "Cercanía", desc: "Somos peruanos entendiendo negocios peruanos. Comunicación directa, sin intermediarios ni burocracia.", color: "#22d3ee", border: "border-cyan-400/20", bg: "bg-cyan-400/5", glow: "hover:shadow-[0_8px_32px_rgba(34,211,238,0.15)]" },
  { icon: Target, title: "Resultados", desc: "No entregamos código, entregamos soluciones que resuelven problemas reales y generan impacto medible.", color: "#8A2BE2", border: "border-q-purple/20", bg: "bg-q-purple/5", glow: "hover:shadow-glow-purple" },
  { icon: Award, title: "Calidad", desc: "Código limpio, escalable y mantenible. Pruebas rigurosas. Documentación clara. Software que dura.", color: "#EC4899", border: "border-q-fuchsia/20", bg: "bg-q-fuchsia/5", glow: "hover:shadow-[0_8px_32px_rgba(236,72,153,0.15)]" },
];

const proceso = [
  { step: "01", icon: Search, title: "Descubrimiento", desc: "Nos sentamos contigo a entender tu negocio, tus procesos y tus dolores. Escuchamos antes de proponer." },
  { step: "02", icon: PenTool, title: "Diseño", desc: "Creamos mockups, flujos de usuario y la arquitectura del sistema. Ves cómo quedará antes de construirlo." },
  { step: "03", icon: Code2, title: "Desarrollo", desc: "Codificamos con metodologías ágiles. Entregas parciales cada 2 semanas para que veas el progreso en tiempo real." },
  { step: "04", icon: TestTube, title: "Pruebas", desc: "Testing exhaustivo: funcionales, de usabilidad, de rendimiento y de seguridad. Todo debe funcionar perfecto." },
  { step: "05", icon: Rocket, title: "Lanzamiento", desc: "Despliegue en producción, capacitación de tu equipo y documentación completa. Tu sistema listo para volar." },
  { step: "06", icon: HeadphonesIcon, title: "Soporte", desc: "No te dejamos solo. Soporte técnico continuo, mejoras periódicas y acompañamiento post-lanzamiento." },
];

const techs = [
  "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB",
  "React Native", "AWS", "Docker", "Git", "Figma"
];

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-hero", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

      gsap.fromTo(".stat-card", { opacity: 0, y: 30, scale: 0.9 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".stats-grid", start: "top 85%" },
      });

      gsap.fromTo(".mission-card", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".mission-vision-grid", start: "top 80%" },
      });

      gsap.fromTo(".vision-card", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".mission-vision-grid", start: "top 80%" },
      });

      gsap.fromTo(".valor-card", { opacity: 0, y: 40, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".valores-grid", start: "top 80%" },
      });

      gsap.fromTo(".step-card", { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".proceso-container", start: "top 80%" },
      });

      gsap.fromTo(".tech-badge", { opacity: 0, scale: 0.8 }, {
        opacity: 1, scale: 1, duration: 0.4, stagger: 0.06, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".tech-grid", start: "top 85%" },
      });
    }, sectionRef);
    window.scrollTo(0, 0);
    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-16 bg-q-bg" ref={sectionRef}>
      <SEO
        title="Nosotros"
        description="Conoce a Quantum: 5 años desarrollando software a medida para negocios peruanos. Misión, visión, valores y stack tecnológico."
        pathname="/about"
      />
      {/* ========== HERO ========== */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(138,43,226,0.08) 0%, transparent 60%)" }} />
        <div className="section-padding relative z-10">
          <div className="about-hero text-center max-w-3xl mx-auto opacity-0">
            <span className="font-body text-label text-q-gold uppercase mb-4 block">Nosotros</span>
            <h1 className="font-display text-display text-white mb-6">
              Somos <span className="text-gradient-purple">Quantum</span>
            </h1>
            <p className="font-body text-lg text-q-text-secondary leading-relaxed mb-8" style={{ fontSize: '19.0921px' }}>
              Una empresa peruana de desarrollo de software dedicada a transformar
              negocios locales en negocios inteligentes mediante tecnología de vanguardia.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="font-body flex items-center gap-2 text-sm text-q-text-secondary">
                <MapPin size={16} className="text-q-purple" /> Huancayo, Peru
              </div>
              <div className="font-body flex items-center gap-2 text-sm text-q-text-secondary">
                <Calendar size={16} className="text-q-fuchsia" /> 5 años operando
              </div>
              <div className="font-body flex items-center gap-2 text-sm text-q-text-secondary">
                <Code size={16} className="text-q-gold" /> Software a medida
              </div>
            </div>

            <div className="stats-grid grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-xl mx-auto">
              {stats.map((s, i) => (
                <div key={i} className="stat-card bg-q-surface border border-q-border rounded-card p-5 hover:border-q-purple/30 hover:-translate-y-1 hover:shadow-glow-purple transition-all duration-500 opacity-0">
                  <s.icon size={20} className="text-q-purple mb-2 mx-auto" />
                  <p className="font-display text-2xl font-medium text-gradient-purple">{s.value}</p>
                  <p className="font-body text-xs text-q-text-tertiary">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== MISION & VISION ========== */}
      <section className="py-20 lg:py-28 bg-q-surface/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(138,43,226,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)" }} />

        <div className="section-padding relative z-10">
          <div className="mission-vision-grid grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mision */}
            <div className="mission-card bg-q-surface border border-q-border rounded-card p-8 lg:p-10 opacity-0 hover:border-q-purple/30 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-q-purple/10 border border-q-purple/20 flex items-center justify-center group-hover:bg-q-purple/20 group-hover:scale-110 transition-all duration-300">
                  <Target size={28} className="text-q-purple" />
                </div>
                <h2 className="font-display text-h3 text-white">Nuestra Mision</h2>
              </div>
              <p className="font-body text-body text-q-text-secondary leading-relaxed">
                Democratizar la tecnología para los negocios peruanos. 
                Creemos que toda empresa, sin importar su tamaño, merece acceso a 
                herramientas tecnológicas modernas que le permitan competir, crecer 
                y prosperar en el mercado digital.
              </p>
              <p className="font-body text-sm text-q-text-tertiary mt-4 leading-relaxed">
                Nuestro trabajo es cerrar la brecha digital que separa a las MYPEs 
                peruanas del futuro, con software intuitivo, accesible y que realmente funciona.
              </p>
            </div>

            {/* Vision */}
            <div className="vision-card bg-q-surface border border-q-border rounded-card p-8 lg:p-10 opacity-0 hover:border-q-fuchsia/30 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-q-fuchsia/10 border border-q-fuchsia/20 flex items-center justify-center group-hover:bg-q-fuchsia/20 group-hover:scale-110 transition-all duration-300">
                  <Eye size={28} className="text-q-fuchsia" />
                </div>
                <h2 className="font-display text-h3 text-white">Nuestra Vision</h2>
              </div>
              <p className="font-body text-body text-q-text-secondary leading-relaxed">
                Ser la empresa de desarrollo de software de referencia para MYPEs 
                y pequeños negocios en el Perú, reconocida por transformar la manera 
                en que las empresas operan a través de soluciones tecnológicas 
                inteligentes y accesibles.
              </p>
              <p className="font-body text-sm text-q-text-tertiary mt-4 leading-relaxed">
                Imaginamos un Perú donde cada negocio, desde el restaurante de la 
                esquina hasta la cadena de canchas deportivas, tenga tecnología de 
                clase mundial a su alcance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALORES ========== */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(138,43,226,0.05) 0%, transparent 50%)" }} />

        <div className="section-padding relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-body text-label text-q-gold uppercase mb-4 block">Lo que nos define</span>
            <h2 className="font-display text-h2 text-white mb-4">
              Nuestros <span className="text-gradient-purple">Valores</span>
            </h2>
            <p className="font-body text-body text-q-text-secondary">
              Principios que guían cada decisión, cada línea de código y cada relación con nuestros clientes.
            </p>
          </div>

          <div className="valores-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {valores.map((v, i) => (
              <div
                key={i}
                className={`valor-card ${v.bg} border ${v.border} rounded-card p-6 hover:-translate-y-2 ${v.glow} hover:border-opacity-50 transition-all duration-500 group opacity-0`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-q-purple/10 border border-q-purple/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <v.icon size={22} style={{ color: v.color }} />
                  </div>
                  <h3 className="font-display text-white font-medium text-lg">{v.title}</h3>
                </div>
                <p className="font-body text-sm text-q-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESO ========== */}
      <section className="py-24 lg:py-32 bg-q-surface/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(245,158,11,0.05) 0%, transparent 50%)" }} />

        <div className="section-padding relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-body text-label text-q-gold uppercase mb-4 block">Como trabajamos</span>
            <h2 className="font-display text-h2 text-white mb-4">
              Nuestra <span className="text-gradient-gold">Metodología</span>
            </h2>
            <p className="font-body text-body text-q-text-secondary">
              Un proceso probado de 6 pasos que garantiza que tu proyecto se entregue a tiempo, 
              dentro del presupuesto y superando tus expectativas.
            </p>
          </div>

          <div className="proceso-container max-w-4xl mx-auto relative">
            {/* Timeline line - desktop */}
            <div className="hidden lg:block absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-q-purple/40 via-q-fuchsia/40 to-q-gold/40" />

            <div className="flex flex-col gap-6">
              {proceso.map((p, i) => (
                <div key={i} className="step-card flex gap-5 lg:gap-6 opacity-0">
                  {/* Step number + icon */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-q-surface border border-q-border flex items-center justify-center relative z-10 group-hover:border-q-purple/50 transition-all duration-300">
                      <p.icon size={22} className="text-q-purple" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-q-surface border border-q-border rounded-card p-5 lg:p-6 hover:border-q-purple/30 hover:-translate-y-1 transition-all duration-500 group">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-body text-xs text-q-purple font-medium">Paso {p.step}</span>
                      <div className="h-px flex-1 bg-q-border/60" />
                    </div>
                    <h3 className="font-display text-white font-medium text-lg mb-2">{p.title}</h3>
                    <p className="font-body text-sm text-q-text-secondary leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== TECNOLOGIAS ========== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(138,43,226,0.04) 0%, transparent 50%)" }} />

        <div className="section-padding relative z-10 text-center">
          <span className="font-body text-label text-q-gold uppercase mb-4 block">Stack Tecnologico</span>
          <h2 className="font-display text-h2 text-white mb-4">
            Tecnologías que <span className="text-gradient-purple">dominamos</span>
          </h2>
          <p className="font-body text-body text-q-text-secondary max-w-xl mx-auto mb-10">
            Usamos herramientas modernas probadas en producción para construir software 
            rápido, seguro y escalable.
          </p>

          <div className="tech-grid flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {techs.map((t, i) => (
              <span
                key={i}
                className="tech-badge font-body text-sm text-white bg-q-surface border border-q-border px-5 py-2.5 rounded-button hover:border-q-purple/50 hover:bg-q-purple/10 hover:-translate-y-1 transition-all duration-300 opacity-0"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(245,158,11,0.06) 0%, transparent 50%)" }} />
        <div className="section-padding text-center max-w-2xl mx-auto relative z-10">
          <h2 className="font-display text-h2 text-white mb-4">
            Listo para llevar tu negocio al <span className="text-gradient-gold">siguiente nivel</span>?
          </h2>
          <p className="font-body text-body text-q-text-secondary mb-6">
            Estamos listos para escucharte y crear algo increíble juntos.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:marketing@quantify.net.pe"
              className="font-body inline-flex items-center gap-2 bg-gradient-to-r from-q-purple to-q-fuchsia text-white text-sm font-medium px-6 py-3 rounded-button hover:opacity-90 transition-all shadow-glow-purple">
              <Mail size={16} /> Escríbenos
            </a>
            <a href="https://wa.me/51965665045" target="_blank" rel="noopener noreferrer"
              className="font-body inline-flex items-center gap-2 bg-q-btn-dark text-white text-sm font-medium px-6 py-3 rounded-button border border-q-border hover:border-q-purple transition-all">
              <Phone size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
