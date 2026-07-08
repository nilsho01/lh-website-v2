// src/components/pages/automobile/AutomobileMethodsSection.jsx
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

import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ForumIcon from "@mui/icons-material/Forum";
import RouteIcon from "@mui/icons-material/Route";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const AutomobileMethodsSection = ({ refProp }) => {
  const theme = useTheme();
  const { t } = useTranslation("automobile");

  const items = [
    {
      icon: <QueryStatsIcon color="primary" />,
      title: t("methods.items.0.title"),
      text: t("methods.items.0.text"),
    },
    {
      icon: <ForumIcon color="primary" />,
      title: t("methods.items.1.title"),
      text: t("methods.items.1.text"),
    },
    {
      icon: <RouteIcon color="primary" />,
      title: t("methods.items.2.title"),
      text: t("methods.items.2.text"),
    },
    {
      icon: <TravelExploreIcon color="primary" />,
      title: t("methods.items.3.title"),
      text: t("methods.items.3.text"),
    },
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
            {t("methods.header")}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t("methods.title")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 640, mx: "auto", opacity: 0.9 }}
          >
            {t("methods.subtitle")}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {items.map((item, idx) => (
            <Grid item xs={12} sm={6} key={item.title}>
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
                  {item.icon}
                  <Typography variant="subtitle1" fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {item.text}
                  </Typography>
                </Stack>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="caption"
          component="p"
          sx={{
            mt: 4,
            textAlign: "center",
            opacity: 0.75,
            color: theme.palette.text.secondary,
          }}
        >
          {t("methods.footnote")}
        </Typography>
      </Container>
    </Box>
  );
};

export default AutomobileMethodsSection;
