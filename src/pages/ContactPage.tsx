import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Check } from "lucide-react";
import SEO from "../components/SEO";

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "", product: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      let recaptchaToken = "";
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("contact_form");
      }

      const response = await fetch("https://formsubmit.co/ajax/marketing@quantify.net.pe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || "No proporcionado",
          company: form.company || "No proporcionado",
          product: form.product || "No seleccionado",
          message: form.message,
          _subject: `Nuevo mensaje de ${form.name} - Quantum Web`,
          "g-recaptcha-response": recaptchaToken,
        }),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: "", email: "", phone: "", company: "", message: "", product: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError("Hubo un problema al enviar. Por favor intenta por WhatsApp.");
      }
    } catch {
      setError("Error de conexión. Escríbenos por WhatsApp para una respuesta inmediata.");
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-hero", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      });
      gsap.fromTo(".contact-left", { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-grid", start: "top 80%" },
      });
      gsap.fromTo(".contact-right", { opacity: 0, x: 50 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-grid", start: "top 80%" },
      });
    }, sectionRef);
    window.scrollTo(0, 0);
    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-16 bg-q-bg" ref={sectionRef}>
      <SEO
        title="Contacto"
        description="Contácta a Quantum. Desarrollo de software a medida para tu negocio en Perú. WhatsApp, email o formulario. Respondemos en 24h."
        pathname="/contact"
      />
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(138,43,226,0.08) 0%, transparent 50%)" }} />
        <div className="section-padding relative z-10">
          <div className="contact-hero text-center max-w-3xl mx-auto mb-16 opacity-0">
            <span className="font-body text-label text-q-gold uppercase mb-4 block">Contacto</span>
            <h1 className="font-display text-display text-white mb-6">
              Hablemos de tu <span className="text-gradient-purple">proyecto</span>
            </h1>
            <p className="font-body text-lg text-q-text-secondary" style={{ fontSize: '19.0921px' }}>
              Estamos listos para ayudarte. Escríbenos por WhatsApp, correo o completa el formulario.
            </p>
          </div>

          <div className="contact-grid grid max-w-5xl mx-auto grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="contact-left lg:col-span-2 space-y-5 opacity-0">
              <div className="bg-q-surface/80 backdrop-blur-sm border border-q-border rounded-card p-6 hover:border-q-purple/30 transition-all duration-500">
                <h3 className="font-display text-white font-medium mb-5">Información de contacto</h3>
                <div className="space-y-5">
                  <a href="https://wa.me/51965665045" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone size={20} className="text-green-400" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-white group-hover:text-q-purple transition-colors">+51 965 665 045</p>
                      <p className="font-body text-xs text-q-text-tertiary">WhatsApp</p>
                    </div>
                  </a>
                  <a href="mailto:marketing@quantify.net.pe" className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-q-purple/10 border border-q-purple/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail size={20} className="text-q-purple" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-white group-hover:text-q-purple transition-colors">marketing@quantify.net.pe</p>
                      <p className="font-body text-xs text-q-text-tertiary">Email</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-q-fuchsia/10 border border-q-fuchsia/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-q-fuchsia" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-white">Huancayo, Perú</p>
                      <p className="font-body text-xs text-q-text-tertiary">Ubicación</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-q-gold/10 border border-q-gold/20 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-q-gold" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-white">Lun - Vie, 9:00 - 18:00</p>
                      <p className="font-body text-xs text-q-text-tertiary">Horario de atención</p>
                    </div>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/51965665045" target="_blank" rel="noopener noreferrer"
                className="block bg-gradient-to-r from-green-600 to-emerald-500 rounded-card p-6 text-center hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300">
                <MessageCircle size={36} className="text-white mx-auto mb-3" />
                <p className="font-display text-white font-medium text-lg">Escríbenos por WhatsApp</p>
                <p className="font-body text-white/70 text-sm">Respuesta rápida garantizada</p>
              </a>
            </div>

            <div className="contact-right lg:col-span-3 opacity-0">
              <div className="bg-q-surface/80 backdrop-blur-sm border border-q-border rounded-card p-6 lg:p-8 hover:border-q-purple/20 transition-all duration-500">
                <h3 className="font-display text-white font-medium text-lg mb-1">Envíanos un mensaje</h3>
                <p className="font-body text-sm text-q-text-secondary mb-6">Cuéntanos sobre tu proyecto y te responderemos pronto.</p>

                {sent ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-q-purple/20 flex items-center justify-center mx-auto mb-5 animate-pulse">
                      <Check size={40} className="text-q-purple" />
                    </div>
                    <h4 className="font-display text-white text-xl mb-2">Mensaje enviado!</h4>
                    <p className="font-body text-sm text-q-text-secondary">Te contactaremos pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="font-body text-xs text-q-text-tertiary mb-1.5 block">Nombre *</label>
                        <input id="contact-name" name="name" value={form.name} onChange={handleChange} required aria-required="true"
                          className="w-full bg-q-bg border border-q-border rounded-button px-4 py-3 text-sm text-white placeholder:text-q-text-tertiary focus:border-q-purple focus:outline-none focus:shadow-[0_0_10px_rgba(138,43,226,0.1)] transition-all" placeholder="Tu nombre" />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="font-body text-xs text-q-text-tertiary mb-1.5 block">Email *</label>
                        <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} required aria-required="true"
                          className="w-full bg-q-bg border border-q-border rounded-button px-4 py-3 text-sm text-white placeholder:text-q-text-tertiary focus:border-q-purple focus:outline-none focus:shadow-[0_0_10px_rgba(138,43,226,0.1)] transition-all" placeholder="tu@email.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className="font-body text-xs text-q-text-tertiary mb-1.5 block">Teléfono</label>
                        <input id="contact-phone" name="phone" value={form.phone} onChange={handleChange}
                          className="w-full bg-q-bg border border-q-border rounded-button px-4 py-3 text-sm text-white placeholder:text-q-text-tertiary focus:border-q-purple focus:outline-none focus:shadow-[0_0_10px_rgba(138,43,226,0.1)] transition-all" placeholder="+51 999 999 999" />
                      </div>
                      <div>
                        <label htmlFor="contact-company" className="font-body text-xs text-q-text-tertiary mb-1.5 block">Empresa</label>
                        <input id="contact-company" name="company" value={form.company} onChange={handleChange}
                          className="w-full bg-q-bg border border-q-border rounded-button px-4 py-3 text-sm text-white placeholder:text-q-text-tertiary focus:border-q-purple focus:outline-none focus:shadow-[0_0_10px_rgba(138,43,226,0.1)] transition-all" placeholder="Nombre de tu empresa" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-product" className="font-body text-xs text-q-text-tertiary mb-1.5 block">Producto de interés</label>
                      <select id="contact-product" name="product" value={form.product} onChange={handleChange}
                        className="w-full bg-q-bg border border-q-border rounded-button px-4 py-3 text-sm text-white focus:border-q-purple focus:outline-none transition-all appearance-none cursor-pointer">
                        <option value="">Selecciona un producto</option>
                        <option value="gourmet">Quantum Gourmet (Restaurantes)</option>
                        <option value="botica">Quantum Botica (Boticas)</option>
                        <option value="pichanga">Pichanga (Canchas)</option>
                        <option value="gestion-canchas">Gestión de Canchas (Admin)</option>
                        <option value="custom">Software a medida</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="font-body text-xs text-q-text-tertiary mb-1.5 block">Mensaje *</label>
                      <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required aria-required="true" rows={4}
                        className="w-full bg-q-bg border border-q-border rounded-button px-4 py-3 text-sm text-white placeholder:text-q-text-tertiary focus:border-q-purple focus:outline-none focus:shadow-[0_0_10px_rgba(138,43,226,0.1)] transition-all resize-none" placeholder="Cuéntanos sobre tu proyecto..." />
                    </div>
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-button px-4 py-3">
                        <p className="font-body text-xs text-red-400 text-center">{error}</p>
                      </div>
                    )}
                    <button type="submit" disabled={sending}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-q-purple to-q-fuchsia text-white text-sm font-medium py-4 rounded-button hover:opacity-90 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(138,43,226,0.4)] transition-all duration-300 shadow-glow-purple disabled:opacity-60 disabled:cursor-not-allowed">
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Enviando...
                        </>
                      ) : (
                        <><Send size={16} /> Enviar mensaje</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
