import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

// Respetar prefers-reduced-motion: convertir animaciones en sets instantáneos
if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const stripAnimProps = (vars: Record<string, unknown>) => {
    const { scrollTrigger, duration, delay, ease, stagger, ...rest } = vars;
    return rest;
  };

  gsap.fromTo = (targets: any, _fromVars: any, toVars: any) => {
    return gsap.set(targets, stripAnimProps(toVars));
  };
  gsap.from = (targets: any, vars: any) => {
    return gsap.set(targets, stripAnimProps(vars));
  };
  gsap.to = (targets: any, vars: any) => {
    return gsap.set(targets, stripAnimProps(vars));
  };
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// Registrar Service Worker para PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("SW registrado:", reg.scope))
      .catch((err) => console.error("SW error:", err));
  });
}