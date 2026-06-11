import SEO from "../components/SEO";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProductsSection from "../sections/ProductsSection";
import ServicesSection from "../sections/ServicesSection";
import WhyUsSection from "../sections/WhyUsSection";
import CTASection from "../sections/CTASection";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Quantum",
  url: "https://quantum-pe.vercel.app",
  logo: "https://quantum-pe.vercel.app/assets/quantum-logo.webp",
  description: "Empresa peruana de desarrollo de software para restaurantes, boticas y canchas deportivas.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Huancayo",
    addressCountry: "PE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+51-965-665-045",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: [
    "https://wa.me/51965665045",
  ],
};

export default function HomePage() {
  return (
    <main>
      <SEO
        title="Inicio"
        description="Quantum - Desarrollo de software a medida para restaurantes, boticas y canchas deportivas en Perú. Soluciones digitales inteligentes desde Huancayo."
        pathname="/"
      />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <WhyUsSection />
      <CTASection />
    </main>
  );
}
