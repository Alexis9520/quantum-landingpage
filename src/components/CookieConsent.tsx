import { useState, useEffect } from "react";
import { Cookie, Check, X } from "lucide-react";

const STORAGE_KEY = "quantum_cookie_consent";

type ConsentState = "pending" | "accepted" | "rejected";

export function useCookieConsent(): [ConsentState, () => void, () => void] {
  const [consent, setConsent] = useState<ConsentState>("pending");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentState | null;
    if (stored) setConsent(stored);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setConsent("rejected");
  };

  return [consent, accept, reject];
}

export default function CookieConsent() {
  const [consent, accept, reject] = useCookieConsent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (consent === "pending") {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [consent]);

  if (consent !== "pending" || !visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] md:left-auto md:right-4 md:w-[420px]">
      <div className="bg-q-surface/95 backdrop-blur-xl border border-q-border rounded-card p-5 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-q-purple/10 border border-q-purple/20 flex items-center justify-center flex-shrink-0">
            <Cookie size={20} className="text-q-purple" />
          </div>
          <div>
            <h3 className="font-display text-white font-medium text-sm mb-1">Usamos cookies</h3>
            <p className="font-body text-xs text-q-text-secondary leading-relaxed">
              Utilizamos cookies y herramientas de análisis para mejorar tu experiencia y entender cómo usas nuestro sitio.
              Puedes aceptar o rechazar el uso de cookies no esenciales.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <button
            onClick={() => { reject(); setVisible(false); }}
            className="font-body text-xs text-q-text-secondary hover:text-white px-3 py-2 rounded-button hover:bg-white/5 transition-colors"
          >
            <X size={14} className="inline mr-1" /> Rechazar
          </button>
          <button
            onClick={() => { accept(); setVisible(false); }}
            className="font-body text-xs font-medium bg-gradient-to-r from-q-purple to-q-fuchsia text-white px-4 py-2 rounded-button hover:opacity-90 transition-all shadow-glow-purple"
          >
            <Check size={14} className="inline mr-1" /> Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
