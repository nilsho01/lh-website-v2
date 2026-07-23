// src/components/pages/automobile/AutomobileConclusionSection.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import sectionFade from "../../common/SectionFade";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const AutomobileConclusionSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("automobile");

  const email = t("conclusion.contact.email");
  const phone = t("conclusion.contact.phone");

  return (
    <Box
      ref={refProp}
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="stretch">
          {/* Left: narrative */}
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              <Typography variant="overline" sx={{ letterSpacing: 3 }}>
                {t("conclusion.header")}
              </Typography>

              <Typography variant="h5" fontWeight={700}>
                {t("conclusion.title")}
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t("conclusion.paragraph_1")}
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t("conclusion.paragraph_2")}
              </Typography>
            </Stack>
          </Grid>

          {/* Right: contact CTA card */}
          <Grid item xs={12} md={5}>
            <MotionPaper
              variants={sectionFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              sx={{
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: isDark
                  ? "rgba(10,10,10,0.6)"
                  : "rgba(255,255,255,0.85)",
                backdropFilter: "blur(6px)",
              }}
            >
              <Stack spacing={2}>
                <Typography variant="subtitle1" fontWeight={700}>
                  {t("conclusion.cta")}
                </Typography>

                <Divider />

                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {t("conclusion.contact.name")}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    {t("conclusion.contact.role")}
                  </Typography>
                </Box>

                <Stack spacing={1.5}>
                  <Button
                    href={`mailto:${email}`}
                    startIcon={<EmailIcon />}
                    variant="contained"
                    sx={{ borderRadius: 999, textTransform: "none", justifyContent: "flex-start" }}
                  >
                    {email}
                  </Button>
                  <Button
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    startIcon={<PhoneIcon />}
                    variant="outlined"
                    sx={{ borderRadius: 999, textTransform: "none", justifyContent: "flex-start" }}
                  >
                    {phone}
                  </Button>
                </Stack>
              </Stack>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AutomobileConclusionSection;
