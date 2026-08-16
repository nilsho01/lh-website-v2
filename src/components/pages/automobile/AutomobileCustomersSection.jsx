// src/components/pages/automobile/AutomobileCustomersSection.jsx
import React from "react";
import { Box, Container, Grid, Stack, Typography, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import FactoryIcon from "@mui/icons-material/Factory";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import StorefrontIcon from "@mui/icons-material/Storefront";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);
const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const TILES = [
  { key: "first", icon: <FactoryIcon /> },
  { key: "secound", icon: <ElectricCarIcon /> },
  { key: "third", icon: <StorefrontIcon /> },
];

const clients = [
  { name: "Porsche", logo: "/clients/porsche.png" },
  { name: "BMW", logo: "/clients/bmw.png" },
  { name: "Bentley", logo: "/clients/bentley.png" },
  { name: "MINI", logo: "/clients/mini.png" },
  { name: "Jaguar", logo: "/clients/Jaguar.png" },
  { name: "Land Rover", logo: "/clients/LandRover.svg" },
];

const AutomobileCustomersSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("automobile");

  return (
    <Box ref={refProp} sx={{ py: { xs: 6, md: 8 } }}>
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

        {/* Client logos */}
        <Stack spacing={1} sx={{ alignItems: "center", textAlign: "center", mt: 6, mb: 3 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>
            {t("customers.logos_caption")}
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ justifyContent: "center" }}>
          {clients.map((client) => (
            <Grid key={client.name} size={{ xs: 6, sm: 4, md: 2.4 }}>
              <MotionBox
                whileHover={{ y: -4, boxShadow: 6 }}
                sx={{
                  borderRadius: 3,
                  px: 3,
                  py: 2.5,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: isDark ? "rgba(10,10,10,0.9)" : "rgba(255,255,255,0.95)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 100,
                }}
              >
                <Box
                  component="img"
                  src={client.logo}
                  alt={client.name}
                  sx={{ maxWidth: "100%", maxHeight: 60, objectFit: "contain" }}
                />
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AutomobileCustomersSection;
