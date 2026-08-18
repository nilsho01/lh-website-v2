// src/components/common/ObfuscatedEmail.jsx
import { Button } from "@mui/material";

/**
 * Schaltflaeche, die das Mailprogramm oeffnet, ohne die Adresse fuer
 * automatische Sammler bereitzulegen.
 *
 * Zwei Massnahmen greifen ineinander:
 *
 * 1. Adresse und Domain werden getrennt uebergeben und erst zur Laufzeit
 *    zusammengesetzt. In den Uebersetzungsdateien - die unter
 *    /locales/... oeffentlich abrufbar sind - steht dadurch nirgends ein
 *    vollstaendiges "name@domain", auf das der uebliche Suchausdruck
 *    anspringt.
 *
 * 2. Es entsteht kein mailto:-Verweis im Markup. Der Klick loest die
 *    Navigation selbst aus, ein Sammler findet also auch beim Auslesen
 *    der href-Attribute nichts.
 *
 * Bewusst eine Schaltflaeche und kein Verweis: Ein <a> ohne href waere
 * weder per Tastatur erreichbar noch als Bedienelement erkennbar.
 *
 * Der sichtbare Text bleibt die unveraenderte Adresse - sie soll lesbar,
 * markierbar und fuer Screenreader korrekt bleiben. Gegen einen Sammler,
 * der die fertig gerenderte Seite nach Text durchsucht, hilft das nicht;
 * dagegen hilft nur, die Adresse gar nicht anzuzeigen.
 */
const ObfuscatedEmail = ({ user, domain, subject, children, ...buttonProps }) => {
  const address = `${user}@${domain}`;

  const handleClick = () => {
    const target = subject
      ? `mailto:${address}?subject=${encodeURIComponent(subject)}`
      : `mailto:${address}`;
    window.location.href = target;
  };

  return (
    <Button onClick={handleClick} {...buttonProps}>
      {children ?? address}
    </Button>
  );
};

export default ObfuscatedEmail;
