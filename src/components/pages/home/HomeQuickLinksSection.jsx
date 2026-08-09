// src/components/pages/home/HomeQuickLinksSection.jsx
import React from "react";
import { Box, Container, Grid, Paper, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router";
import { useTranslation } from "react-i18next";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SavingsIcon from "@mui/icons-material/Savings";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const HomeQuickLinksSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("general");

  const links = [
    {
      icon: <DirectionsCarIcon fontSize="large" />,
      label: t("buttons.automobile.main"),
      to: "/automobile",
    },
    {
      icon: <PermContactCalendarIcon fontSize="large" />,
      label: t("buttons.customer-satisfaction"),
      to: "/customer-satisfaction",
    },
    {
      icon: <SavingsIcon fontSize="large" />,
      label: t("buttons.financial-markets.main"),
      to: "/financial-markets",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 1.5, sm: 3, md: 4 }}>
          {links.map((link) => (
            <Grid key={link.to} size={{ xs: 4 }}>
              <MotionPaper
                component={RouterLink}
                to={link.to}
                whileHover={{ y: -6, boxShadow: 6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                sx={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  height: "100%",
                  borderRadius: 3,
                  p: { xs: 1.5, sm: 3, md: 4 },
                  textAlign: "center",
                  background: isDark
                    ? theme.palette.background.paper
                    : "#ffffff",
                  border: isDark
                    ? `1px solid ${theme.palette.divider}`
                    : "none",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 40, sm: 56, md: 64 },
                    height: { xs: 40, sm: 56, md: 64 },
                    mx: "auto",
                    mb: { xs: 1, sm: 2 },
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    "& svg": {
                      fontSize: { xs: 20, sm: 28, md: 32 },
                    },
                  }}
                >
                  {link.icon}
                </Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "0.75rem", sm: "1.1rem", md: "1.5rem" },
                    lineHeight: 1.2,
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    hyphens: "auto",
                  }}
                >
                  {link.label}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeQuickLinksSection;
