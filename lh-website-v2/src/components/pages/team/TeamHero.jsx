import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  useTheme,
  Paper
} from "@mui/material";
import { motion } from "framer-motion";
import HeroSection from '../../common/HeroSection'
import { useTranslation } from "react-i18next";

// Framer Motion wrappers
const MotionDiv = motion.div;
const MotionPaper =
  motion.create && typeof motion.create === "function"
    ? motion.create(Paper)
    : motion(Paper);

const TeamHero = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    const chipVariant = isDark ? "outlined" : "filled";

    const { t } = useTranslation('team');


  return (
    <HeroSection backgroundUrl="/wallpapers/team_hero.jpg" big>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ mt: { xs: 4, md: 6, lg: 8 } }}
        >
            <Grid item xs={12} md={7}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ width: "100%" }}
                >
                    {/* Alles zentrieren */}
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
                        {t('header')}
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
                                color: theme.palette.text.primary, // im Light-Mode normal schwarz
                            }
                        }
                    >
                        {t('title')}
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
                        {t('subtitle')}
                    </Typography>

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
                        label={t('tags.0')}
                        size="small"
                        variant={chipVariant}
                        color={!isDark ? "secondary" : "default"}
                        sx={{ borderRadius: 999 }}
                        />
                        <Chip
                        label={t('tags.1')}
                        size="small"
                        variant={chipVariant}
                        color={!isDark ? "secondary" : "default"}
                        sx={{ borderRadius: 999 }}
                        />
                        <Chip
                        label={t('tags.2')}
                        size="small"
                        variant={chipVariant}
                        color={!isDark ? "secondary" : "default"}
                        sx={{ borderRadius: 999 }}
                        />
                    </Stack>
                    </Stack>
                </motion.div>
                </Grid>

            {/* Right: Offsets / Info-Card */}
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

    {/* Geometrische Linie unten rechts */}
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
          : "1px dashed rgba(0,0,0,0.35)",  // light mode: schwarz
        transform: "rotate(-8deg)",
        opacity: 0.7,
        pointerEvents: "none",
      }}
    />

    {/* Geometrische Linie oben links */}
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
        {t('card.header')}
      </Typography>
      <Typography variant="h6" fontWeight={700}>
        {t('card.title')}
      </Typography>

      <Typography variant="body2" sx={{ opacity: 0.9 }}>
        {t('card.content')}
      </Typography>
    </Stack>
  </MotionPaper>
</Grid>

        </Grid>
        </Container>
    </HeroSection>
  )
}

export default TeamHero