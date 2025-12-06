// src/components/jobs/JobsHiringProcessSection.jsx
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
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const JobsHiringProcessSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { t } = useTranslation('jobs_career')

  const steps = [
    {
      step: t('how_we_hire.cards.0.name'),
      title: t('how_we_hire.cards.0.title'),
      text: t('how_we_hire.cards.0.content'),
    },
    {
      step: t('how_we_hire.cards.1.name'),
      title: t('how_we_hire.cards.1.title'),
      text: t('how_we_hire.cards.1.content'),
    },
    {
      step: t('how_we_hire.cards.2.name'),
      title: t('how_we_hire.cards.2.title'),
      text: t('how_we_hire.cards.2.content'),
    },
    {
      step: t('how_we_hire.cards.3.name'),
      title: t('how_we_hire.cards.3.title'),
      text: t('how_we_hire.cards.3.content'),
    },
  ];

  return (
    <Box sx={{ py: { xs: 5, md: 7 },
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
    }}>
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          mb={4}
          textAlign="center"
          alignItems="center"
        >
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t('how_we_hire.header')}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t('how_we_hire.title')}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 640, opacity: 0.9, mx: "auto" }}
          >
            {t('how_we_hire.subtitle')}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {steps.map((item, idx) => (
            <Grid item xs={12} md={3} key={item.step}>
              <MotionPaper
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                sx={{
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                  textAlign: "left",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.06)"
                  }`,
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: 2,
                    opacity: 0.8,
                  }}
                >
                  {item.step}
                </Typography>
                <Typography variant="subtitle1" fontWeight={700} mb={1}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {item.text}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default JobsHiringProcessSection;
