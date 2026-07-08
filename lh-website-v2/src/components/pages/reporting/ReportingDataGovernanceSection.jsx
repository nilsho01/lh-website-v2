// src/components/pages/reporting/ReportingDataGovernanceSection.jsx
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
import { useTranslation } from "react-i18next";

import LanIcon from "@mui/icons-material/Lan";
import SecurityIcon from "@mui/icons-material/Security";
import DescriptionIcon from "@mui/icons-material/Description";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const ReportingDataGovernanceSection = ({ refProp }) => {
  const { t } = useTranslation("reporting");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const icons = [<LanIcon />, <SecurityIcon />, <DescriptionIcon />];
  const items = t("governance_section.items", { returnObjects: true }).map(
    (item, idx) => ({ ...item, icon: icons[idx] })
  );

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
        <Stack
          spacing={1.5}
          mb={4}
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t("governance_section.header")}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t("governance_section.title")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 760, mx: "auto", opacity: 0.9 }}
          >
            {t("governance_section.subtitle")}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {items.map((item, idx) => (
            <Grid item xs={12} md={4} key={item.title}>
              <MotionPaper
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                sx={{
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  border: `1px solid ${
                    isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.06)"
                  }`,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.05,
                    background:
                      "radial-gradient(circle at bottom right, #5564b5, transparent 55%)",
                    pointerEvents: "none",
                  }}
                />
                <Stack spacing={1.5} position="relative" zIndex={1}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.04)",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {item.text}
                  </Typography>
                  <Chip
                    label={item.chip}
                    size="small"
                    variant="outlined"
                    sx={{ alignSelf: "flex-start", mt: 1 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.85, mt: 0.5, fontSize: "0.85rem" }}
                  >
                    {item.extra}
                  </Typography>
                </Stack>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ReportingDataGovernanceSection;
