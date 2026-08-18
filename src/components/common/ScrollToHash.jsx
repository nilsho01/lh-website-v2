// src/components/common/ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

// Hoehe der fixierten AppBar (Toolbar minHeight in Topbar.jsx), damit der
// Abschnitt nicht unter der Leiste verschwindet.
const HEADER_OFFSET = 64;

// Wie viele Frames auf ein noch nicht gerendertes Ziel gewartet wird.
// Die Abschnitte werden beim Scrollen eingeblendet und existieren im
// ersten Frame nach einem Seitenwechsel teilweise noch nicht.
const MAX_FRAMES = 60;

/**
 * Springt zu dem Abschnitt, dessen id im Hash der Adresse steht.
 *
 * Wird einmal zentral im Router gerendert und gilt damit fuer alle Seiten.
 *
 * Der Effekt haengt bewusst zusaetzlich an location.key: Klickt man einen
 * Link auf die bereits geoeffnete Adresse, macht React Router daraus ein
 * replace - der Hash bleibt dabei gleich, der key aendert sich. Ohne den
 * key wuerde der Effekt in genau dem Fall nicht erneut laufen, in dem man
 * schon auf der Seite steht.
 */
const ScrollToHash = () => {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    let frame;
    let frames = 0;

    const jump = () => {
      const el = document.getElementById(id);

      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
        return;
      }

      if (frames++ < MAX_FRAMES) frame = requestAnimationFrame(jump);
    };

    frame = requestAnimationFrame(jump);
    return () => cancelAnimationFrame(frame);
  }, [hash, key]);

  return null;
};

export default ScrollToHash;
