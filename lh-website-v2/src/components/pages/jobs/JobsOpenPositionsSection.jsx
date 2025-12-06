// src/components/jobs/JobsOpenPositionsSection.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Chip,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TimelineIcon from "@mui/icons-material/Timeline";

import { OPEN_POSITIONS } from "../../../configs/jobs.configs";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const JobsOpenPositionsSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { t } = useTranslation('jobs_career')

  const hasPositions = OPEN_POSITIONS.length > 0;

  return (
    <Box
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1.5} mb={4} alignItems="center" textAlign="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t('jobs.header')}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t('jobs.title')}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 640, opacity: 0.9, mx: "auto" }}
          >
            {t('jobs.subtitle')}
          </Typography>
        </Stack>

        {hasPositions ? (
          <Grid container spacing={3}>
            {OPEN_POSITIONS.map((job, index) => (
              <Grid item xs={12} md={6} key={job.id}>
                <MotionPaper
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -4, boxShadow: 6 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    border: `1px solid ${
                      isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.06)"
                    }`,
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="subtitle1" fontWeight={700}>
                      {job.title}
                    </Typography>
                    {job.type && (
                      <Chip
                        label={job.type}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    )}
                  </Stack>

                  {job.teaser && (
                    <Typography
                      variant="body2"
                      sx={{ opacity: 0.9, minHeight: 40 }}
                    >
                      {job.teaser}
                    </Typography>
                  )}

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    rowGap={1}
                  >
                    {job.location && (
                      <Chip
                        label={job.location}
                        size="small"
                        icon={<TimelineIcon sx={{ fontSize: 16 }} />}
                      />
                    )}
                    {job.tags?.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>

                  <Box sx={{ mt: 2 }}>
                    <Button
                      component="a"
                      href={job.link} // externe URL
                      target="_blank" // öffnet neuen Tab (optional)
                      rel="noopener noreferrer" // Sicherheitsstandard bei target="_blank"
                      size="small"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        borderRadius: "999px",
                        fontWeight: 600,
                      }}
                    >
                      {t('jobs.apply')}
                    </Button>
                  </Box>

                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        ) : (
          // no positions → sad smiley animation + speculative CTA
          <Stack
            spacing={3}
            alignItems="center"
            textAlign="center"
            sx={{ mt: 2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Box
                  sx={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: isDark
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(0,0,0,0.03)",
                    boxShadow:
                      "0 18px 38px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)",
                  }}
                >
                  <SentimentDissatisfiedOutlinedIcon
                    sx={{ fontSize: 46, opacity: 0.85 }}
                  />
                </Box>
              </motion.div>
            </motion.div>

            <Stack spacing={1} maxWidth={520}>
              <Typography variant="subtitle1" fontWeight={700}>
                {t('jobs.no_positions')}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t('jobs.no_positions_helper')}
              </Typography>
            </Stack>

            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: "999px",
                px: 3,
                py: 1.1,
                fontWeight: 600,
              }}
            >
              {t('button')}
            </Button>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default JobsOpenPositionsSection;
