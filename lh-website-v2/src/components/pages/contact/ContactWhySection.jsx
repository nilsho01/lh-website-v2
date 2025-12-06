// src/components/contact/ContactWhySection.jsx
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

import TimelineIcon from "@mui/icons-material/Timeline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const ContactWhySection = () => {
  const theme = useTheme();
  const { t } = useTranslation('contact')

  return (
    <Box
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} mb={4} textAlign="center" alignItems="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t('why_contact.header')}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t('why_contact.title')}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 640, mx: "auto", opacity: 0.9 }}
          >
            {t('why_contact.subtitle')}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <MotionPaper
              custom={0}
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
                <TimelineIcon color="primary" />
                <Typography variant="subtitle1" fontWeight={700}>
                  {t('why_contact.tiles.0.title')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('why_contact.tiles.0.content')}
                </Typography>
              </Stack>
            </MotionPaper>
          </Grid>

          <Grid item xs={12} md={4}>
            <MotionPaper
              custom={0.1}
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
                <PeopleAltIcon color="primary" />
                <Typography variant="subtitle1" fontWeight={700}>
                  {t('why_contact.tiles.1.title')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('why_contact.tiles.1.content')}
                </Typography>
              </Stack>
            </MotionPaper>
          </Grid>

          <Grid item xs={12} md={4}>
            <MotionPaper
              custom={0.2}
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
                <ArrowForwardIcon color="primary" />
                <Typography variant="subtitle1" fontWeight={700}>
                  {t('why_contact.tiles.2.title')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('why_contact.tiles.2.content')}
                </Typography>
              </Stack>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactWhySection;
