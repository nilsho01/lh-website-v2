// src/components/common/Flag.jsx
import { useId } from "react";

/**
 * Ersatz fuer react-world-flags.
 *
 * Die Bibliothek bettet alle 256 Laenderflaggen als Data-URIs ein und war
 * damit fuer rund 3,6 MB der 4,5 MB grossen JS-Bundle verantwortlich -
 * verwendet werden zwei davon. Auf einer Mobilverbindung ist das die
 * teuerste Zeile des Projekts, deshalb liegen die benoetigten Flaggen hier
 * als Inline-SVG.
 *
 * Die aufrufende Seite uebergibt weiterhin nur code und style, die
 * Schnittstelle bleibt also unveraendert.
 *
 * Neue Sprache im Sprachwaehler? Dann hier ein Motiv ergaenzen. Ohne
 * passenden Eintrag erscheint ein neutraler Kreis mit dem Laendercode -
 * sichtbar unvollstaendig, aber nichts bricht.
 */

// Ohne preserveAspectRatio="slice" wuerde die Flagge in einem quadratischen
// Rahmen verzerrt statt beschnitten - das frueher genutzte objectFit: "cover"
// wirkt nur auf <img>, nicht auf ein Inline-SVG.
const SLICE = "xMidYMid slice";

const Germany = () => (
  <>
    <rect width="5" height="1" y="0" fill="#000000" />
    <rect width="5" height="1" y="1" fill="#dd0000" />
    <rect width="5" height="1" y="2" fill="#ffce00" />
  </>
);

const UnitedKingdom = ({ clipId }) => (
  <>
    <clipPath id={clipId}>
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <rect width="60" height="30" fill="#00247d" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
    <path
      d="M0,0 L60,30 M60,0 L0,30"
      clipPath={`url(#${clipId})`}
      stroke="#cf142b"
      strokeWidth="4"
    />
    <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6" />
  </>
);

const FLAGS = {
  DE: { viewBox: "0 0 5 3", render: () => <Germany /> },
  GB: { viewBox: "0 0 60 30", render: (clipId) => <UnitedKingdom clipId={clipId} /> },
};

const Flag = ({ code, style, title }) => {
  const clipId = useId();
  const flag = FLAGS[String(code || "").toUpperCase()];

  if (!flag) {
    return (
      <svg viewBox="0 0 60 30" style={style} role="img" aria-label={title || code}>
        <rect width="60" height="30" fill="#94959a" />
        <text
          x="30"
          y="21"
          textAnchor="middle"
          fontSize="16"
          fontFamily="sans-serif"
          fill="#ffffff"
        >
          {code}
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox={flag.viewBox}
      preserveAspectRatio={SLICE}
      style={style}
      role="img"
      aria-label={title || code}
    >
      {flag.render(clipId)}
    </svg>
  );
};

export default Flag;
