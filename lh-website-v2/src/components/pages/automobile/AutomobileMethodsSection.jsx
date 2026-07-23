// src/components/pages/automobile/AutomobileMethodsSection.jsx
import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

import ForumIcon from "@mui/icons-material/Forum";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { useTranslation } from "react-i18next";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const AutomobileMethodsSection = ({ refProp }) => {
  const theme = useTheme();
  const { t } = useTranslation("automobile");

  const items = [
    {
      icon: <ForumIcon />,
      title: t("methods.items.0.title"),
      text: t("methods.items.0.text"),
    },
    {
      icon: <QueryStatsIcon />,
      title: t("methods.items.1.title"),
      text: t("methods.items.1.text"),
    },
    {
      icon: <DirectionsCarFilledIcon />,
      title: t("methods.items.2.title"),
      text: t("methods.items.2.text"),
    },
    {
      icon: <LightbulbIcon />,
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
        <Stack spacing={2} mb={5} textAlign="center" alignItems="center">
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

        <Stack spacing={0} sx={{ maxWidth: 880, mx: "auto" }}>
          {items.map((item, idx) => {
            const fromLeft = idx % 2 === 0;
            return (
              <MotionBox
                key={item.title}
                initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: fromLeft ? "row" : "row-reverse" },
                  alignItems: "center",
                  gap: 3,
                  py: 2.5,
                  borderBottom:
                    idx < items.length - 1
                      ? `1px solid ${theme.palette.divider}`
                      : "none",
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  {item.icon}
                </Box>
                <Box sx={{ textAlign: { xs: "left", md: fromLeft ? "left" : "right" } }}>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {item.text}
                  </Typography>
                </Box>
              </MotionBox>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default AutomobileMethodsSection;
