import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Plus, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";


const faqs = [
  {
    category: "General",
    questions: [
      { q: "Qué es Quantum?", a: "Quantum es una empresa peruana de desarrollo de software especializada en crear soluciones digitales para negocios como restaurantes, boticas y complejos deportivos. Llevamos 5 años operando desde Huancayo, Perú." },
      { q: "A quién está dirigido?", a: "Nuestros productos están diseñados para MYPEs, pequeños y medianos negocios peruanos que buscan modernizar sus operaciones con tecnología accesible y efectiva." },
      { q: "Cuánto tiempo llevan operando?", a: "Llevamos 5 años desarrollando software y soluciones tecnológicas para negocios peruanos." },
    ],
  },
  {
    category: "Productos",
    questions: [
      { q: "Qué productos tienen?", a: "Contamos con 4 productos principales: Quantum Gourmet para restaurantes, Quantum Botica para farmacias, Pichanga para canchas deportivas (app + panel admin), y Gestión de Canchas para administradores." },
      { q: "Los productos tienen versión web y móvil?", a: "Depende del producto. Quantum Gourmet y Quantum Botica son sistemas web. Pichanga incluye una app móvil y un panel web. Gestión de Canchas es un panel web de administración." },
      { q: "Puedo probar antes de comprar?", a: "Sí! Podemos agendar una demo personalizada donde te mostramos cómo funciona el producto. Escríbenos por WhatsApp al +51 965 665 045." },
      { q: "Se pueden personalizar los productos?", a: "Sí, todos nuestros productos permiten personalización. Si necesitas funcionalidades adicionales, también ofrecemos desarrollo a medida." },
    ],
  },
  {
    category: "Desarrollo a Medida",
    questions: [
      { q: "Desarrollan software a medida?", a: "Sí. Somos expertos en sistemas web modernos, apps móviles (Android/iOS) y soluciones digitales personalizadas. Cuéntanos tu idea y la convertimos en realidad." },
      { q: "Cuánto tarda un proyecto a medida?", a: "Depende del alcance. Un proyecto básico puede estar listo en 4-8 semanas. Te damos un cronograma detallado antes de empezar." },
      { q: "Qué tecnologías usan?", a: "Usamos tecnologías modernas: React, Node.js, TypeScript, bases de datos SQL/NoSQL, React Native para apps móviles, y servicios cloud para hosting." },
    ],
  },
  {
    category: "Soporte y Precios",
    questions: [
      { q: "Ofrecen soporte técnico?", a: "Sí, todos nuestros productos incluyen soporte técnico. También ofrecemos planes de mantenimiento para actualizaciones y mejoras continuas." },
      { q: "Cómo se contratan los servicios?", a: "El proceso es simple: nos contactas, agendamos una llamada, te presentamos una propuesta, y al aceptar comenzamos el desarrollo." },
      { q: "Cuáles son los precios?", a: "Varían según el producto. Tenemos planes flexibles adaptados a MYPEs peruanas. Contáctanos para una cotización personalizada." },
      { q: "El pago es mensual o único?", a: "Ofrecemos ambas modalidades. Algunos productos tienen licencia anual y otros suscripción mensual. Te explicamos las opciones en la demo." },
    ],
  },
];

export default function FAQPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-hero", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      });
      gsap.fromTo(".faq-group", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".faq-container", start: "top 80%" },
      });
    }, sectionRef);
    window.scrollTo(0, 0);
    return () => ctx.revert();
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((group) =>
      group.questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <main className="pt-16 bg-q-bg" ref={sectionRef}>
      <SEO
        title="Preguntas Frecuentes"
        description="Resuelve tus dudas sobre Quantum, nuestros productos, desarrollo a medida, soporte y precios. FAQ actualizada."
        pathname="/faq"
      />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(138,43,226,0.06) 0%, transparent 50%)" }} />
        <div className="section-padding relative z-10">
          <div className="faq-hero text-center max-w-3xl mx-auto mb-16 opacity-0">
            <span className="font-body text-label text-q-gold uppercase mb-4 block">FAQ</span>
            <h1 className="font-display text-display text-white mb-6">
              Preguntas <span className="text-gradient-purple">Frecuentes</span>
            </h1>
            <p className="font-body text-lg text-q-text-secondary" style={{ fontSize: '19.0921px' }}>
              Todo lo que necesitas saber sobre nuestros productos y servicios.
            </p>
          </div>

          <div className="faq-container max-w-3xl mx-auto">
            {faqs.map((group, gi) => (
              <div key={gi} className="faq-group mb-10 opacity-0">
                <h3 className="font-body text-label text-q-purple uppercase mb-4 flex items-center gap-2">
                  <span className="w-6 h-px bg-q-purple" />
                  {group.category}
                </h3>
                <div className="border-t border-q-border/60">
                  {group.questions.map((item, qi) => {
                    const key = `${gi}-${qi}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={qi} className="border-b border-q-border/60">
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between py-5 text-left group"
                        >
                          <span className={`font-body text-base pr-4 transition-colors duration-300 ${isOpen ? "text-q-purple" : "text-white group-hover:text-q-purple"}`}>
                            {item.q}
                          </span>
                          <span className={`text-q-purple flex-shrink-0 w-8 h-8 rounded-full border border-q-purple/30 flex items-center justify-center transition-all duration-300 ${isOpen ? "rotate-45 bg-q-purple/10" : ""}`}>
                            <Plus size={16} />
                          </span>
                        </button>
                        <div
                          className="overflow-hidden transition-all duration-500"
                          style={{ maxHeight: isOpen ? "300px" : "0", opacity: isOpen ? 1 : 0 }}
                        >
                          <p className="font-body text-sm text-q-text-secondary leading-relaxed pb-5 pl-0">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="font-body text-q-text-secondary mb-5">¿No encontraste tu pregunta?</p>
            <Link to="/contact"
              className="font-body inline-flex items-center gap-2 bg-gradient-to-r from-q-purple to-q-fuchsia text-white text-sm font-medium px-7 py-3.5 rounded-button hover:opacity-90 hover:scale-[1.03] transition-all shadow-glow-purple">
              <MessageCircle size={16} /> Escríbenos directamente
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
