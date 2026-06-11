import React, { Component, type ReactNode } from "react";
import { Home, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary capturó un error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-q-bg flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-q-purple/20 flex items-center justify-center mx-auto mb-6">
              <RefreshCw size={40} className="text-q-purple" />
            </div>
            <h1 className="font-display text-h2 text-white mb-4">Algo salió mal</h1>
            <p className="font-body text-body text-q-text-secondary mb-8">
              Lo sentimos, ocurrió un error inesperado. Puedes intentar recargar la página o volver al inicio.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="font-body inline-flex items-center gap-2 bg-gradient-to-r from-q-purple to-q-fuchsia text-white text-sm font-medium px-6 py-3 rounded-button hover:opacity-90 transition-all shadow-glow-purple"
              >
                <RefreshCw size={16} /> Recargar página
              </button>
              <Link
                to="/"
                className="font-body inline-flex items-center gap-2 bg-q-btn-dark text-white text-sm font-medium px-6 py-3 rounded-button border border-q-border hover:border-q-purple transition-all"
              >
                <Home size={16} /> Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
