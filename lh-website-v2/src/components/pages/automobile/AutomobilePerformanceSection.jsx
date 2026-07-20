// src/components/pages/automobile/AutomobilePerformanceSection.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import sectionFade from "../../common/SectionFade";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SpeedIcon from "@mui/icons-material/Speed";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const AutomobilePerformanceSection = ({ refProp }) => {
  const theme = useTheme();
  const { t } = useTranslation("automobile");

  const cards = [
    {
      icon: <EventAvailableIcon />,
      title: t("performance.cards.0.title"),
      text: t("performance.cards.0.text"),
    },
    {
      icon: <SpeedIcon />,
      title: t("performance.cards.1.title"),
      text: t("performance.cards.1.text"),
    },
    {
      icon: <VerifiedIcon />,
      title: t("performance.cards.2.title"),
      text: t("performance.cards.2.text"),
    },
  ];

  return (
    <Box
      ref={refProp}
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} mb={5} textAlign="center" alignItems="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t("performance.header")}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t("performance.title")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 640, mx: "auto", opacity: 0.9 }}
          >
            {t("performance.subtitle")}
          </Typography>
        </Stack>

        <Box sx={{ position: "relative" }}>
          {/* Connecting line behind the flow (desktop only) */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 28,
              left: "16.5%",
              right: "16.5%",
              height: "2px",
              bgcolor: theme.palette.divider,
              zIndex: 0,
            }}
          />

          <Grid container spacing={{ xs: 3, md: 2 }} alignItems="flex-start">
            {cards.map((card, idx) => (
              <React.Fragment key={card.title}>
                <Grid item xs={12} md={3.6}>
                  <MotionPaper
                    custom={idx * 0.15}
                    variants={sectionFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -4, boxShadow: 7 }}
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      borderRadius: 3,
                      p: 3,
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <Stack spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                        }}
                      >
                        {card.icon}
                      </Box>
                      <Typography variant="subtitle1" fontWeight={700}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {card.text}
                      </Typography>
                    </Stack>
                  </MotionPaper>
                </Grid>

                {idx < cards.length - 1 && (
                  <Grid
                    item
                    xs={12}
                    md={0.4}
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ArrowForwardIcon
                      sx={{ color: theme.palette.divider, mt: 3.5 }}
                    />
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Box>

        <Typography
          variant="caption"
          component="p"
          sx={{
            mt: 4,
            textAlign: "center",
            opacity: 0.75,
            color: theme.palette.text.secondary,
          }}
        >
          {t("performance.footnote")}
        </Typography>
      </Container>
    </Box>
  );
};

export default AutomobilePerformanceSection;
