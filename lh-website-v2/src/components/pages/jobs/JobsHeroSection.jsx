// src/components/jobs/JobsHeroSection.jsx
import React from "react";
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
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import HeroSection from "../../common/HeroSection";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const JobsHeroSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { t } = useTranslation('jobs_career')

  return (
    <HeroSection backgroundUrl="/wallpapers/jobs_hero.jpg" big>
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
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Stack
            spacing={2}
            maxWidth={720}
            sx={{
              mt: { xs: 4, md: 6, lg: 8 },
              textAlign: "left",
              alignItems: "flex-start"
            }}
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

            <Stack direction="row" spacing={1.5} mt={1} flexWrap="wrap">
              <Chip
                icon={<WorkOutlineIcon />}
                label={t('tags.0')}
                size="small"
                color="secondary"
                variant="filled"
              />
              <Chip
                icon={<PeopleAltIcon />}
                label={t('tags.1')}
                size="small"
                variant="outlined"
              />
              <Chip
                icon={<EmojiEventsIcon />}
                label={t('tags.2')}
                size="small"
                variant="outlined"
              />
            </Stack>

            <Stack direction="row" spacing={1.5} mt={2} flexWrap="wrap">
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: "999px",
                  px: 3,
                  py: 1.1,
                  fontWeight: 600,
                }}
              >
                {t('button')}
              </Button>
            </Stack>
          </Stack>
        </Container>

        {/* Decorative bubbles */}
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

export default JobsHeroSection;
