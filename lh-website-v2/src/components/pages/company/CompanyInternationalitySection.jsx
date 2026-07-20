// src/components/pages/company/CompanyInternationalitySection.jsx
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

import PublicIcon from "@mui/icons-material/Public";
import TranslateIcon from "@mui/icons-material/Translate";
import GroupsIcon from "@mui/icons-material/Groups";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);
const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const CompanyInternationalitySection = ({ refProp }) => {
  const theme = useTheme();
  const { t } = useTranslation("company");

  const tiles = [
    { icon: <PublicIcon />, title: t("internationality.tiles.0.title"), content: t("internationality.tiles.0.content") },
    { icon: <TranslateIcon />, title: t("internationality.tiles.1.title"), content: t("internationality.tiles.1.content") },
    { icon: <GroupsIcon />, title: t("internationality.tiles.2.title"), content: t("internationality.tiles.2.content") },
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
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" mb={6}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2} textAlign="left">
              <Typography variant="overline" sx={{ letterSpacing: 3 }}>
                {t("internationality.header")}
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                {t("internationality.title")}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: 480 }}>
                {t("internationality.subtitle")}
              </Typography>
            </Stack>
          </Grid>

          {/* Decorative globe motif */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: 220,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MotionBox
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                sx={{
                  position: "absolute",
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  border: `1px dashed ${theme.palette.divider}`,
                }}
              />
              <MotionBox
                animate={{ rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                sx={{
                  position: "absolute",
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  border: `1px dashed ${theme.palette.divider}`,
                }}
              />
              <Box
                sx={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  boxShadow: 6,
                  zIndex: 1,
                }}
              >
                <PublicIcon sx={{ fontSize: 40 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {tiles.map((tile, i) => (
            <Grid item xs={12} md={4} key={tile.title}>
              <MotionPaper
                custom={i * 0.1}
                variants={sectionFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -4, boxShadow: 7 }}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  p: 3,
                  textAlign: "center",
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
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {tile.icon}
                </Box>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                  {tile.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {tile.content}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}

          <Grid item xs={12}>
            <MotionPaper
              custom={0.3}
              variants={sectionFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              sx={{
                mt: 1,
                borderRadius: 3,
                p: { xs: 3, md: 5 },
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: -10,
                  left: 16,
                  fontSize: "5rem",
                  fontFamily: "serif",
                  opacity: 0.12,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                &ldquo;
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  maxWidth: 760,
                  mx: "auto",
                  opacity: 0.95,
                }}
              >
                {t("internationality.paragraph_1")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 2, opacity: 0.85, maxWidth: 760, mx: "auto" }}
              >
                {t("internationality.paragraph_2")}
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: "block", mt: 2, opacity: 0.7 }}
              >
                {t("internationality.caption")}
              </Typography>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanyInternationalitySection;
