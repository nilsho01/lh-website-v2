// src/components/pages/onlineSurveys/OnlineSurveysProcessSection.jsx
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
const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const OnlineSurveysProcessSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const steps = [
    {
      id: "survey",
      label: "Survey design & invites",
      short: "Questionnaire & sample",
      desc: "We design online questionnaires that work across devices, using clear routing and smart validation so respondents can complete them quickly and reliably.",
      details: [
        "Questionnaire design & scripting",
        "Sampling, quotas & panels",
        "Invites, reminders & redirects",
      ],
    },
    {
      id: "processing",
      label: "Fieldwork & data processing",
      short: "Cleaning & coding",
      desc: "Data processing includes automated plausibility checks, coding of open answers and preparation of all relevant variables for reporting and modelling.",
      details: [
        "Automated quality checks & cleaning",
        "Coding of open-ended answers",
        "Variable sets for modelling",
      ],
    },
    {
      id: "reporting",
      label: "Reporting & exports",
      short: "Dashboards & files",
      desc: "Results are loaded into online dashboards or static reports. Standard figures can be scheduled, while ad-hoc filters let you explore sub-groups on demand.",
      details: [
        "Role-based dashboards",
        "Standardised KPIs & trending",
        "Exports to BI tools or data-lake",
      ],
    },
  ];

  const [activeStep, setActiveStep] = useState("survey");
  const active = steps.find((s) => s.id === activeStep) ?? steps[0];

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
        <Grid container spacing={4} alignItems="center">
          {/* Left: Interaktive Step-Auswahl */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ letterSpacing: 3 }}>
                Process overview
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                One pipeline from survey design to reporting.
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Explore how we move from questionnaire and invites through
                fieldwork and data processing into dashboards and exports.
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                sx={{ mt: 1 }}
              >
                {steps.map((step) => {
                  const activeChip = step.id === activeStep;
                  return (
                    <motion.div
                      key={step.id}
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Chip
                        label={step.short}
                        size="small"
                        clickable
                        onClick={() => setActiveStep(step.id)}
                        color={activeChip ? "primary" : "default"}
                        variant={activeChip ? "filled" : "outlined"}
                        sx={{ borderRadius: 999, mr: 0.5, mb: 0.5 }}
                      />
                    </motion.div>
                  );
                })}
              </Stack>

              <MotionPaper
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  p: 3,
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
                  }`,
                }}
              >
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
                    {active.label}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.95 }}>
                    {active.desc}
                  </Typography>

                  <Stack component="ul" spacing={0.5} sx={{ pl: 2, mt: 1 }}>
                    {active.details.map((d) => (
                      <Typography
                        key={d}
                        component="li"
                        variant="body2"
                        sx={{ opacity: 0.9 }}
                      >
                        {d}
                      </Typography>
                    ))}
                  </Stack>
                </Stack>
              </MotionPaper>
            </Stack>
          </Grid>

          {/* Right: „Wheel“ / Prozess-Visual */}
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              sx={{
                position: "relative",
                height: 260,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* outer dashed circle */}
              <Box
                sx={{
                  position: "absolute",
                  width: 230,
                  height: 230,
                  borderRadius: "50%",
                  border: `2px dashed ${
                    isDark ? "rgba(255,255,255,0.35)" : "rgba(40,60,120,0.4)"
                  }`,
                }}
              />

              {/* 3 dots around circle: survey / processing / reporting */}
              {steps.map((step, idx) => {
                const angle = (idx / steps.length) * Math.PI * 2;
                const radius = 115;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const activeDot = step.id === activeStep;

                return (
                  <MotionBox
                    key={step.id}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setActiveStep(step.id)}
                    sx={{
                      position: "absolute",
                      left: `calc(50% + ${x}px - 14px)`,
                      top: `calc(50% + ${y}px - 14px)`,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      cursor: "pointer",
                      border: `2px solid ${
                        activeDot
                          ? theme.palette.primary.main
                          : isDark
                          ? "rgba(255,255,255,0.5)"
                          : "rgba(40,60,120,0.4)"
                      }`,
                      backgroundColor: activeDot
                        ? theme.palette.primary.main
                        : isDark
                        ? "rgba(10,12,30,0.9)"
                        : "rgba(255,255,255,0.9)",
                      boxShadow: activeDot
                        ? "0 0 16px rgba(80,120,255,0.8)"
                        : "0 10px 20px rgba(0,0,0,0.1)",
                    }}
                  />
                );
              })}

              {/* inner bubble */}
              <Box
                sx={{
                  position: "absolute",
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: isDark
                    ? "radial-gradient(circle, #1c2135, #0e101c)"
                    : "radial-gradient(circle, #ffffff, #dfe3ff)",
                  boxShadow: isDark
                    ? "0 20px 40px rgba(0,0,0,0.9)"
                    : "0 20px 40px rgba(80,100,160,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  px: 2.5,
                }}
              >
                <Typography variant="body2" sx={{ opacity: 0.95 }}>
                  From <strong>survey design</strong> through{" "}
                  <strong>processing</strong> to{" "}
                  <strong>reporting</strong> – one connected pipeline.
                </Typography>
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OnlineSurveysProcessSection;
