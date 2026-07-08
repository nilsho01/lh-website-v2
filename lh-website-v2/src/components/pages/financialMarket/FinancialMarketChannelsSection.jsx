// src/components/pages/financial/FMCustChannelsSection.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import StorefrontIcon from "@mui/icons-material/Storefront";
import CallIcon from "@mui/icons-material/Call";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const FMCustChannelsSection = ({ refProp }) => {
  const { t } = useTranslation("financial_market");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const channels = [
    {
      id: "branches",
      icon: <StorefrontIcon />,
      title: t("channels.items.branches.title"),
      desc: t("channels.items.branches.desc"),
      kpis: t("channels.items.branches.kpis", { returnObjects: true }),
    },
    {
      id: "contact",
      icon: <CallIcon />,
      title: t("channels.items.contact.title"),
      desc: t("channels.items.contact.desc"),
      kpis: t("channels.items.contact.kpis", { returnObjects: true }),
    },
    {
      id: "digital",
      icon: <SmartphoneIcon />,
      title: t("channels.items.digital.title"),
      desc: t("channels.items.digital.desc"),
      kpis: t("channels.items.digital.kpis", { returnObjects: true }),
    },
    {
      id: "claims",
      icon: <ReportGmailerrorredIcon />,
      title: t("channels.items.claims.title"),
      desc: t("channels.items.claims.desc"),
      kpis: t("channels.items.claims.kpis", { returnObjects: true }),
    },
  ];

  const [selected, setSelected] = useState("digital");
  const active = channels.find((c) => c.id === selected) ?? channels[0];

  return (
    <Box
      ref={refProp}
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1.5} mb={4} alignItems="center" textAlign="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t("channels.header")}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t("channels.title")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 760, mx: "auto", opacity: 0.9 }}
          >
            {t("channels.content")}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {channels.map((ch, index) => {
            const activeCard = ch.id === selected;
            return (
              <Grid item xs={12} md={3} sm={6} key={ch.id}>
                <MotionPaper
                  onClick={() => setSelected(ch.id)}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -4, boxShadow: 6 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  sx={{
                    borderRadius: 3,
                    p: 2.5,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    cursor: "pointer",
                    border: `1px solid ${
                      isDark
                        ? activeCard
                          ? "rgba(255,255,255,0.16)"
                          : "rgba(255,255,255,0.06)"
                        : activeCard
                        ? "rgba(0,0,0,0.14)"
                        : "rgba(0,0,0,0.06)"
                    }`,
                    backgroundColor: activeCard
                      ? isDark
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(0,0,0,0.02)"
                      : "transparent",
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.04)",
                    }}
                  >
                    {ch.icon}
                  </Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {ch.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {ch.desc}
                  </Typography>
                </MotionPaper>
              </Grid>
            );
          })}
        </Grid>

        {/* Detailbereich zum ausgewählten Channel */}
        <Box
          sx={{
            mt: 4,
            borderRadius: 3,
            px: { xs: 2, md: 3 },
            py: { xs: 2.5, md: 3 },
            border: `1px solid ${
              isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
            }`,
          }}
        >
          <Stack spacing={1.5}>
            <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
              {t("channels.selected_touchpoint")}
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              {active.title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {active.desc}
            </Typography>

            <Typography
              variant="body2"
              sx={{ opacity: 0.9, mt: 1, fontWeight: 600 }}
            >
              {t("channels.typical_kpis")}
            </Typography>

            <Stack spacing={0.5}>
              {active.kpis.map((k) => (
                <Typography key={k} variant="body2" sx={{ opacity: 0.9 }}>
                  {`• ${k}`}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default FMCustChannelsSection;
