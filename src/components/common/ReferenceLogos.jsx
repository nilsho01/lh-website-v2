// src/components/common/ReferenceLogos.jsx
import { Box, Stack, Typography, useTheme } from "@mui/material";

/**
 * Referenzlogos als leise Fussnote zu einer Textzeile.
 *
 * Die Zeile ist die Aussage, die Logos belegen sie nur - deshalb bewusst
 * ohne Rahmen, Flaeche, Schatten oder Hover-Effekt. Alles, was ein Logo
 * zusaetzlich einfasst, macht daraus wieder ein Gestaltungselement.
 *
 * Zwei Eigenheiten der vorhandenen Assets bestimmen die Umsetzung:
 *
 * 1. Es sind Embleme, keine flachen Wortmarken - Wappen, Roundels und
 *    Chrom-Badges mit Verlaeufen. Eine Silhouette (brightness(0)) wuerde
 *    daraus schwarze Kleckse machen, deshalb nur Graustufen plus
 *    reduzierte Deckkraft.
 *
 * 2. Die Seitenverhaeltnisse gehen weit auseinander: das Porsche-Wappen ist
 *    hochkant (3:4), der MINI-Schriftzug breit (2,4:1). Bei identischer
 *    Hoehe wirkt das Wappen winzig und der Schriftzug riesig, weil das Auge
 *    die Flaeche vergleicht, nicht die Hoehe. Der Faktor "weight" gleicht
 *    das optisch aus - er ist per Auge gesetzt, nicht gerechnet.
 */

// Basishoehe einer Logo-Zeile. Bewusst klein: darunter zerfaellt die
// Binnenzeichnung der Embleme, darueber dominieren sie die Textzeile.
const BASE_HEIGHT = { xs: 22, sm: 26, md: 30 };

const scaled = (weight) =>
  Object.fromEntries(
    Object.entries(BASE_HEIGHT).map(([bp, px]) => [bp, Math.round(px * weight)])
  );

/**
 * headline=true macht aus der Zeile die Aussage des Abschnitts (eigene
 * Ueberschrift), statt einer leisen Bildunterschrift. Gedacht fuer Stellen,
 * an denen der Abschnitt keine eigene Ueberschrift darueber hat - sonst
 * stuenden zwei konkurrierende Ueberschriften uebereinander.
 */
const ReferenceLogos = ({ logos, caption, headline = false }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Stack spacing={{ xs: 2.5, md: 3 }} sx={{ alignItems: "center" }}>
      {caption &&
        (headline ? (
          <Typography
            variant="h5"
            component="h2"
            sx={{
              textAlign: "center",
              maxWidth: 720,
              fontWeight: 700,
            }}
          >
            {caption}
          </Typography>
        ) : (
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              maxWidth: 620,
              opacity: 0.75,
            }}
          >
            {caption}
          </Typography>
        ))}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          columnGap: { xs: 3, sm: 4, md: 5 },
          rowGap: { xs: 2.5, md: 3 },
          maxWidth: 860,
        }}
      >
        {logos.map((logo) => (
          <Box
            key={logo.name}
            component="img"
            src={logo.logo}
            alt={logo.name}
            loading="lazy"
            sx={{
              height: scaled(logo.weight ?? 1),
              width: "auto",
              maxWidth: { xs: 92, md: 116 },
              objectFit: "contain",
              // Graustufen nehmen den Marken die Konkurrenz untereinander,
              // im Dunkelmodus hebt brightness die dunklen Schriftzuege
              // (Bentley, Jaguar) ueberhaupt erst vom Hintergrund ab.
              filter: isDark
                ? "grayscale(1) brightness(1.9)"
                : "grayscale(1)",
              opacity: isDark ? 0.7 : 0.6,
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default ReferenceLogos;
