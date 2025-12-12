// src/components/pages/onlineSurveys/OnlineSurveysWhySection.jsx
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

import SpeedIcon from "@mui/icons-material/Speed";
import PublicIcon from "@mui/icons-material/Public";
import ChecklistIcon from "@mui/icons-material/Checklist";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const OnlineSurveysWhySection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const items = [
    {
      icon: <SpeedIcon />,
      title: "Speed & scalability",
      text: "Reach thousands of respondents within days instead of weeks, with clear turnaround times and predictable costs.",
      chip: "Fast fieldwork",
    },
    {
      icon: <PublicIcon />,
      title: "International consistency",
      text: "Use one core questionnaire, adapted to local languages and markets, while keeping your KPIs aligned.",
      chip: "Global setup",
    },
    {
      icon: <ChecklistIcon />,
      title: "Clean, structured data",
      text: "Routing, validation and automated quality checks ensure that your datasets are ready for modelling and reporting.",
      chip: "Quality & structure",
    },
  ];

  return (
    <Box ref={refProp} sx={{ py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Stack
          spacing={1.5}
          mb={4}
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            Why online surveys
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            A standard method for international projects.
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 680, mx: "auto", opacity: 0.9 }}
          >
            Online surveys are part of our standard repertoire and are used as a
            central method within international surveys. From the first invite
            to the final report, all processes can be fully automated.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {items.map((item, idx) => (
            <Grid item xs={12} md={4} key={item.title}>
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
                    opacity: 0.06,
                    background:
                      "radial-gradient(circle at top left, #5564b5, transparent 55%)",
                    pointerEvents: "none",
                  }}
                />
                <Stack spacing={1.5} position="relative" zIndex={1}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.04)",
                    }}
                  >
                    {item.icon}
                  </Box>
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
      </Container>
    </Box>
  );
};

export default OnlineSurveysWhySection;
