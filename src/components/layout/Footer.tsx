import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-q-bg border-t border-q-border">
      <div className="section-padding pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/quantum-logo.webp"
                alt="Quantum"
                width="40"
                height="40"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-display text-white font-medium">Quantum</h4>
                <p className="font-body text-xs text-q-text-tertiary">Soluciones Digitales Inteligentes</p>
              </div>
            </div>
            <p className="font-body text-sm text-q-text-secondary mb-4" style={{ fontSize: '16px' }}>
              Innovación digital a la medida de tu empresa. 5 años transformando negocios en Perú.
            </p>
            <p className="font-body text-xs text-q-text-tertiary">
              Síguenos próximamente en nuestras redes sociales.
            </p>
          </div>

          <div>
            <h4 className="font-body text-label text-q-purple uppercase mb-4">Productos</h4>
            <ul className="space-y-2">
              {[
                { name: "Quantum Gourmet", to: "/products" },
                { name: "Quantum Botica", to: "/products" },
                { name: "Pichanga", to: "/products" },
                { name: "Gestión de Canchas", to: "/products" },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="font-body text-sm text-q-text-secondary hover:text-q-purple transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-label text-q-purple uppercase mb-4">Empresa</h4>
            <ul className="space-y-2">
              {[
                { name: "Sobre Nosotros", to: "/about" },
                { name: "Nuestros Servicios", to: "/#services" },
                { name: "Preguntas Frecuentes", to: "/faq" },
                { name: "Contacto", to: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="font-body text-sm text-q-text-secondary hover:text-q-purple transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-label text-q-purple uppercase mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-q-purple mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-q-text-secondary">Huancayo, Perú</span>
              </li>
              <li>
                <a href="https://wa.me/51965665045" target="_blank" rel="noopener noreferrer" className="font-body flex items-center gap-2 text-sm text-q-text-secondary hover:text-q-purple transition-colors">
                  <Phone size={16} className="flex-shrink-0" />
                  +51 965 665 045
                </a>
              </li>
              <li>
                <a href="mailto:marketing@quantify.net.pe" className="font-body flex items-center gap-2 text-sm text-q-text-secondary hover:text-q-purple transition-colors">
                  <Mail size={16} className="flex-shrink-0" />
                  marketing@quantify.net.pe
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-q-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-q-text-tertiary">
          <p className="font-body">&copy; 2025 Quantum. Todos los derechos reservados.</p>
          <p className="font-body">
            <span className="text-q-gold">Innovación digital</span> a la medida de tu empresa.
          </p>
        </div>
      </div>
    </footer>
  );
}
