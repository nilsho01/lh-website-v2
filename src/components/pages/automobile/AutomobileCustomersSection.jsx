// src/components/pages/automobile/AutomobileCustomersSection.jsx
import React from "react";
import { Box, Container, Grid, Stack, Typography, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ReferenceLogos from "../../common/ReferenceLogos";

import FactoryIcon from "@mui/icons-material/Factory";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import StorefrontIcon from "@mui/icons-material/Storefront";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const TILES = [
  { key: "first", icon: <FactoryIcon /> },
  { key: "secound", icon: <ElectricCarIcon /> },
  { key: "third", icon: <StorefrontIcon /> },
];

// weight gleicht die sehr unterschiedlichen Seitenverhaeltnisse optisch aus,
// siehe ReferenceLogos.
const clients = [
  { name: "Porsche", logo: "/clients/porsche.png", weight: 1.35 },
  { name: "BMW", logo: "/clients/bmw.png", weight: 1.15 },
  { name: "Bentley", logo: "/clients/bentley.png", weight: 1 },
  { name: "MINI", logo: "/clients/mini.png", weight: 0.9 },
  { name: "Jaguar", logo: "/clients/Jaguar.png", weight: 1 },
  { name: "Land Rover", logo: "/clients/LandRover.svg", weight: 1 },
];

const AutomobileCustomersSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("automobile");

  return (
    <Box id="who-we-work-for" ref={refProp} sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center", mb: 4 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>
            {t("customers.header")}
          </Typography>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            {t("customers.title")}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 720 }}>
            {t("customers.subtitle")}
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {TILES.map((tile) => (
            <Grid key={tile.key} size={{ xs: 12, sm: 6, md: 4 }}>
              <MotionPaper
                whileHover={{ y: -6, boxShadow: 6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  p: 3,
                  textAlign: "center",
                  background: theme.palette.mode === "light" ? "#ffffff" : theme.palette.background.paper,
                  border: isDark ? `1px solid ${theme.palette.divider}` : "none",
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    mx: "auto",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  {tile.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {t(`customers.tiles.${tile.key}.header`)}
                </Typography>
                <Typography variant="body2">
                  {t(`customers.tiles.${tile.key}.content`)}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

        {/* Referenzlogos: bewusst als leise Ergaenzung der Textzeile,
            nicht als eigenstaendiger Logo-Block. */}
        <Box sx={{ mt: { xs: 5, md: 7 } }}>
          <ReferenceLogos logos={clients} caption={t("customers.logos_caption")} />
        </Box>

      </Container>
    </Box>
  );
};

export default AutomobileCustomersSection;
