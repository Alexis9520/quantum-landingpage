import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Pill, CalendarDays, LayoutDashboard, ArrowRight } from "lucide-react";


const products = [
  {
    name: "Quantum Gourmet",
    tagline: "Software para Restaurantes",
    description: "Control de mesas, pedidos multisede, caja, menús personalizados y reportes en tiempo real.",
    icon: UtensilsCrossed,
    image: "/assets/quantum-gourmet.webp",
    color: "from-orange-500 to-amber-500",
    borderHover: "hover:border-orange-500/50",
    shadow: "hover:shadow-[0_8px_32px_rgba(245,158,11,0.15)]",
  },
  {
    name: "Quantum Botica",
    tagline: "Software para Boticas",
    description: "Gestión de inventario, ventas, Kardex, proveedores y documentos para la DigiEmi.",
    icon: Pill,
    image: "/assets/quantum-botica.webp",
    color: "from-emerald-500 to-teal-500",
    borderHover: "hover:border-emerald-500/50",
    shadow: "hover:shadow-[0_8px_32px_rgba(16,185,129,0.15)]",
  },
  {
    name: "Pichanga",
    tagline: "App + Software de Canchas",
    description: "Reservas en tiempo real, gestión de canchas, inventarios, caja y reseñas. Todo conectado.",
    icon: CalendarDays,
    image: "/assets/pichanga-app.webp",
    color: "from-q-purple to-q-fuchsia",
    borderHover: "hover:border-q-purple/50",
    shadow: "hover:shadow-glow-purple",
  },
  {
    name: "Gestión de Canchas",
    tagline: "Panel de Administración",
    description: "Panel web para dueños de canchas. Controla reservas, ingresos, ocupación y empleados en tiempo real.",
    icon: LayoutDashboard,
    image: "/assets/gestion-canchas.webp",
    color: "from-green-500 to-emerald-500",
    borderHover: "hover:border-green-500/50",
    shadow: "hover:shadow-[0_8px_32px_rgba(34,197,94,0.15)]",
  },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".prod-heading", { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".prod-heading", start: "top 80%" },
      });
      gsap.fromTo(".product-card", { opacity: 0, y: 50, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".products-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-q-bg" id="products">
      <div className="section-padding">
        <div className="prod-heading text-center mb-14 opacity-0">
          <span className="font-body text-label text-q-gold uppercase mb-4 block">Nuestros Productos</span>
          <h2 className="font-display text-h2 text-white mb-4">
            Software diseñado para <span className="text-gradient-purple">tu industria</span>
          </h2>
          <p className="font-body text-body text-q-text-secondary max-w-2xl mx-auto">
            Cada producto esta pensado para resolver los problemas especificos de tu sector.
          </p>
        </div>

        <div className="products-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product: p }: { product: typeof products[0] }) {
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
      className={`product-card group bg-q-surface border border-q-border rounded-card overflow-hidden ${p.borderHover} ${p.shadow} hover:-translate-y-2 transition-all duration-500 opacity-0 relative`}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-card"
        style={{ background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(138,43,226,0.1) 0%, transparent 50%)` }}
      />

      <div className="aspect-[16/10] overflow-hidden relative">
        <img src={p.image} alt={p.name} loading="lazy" decoding="async" width="800" height="500" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-q-bg/80 via-q-bg/20 to-transparent" />
        <div className={`absolute top-3 left-3 w-11 h-11 rounded-xl bg-gradient-to-r ${p.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <p.icon size={22} className="text-white" />
        </div>
      </div>
      <div className="p-5 relative z-10">
        <p className="font-body text-xs text-q-text-tertiary mb-1">{p.tagline}</p>
        <h3 className="font-display text-lg text-white font-medium mb-2">{p.name}</h3>
        <p className="font-body text-sm text-q-text-secondary leading-relaxed mb-4">{p.description}</p>
        <Link to="/products" className="font-body inline-flex items-center gap-1 text-sm text-q-purple hover:text-q-fuchsia transition-colors group/link">
          Ver detalles <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
