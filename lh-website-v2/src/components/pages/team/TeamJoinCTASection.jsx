import React, { useRef } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useTheme,
  Paper,
  Button,
  Container,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MotionPaper =
  motion.create && typeof motion.create === "function"
    ? motion.create(Paper)
    : motion(Paper);

const JoinTeamCTASection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { t } = useTranslation('team')

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.3"],
  });

  // 1) Progress "abflachen", damit er ab einem Punkt stehen bleibt
  const clampedProgress = useTransform(scrollYProgress, (v) =>
    Math.min(Math.max(v, 0), 0.7) // max 0.7, danach keine Änderung mehr
  );

  // 2) Animations darauf definieren
  const y = useTransform(clampedProgress, [0, 0.35, 0.7], [60, 0, -10]);
  const opacity = useTransform(
    clampedProgress,
    [0, 0.1, 0.35, 0.7],
    [0, 0.4, 1, 1] // ab "Fokus" bleibt 1
  );
  const scale = useTransform(clampedProgress, [0, 0.35, 0.7], [0.96, 1, 1]);

  return (
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pb: 6 }}>
      <Box ref={sectionRef} sx={{ mt: 8 }}>
        <MotionPaper
          style={{ y, opacity, scale }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          sx={{
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            overflow: "hidden",
            position: "relative",
            background: isDark
              ? "radial-gradient(circle at 0% 0%, #272a3f, #151727)"
              : "radial-gradient(circle at 0% 0%, #f6f7ff, #dde3ff)",
            boxShadow: isDark
              ? "0 22px 60px rgba(0,0,0,0.85)"
              : "0 18px 45px rgba(80,100,170,0.45)",
          }}
        >
          {/* Leichte Lichtfläche */}
          <Box
            sx={{
              position: "absolute",
              inset: "-20%",
              background:
                "radial-gradient(circle at 80% 0%, rgba(255,255,255,0.22), transparent 60%)",
              mixBlendMode: isDark ? "screen" : "soft-light",
              pointerEvents: "none",
            }}
          />

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack spacing={1.5} sx={{ position: "relative", zIndex: 1 }}>
                <Typography variant="overline" sx={{ letterSpacing: 3 }}>
                  {t('CTA.header')}
                </Typography>
                <Typography variant="h5" fontWeight={800}>
                  {t('CTA.title')}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.9, maxWidth: 540 }}
                >
                  {t('CTA.content')}
                </Typography>
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{ position: "relative", zIndex: 1 }}
            >
              <Stack
                spacing={1.5}
                alignItems={{ xs: "flex-start", md: "flex-end" }}
              >
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  {t('CTA.information')}
                </Typography>

                <Button
                  component={RouterLink}
                  to="/job-career"
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderRadius: "999px",
                    px: 3.5,
                    py: 1.1,
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "none",
                    transition: "box-shadow 0.2s ease, transform 0.2s ease",
                    "&:hover": {
                      boxShadow: isDark
                        ? "0 14px 30px rgba(0,0,0,0.9)"
                        : "0 12px 28px rgba(80,100,170,0.55)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {t('CTA.button')}
                </Button>

                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  {t('CTA.tip')}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </MotionPaper>
      </Box>
    </Container>
  );
};

export default JoinTeamCTASection;
