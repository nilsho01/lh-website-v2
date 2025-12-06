// src/components/contact/ContactNextStepsSection.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import sectionFade from "../../common/SectionFade";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const ContactNextStepsSection = () => {
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
        <Stack
            spacing={2}
            mb={4}
            textAlign="center"
            alignItems="center"
            >
            <Typography variant="overline" sx={{ letterSpacing: 3 }}>
                {t('next_steps.header')}
            </Typography>

            <Typography variant="h5" fontWeight={700}>
                {t('next_steps.title')}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                maxWidth: 640,
                opacity: 0.9,
                }}
            >
                {t('next_steps.subtitle')}
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
                <Chip label={t('next_steps.steps.0.name')} size="small" color="secondary" />
                <Typography variant="subtitle1" fontWeight={700}>
                  {t('next_steps.steps.0.title')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('next_steps.steps.0.content')}
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
                <Chip label={t('next_steps.steps.1.name')} size="small" color="secondary" />
                <Typography variant="subtitle1" fontWeight={700}>
                  {t('next_steps.steps.1.title')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('next_steps.steps.1.content')}
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
                <Chip label={t('next_steps.steps.2.name')} size="small" color="secondary" />
                <Typography variant="subtitle1" fontWeight={700}>
                  {t('next_steps.steps.2.title')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('next_steps.steps.2.content')}
                </Typography>
              </Stack>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactNextStepsSection;
