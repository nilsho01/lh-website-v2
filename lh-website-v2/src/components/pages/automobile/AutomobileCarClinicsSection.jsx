// src/components/pages/automobile/AutomobileCarClinicsSection.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import sectionFade from "../../common/SectionFade";

import EventSeatIcon from "@mui/icons-material/EventSeat";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const AutomobileCarClinicsSection = ({ refProp }) => {
  const { t } = useTranslation("automobile");

  const cards = [
    {
      icon: <EventSeatIcon color="primary" />,
      title: t("car_clinics.cards.0.title"),
      text: t("car_clinics.cards.0.text"),
    },
    {
      icon: <DriveEtaIcon color="primary" />,
      title: t("car_clinics.cards.1.title"),
      text: t("car_clinics.cards.1.text"),
    },
    {
      icon: <DesignServicesIcon color="primary" />,
      title: t("car_clinics.cards.2.title"),
      text: t("car_clinics.cards.2.text"),
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
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: narrative */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ letterSpacing: 3 }}>
                {t("car_clinics.header")}
              </Typography>

              <Typography variant="h5" fontWeight={700}>
                {t("car_clinics.title")}
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t("car_clinics.paragraph_1")}
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t("car_clinics.paragraph_2")}
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={1} sx={{ mt: 1 }}>
                <Chip
                  label={t("car_clinics.chips.concept_design")}
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: 999 }}
                />
                <Chip
                  label={t("car_clinics.chips.target_recruiting")}
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: 999 }}
                />
                <Chip
                  label={t("car_clinics.chips.benchmarking")}
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: 999 }}
                />
              </Stack>
            </Stack>
          </Grid>

          {/* Right: clinic format cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {cards.map((card, idx) => (
                <Grid item xs={12} key={card.title}>
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
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="flex-start"
                    >
                      <Box sx={{ mt: 0.25, display: "flex" }}>{card.icon}</Box>
                      <Stack spacing={1}>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {card.title}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {card.text}
                        </Typography>
                      </Stack>
                    </Stack>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AutomobileCarClinicsSection;
