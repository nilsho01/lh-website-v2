// src/components/financialMarket/FinancialMarketHero.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  useTheme,
  Paper,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import HeroSection from "../../common/HeroSection"; // same style as TeamHero path

const MotionDiv = motion.div;
const MotionPaper =
  motion.create && typeof motion.create === "function"
    ? motion.create(Paper)
    : motion(Paper);

const FinancialMarketHero = ({
  onJumpCustomer,
  onJumpSurveys,
  onJumpReporting,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const chipVariant = isDark ? "outlined" : "filled";

  return (
    <HeroSection backgroundUrl="/wallpapers/FinancialMarket_hero.jpg" big>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ mt: { xs: 4, md: 6, lg: 8 } }}
        >
          {/* LEFT: Text, buttons, chips (team-style center alignment) */}
          <Grid item xs={12} md={7}>
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{ width: "100%" }}
            >
              <Stack
                spacing={2}
                sx={{
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    opacity: 0.8,
                  }}
                >
                  Financial market research
                </Typography>

                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight={800}
                  sx={
                    isDark
                      ? {
                          mt: 1,
                          mb: 2,
                          background:
                            "linear-gradient(120deg, #ffffff, rgba(255,255,255,0.6))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : {
                          mt: 1,
                          mb: 2,
                          color: theme.palette.text.primary,
                        }
                  }
                >
                  From customer satisfaction to fully automated reporting.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    maxWidth: 520,
                    opacity: 0.95,
                    textAlign: "center",
                    textShadow: isDark
                      ? "none"
                      : "0 0 10px rgba(0,0,0,0.5)",
                  }}
                >
                  We combine customer and employee satisfaction programmes, online
                  surveys and modern reporting systems into one coherent financial
                  market setup – from first questionnaire to management dashboard.
                </Typography>

                {/* Buttons for scrolling to sections */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{
                    mt: 3,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    mx: "auto",
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={onJumpCustomer}
                    sx={{ borderRadius: 999, px: 3, textTransform: "none" }}
                  >
                    Customer satisfaction
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={onJumpSurveys}
                    sx={{ borderRadius: 999, px: 3, textTransform: "none" }}
                  >
                    Online surveys
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={onJumpReporting}
                    sx={{ borderRadius: 999, px: 3, textTransform: "none" }}
                  >
                    Reporting systems
                  </Button>
                </Stack>

                {/* Tags like on Team page */}
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    mt: 3,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    mx: "auto",
                  }}
                >
                  <Chip
                    label="Finance clients"
                    size="small"
                    variant={chipVariant}
                    color={!isDark ? "secondary" : "default"}
                    sx={{ borderRadius: 999 }}
                  />
                  <Chip
                    label="Data to insight"
                    size="small"
                    variant={chipVariant}
                    color={!isDark ? "secondary" : "default"}
                    sx={{ borderRadius: 999 }}
                  />
                  <Chip
                    label="Automation"
                    size="small"
                    variant={chipVariant}
                    color={!isDark ? "secondary" : "default"}
                    sx={{ borderRadius: 999 }}
                  />
                </Stack>
              </Stack>
            </MotionDiv>
          </Grid>

          {/* RIGHT: Info card, same style as teams card */}
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
            >
              {/* Light overlay */}
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

              {/* geometric line bottom-right */}
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

              {/* geometric line top-left */}
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
                  Three perspectives, one workflow
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  Customer satisfaction, surveys & reporting in one place.
                </Typography>

                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Use this page to navigate through{" "}
                  <strong>customer and employee satisfaction programmes</strong>,
                  our <strong>online survey setups</strong> and{" "}
                  <strong>modern reporting systems</strong>. Each module can be
                  booked separately, but they work best as one integrated
                  solution for financial institutions.
                </Typography>
              </Stack>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default FinancialMarketHero;
