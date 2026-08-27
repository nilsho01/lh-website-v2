// src/components/pages/home/HomeClientsSection.jsx
import React from "react";
import { Box, Container, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import ReferenceLogos from "../../common/ReferenceLogos";

// weight gleicht die sehr unterschiedlichen Seitenverhaeltnisse optisch aus,
// siehe ReferenceLogos.
const clients = [
  { name: "Bentley", logo: "/clients/bentley.png", weight: 1 },
  { name: "BMW", logo: "/clients/bmw.png", weight: 1.15 },
  { name: "Ferrari", logo: "/clients/Scuderia_Ferrari_Logo.svg", weight: 1.35 },
  { name: "MINI", logo: "/clients/mini.png", weight: 0.9 },
  { name: "Jaguar", logo: "/clients/Jaguar.png", weight: 1 },
  { name: "Land Rover", logo: "/clients/LandRover.svg", weight: 1 },
  { name: "Porsche", logo: "/clients/porsche.png", weight: 1.35 },
  { name: "Sparkasse", logo: "/clients/sparkasse.png", weight: 1 },
];

const HomeClientsSection = () => {
  const theme = useTheme();
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
        {/* headline: auf der Startseite traegt die Zeile das Argument des
            Abschnitts, die Logos belegen es nur. */}
        <ReferenceLogos logos={clients} caption={t("clients.title")} headline />
      </Container>
    </Box>
  );
};

export default HomeClientsSection;
