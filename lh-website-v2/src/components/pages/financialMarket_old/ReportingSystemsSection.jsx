import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  Paper,
  useTheme,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import SectionSideHero from "./SectionSideHero";

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const ReportingSystemsSection = ({ sectionRef }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [mode, setMode] = useState("overview"); // 'overview' | 'detail'

  const cardsOverview = [
    "Structured data and database management as the basis of detailed and stable reporting.",
    "Condensed, complexity-reduced and individualised reporting for different stakeholder groups.",
    "Continuous monitoring of campaigns, tracking the current and desired status of response.",
    "Standardised figures across markets and time, so trends can be interpreted confidently.",
  ];

  const cardsDetail = [
    "Methodologically correct questionnaires and weighting schemes for reliable measurements of target groups.",
    "Deep drill-downs by region, segment, product line or channel – without losing the overall story.",
    "Professional project management from first idea to an up-to-date dashboard and export templates.",
    "Role-based access rights so users see exactly the dashboards and detail they need.",
  ];

  const cards = mode === "overview" ? cardsOverview : cardsDetail;

  const extras = [
    {
      title: "Interactive dashboards",
      text: "Filter and segment results in real time while keeping reference lines, targets and benchmarks visible.",
    },
    {
      title: "Story-first exports",
      text: "Ready-made slide templates for management meetings, status updates and steering committees.",
    },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: isDark ? "#0b0c12" : "#f3f4fb",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="flex-start">
          {/* Left hero */}
          <Grid item xs={12} md={5}>
            <SectionSideHero
              eyebrow="Reporting systems"
              title="Automated charts with room for detailed analyses."
              subtitle="We build reporting environments where recurring figures are fully automated, while deep dives stay flexible and intuitive."
              chips={[
                "Dashboards",
                "Automated PPT",
                "APIs & exports",
              ]}
              bullets={[
                "Stable data models tailored to financial KPIs",
                "Governed metric definitions and documentation",
                "Visual standards that work across teams",
              ]}
            />
          </Grid>

          {/* Right content */}
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Stack spacing={3}>
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
                    Choose your view
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label="Overview"
                      clickable
                      color={mode === "overview" ? "primary" : "default"}
                      variant={mode === "overview" ? "filled" : "outlined"}
                      onClick={() => setMode("overview")}
                      sx={{ borderRadius: 999 }}
                    />
                    <Chip
                      label="Detail level"
                      clickable
                      color={mode === "detail" ? "primary" : "default"}
                      variant={mode === "detail" ? "filled" : "outlined"}
                      onClick={() => setMode("detail")}
                      sx={{ borderRadius: 999 }}
                    />
                  </Stack>

                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Toggle between overview and detail to see which aspects of
                    our reporting systems are most relevant to you – from stable
                    data foundations to flexible dashboards for experts and
                    managers. In both modes we keep the logic transparent, so
                    KPIs do not become a “black box” for your organisation.
                  </Typography>
                </Stack>

                <Grid container spacing={2}>
                  {cards.map((text, idx) => (
                    <Grid item xs={12} sm={6} key={`${mode}-${idx}`}>
                      <MotionPaper
                        whileHover={{
                          y: -4,
                          boxShadow: isDark
                            ? "0 16px 36px rgba(0,0,0,0.85)"
                            : "0 14px 30px rgba(80,100,160,0.4)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 18,
                        }}
                        sx={{
                          borderRadius: 3,
                          p: 2.5,
                          height: "100%",
                          display: "flex",
                          alignItems: "flex-start",
                          background: isDark
                            ? "linear-gradient(135deg, #181a24, #252a3b)"
                            : "linear-gradient(135deg, #ffffff, #f3f5ff)",
                          border: `1px solid ${
                            isDark
                              ? "rgba(140,160,240,0.3)"
                              : "rgba(90,110,190,0.25)"
                          }`,
                        }}
                      >
                        <Typography variant="body2" sx={{ opacity: 0.95 }}>
                          {text}
                        </Typography>
                      </MotionPaper>
                    </Grid>
                  ))}
                </Grid>

                <Divider />

                <Grid container spacing={2}>
                  {extras.map((e) => (
                    <Grid item xs={12} sm={6} key={e.title}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        {e.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {e.text}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  The automated presentation of results in charts is of great
                  importance to us. Within our online reports it is possible to
                  carry out highly individualised and detailed analyses – without
                  losing the big picture. Whether it is campaign response,
                  product performance or service quality, each view is connected
                  to the same governed data model.
                </Typography>
              </Stack>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ReportingSystemsSection;
