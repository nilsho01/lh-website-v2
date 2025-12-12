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

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const FMCustIntroSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [segment, setSegment] = useState("retail");

  const segmentText = {
    retail:
      "In retail banking, satisfaction programmes focus on everyday interactions: accounts, cards, online access and simple advisory meetings. We link these experiences to churn, product holding and recommendation.",
    insurance:
      "In insurance, claims handling and communication during incidents are central. Satisfaction tracking helps you understand how well your processes work when customers actually need you.",
    wealth:
      "For wealth and asset management, trust and continuity are key. Satisfaction measurements show how advice quality, transparency and digital reporting affect long-term relationships.",
  };

  const pillars = [
    {
      title: "Retention & lifetime value",
      text: "Identify which customer groups are at risk, and which experiences drive long-term loyalty and product depth.",
      chip: "Lifetime value",
    },
    {
      title: "Risk & reputation",
      text: "Use satisfaction scores as an early indicator for reputational risk, regulatory issues and service breakdowns.",
      chip: "Early warning",
    },
    {
      title: "Commercial steering",
      text: "Translate feedback into concrete targets for regions, branches and channels instead of generic slogans.",
      chip: "Steering KPIs",
    },
  ];

  const segmentOptions = [
    { id: "retail", label: "Retail banking" },
    { id: "insurance", label: "Insurance" },
    { id: "wealth", label: "Wealth management" },
  ];

  return (
    <Box ref={refProp} sx={{ py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Text + Segment-Toggle */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ letterSpacing: 3 }}>
                Customer satisfaction in financial markets
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                Financial decisions are based on trust, not just price.
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                We design satisfaction programmes that combine representative
                measurements with pragmatic KPIs, so your teams see what really
                moves the needle over time.
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
                {segmentText[segment]}
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
