// src/components/pages/company/CompanyFlexibilitySection.jsx
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

import TuneIcon from "@mui/icons-material/Tune";
import SpeedIcon from "@mui/icons-material/Speed";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const CompanyFlexibilitySection = ({ refProp }) => {
  const theme = useTheme();
  const { t } = useTranslation("company");

  return (
    <Box
      ref={refProp}
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} mb={4} textAlign="center" alignItems="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t("flexibility.header")}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t("flexibility.title")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 640, mx: "auto", opacity: 0.9 }}
          >
            {t("flexibility.subtitle")}
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
                <TuneIcon color="primary" />
                <Typography variant="subtitle1" fontWeight={700}>
                  {t("flexibility.tiles.0.title")}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t("flexibility.tiles.0.content")}
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
                <SpeedIcon color="primary" />
                <Typography variant="subtitle1" fontWeight={700}>
                  {t("flexibility.tiles.1.title")}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t("flexibility.tiles.1.content")}
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
                <TrendingUpIcon color="primary" />
                <Typography variant="subtitle1" fontWeight={700}>
                  {t("flexibility.tiles.2.title")}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t("flexibility.tiles.2.content")}
                </Typography>
              </Stack>
            </MotionPaper>
          </Grid>

          <Grid item xs={12}>
            <MotionPaper
              custom={0.3}
              variants={sectionFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              sx={{
                borderRadius: 3,
                p: { xs: 3, md: 4 },
              }}
            >
              <Stack spacing={1.5}>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t("flexibility.paragraph_1")}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t("flexibility.paragraph_2")}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  {t("flexibility.caption")}
                </Typography>
              </Stack>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanyFlexibilitySection;
