import React from "react";
import { Box, useTheme } from "@mui/material";

const SectionImageBackdrop = ({
  imageUrl,
  side = "left",        // "left" or "right"
  maxWidth = "70%",      // how much of the area the image+fade should cover on desktop
  children,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const sideKey = side === "right" ? "right" : "left";

  const gradient =
    side === "right"
      ? `linear-gradient(
          to left,
          ${isDark ? "rgba(11,12,18,0.95)" : "rgba(243,244,251,0.95)"} 0%,
          transparent 55%,
          transparent 100%
        )`
      : `linear-gradient(
          to right,
          ${isDark ? "rgba(11,12,18,0.95)" : "rgba(243,244,251,0.95)"} 0%,
          transparent 55%,
          transparent 100%
        )`;

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      {/* Image layer (limited width, not full area) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          [sideKey]: 0,
          width: { xs: "100%", md: maxWidth },
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isDark ? 0.4 : 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Fade layer on top of image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          [sideKey]: 0,
          width: { xs: "100%", md: maxWidth },
          background: gradient,
          pointerEvents: "none",
        }}
      />

      {/* Actual content (your tiles) */}
      <Box sx={{ position: "relative", zIndex: 1, p: { xs: 0, md: 1 } }}>
        {children}
      </Box>
    </Box>
  );
};

export default SectionImageBackdrop;
