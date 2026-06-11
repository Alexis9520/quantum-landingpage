import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-q-bg flex items-center justify-center pt-16">
      <SEO
        title="Página no encontrada"
        description="La página que buscas no existe. Regresa al inicio de Quantum."
        pathname=""
      />
      <div className="section-padding text-center max-w-xl mx-auto">
        <div className="mb-8">
          <span className="font-display text-[120px] leading-none text-gradient-purple block">404</span>
        </div>
        <h1 className="font-display text-h2 text-white mb-4">Página no encontrada</h1>
        <p className="font-body text-body text-q-text-secondary mb-8">
          La página que estás buscando no existe o ha sido movida. 
          Te ayudamos a volver al camino.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="font-body inline-flex items-center gap-2 bg-gradient-to-r from-q-purple to-q-fuchsia text-white text-sm font-medium px-6 py-3 rounded-button hover:opacity-90 transition-all shadow-glow-purple"
          >
            <Home size={16} /> Volver al inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="font-body inline-flex items-center gap-2 bg-q-btn-dark text-white text-sm font-medium px-6 py-3 rounded-button border border-q-border hover:border-q-purple transition-all"
          >
            <ArrowLeft size={16} /> Atrás
          </button>
        </div>
      </div>
    </main>
  );
}
