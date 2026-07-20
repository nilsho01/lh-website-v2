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

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const icons = [
  <TuneIcon fontSize="small" />,
  <SpeedIcon fontSize="small" />,
  <TrendingUpIcon fontSize="small" />,
];

const CompanyFlexibilitySection = ({ refProp }) => {
  const theme = useTheme();
  const { t } = useTranslation("company");

  const tiles = [0, 1, 2].map((i) => ({
    title: t(`flexibility.tiles.${i}.title`),
    content: t(`flexibility.tiles.${i}.content`),
  }));

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
        <Grid container spacing={{ xs: 5, md: 7 }}>
          {/* Left: intro / sticky text column */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: { md: "sticky" }, top: { md: 120 } }}>
              <Stack spacing={2} alignItems="flex-start" textAlign="left">
                <Typography variant="overline" sx={{ letterSpacing: 3 }}>
                  {t("flexibility.header")}
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  {t("flexibility.title")}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t("flexibility.subtitle")}
                </Typography>

                <Box
                  sx={{
                    mt: 1,
                    pl: 2.5,
                    borderLeft: `3px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Stack spacing={1.5}>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {t("flexibility.paragraph_1")}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {t("flexibility.paragraph_2")}
                    </Typography>
                  </Stack>
                </Box>

                <Typography
                  variant="caption"
                  sx={{ opacity: 0.7, fontStyle: "italic" }}
                >
                  {t("flexibility.caption")}
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Right: numbered timeline */}
          <Grid item xs={12} md={7}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: 27,
                  top: 8,
                  bottom: 8,
                  width: "2px",
                  bgcolor: theme.palette.divider,
                }}
              />

              <Stack spacing={5}>
                {tiles.map((tile, i) => (
                  <MotionBox
                    key={tile.title}
                    custom={i * 0.15}
                    variants={sectionFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    sx={{ display: "flex", gap: 3, position: "relative" }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        fontWeight: 800,
                        zIndex: 1,
                      }}
                    >
                      {icons[i]}
                    </Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          opacity: 0.6,
                          letterSpacing: 2,
                          fontWeight: 700,
                        }}
                      >
                        {`0${i + 1}`}
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={700}>
                        {tile.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {tile.content}
                      </Typography>
                    </Box>
                  </MotionBox>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanyFlexibilitySection;
