// src/components/pages/financialMarket/WebQuestionaireProcessDiagram.jsx
import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

import FactCheckIcon from "@mui/icons-material/FactCheck";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);
const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const STEPS = [
  { key: "collection", icon: <FactCheckIcon fontSize="large" />, label: "Erhebung" },
  { key: "processing", icon: <SettingsIcon fontSize="large" />, label: "Datenverarbeitung" },
  { key: "reporting", icon: <BarChartIcon fontSize="large" />, label: "Reporting" },
];

const WebQuestionaireProcessDiagram = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 3,
        p: { xs: 3, sm: 4 },
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? `linear-gradient(160deg, ${theme.palette.background.paper}, #101020)`
          : `linear-gradient(160deg, #ffffff, #f0f2ff)`,
        border: isDark ? `1px solid ${theme.palette.divider}` : "none",
        boxShadow: isDark
          ? "0 20px 50px rgba(0,0,0,0.5)"
          : `0 20px 50px ${primary}22`,
      }}
    >
      {/* ambient glow */}
      <Box
        sx={{
          position: "absolute",
          inset: "-30%",
          background: `radial-gradient(circle at 30% 20%, ${primary}33, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 4, sm: 1 }}
        sx={{ alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}
      >
        {STEPS.map((step, index) => (
          <React.Fragment key={step.key}>
            <Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center", width: { xs: "auto", sm: 120 } }}>
              <Box sx={{ position: "relative" }}>
                {/* glow ring behind icon */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: -10,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${primary}55, transparent 70%)`,
                    filter: "blur(6px)",
                    pointerEvents: "none",
                  }}
                />
                <MotionBox
                  initial={{ opacity: 0, scale: 0.6, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  sx={{
                    position: "relative",
                    width: 88,
                    height: 88,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(145deg, ${primary}, ${secondary})`,
                    color: theme.palette.primary.contrastText,
                    boxShadow: `0 12px 28px ${primary}66`,
                  }}
                >
                  {step.icon}
                </MotionBox>
              </Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                {step.label}
              </Typography>
            </Stack>

            {index < STEPS.length - 1 && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: { xs: "rotate(90deg)", sm: "none" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 2, sm: 36 },
                    height: { xs: 24, sm: 2 },
                    background: `linear-gradient(90deg, ${primary}, ${secondary})`,
                    opacity: 0.6,
                    borderRadius: 999,
                  }}
                />
                <ArrowForwardIcon
                  sx={{
                    color: secondary,
                    fontSize: 20,
                    ml: -0.5,
                  }}
                />
              </Box>
            )}
          </React.Fragment>
        ))}
      </Stack>
    </Paper>
  );
};

export default WebQuestionaireProcessDiagram;
