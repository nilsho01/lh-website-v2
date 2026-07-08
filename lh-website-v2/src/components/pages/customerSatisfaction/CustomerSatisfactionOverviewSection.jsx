// src/components/pages/customerSatisfaction/CustomerSatisfactionOverviewSection.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const CustomerSatisfactionOverviewSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("customer_satisfaction");

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
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: narrative */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ letterSpacing: 3 }}>
                {t("overview.header")}
              </Typography>

              <Typography variant="h5" fontWeight={700}>
                {t("overview.title")}
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t("overview.paragraph_1")}
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t("overview.paragraph_2")}
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t("overview.paragraph_3")}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                sx={{ mt: 1 }}
              >
                <Chip
                  label={t("overview.chips.design_methodology")}
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: 999 }}
                />
                <Chip
                  label={t("overview.chips.fieldwork_data_quality")}
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: 999 }}
                />
                <Chip
                  label={t("overview.chips.online_reporting_exports")}
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: 999 }}
                />
              </Stack>
            </Stack>
          </Grid>

          {/* Right: compact process cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {t("overview.cards", { returnObjects: true }).map((item, idx) => (
                <Grid item xs={12} key={item.title}>
                  <MotionPaper
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    sx={{
                      borderRadius: 3,
                      p: 3,
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                      border: `1px solid ${
                        isDark
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.06)"
                      }`,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0.05,
                        background:
                          "radial-gradient(circle at top left, #5564b5, transparent 55%)",
                        pointerEvents: "none",
                      }}
                    />
                    <Stack spacing={1.5} position="relative" zIndex={1}>
                      <Typography variant="subtitle1" fontWeight={700}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {item.text}
                      </Typography>
                    </Stack>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerSatisfactionOverviewSection;
