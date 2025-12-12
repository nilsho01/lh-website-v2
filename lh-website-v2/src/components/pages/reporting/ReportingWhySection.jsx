// src/components/pages/reporting/ReportingWhySection.jsx
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

import StorageIcon from "@mui/icons-material/Storage";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const ReportingWhySection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const items = [
    {
      icon: <StorageIcon />,
      title: "Structured data as a base",
      text: "Structured data and database management are the basis of detailed and stable reporting – especially when projects run across years and markets.",
      chip: "Stable foundation",
    },
    {
      icon: <FilterAltIcon />,
      title: "Condensed & individualised views",
      text: "We condense complex results into clear figures and filters, tailored to different user groups such as management, experts and local teams.",
      chip: "Clarity & relevance",
    },
    {
      icon: <MonitorHeartIcon />,
      title: "Continuous monitoring",
      text: "Campaigns, satisfaction and response rates can be monitored continuously, tracking both current status and desired targets.",
      chip: "Monitoring",
    },
  ];

  return (
    <Box ref={refProp} sx={{ py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Stack
          spacing={1.5}
          mb={4}
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            Why reporting systems
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            From complex results to clean stories.
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 760, mx: "auto", opacity: 0.9 }}
          >
            Reporting systems translate detailed research and tracking results
            into clear views. The objective: show the essentials at first sight
            while keeping all detail available in the background.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {items.map((item, idx) => (
            <Grid item xs={12} md={4} key={item.title}>
              <MotionPaper
                initial={{ opacity: 0, y: 15 }}
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
                    opacity: 0.06,
                    background:
                      "radial-gradient(circle at top left, #5564b5, transparent 55%)",
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
                </Stack>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ReportingWhySection;
