import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", path: "/" },
  { label: "Productos", path: "/products" },
  { label: "Nosotros", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Contacto", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Cerrar menú al presionar Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Focus trap básico: cuando se abre, enfocar el primer link
  useEffect(() => {
    if (mobileOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a") as HTMLElement | null;
      firstLink?.focus();
    }
  }, [mobileOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0B0B]/85 backdrop-blur-xl border-b border-q-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/assets/quantum-logo.webp"
            alt="Quantum"
            width="36"
            height="36"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-q-purple/30 group-hover:ring-q-purple/60 transition-all duration-300"
          />
          <span className="font-display text-white text-lg tracking-tight hidden sm:block group-hover:text-q-purple-light transition-colors duration-300">
            Quantum
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body relative text-sm px-4 py-2 rounded-button transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-white bg-q-purple/15"
                  : "text-q-text-secondary hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-q-purple to-q-fuchsia rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/51965665045"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex font-body text-sm font-medium bg-gradient-to-r from-q-purple to-q-fuchsia text-white px-5 py-2.5 rounded-button hover:opacity-90 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(138,43,226,0.3)] transition-all duration-300 shadow-glow-purple"
          >
            Escríbenos
          </a>
          <button
            ref={toggleRef}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-padding py-4 flex flex-col gap-1 bg-[#0B0B0B]/95 backdrop-blur-xl border-t border-q-border/40">
          {navLinks.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm py-3 px-4 rounded-button transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-white bg-q-purple/15"
                  : "text-q-text-secondary hover:text-white hover:bg-white/5"
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/51965665045"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium bg-gradient-to-r from-q-purple to-q-fuchsia text-white px-5 py-3 rounded-button text-center mt-2"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
