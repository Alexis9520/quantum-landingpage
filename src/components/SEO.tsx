import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
  type?: string;
}

const SITE_URL = "https://quantum-pe.vercel.app"; // TODO: Cambiar por tu dominio real
const DEFAULT_IMAGE = "/assets/quantum-logo.webp";

export default function SEO({
  title,
  description,
  pathname = "",
  image = DEFAULT_IMAGE,
  type = "website",
}: SEOProps) {
  const url = `${SITE_URL}${pathname}`;
  const fullTitle = `${title} | Quantum`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
    </Helmet>
  );
}
