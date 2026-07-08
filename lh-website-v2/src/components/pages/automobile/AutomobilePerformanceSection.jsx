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
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const AutomobilePerformanceSection = ({ refProp }) => {
  const theme = useTheme();
  const { t } = useTranslation("automobile");

  const cards = [
    {
      icon: <EventAvailableIcon color="primary" />,
      title: t("performance.cards.0.title"),
      text: t("performance.cards.0.text"),
    },
    {
      icon: <SpeedIcon color="primary" />,
      title: t("performance.cards.1.title"),
      text: t("performance.cards.1.text"),
    },
    {
      icon: <VerifiedIcon color="primary" />,
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
        <Stack spacing={2} mb={4} textAlign="center" alignItems="center">
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

        <Grid container spacing={3}>
          {cards.map((card, idx) => (
            <Grid item xs={12} md={4} key={card.title}>
              <MotionPaper
                custom={idx * 0.1}
                variants={sectionFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -4, boxShadow: 7 }}
                sx={{
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                }}
              >
                <Stack spacing={1.5}>
                  {card.icon}
                  <Typography variant="subtitle1" fontWeight={700}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {card.text}
                  </Typography>
                </Stack>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

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
