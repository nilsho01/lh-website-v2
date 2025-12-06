// src/components/contact/ContactCTASection.jsx
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

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const ContactCTASection = () => {
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
        <MotionPaper
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          sx={{
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            position: "relative",
            overflow: "hidden",
            background:
              theme.palette.mode === "dark"
                ? "radial-gradient(circle at top left, #22263a, #101320)"
                : "radial-gradient(circle at top left, #e5e9fb, #cfd7f5)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0.18,
              background:
                "radial-gradient(circle at 80% 0%, rgba(255,255,255,0.9), transparent 55%)",
              pointerEvents: "none",
            }}
          />
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack spacing={1.5} position="relative" zIndex={1}>
                <Typography variant="overline" sx={{ opacity: 0.8 }}>
                  {t('CTA.header')}
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  {t('CTA.title')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('CTA.content')}
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                alignItems: "center",
              }}
            >
              <Stack
                spacing={1}
                position="relative"
                zIndex={1}
                alignItems={{ xs: "flex-start", md: "flex-end" }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalPhoneIcon sx={{ fontSize: 20 }} />
                  <Typography variant="body2" fontWeight={600}>
                    {t('CTA.phone')}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailIcon sx={{ fontSize: 20 }} />
                  <Typography variant="body2" fontWeight={600}>
                    {t('CTA.mail')}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default ContactCTASection;
