// src/components/financialMarket/SectionSideHero.jsx
import React, { useRef } from "react";
import { Box, Stack, Typography, Chip, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionBox = motion(Box);

const SectionSideHero = ({
  eyebrow,
  title,
  subtitle,
  bullets = [],
  chips = [],
  imageUrl,              // e.g. "/wallpapers/FinancialMarket_customers.jpg"
  imageSide = "left",    // "left" | "right"
  imageWidth = "75%",    // nur ein Teilbereich bekommt das Bild
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start center", "end start"],
  });

  // Kachel leicht ausfaden / hochbewegen beim Scrollen
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -32]);

  const sideKey = imageSide === "right" ? "right" : "left";

  const fadeBaseColor = isDark
    ? "rgba(11, 12, 18, 0.96)"
    : "rgba(243, 244, 251, 0.96)";

  const fadeGradient =
    imageSide === "right"
      ? `linear-gradient(
          to left,
          ${fadeBaseColor} 0%,
          ${fadeBaseColor} 20%,
          transparent 65%,
          transparent 100%
        )`
      : `linear-gradient(
          to right,
          ${fadeBaseColor} 0%,
          ${fadeBaseColor} 20%,
          transparent 65%,
          transparent 100%
        )`;

  return (
    <Box
      ref={heroRef}
      sx={{
        position: "relative",
        // kein eigener Hintergrund, das macht das Bild + Fade
        borderRadius: 4,
        overflow: "hidden",
        // etwas Platz außenrum, damit die Kachel nicht direkt am Rand klebt
        py: { xs: 1, md: 1.5 },
      }}
    >
      {/* Bild-Hintergrund hinter der Kachel, nicht IN der Kachel */}
      {imageUrl && (
        <>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              [sideKey]: 0,
              width: { xs: "100%", md: imageWidth },
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: isDark ? 0.4 : 0.6,
              filter: "grayscale(0.1)",
              pointerEvents: "none",
            }}
          />
          {/* Fade, damit das Bild nicht den ganzen Bereich dominiert */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              [sideKey]: 0,
              width: { xs: "100%", md: imageWidth },
              background: fadeGradient,
              pointerEvents: "none",
            }}
          />
        </>
      )}

      {/* Sehr subtile Licht-Atmosphäre über allem */}
      <Box
        sx={{
          position: "absolute",
          inset: "-20%",
          background: isDark
            ? "radial-gradient(circle at 0% 0%, rgba(140,170,255,0.22), transparent 65%)"
            : "radial-gradient(circle at 0% 0%, rgba(40,80,200,0.16), transparent 70%)",
          pointerEvents: "none",
          mixBlendMode: isDark ? "screen" : "multiply",
        }}
      />

      {/* Die eigentliche Kachel/Card */}
      <MotionBox
        style={{ opacity, y }}
        sx={{
          position: "relative",
          zIndex: 1,
          borderRadius: 4,
          p: { xs: 2.5, md: 3 },
          pr: { xs: 2.5, md: 4 },
          minHeight: 220,
          bgcolor: isDark ? "#151727" : "#e1e7ff",
          boxShadow: isDark
            ? "0 18px 40px rgba(0,0,0,0.7)"
            : "0 16px 34px rgba(80,100,160,0.35)",
        }}
      >
        <Stack spacing={1.2}>
          {eyebrow && (
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2, opacity: 0.9 }}
            >
              {eyebrow}
            </Typography>
          )}

          {title && (
            <Typography variant="h5" fontWeight={700}>
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography variant="body2" sx={{ opacity: 0.92 }}>
              {subtitle}
            </Typography>
          )}

          {chips.length > 0 && (
            <Stack
              direction="row"
              spacing={1}
              sx={{ flexWrap: "wrap", pt: 0.5 }}
            >
              {chips.map((label) => (
                <Chip
                  key={label}
                  label={label}
                  size="small"
                  sx={{ borderRadius: 999 }}
                />
              ))}
            </Stack>
          )}

          {bullets.length > 0 && (
            <Stack component="ul" spacing={0.5} sx={{ pl: 2, mt: 1 }}>
              {bullets.map((item) => (
                <Typography
                  key={item}
                  component="li"
                  variant="body2"
                  sx={{ opacity: 0.9 }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          )}
        </Stack>
      </MotionBox>
    </Box>
  );
};

export default SectionSideHero;
