// src/components/pages/financialMarket/FinancialMarketApproachSection.jsx
import React from "react";
import { Box, Container, Grid, Stack, Typography, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TransText from "../../common/TransText";

import GroupsIcon from "@mui/icons-material/Groups";
import BarChartIcon from "@mui/icons-material/BarChart";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const FinancialMarketApproachSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("financial_market");

  const cards = [
    { key: "first", icon: <GroupsIcon /> },
    { key: "second", icon: <BarChartIcon /> },
  ];

  return (
    <Box ref={refProp} sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center", mb: 4 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>
            {t("main.header")}
          </Typography>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            {t("main.title")}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 720 }}>
            {t("main.subheader")}
          </Typography>
        </Stack>

        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {cards.map((card) => (
            <Grid key={card.key} size={{ xs: 12, sm: 6 }}>
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
                  {card.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {t(`main.tiles.${card.key}.header`)}
                </Typography>
                <Typography variant="body2">
                  <TransText i18nKey={`main.tiles.${card.key}.content`} t={t} />
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FinancialMarketApproachSection;
