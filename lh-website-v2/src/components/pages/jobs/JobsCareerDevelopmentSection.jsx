// src/components/jobs/JobsCareerDevelopmentSection.jsx
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

import SchoolIcon from "@mui/icons-material/School";
import TimelineIcon from "@mui/icons-material/Timeline";
import StarsIcon from "@mui/icons-material/Stars";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const JobsCareerDevelopmentSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { t } = useTranslation('jobs_career')

  const blocks = [
    {
      icon: <SchoolIcon />,
      title: t('career.cards.0.title'),
      text: t('career.cards.0.content'),
      tag: t('career.cards.0.tag'),
    },
    {
      icon: <TimelineIcon />,
      title: t('career.cards.1.title'),
      text: t('career.cards.1.content'),
      tag: t('career.cards.1.tag'),
    },
    {
      icon: <StarsIcon />,
      title: t('career.cards.2.title'),
      text: t('career.cards.2.content'),
      tag: t('career.cards.2.tag'),
    },
  ];

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
          spacing={1.5}
          mb={4}
          textAlign="center"
          alignItems="center"
        >
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t('career.header')}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t('career.title')}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 680, mx: "auto", opacity: 0.9 }}
          >
            {t('career.subtitle')}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {blocks.map((block, idx) => (
            <Grid item xs={12} md={4} key={block.title}>
              <MotionPaper
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                sx={{
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.06)"
                  }`,
                }}
              >
                <Stack spacing={1.5}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.04)",
                    }}
                  >
                    {block.icon}
                  </Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {block.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {block.text}
                  </Typography>
                  <Chip
                    label={block.tag}
                    size="small"
                    variant="outlined"
                    sx={{ alignSelf: "flex-start" }}
                  />
                </Stack>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default JobsCareerDevelopmentSection;
