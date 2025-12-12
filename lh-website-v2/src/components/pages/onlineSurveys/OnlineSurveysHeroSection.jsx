// src/components/pages/onlineSurveys/OnlineSurveysHeroSection.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  Button,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

import HeroSection from "../../common/HeroSection";

import InsightsIcon from "@mui/icons-material/Insights";
import DevicesIcon from "@mui/icons-material/Devices";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);
const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const OnlineSurveysHeroSection = ({
  onJumpWhy,
  onJumpProcess,
  onJumpAutomation,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <HeroSection
      // passe das Bild an, falls du ein anderes hast
      backgroundUrl="/wallpapers/online_hero.jpg"
      big
      full={false}
    >
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{ position: "relative", width: "100%" }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ mt: { xs: 4, md: 6, lg: 8 } }}
          >
            {/* Left: Text */}
            <Grid item xs={12} md={7}>
              <Stack
                spacing={2}
                maxWidth={720}
                sx={{
                  textAlign: "left",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: 3, opacity: 0.9 }}
                >
                  Online surveys · International research
                </Typography>

                <Typography variant="h4" component="h1" fontWeight={700}>
                  From first invite to final dashboard – fully automated online
                  surveys.
                </Typography>

                <Typography variant="body1" sx={{ maxWidth: 540, opacity: 0.95 }}>
                  We design and run online surveys that work across devices,
                  languages and markets. From sampling to reporting, processes
                  can be fully automated while quality stays under control.
                </Typography>

                <Stack direction="row" spacing={1.5} mt={1} flexWrap="wrap">
                  <Chip
                    icon={<DevicesIcon />}
                    label="Multi-device"
                    size="small"
                    color="primary"
                    variant="filled"
                  />
                  <Chip
                    icon={<InsightsIcon />}
                    label="Clean data"
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    icon={<AutoModeIcon />}
                    label="Automation"
                    size="small"
                    variant="outlined"
                  />
                </Stack>

                <Stack direction="row" spacing={1.5} mt={2} flexWrap="wrap">
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderRadius: "999px",
                      px: 3,
                      py: 1.1,
                      fontWeight: 600,
                    }}
                    onClick={onJumpWhy}
                  >
                    Why online surveys
                  </Button>

                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      borderRadius: "999px",
                      px: 2.4,
                      py: 1,
                      fontWeight: 500,
                    }}
                    onClick={onJumpProcess}
                  >
                    See the process
                  </Button>

                  <Button
                    variant="text"
                    color="inherit"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 1,
                      py: 1,
                      fontWeight: 500,
                      textTransform: "none",
                    }}
                    onClick={onJumpAutomation}
                  >
                    Automation & reporting
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            {/* Right: Side-Hero Card im Team-Style */}
            <Grid item xs={12} md={5}>
              <MotionPaper
                initial={{ opacity: 0, x: 40, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.7 }}
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  p: 3,
                  overflow: "hidden",
                  background: isDark
                    ? "linear-gradient(145deg, #151827, #131624)"
                    : "linear-gradient(145deg, #f5f7ff, #e3e7ff)",
                  boxShadow: isDark
                    ? "0 24px 60px rgba(0,0,0,0.8)"
                    : "0 20px 50px rgba(60,80,140,0.35)",
                  transformOrigin: "center center",
                }}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                }}
              >
                {/* Licht-Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: "-40%",
                    background:
                      "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.16), transparent 55%)",
                    mixBlendMode: isDark ? "screen" : "multiply",
                    pointerEvents: "none",
                  }}
                />

                {/* Geometrische Formen */}
                <Box
                  sx={{
                    position: "absolute",
                    right: -120,
                    bottom: -80,
                    width: 260,
                    height: 260,
                    borderRadius: "40%",
                    border: isDark
                      ? "1px dashed rgba(255,255,255,0.25)"
                      : "1px dashed rgba(0,0,0,0.35)",
                    transform: "rotate(-8deg)",
                    opacity: 0.7,
                    pointerEvents: "none",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: -120,
                    top: -80,
                    width: 220,
                    height: 220,
                    borderRadius: "40%",
                    border: isDark
                      ? "1px dashed rgba(255,255,255,0.25)"
                      : "1px dashed rgba(0,0,0,0.35)",
                    transform: "rotate(6deg)",
                    opacity: 0.55,
                    pointerEvents: "none",
                  }}
                />

                <Stack spacing={2} sx={{ position: "relative", zIndex: 1 }}>
                  <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                    One pipeline, many markets
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    International online fieldwork under one roof.
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    From invitations and reminders to quotas and redirects: we
                    keep all steps of the online survey process in-house,
                    ensuring consistent quality and documentation for every
                    country.
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ opacity: 0.85, mt: 0.5 }}
                  >
                    Use the sections below to explore design, process and
                    automation in more detail.
                  </Typography>
                </Stack>
              </MotionPaper>
            </Grid>
          </Grid>
        </Container>

        {/* Deko-Bubbles wie bei Jobs */}
        <MotionBox
          aria-hidden
          initial={{ opacity: 0.3, x: -40, y: -10, scale: 0.8 }}
          animate={{ opacity: 0.6, x: -10, y: -5, scale: 1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            top: -40,
            left: -30,
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle at 30% 30%, rgba(0,0,0,0.7), transparent 60%)"
              : "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), transparent 60%)",
            filter: "blur(2px)",
            pointerEvents: "none",
          }}
        />
        <MotionBox
          aria-hidden
          initial={{ opacity: 0.2, x: 40, y: 20, scale: 0.8 }}
          animate={{ opacity: 0.5, x: 20, y: 0, scale: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            bottom: -60,
            right: -10,
            width: 210,
            height: 210,
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle at 70% 70%, rgba(0,0,0,0.65), transparent 60%)"
              : "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.7), transparent 60%)",
            filter: "blur(3px)",
            pointerEvents: "none",
          }}
        />
      </MotionBox>
    </HeroSection>
  );
};

export default OnlineSurveysHeroSection;
