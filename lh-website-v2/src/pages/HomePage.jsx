// src/pages/HomePage.jsx
import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import HeroSection from "../components/common/HeroSection";

import InsightsIcon from "@mui/icons-material/Insights";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import PublicIcon from "@mui/icons-material/Public";
import SpeedIcon from "@mui/icons-material/Speed";
import Groups2Icon from "@mui/icons-material/Groups2";
import TimelineIcon from "@mui/icons-material/Timeline";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

// Variants for "Our clients" animation
const clientsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const clientItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const HomePage = () => {
  const theme = useTheme();
  const { t } = useTranslation('home');
  const isDark = theme.palette.mode === "dark";

  const featureCards = [
    {
      icon: <PublicIcon fontSize="large" />,
      title: t('main_section.target_groups.cards.card_1.title'),
      text: t('main_section.target_groups.cards.card_1.content'),
    },
    {
      icon: <DirectionsCarFilledIcon fontSize="large" />,
      title: t('main_section.target_groups.cards.card_2.title'),
      text: t('main_section.target_groups.cards.card_2.content'),
    },
    {
      icon: <Groups2Icon fontSize="large" />,
      title: t('main_section.target_groups.cards.card_3.title'),
      text: t('main_section.target_groups.cards.card_3.content'),
    },
  ];

  const clients = [
    { name: "BMW", logo: "/clients/bmw.png" },
    { name: "Audi", logo: "/clients/audi.png" },
    { name: "Bentley", logo: "/clients/bentley.png" },
    { name: "Porsche", logo: "/clients/porsche.png" },
    { name: "MINI", logo: "/clients/mini.png" },
    { name: "Sparkasse", logo: "/clients/sparkasse.png" },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      {/* ===== HERO SECTION (mit HeroSection-Overlay & Fade) ===== */}
      <HeroSection backgroundUrl={"/wallpapers/home_hero.jpg"} big>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          {/* Soft glowing orb im Hintergrund */}
          <MotionBox
            aria-hidden
            initial={{ opacity: 0.15, scale: 0.9, x: 120, y: -80 }}
            animate={{ opacity: 0.4, scale: 1, x: 80, y: -40 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              right: { xs: "-5%", md: "-10%" },
              top: { xs: "-10%", md: "-20%" },
              width: 320,
              height: 320,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, ${theme.palette.primary.main}, transparent 60%)`,
              filter: "blur(2px)",
              pointerEvents: "none",
            }}
          />

          <Container
            maxWidth="lg"
            sx={{
              textAlign: "left",
            }}
          >
            <Grid container spacing={6} alignItems="center">
              {/* Left: Text */}
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: 2,
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {t('hero_section.header')}
                  </Typography>

                  <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    {t('hero_section.title')}
                  </Typography>

                  <Typography variant="body1" sx={{ maxWidth: 520 }}>
                    {t('hero_section.content')}
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      component={RouterLink}
                      to="/finanzmarket"
                      sx={{
                        borderRadius: "999px",
                        px: 3,
                        py: 1.2,
                        fontWeight: 600,
                      }}
                    >
                        {t('hero_section.buttons.our_solutions')}
                    </Button>
                    <Button
                      variant="text"
                      component={RouterLink}
                      to="/contact"
                      sx={{
                        borderRadius: "999px",
                        px: 2,
                        py: 1.2,
                        border: isDark
                          ? "1px solid rgba(255,255,255,0.4)"
                          : "1px solid rgba(0,0,0,0.2)",
                        color: isDark
                          ? "common.white"
                          : theme.palette.text.primary,
                        "&:hover": {
                          borderColor: isDark
                            ? "rgba(255,255,255,0.8)"
                            : "rgba(0,0,0,0.5)",
                          backgroundColor: isDark
                            ? "rgba(255,255,255,0.04)"
                            : "rgba(0,0,0,0.03)",
                        },
                      }}
                    >
                        {t('hero_section.buttons.contact_us')}
                    </Button>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{ pt: 1, flexWrap: "wrap", rowGap: 1 }}
                  >
                    <MiniTag icon={<InsightsIcon fontSize="small" />}>
                        {t('hero_section.mini_tags.tag_1')}
                    </MiniTag>
                    <MiniTag icon={<SpeedIcon fontSize="small" />}>
                      {t('hero_section.mini_tags.tag_2')}
                    </MiniTag>
                    <MiniTag icon={<TimelineIcon fontSize="small" />}>
                      {t('hero_section.mini_tags.tag_3')}
                    </MiniTag>
                  </Stack>
                </Stack>
              </Grid>

              {/* Right: animated bubbles */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 320,
                  }}
                >
                  <FloatingCard
                    icon={<PublicIcon fontSize="large" />}
                    title={t('hero_section.cards.card_1.title')}
                    text={t('hero_section.cards.card_1.content')}
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: { xs: "5%", md: "15%" },
                    }}
                    delay={0}
                  />
                  <FloatingCard
                    icon={<DirectionsCarFilledIcon fontSize="large" />}
                    title={t('hero_section.cards.card_3.title')}
                    text={t('hero_section.cards.card_3.content')}
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      right: { xs: "0%", md: "5%" },
                    }}
                    delay={0.2}
                  />
                  <FloatingCard
                    icon={<InsightsIcon fontSize="large" />}
                    title={t('hero_section.cards.card_2.title')}
                    text={t('hero_section.cards.card_2.content')}
                    sx={{
                      position: "absolute",
                      top: 60,
                      left: { xs: "0%", md: "10%" },
                    }}
                    delay={0.4}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </MotionBox>
      </HeroSection>

      {/* ===== INTRO / FEATURES SECTION ===== */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          bgcolor:
            theme.palette.mode === "light" ? "grey.100" : "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" textAlign="center" mb={2}>
            <Typography variant="h5" component="h2" fontWeight={700}>
              {t('main_section.target_groups.header')}
            </Typography>
            <Typography variant="body1" maxWidth={720}>
              {t('main_section.target_groups.subheader')}
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {featureCards.map((card) => (
              <Grid item xs={12} md={4} key={card.title}>
                <MotionPaper
                  whileHover={{ y: -6, boxShadow: 6 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    p: 3,
                    textAlign: "left",
                    background:
                      theme.palette.mode === "light"
                        ? "#ffffff"
                        : theme.palette.background.paper,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.text}</Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

            {/* ===== OUR CLIENTS SECTION ===== */}
      <Box
        sx={{
          py: { xs: 5, md: 7 },
          borderTop: "1px solid",
          borderColor: theme.palette.divider,
          bgcolor:
            theme.palette.mode === "light"
              ? "grey.100"
              : "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2} alignItems="center" textAlign="center" mb={4}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2, opacity: 0.8 }}
            >
              {t('main_section.clients.header')}
            </Typography>
            <Typography variant="h5" component="h2" fontWeight={700}>
              {t('main_section.clients.title')}
            </Typography>
          </Stack>

          <MotionBox
            variants={clientsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Grid
              container
              spacing={{ xs: 3, md: 4 }}
              justifyContent="center"
              alignItems="center"
            >
              {clients.map((client) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={4}   // 3 pro Reihe auf md+
                  key={client.name}
                >
                  <MotionBox
                    variants={clientItemVariants}
                    sx={{
                      borderRadius: 3,
                      px: 3,
                      py: 2.5,
                      textAlign: "center",
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: isDark
                        ? "rgba(10,10,10,0.9)"
                        : "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(6px)",
                      transition:
                        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: 6,
                        borderColor: theme.palette.primary.main,
                        backgroundColor: isDark
                          ? "rgba(15,15,20,0.98)"
                          : "rgba(255,255,255,1)",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: 120, // mehr Höhe → größere Logos
                    }}
                  >
                    <Box
                      component="img"
                      src={client.logo}
                      alt={client.name}
                      sx={{
                        maxWidth: "100%",
                        maxHeight: 72,    // hier werden sie größer
                        objectFit: "contain",
                      }}
                    />
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </MotionBox>
        </Container>
      </Box>

    </Box>
  );
};

/* Little pill tags under the hero text */
const MiniTag = ({ icon, children }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
        px: 1.5,
        py: 0.5,
        borderRadius: "999px",
        backgroundColor: isDark
          ? "rgba(255,255,255,0.08)"
          : "rgba(0,0,0,0.03)",
        border: isDark
          ? "1px solid rgba(255,255,255,0.18)"
          : "1px solid rgba(0,0,0,0.08)",
        fontSize: "0.75rem",
        color: isDark ? "#ffffff" : theme.palette.text.primary,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>{icon}</Box>
      {children}
    </Box>
  );
};

/* Animated floating info cards on the right side of the hero */
const FloatingCard = ({ icon, title, text, sx, delay = 0 }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <MotionPaper
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{ y: -6, boxShadow: 8 }}
      sx={{
        borderRadius: 3,
        p: 2.5,
        maxWidth: 260,
        backgroundColor: isDark
          ? "rgba(15,15,15,0.9)"
          : "rgba(255,255,255,0.9)",
        color: isDark ? "#fff" : theme.palette.text.primary,
        backdropFilter: "blur(12px)",
        border: isDark
          ? "1px solid rgba(255,255,255,0.15)"
          : "1px solid rgba(0,0,0,0.08)",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1.5,
          background: isDark
            ? "radial-gradient(circle at 30% 30%, #ffffff, rgba(255,255,255,0.1))"
            : "radial-gradient(circle at 30% 30%, #000000, rgba(0,0,0,0.06))",
          color: isDark ? "#000" : "#fff",
        }}
      >
        {icon}
      </Box>
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.85 }}>
        {text}
      </Typography>
    </MotionPaper>
  );
};

export default HomePage;
