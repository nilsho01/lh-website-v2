import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  useTheme,
  Paper,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import SectionSideHero from "./SectionSideHero";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const OnlineSurveysSection = ({ sectionRef }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const steps = [
    { id: "survey", label: "Survey", desc: "Questionnaire & fieldwork" },
    { id: "processing", label: "Data processing", desc: "Cleaning & coding" },
    { id: "reporting", label: "Reporting", desc: "Dashboards & exports" },
  ];

  const [activeStep, setActiveStep] = useState("survey");

  const automationBlocks = [
    {
      title: "Sample management",
      text: "Invitation waves, reminders and quota steering are triggered automatically based on live response status.",
    },
    {
      title: "Quality and fraud checks",
      text: "Speeders, straightliners and inconsistent answers are flagged or removed using defined business rules.",
    },
    {
      title: "Standard exports",
      text: "Ready-to-use exports for modelling, weighting and tracking, including codebooks and field documentation.",
    },
  ];

  const renderStepText = () => {
    if (activeStep === "survey") {
      return (
        <>
          We design online questionnaires that work across devices, using{" "}
          <strong>clear routing</strong> and{" "}
          <strong>smart validation</strong> so respondents can complete them
          quickly and reliably. Complex concepts can be broken down into
          modular question blocks, with visual elements tailored to your brand
          guidelines.
        </>
      );
    }
    if (activeStep === "processing") {
      return (
        <>
          Data processing includes automated plausibility checks, coding of open
          answers and preparation of all relevant variables for reporting and
          further modelling. We document all rules, from recodes to derived
          indices, so analysts and auditors can trace every step.
        </>
      );
    }
    return (
      <>
        Results are then loaded into online dashboards or static reports.
        Standard figures can be <strong>scheduled</strong>, while ad-hoc filters
        let you explore sub-groups on demand. Export options for PowerPoint,
        Excel or PDF allow teams to reuse charts in their own presentations
        without manual rework.
      </>
    );
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle bg band */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "radial-gradient(circle at 50% 0%, rgba(60,90,200,0.24), transparent 65%)"
            : "radial-gradient(circle at 50% 0%, rgba(110,140,255,0.18), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={5} alignItems="flex-start">
          {/* Left side hero */}
          <Grid item xs={12} md={5}>
            <SectionSideHero
              eyebrow="Online surveys"
              title="A standard method for international projects."
              subtitle="Online surveys are part of our standard repertoire and used as a central method within international studies and tracking programmes."
              chips={[
                "Multi-country setups",
                "Panel management",
                "Fully automated flows",
              ]}
              bullets={[
                "Device-agnostic questionnaires (mobile, tablet, desktop)",
                "Brand-consistent visuals and routing logic",
                "GDPR-compliant data handling and storage",
              ]}
              imageUrl="/wallpapers/online_hero.jpg"
            imageSide="left"
        imageWidth="80%"
            />
          </Grid>

          {/* Main content */}
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Stack spacing={3}>
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
                    Explore the process
                  </Typography>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.2}
                    sx={{ flexWrap: "wrap" }}
                  >
                    {steps.map((step) => {
                      const active = step.id === activeStep;
                      return (
                        <Chip
                          key={step.id}
                          label={step.label}
                          clickable
                          color={active ? "primary" : "default"}
                          variant={active ? "filled" : "outlined"}
                          onClick={() => setActiveStep(step.id)}
                          sx={{
                            borderRadius: 999,
                            textTransform: "none",
                            px: 1,
                          }}
                        />
                      );
                    })}
                  </Stack>

                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {renderStepText()}
                  </Typography>
                </Stack>

                <Divider />

                <Typography
                  variant="subtitle2"
                  sx={{ opacity: 0.85, mt: 1 }}
                >
                  What “fully automated” means in practice
                </Typography>

                <Grid container spacing={2}>
                  {automationBlocks.map((block) => (
                    <Grid item xs={12} sm={4} key={block.title}>
                      <MotionPaper
                        whileHover={{
                          y: -4,
                          boxShadow: isDark
                            ? "0 16px 36px rgba(0,0,0,0.9)"
                            : "0 16px 34px rgba(80,100,160,0.45)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 18,
                        }}
                        sx={{
                          borderRadius: 3,
                          p: 2,
                          height: "100%",
                          background: isDark
                            ? "linear-gradient(135deg, #1c2135, #0e101c)"
                            : "linear-gradient(135deg, #ffffff, #dfe3ff)",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, mb: 0.5 }}
                        >
                          {block.title}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {block.text}
                        </Typography>
                      </MotionPaper>
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  All elements – from invitations to data exports – can be
                  orchestrated centrally. This creates a{" "}
                  <strong>repeatable setup</strong> for recurring waves while
                  still allowing room for local questions or add-on modules
                  when markets need them.
                </Typography>
              </Stack>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OnlineSurveysSection;
