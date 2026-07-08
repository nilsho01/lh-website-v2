// src/components/pages/financial/FMCustProgramsSection.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import ScheduleIcon from "@mui/icons-material/Schedule";
import SearchIcon from "@mui/icons-material/Search";
import LoopIcon from "@mui/icons-material/Loop";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const FMCustProgramsSection = ({ refProp }) => {
  const { t } = useTranslation("financial_market");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const programs = [
    {
      id: "survey",
      icon: <ScheduleIcon />,
      title: t("programs.items.survey.title"),
      tag: t("programs.items.survey.tag"),
      desc: t("programs.items.survey.desc"),
      bullets: t("programs.items.survey.bullets", { returnObjects: true }),
    },
    {
      id: "adhoc",
      icon: <SearchIcon />,
      title: t("programs.items.adhoc.title"),
      tag: t("programs.items.adhoc.tag"),
      desc: t("programs.items.adhoc.desc"),
      bullets: t("programs.items.adhoc.bullets", { returnObjects: true }),
    },
    {
      id: "closedloop",
      icon: <LoopIcon />,
      title: t("programs.items.closedloop.title"),
      tag: t("programs.items.closedloop.tag"),
      desc: t("programs.items.closedloop.desc"),
      bullets: t("programs.items.closedloop.bullets", { returnObjects: true }),
    },
  ];

  const [activeId, setActiveId] = useState("survey");
  const activeProgram =
    programs.find((p) => p.id === activeId) ?? programs[0];

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
        <Stack spacing={1.5} mb={4} alignItems="center" textAlign="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {t("programs.header")}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t("programs.title")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 720, mx: "auto", opacity: 0.9 }}
          >
            {t("programs.content")}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {programs.map((program, index) => {
            const active = program.id === activeId;
            return (
              <Grid item xs={12} md={4} key={program.id}>
                <MotionPaper
                  onClick={() => setActiveId(program.id)}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -4, boxShadow: 6 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    cursor: "pointer",
                    border: `1px solid ${
                      isDark
                        ? active
                          ? "rgba(255,255,255,0.16)"
                          : "rgba(255,255,255,0.06)"
                        : active
                        ? "rgba(0,0,0,0.14)"
                        : "rgba(0,0,0,0.06)"
                    }`,
                    backgroundColor: active
                      ? isDark
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(0,0,0,0.02)"
                      : "transparent",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Stack direction="row" spacing={1.2} alignItems="center">
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: isDark
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(0,0,0,0.04)",
                        }}
                      >
                        {program.icon}
                      </Box>
                      <Typography variant="subtitle1" fontWeight={700}>
                        {program.title}
                      </Typography>
                    </Stack>
                    {program.tag && (
                      <Chip
                        label={program.tag}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    )}
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.9, minHeight: 40 }}
                  >
                    {program.desc}
                  </Typography>
                </MotionPaper>
              </Grid>
            );
          })}
        </Grid>

        {/* Detailpanel für aktives Programm */}
        <Box
          sx={{
            mt: 4,
            borderRadius: 3,
            px: { xs: 2, md: 3 },
            py: { xs: 2.5, md: 3 },
            border: `1px solid ${
              isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
            }`,
          }}
        >
          <Stack spacing={1.5}>
            <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
              {t("programs.selected_programme")}
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              {activeProgram.title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {activeProgram.desc}
            </Typography>

            <List dense sx={{ mt: 1, pl: 0 }}>
              {activeProgram.bullets.map((b) => (
                <ListItem key={b} sx={{ pl: 0 }}>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "body2",
                      sx: { opacity: 0.9 },
                    }}
                    primary={`• ${b}`}
                  />
                </ListItem>
              ))}
            </List>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default FMCustProgramsSection;
