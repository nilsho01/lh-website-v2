// src/components/common/HeroSection.jsx
import { Box, useTheme } from "@mui/material";
import uiConfigs from "../../configs/ui.configs";

const HeroSection = ({
  backgroundUrl,
  children,
  big = false,
  full = true,   // if false: side fade + extra top fade
  right = false, // if !full: image visually stronger on right or left
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const baseBgColor = isDark ? "#050814" : theme.palette.background.default;

  // Side fade when full === false
  const sideFadeGradient = right
    ? `linear-gradient(
        to left,
        transparent 0%,
        transparent 25%,
        ${baseBgColor} 70%,
        ${baseBgColor} 100%
      )`
    : `linear-gradient(
        to right,
        transparent 0%,
        transparent 25%,
        ${baseBgColor} 70%,
        ${baseBgColor} 100%
      )`;

  const bottomFade = uiConfigs.style.gradientByImage[theme.palette.mode];

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        // Aspect ratio / height:
        // -> xs: NO aspect ratio (0), let content define height
        // -> from sm up: keep your old behavior
        paddingTop: big
          ? {
              xs: 0,
              sm: 0,
              md: "60%",
              lg: "45%",
            }
          : {
              xs: 0,
              sm: 0,
              md: "45%",
              lg: "35%",
            },

        minHeight: {
          xs: big ? 600 : 430,  // ⬅️ more vertical space on phones
          md: big ? 650 : 480,
          lg: big ? 700 : 530,
        },

        color: isDark ? "#ffffff" : theme.palette.text.primary,
        overflow: { xs: "visible", md: "hidden" },

        // Bottom fade (always)
        "&::before": {
          content: '""',
          width: "100%",
          height: "30%",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
          ...bottomFade,
        },

        // Extra top fade only when full === false
        ...( !full && {
          "&::after": {
            content: '""',
            width: "100%",
            height: "30%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            pointerEvents: "none",
            ...bottomFade,
            transform: "scaleY(-1)",
          },
        }),
      }}
    >
      {/* Side fade overlay (only when full = false) */}
      {!full && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: sideFadeGradient,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Horizontal overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          ...uiConfigs.style.horizontalGradientByImage[theme.palette.mode],
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: {
            xs: "relative", // mobile: in normal flow
            md: "absolute", // desktop: centered
          },
          top: {
            xs: "auto",
            md: "50%",
          },
          left: 0,
          width: "100%",
          zIndex: 3,
          transform: {
            xs: "none",
            md: "translateY(-50%)",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingX: { xs: "1.5rem", md: "2rem" },
          paddingY: { xs: "2.5rem", md: 0 }, // a bit space on mobile
          textAlign: { xs: "left", md: "center" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default HeroSection;
