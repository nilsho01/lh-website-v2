// src/components/pages/automobile/AutomobilePerformanceSection.jsx
import React from "react";
import { Box, Container, Grid, Stack, Typography, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BoltIcon from "@mui/icons-material/Bolt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const TILES = [
  { key: "first", icon: <SupportAgentIcon /> },
  { key: "secound", icon: <BoltIcon /> },
  { key: "third", icon: <WorkspacePremiumIcon /> },
];

const AutomobilePerformanceSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("automobile");

  return (
    <Box ref={refProp} sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center", mb: 4 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>
            {t("performance.header")}
          </Typography>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            {t("performance.title")}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 720 }}>
            {t("performance.subtitle")}
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
                  textAlign: "left",
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
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  {tile.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {t(`performance.tiles.${tile.key}.header`)}
                </Typography>
                <Typography variant="body2">
                  {t(`performance.tiles.${tile.key}.content`)}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AutomobilePerformanceSection;
