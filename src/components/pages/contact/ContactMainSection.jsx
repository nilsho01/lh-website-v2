// src/components/contact/ContactMainSection.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Button,
  useTheme,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import BusinessIcon from "@mui/icons-material/Business";
import DirectionsIcon from '@mui/icons-material/Directions';
import { Link as RouterLink } from "react-router";
import sectionFade from "../../common/SectionFade";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const ContactMainSection = () => {
  const theme = useTheme();

  const { t } = useTranslation('contact')

  return (
    <Box sx={{ py: { xs: 5, md: 7 } }}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <MotionPaper
            custom={0}
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -3, boxShadow: 6 }}
            sx={{
              borderRadius: 3,
              p: 3,
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                opacity: 0.06,
                background:
                  "radial-gradient(circle at top left, #5564b5, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <Stack spacing={2} sx={{ position: "relative", zIndex: 1 }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <BusinessIcon color="primary" />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {t('informations.contact_details.title')}
                </Typography>
              </Stack>

              <Typography variant="body1">
                <strong>{t('informations.contact_details.company_name')}</strong>
                <br />
                <strong>{t('informations.contact_details.company_name2')}</strong>
                <br />
                {t('informations.contact_details.street')}
                <br />
                {t('informations.contact_details.city')}
              </Typography>

              <Stack spacing={1.2}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <LocalPhoneIcon sx={{ fontSize: 18, opacity: 0.8 }} />
                  <Typography variant="body2">
                    {t('informations.contact_details.phone')}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <EmailIcon sx={{ fontSize: 18, opacity: 0.8 }} />
                  <Typography variant="body2">
                    {t('informations.contact_details.mail')}
                  </Typography>
                </Stack>
              </Stack>

              <Stack spacing={1}>
                <Typography
                  variant="subtitle2"
                  sx={{ mt: 1, opacity: 0.85 }}
                >
                  {t('informations.contact_details.office_hours.title')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('informations.contact_details.office_hours.times')}
                  <br />
                  {t('informations.contact_details.office_hours.disclaimer')}
                </Typography>
              </Stack>

              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                {t('informations.contact_details.contact_info')}
              </Typography>
            </Stack>
          </MotionPaper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <MotionPaper
            custom={0.1}
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -3, boxShadow: 6 }}
            sx={{
              borderRadius: 3,
              p: 3,
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <PlaceIcon color="primary" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {t('informations.on_side.title')}
                    </Typography>
                </Stack>

                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {t('informations.on_side.content')}
                </Typography>

                <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{ mt: 1, flexWrap: "wrap" }}
                >
                    <Chip
                    label={t('informations.on_side.tag_1')}
                    size="small"
                    variant="outlined"
                    />
                    <Chip
                    label={t('informations.on_side.tag_2')}
                    size="small"
                    variant="outlined"
                    />
                </Stack>

                {/* Centered secondary button */}
                <Box
                    sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: "center",
                    }}
                >
                    <motion.div
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    >
                    <Button
                        component={RouterLink}
                        to="/directions"
                        variant="contained"
                        color="primary"
                        endIcon={<DirectionsIcon />}
                        sx={{
                        borderRadius: "999px",
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        boxShadow: (theme) =>
                            theme.palette.mode === "dark"
                            ? "0 10px 24px rgba(0,0,0,0.7)"
                            : "0 10px 24px rgba(90,110,180,0.35)",
                        }}
                    >
                        {t('informations.on_side.button')}
                    </Button>
                    </motion.div>
                </Box>
                </Stack>

          </MotionPaper>
        </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMainSection;
