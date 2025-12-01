// src/components/common/HeroSection.jsx
import { Box, useTheme } from "@mui/material";
import uiConfigs from "../../configs/ui.configs";

const HeroSection = ({ backgroundUrl, children, big = false }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Aspect-Ratio / Höhe
        paddingTop: big
          ? {
              xs: "110%",   // etwas kleiner, damit's auf Phone nicht absurd hoch ist
              sm: "80%",
              md: "60%",
              lg: "45%",
            }
          : {
              xs: "80%",
              sm: "60%",
              md: "45%",
              lg: "35%",
            },
        minHeight: {
          xs: 380,         // Mindesthöhe, damit Content Platz hat
          md: big ? 480 : 380,
        },
        color: isDark ? "#ffffff" : theme.palette.text.primary,
        // WICHTIG: auf mobilen nicht hart abschneiden
        overflow: { xs: "visible", md: "hidden" },
        "&::before": {
          content: '""',
          width: "100%",
          height: "30%",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: "none",
          ...uiConfigs.style.gradientByImage[theme.palette.mode],
        },
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          ...uiConfigs.style.horizontalGradientByImage[theme.palette.mode],
        }}
      />

      {/* Content über dem Bild */}
      <Box
        sx={{
          position: "absolute",
          // Auf kleineren Screens: von oben starten
          // Ab md: schön vertikal zentrieren
          top: { xs: "0%", md: "50%" },
          left: 0,
          width: "100%",
          zIndex: 2,
          transform: {
            xs: "none",
            md: "translateY(-50%)",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingX: { xs: "1.5rem", md: "2rem" },
          paddingY: { xs: "2.5rem", md: 0 },
          textAlign: { xs: "left", md: "center" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default HeroSection;
