// src/components/pages/automobile/AutomobileCustomersSection.jsx
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

import FactoryIcon from "@mui/icons-material/Factory";
import PublicIcon from "@mui/icons-material/Public";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useTranslation } from "react-i18next";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);
const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

// Variants for the client logo grid (same pattern as HomePage)
const clientsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const clientItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const AutomobileCustomersSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("automobile");

  const groups = [
    {
      icon: <FactoryIcon color="primary" />,
      title: t("customers.groups.0.title"),
      text: t("customers.groups.0.text"),
    },
    {
      icon: <PublicIcon color="primary" />,
      title: t("customers.groups.1.title"),
      text: t("customers.groups.1.text"),
    },
    {
      icon: <StorefrontIcon color="primary" />,
      title: t("customers.groups.2.title"),
      text: t("customers.groups.2.text"),
    },
  ];

  const clients = [
    { name: "BMW", logo: "/clients/bmw.png" },
    { name: "Audi", logo: "/clients/audi.png" },
    { name: "Bentley", logo: "/clients/bentley.png" },
    { name: "Porsche", logo: "/clients/porsche.png" },
    { name: "MINI", logo: "/clients/mini.png" },
  ];

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
        <Stack spacing={2} mb={4} textAlign="center" alignItems="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t("customers.header")}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t("customers.title")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 640, mx: "auto", opacity: 0.9 }}
          >
            {t("customers.subtitle")}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {groups.map((group, idx) => (
            <Grid item xs={12} md={4} key={group.title}>
              <MotionPaper
                custom={idx * 0.1}
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
                  {group.icon}
                  <Typography variant="subtitle1" fontWeight={700}>
                    {group.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {group.text}
                  </Typography>
                </Stack>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

        {/* Client logos (same rendering pattern as HomePage) */}
        <Stack spacing={2} alignItems="center" textAlign="center" mt={6} mb={3}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 2, opacity: 0.8 }}
          >
            {t("customers.logos_caption")}
          </Typography>
        </Stack>

        <MotionBox
          variants={clientsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            justifyContent="center"
            alignItems="center"
          >
            {clients.map((client) => (
              <Grid item xs={6} sm={4} md={4} key={client.name}>
                <MotionBox
                  variants={clientItemVariants}
                  sx={{
                    borderRadius: 3,
                    px: 3,
                    py: 2.5,
                    textAlign: "center",
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: isDark
                      ? "rgba(10,10,10,0.9)"
                      : "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(6px)",
                    transition:
                      "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 6,
                      borderColor: theme.palette.primary.main,
                      backgroundColor: isDark
                        ? "rgba(15,15,20,0.98)"
                        : "rgba(255,255,255,1)",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 120,
                  }}
                >
                  <Box
                    component="img"
                    src={client.logo}
                    alt={client.name}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: 72,
                      objectFit: "contain",
                    }}
                  />
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default AutomobileCustomersSection;
