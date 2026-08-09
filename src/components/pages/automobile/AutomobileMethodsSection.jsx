// src/components/pages/automobile/AutomobileMethodsSection.jsx
import React from "react";
import { Box, Container, Grid, Stack, Typography, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import ForumIcon from "@mui/icons-material/Forum";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const ICONS = [<ForumIcon />, <QueryStatsIcon />, <DirectionsCarFilledIcon />, <LightbulbIcon />];

const AutomobileMethodsSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("automobile");

  const itemsRaw = t("methods.items", { returnObjects: true });
  const items = Array.isArray(itemsRaw) ? itemsRaw : [];

  return (
    <Box ref={refProp} sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center", mb: 4 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>
            {t("methods.header")}
          </Typography>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            {t("methods.title")}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 720 }}>
            {t("methods.subtitle")}
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid key={item.header} size={{ xs: 12, sm: 6, md: 3 }}>
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
                  {ICONS[index % ICONS.length]}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {item.header}
                </Typography>
                <Typography variant="body2">{item.content}</Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AutomobileMethodsSection;
