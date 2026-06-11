import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { useCookieConsent } from "../components/CookieConsent";

const GA_MEASUREMENT_ID = "G-6J1PZ2SHQW";

export function useAnalytics() {
  const [consent] = useCookieConsent();
  const location = useLocation();
  const initialized = useRef(false);

  useEffect(() => {
    if (consent !== "accepted") return;
    if (!initialized.current) {
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        gaOptions: { cookieFlags: "SameSite=None;Secure" },
        gtagOptions: { anonymize_ip: true },
      });
      initialized.current = true;
    }
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location, consent]);
}
