// src/components/pages/automobile/AutomobileHero.jsx
import React from "react";
import { Box, Container, Stack, Typography, Chip, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import HeroSection from "../../common/HeroSection";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ShieldIcon from "@mui/icons-material/Shield";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import InsightsIcon from "@mui/icons-material/Insights";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const TAG_ICONS = [
  <WorkspacePremiumIcon />,
  <VerifiedUserIcon />,
  <ShieldIcon />,
  <SmartToyIcon />,
  <InsightsIcon />,
];

const AutomobileHero = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("automobile");

  const chipsRaw = t("hero.chips", { returnObjects: true });
  const chips = Array.isArray(chipsRaw) ? chipsRaw : [];

  return (
    <HeroSection backgroundUrl="/wallpapers/automobile_hero2.jpg" big>
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
          <Stack
            spacing={2}
            sx={{
              maxWidth: 720,
              mt: { xs: 4, md: 6, lg: 8 },
              textAlign: "left",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="overline" sx={{ letterSpacing: 3, opacity: 0.9 }}>
              {t("hero.overline")}
            </Typography>

            <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
              {t("hero.title")}
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 560, opacity: 0.95 }}>
              {t("hero.content")}
            </Typography>

            <Stack
              direction="row"
              spacing={1.5}
              useFlexGap
              sx={{ mt: 1, flexWrap: "wrap", justifyContent: "center", width: "100%" }}
            >
              {chips.map((chip, index) => (
                <Chip
                  key={chip}
                  icon={TAG_ICONS[index % TAG_ICONS.length]}
                  label={chip}
                  size="small"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Stack>
        </Container>

        {/* playful bubbles */}
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

export default AutomobileHero;
