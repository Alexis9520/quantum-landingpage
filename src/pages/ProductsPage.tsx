import { useEffect, useRef } from "react";
import gsap from "gsap";
import { UtensilsCrossed, Pill, CalendarDays, LayoutDashboard, Check, ArrowRight, Monitor, Smartphone, Zap, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";


const products = [
  {
    id: "gourmet",
    name: "Quantum Gourmet",
    tagline: "Software para Restaurantes",
    description: "El sistema de gestión que tu restaurante necesita. Control total sobre mesas, pedidos, caja y personal en tiempo real.",
    image: "/assets/quantum-gourmet.webp",
    icon: UtensilsCrossed,
    accent: "#f59e0b",
    features: [
      "Control de mesas y estados en tiempo real",
      "Pedidos multisede centralizados",
      "Control de caja e historial de transacciones",
      "Gestión de personal y permisos",
      "Creación de menús personalizados",
      "Reportes en tiempo real y métricas",
      "Gestión de usuarios y roles",
      "Productos estrella y análisis de ventas",
    ],
    stats: [
      { icon: Zap, label: "Pedidos en tiempo real" },
      { icon: Shield, label: "Control de accesos" },
      { icon: Clock, label: "Reportes 24/7" },
      { icon: Users, label: "Multisede" },
    ],
  },
  {
    id: "botica",
    name: "Quantum Botica",
    tagline: "Software para Boticas",
    description: "Gestiona tu farmacia de forma inteligente. Inventario, ventas, proveedores y documentación todo en un solo lugar.",
    image: "/assets/quantum-botica.webp",
    icon: Pill,
    accent: "#10b981",
    features: [
      "Gestión de inventario y stock",
      "Historial completo de ventas",
      "Control de caja por turno",
      "Kardex automático y trazabilidad",
      "Informes por personal y sucursal",
      "Gestión de usuarios y roles",
      "Proveedores y órdenes de compra",
      "Creación de documentos para DigiEmi",
      "Métricas y alertas de vencimiento",
    ],
    stats: [
      { icon: Shield, label: "DigiEmi integrado" },
      { icon: Clock, label: "Kardex automático" },
      { icon: Zap, label: "Alertas inteligentes" },
      { icon: Users, label: "Multiusuario" },
    ],
  },
  {
    id: "pichanga",
    name: "Pichanga",
    tagline: "App + Software de Canchas Deportivas",
    description: "Ecosistema completo para complejos deportivos. La app para tus clientes y el panel de administración para ti, todo conectado en tiempo real.",
    image: "/assets/pichanga-app.webp",
    adminImage: "/assets/pichanga-admin.webp",
    icon: CalendarDays,
    accent: "#8A2BE2",
    features: [
      "Reservas en tiempo real por app y web",
      "Geolocalización de canchas cercanas",
      "Panel de administración completo",
      "Control de inventarios y equipamiento",
      "Historial de reservas y clientes",
      "Control de caja e ingresos",
      "Sistema de reseñas y calificaciones",
      "App y panel conectados en tiempo real",
    ],
    stats: [
      { icon: Zap, label: "Reservas en vivo" },
      { icon: Clock, label: "Calendario inteligente" },
      { icon: Shield, label: "Pagos seguros" },
      { icon: Users, label: "Comunidad de jugadores" },
    ],
  },
  {
    id: "gestion-canchas",
    name: "Gestión de Canchas",
    tagline: "Panel de Administración Web",
    description: "El cerebro de la operación. Panel web completo para dueños de complejos deportivos. Controla todo desde un solo lugar.",
    image: "/assets/gestion-canchas.webp",
    icon: LayoutDashboard,
    accent: "#22c55e",
    features: [
      "Dashboard con métricas en tiempo real",
      "Control de reservas y ocupacion",
      "Gestión de canchas y horarios",
      "Control de caja e ingresos",
      "Inventario y equipamiento",
      "Gestión de empleados",
      "Reportes y estadísticas",
      "Conectado con la app Pichanga",
    ],
    stats: [
      { icon: Zap, label: "Métricas en vivo" },
      { icon: Shield, label: "Control total" },
      { icon: Clock, label: "Agenda inteligente" },
      { icon: Users, label: "Gestión de equipos" },
    ],
  },
];

export default function ProductsPage() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".prod-hero", { opacity: 0, y: 50, scale: 0.97 }, {
        opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out",
      });
      document.querySelectorAll(".product-section").forEach((el, i) => {
        gsap.fromTo(el.querySelectorAll(".anim-left"), { opacity: 0, x: i % 2 === 0 ? -60 : 60 }, {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%" },
        });
        gsap.fromTo(el.querySelectorAll(".anim-right"), { opacity: 0, x: i % 2 === 0 ? 60 : -60, scale: 0.95 }, {
          opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%" },
        });
        gsap.fromTo(el.querySelectorAll(".feature-item"), { opacity: 0, y: 15 }, {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 65%" },
        });
      });
    });
    window.scrollTo(0, 0);
    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-16 bg-q-bg">
      <SEO
        title="Productos"
        description="Descubre Quantum Gourmet, Quantum Botica, Pichanga y Gestión de Canchas. Software a medida para restaurantes, boticas y complejos deportivos en Perú."
        pathname="/products"
      />
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(138,43,226,0.08) 0%, transparent 60%)" }} />
        <div className="section-padding relative z-10">
          <div ref={headerRef} className="prod-hero text-center max-w-3xl mx-auto opacity-0">
            <span className="font-body inline-flex items-center gap-2 bg-q-purple/10 border border-q-purple/30 rounded-full px-4 py-1.5 mb-6">
              <Zap size={14} className="text-q-gold" />
              <span className="text-xs text-q-purple-light font-medium">Portafolio</span>
            </span>
            <h1 className="font-display text-display text-white mb-6">
              Nuestros <span className="text-gradient-purple">Productos</span>
            </h1>
            <p className="font-body text-lg text-q-text-secondary" style={{ fontSize: '19.0921px' }}>
              Software diseñado específicamente para cada industria.
              Soluciones reales para problemas reales de negocios peruanos.
            </p>
          </div>
        </div>
      </section>

      {products.map((p, idx) => (
        <section key={p.id} className={`product-section py-20 lg:py-28 ${idx % 2 === 1 ? "bg-q-surface/20" : ""} relative`}>
          <div className="absolute inset-0 pointer-events-none opacity-30"
            style={{ background: `radial-gradient(ellipse at ${idx % 2 === 0 ? "80%" : "20%"} 50%, ${p.accent}08 0%, transparent 50%)` }} />
          <div className="section-padding relative z-10">
            <div className={`max-w-6xl mx-auto grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={`anim-left ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="font-body inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 border"
                  style={{ borderColor: `${p.accent}30`, background: `${p.accent}10` }}>
                  <p.icon size={16} style={{ color: p.accent }} />
                  <span className="text-xs text-q-text-secondary">{p.tagline}</span>
                </div>
                <h2 className="font-display text-h2 text-white mb-4">{p.name}</h2>
                <p className="font-body text-base text-q-text-secondary leading-relaxed mb-6" style={{ fontSize: '19.0921px' }}>{p.description}</p>

                <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {p.features.map((f, i) => (
                    <div key={i} className="feature-item flex items-start gap-2">
                      <Check size={16} className="text-q-purple mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-q-text-secondary">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {p.stats.map((s, i) => (
                    <div key={i} className="bg-q-bg/50 border border-q-border rounded-lg p-3 text-center">
                      <s.icon size={18} className="text-q-text-tertiary mx-auto mb-1" />
                      <p className="font-body text-[10px] text-q-text-tertiary">{s.label}</p>
                    </div>
                  ))}
                </div>

                <a href="https://wa.me/51965665045" target="_blank" rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-2 bg-gradient-to-r from-q-purple to-q-fuchsia text-white text-sm font-medium px-7 py-3.5 rounded-button hover:opacity-90 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(138,43,226,0.4)] transition-all duration-300 shadow-glow-purple">
                  Solicitar demo <ArrowRight size={16} />
                </a>
              </div>

              <div className={`anim-right ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="rounded-card overflow-hidden border border-q-border/60 hover:border-q-purple/30 transition-all duration-500 group relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-q-purple/10 via-transparent to-q-fuchsia/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  <img src={p.image} alt={p.name} loading="lazy" decoding="async" width="1200" height="800" className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
                </div>
                {p.adminImage && (
                  <div className="font-body mt-4 flex items-center gap-4 text-xs text-q-text-tertiary">
                    <span className="flex items-center gap-1.5"><Monitor size={14} /> Panel de administración</span>
                    <span className="flex items-center gap-1.5"><Smartphone size={14} /> App móvil</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(245,158,11,0.06) 0%, transparent 50%)" }} />
        <div className="section-padding text-center relative z-10">
          <h2 className="font-display text-h2 text-white mb-4">
            Necesitas algo <span className="text-gradient-gold">diferente</span>?
          </h2>
          <p className="font-body text-body text-q-text-secondary mb-8 max-w-lg mx-auto">
            También desarrollamos software a medida para otras industrias. Cuéntanos tu idea.
          </p>
          <Link to="/contact" className="font-body inline-flex items-center gap-2 bg-q-btn-dark text-white text-sm font-medium px-7 py-3.5 rounded-button border border-q-border hover:border-q-purple hover:bg-q-purple/5 transition-all duration-300">
            Contáctanos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
