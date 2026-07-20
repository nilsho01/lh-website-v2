// src/components/pages/company/CompanySpecialisationSection.jsx
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
import sectionFade from "../../common/SectionFade";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const CompanySpecialisationSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("company");

  const tiles = [
    {
      icon: <DirectionsCarIcon />,
      title: t("specialisation.tiles.0.title"),
      content: t("specialisation.tiles.0.content"),
    },
    {
      icon: <AccountBalanceIcon />,
      title: t("specialisation.tiles.1.title"),
      content: t("specialisation.tiles.1.content"),
    },
    {
      icon: <EmojiEmotionsIcon />,
      title: t("specialisation.tiles.2.title"),
      content: t("specialisation.tiles.2.content"),
    },
  ];

  return (
    <Box
      ref={refProp}
      sx={{
        py: { xs: 6, md: 9 },
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} mb={5} textAlign="center" alignItems="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t("specialisation.header")}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t("specialisation.title")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 640, mx: "auto", opacity: 0.9 }}
          >
            {t("specialisation.subtitle")}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {/* Featured tile */}
          <Grid item xs={12} md={7}>
            <MotionPaper
              custom={0}
              variants={sectionFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4, boxShadow: 10 }}
              sx={{
                height: "100%",
                borderRadius: 4,
                p: { xs: 3, md: 4.5 },
                background: `linear-gradient(145deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: { md: 280 },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(255,255,255,0.18)",
                  mb: 2,
                }}
              >
                {tiles[0].icon}
              </Box>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                {tiles[0].title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.95, maxWidth: 480 }}>
                {tiles[0].content}
              </Typography>
            </MotionPaper>
          </Grid>

          {/* Two stacked smaller tiles */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3} sx={{ height: "100%" }}>
              {tiles.slice(1).map((tile, i) => (
                <MotionPaper
                  key={tile.title}
                  custom={(i + 1) * 0.1}
                  variants={sectionFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -4, boxShadow: 7 }}
                  sx={{
                    flex: 1,
                    borderRadius: 3,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Box sx={{ color: theme.palette.primary.main, mt: 0.3 }}>
                      {tile.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={700}>
                        {tile.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {tile.content}
                      </Typography>
                    </Box>
                  </Stack>
                </MotionPaper>
              ))}
            </Stack>
          </Grid>

          {/* Paragraph + capability chips */}
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
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={7}>
                  <Stack spacing={1.5}>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {t("specialisation.paragraph_1")}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {t("specialisation.paragraph_2")}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    rowGap={1}
                    sx={{ justifyContent: { xs: "flex-start", md: "flex-end" } }}
                  >
                    <Chip
                      label={t("specialisation.chips.questionnaire_design")}
                      size="small"
                      color="secondary"
                      variant="filled"
                      sx={{ borderRadius: 999 }}
                    />
                    <Chip
                      label={t("specialisation.chips.fieldwork_analysis")}
                      size="small"
                      color="secondary"
                      variant="filled"
                      sx={{ borderRadius: 999 }}
                    />
                    <Chip
                      label={t("specialisation.chips.reporting")}
                      size="small"
                      color="secondary"
                      variant="filled"
                      sx={{ borderRadius: 999 }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanySpecialisationSection;
