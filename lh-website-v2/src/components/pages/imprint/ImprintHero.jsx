// src/components/jobs/JobsHeroSection.jsx
import {
  Box,
  Container,
  Stack,
  Typography,
  Chip,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

import HeroSection from "../../common/HeroSection";
import { useTranslation } from "react-i18next";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const ImprintHeroSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { t } = useTranslation('imprint')

  return (
    <HeroSection backgroundUrl="/wallpapers/imprint_hero.jpg" big>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ position: "relative", width: "100%" }}
          >
            {/* Deko-Bubbles */}
            <MotionBox
              aria-hidden
              initial={{ opacity: 0.2, x: -60, y: -30, scale: 0.85 }}
              animate={{ opacity: 0.6, x: -20, y: -10, scale: 1 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                top: -40,
                left: -40,
                width: 180,
                height: 180,
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
              animate={{ opacity: 0.5, x: 10, y: 0, scale: 1 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                bottom: -50,
                right: -20,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: isDark
                  ? "radial-gradient(circle at 70% 70%, rgba(0,0,0,0.65), transparent 60%)"
                  : "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.8), transparent 60%)",
                filter: "blur(3px)",
                pointerEvents: "none",
              }}
            />

            <Container
              maxWidth="lg"
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Stack
                spacing={2}
                maxWidth={720}
                sx={(theme) => ({
                  mt: { xs: 4, md: 6, lg: 8 },
                  textAlign: "left",
                  alignItems: "flex-start",
                })}
              >
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: 3, opacity: 0.9 }}
                >
                  {t('header')}
                </Typography>
                <Typography variant="h4" component="h1" fontWeight={700}>
                  {t('title')}
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 540 }}>
                  {t('subtitle')}
                </Typography>
              </Stack>
            </Container>
          </MotionBox>
        </HeroSection>
  );
};

export default ImprintHeroSection;
