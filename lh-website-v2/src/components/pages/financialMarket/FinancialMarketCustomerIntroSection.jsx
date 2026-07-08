// src/components/pages/financial/FMCustIntroSection.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const FMCustIntroSection = ({ refProp }) => {
  const { t } = useTranslation("financial_market");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [segment, setSegment] = useState("retail");

  const pillars = t("intro.pillars", { returnObjects: true });

  const segmentOptions = [
    { id: "retail", label: t("intro.segments.retail.label") },
    { id: "insurance", label: t("intro.segments.insurance.label") },
    { id: "wealth", label: t("intro.segments.wealth.label") },
  ];

  return (
    <Box ref={refProp} sx={{ py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Text + Segment-Toggle */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ letterSpacing: 3 }}>
                {t("intro.header")}
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                {t("intro.title")}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t("intro.content")}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                sx={{ mt: 1 }}
              >
                {segmentOptions.map((opt) => (
                  <motion.div
                    key={opt.id}
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Chip
                      label={opt.label}
                      size="small"
                      clickable
                      onClick={() => setSegment(opt.id)}
                      color={segment === opt.id ? "primary" : "default"}
                      variant={segment === opt.id ? "filled" : "outlined"}
                      sx={{ borderRadius: 999, mr: 0.5, mb: 0.5 }}
                    />
                  </motion.div>
                ))}
              </Stack>

              <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                {t(`intro.segments.${segment}.text`)}
              </Typography>
            </Stack>
          </Grid>

          {/* Right: drei Cards im Jobs-Style */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {pillars.map((item, idx) => (
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
                      <Chip
                        label={item.chip}
                        size="small"
                        variant="outlined"
                        sx={{ alignSelf: "flex-start", mt: 1 }}
                      />
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

export default FMCustIntroSection;
