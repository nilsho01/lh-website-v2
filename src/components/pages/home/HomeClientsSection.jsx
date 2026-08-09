// src/components/pages/home/HomeClientsSection.jsx
import React from "react";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const clients = [
  { name: "BMW", logo: "/clients/bmw.png" },
  { name: "Bentley", logo: "/clients/bentley.png" },
  { name: "Porsche", logo: "/clients/porsche.png" },
  { name: "MINI", logo: "/clients/mini.png" },
  { name: "Sparkasse", logo: "/clients/sparkasse.png" },
];

const HomeClientsSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("home");

  return (
    <Box
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center", mb: 4 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>
            {t("clients.header")}
          </Typography>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            {t("clients.title")}
          </Typography>
        </Stack>
      </Container>

      {/* Endless scrolling logo marquee */}
      <Box
        sx={{
          mt: 2,
          width: "100%",
          overflow: "hidden",
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "clients-marquee 32s linear infinite",
            "@keyframes clients-marquee": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {[...clients, ...clients].map((client, idx) => (
            <Box
              key={`${client.name}-${idx}`}
              sx={{
                flex: "0 0 auto",
                width: { xs: 150, sm: 180, md: 200 },
                mx: { xs: 1.5, md: 2 },
                borderRadius: 3,
                px: 3,
                py: 2.5,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: isDark
                  ? "rgba(10,10,10,0.9)"
                  : "rgba(255,255,255,0.95)",
                backdropFilter: "blur(6px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 120,
              }}
            >
              <Box
                component="img"
                src={client.logo}
                alt={client.name}
                sx={{
                  maxWidth: "100%",
                  maxHeight: 72,
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeClientsSection;
