import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  Paper,
  Divider,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import SectionSideHero from "./SectionSideHero";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const CustomerSatisfactionSection = ({ sectionRef }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [focus, setFocus] = useState("customers"); // 'customers' | 'employees'

  const pillars = [
    {
      title: "Clear KPI frameworks",
      desc: "NPS, loyalty, satisfaction indices and service quality KPIs that stay comparable across countries, brands and time.",
    },
    {
      title: "End-to-end setup",
      desc: "From questionnaire design to sampling, fieldwork, weighting and automated dashboards – handled by one integrated team.",
    },
    {
      title: "From boardroom to branch",
      desc: "High-level management summaries for the board, plus branch and advisor scorecards that support concrete action.",
    },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: isDark ? "#121318" : "#f1f2f7",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="flex-start">
          {/* Left side hero */}
          <Grid item xs={12} md={5}>
            <SectionSideHero
              eyebrow="Customer satisfaction in the finance market"
              title="Retention programmes that balance people and profit."
              subtitle="We help banks, insurers and finance providers keep customers and employees loyal while giving management a robust KPI system."
              chips={[
                "Customer satisfaction",
                "Net promoter score",
                "Employee engagement",
                "Branch scorecards",
              ]}
              bullets={[
                "Tracking studies with stable methodology",
                "Ad-hoc deep dives on specific segments",
                "Clear target values and escalation rules",
              ]}
            />
          </Grid>

          {/* Main content */}
          <Grid item xs={12} md={7}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Stack spacing={2.5}>
                <Stack spacing={1}>
                  <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
                    Two angles, one framework
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ flexWrap: "wrap", mb: 0.5 }}
                  >
                    <Chip
                      label="Customer surveys"
                      size="small"
                      color={focus === "customers" ? "primary" : "default"}
                      variant={focus === "customers" ? "filled" : "outlined"}
                      onClick={() => setFocus("customers")}
                      sx={{ borderRadius: 999 }}
                    />
                    <Chip
                      label="Employee surveys"
                      size="small"
                      color={focus === "employees" ? "primary" : "default"}
                      variant={focus === "employees" ? "filled" : "outlined"}
                      onClick={() => setFocus("employees")}
                      sx={{ borderRadius: 999 }}
                    />
                  </Stack>

                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {focus === "customers" ? (
                      <>
                        In the context of customer retention programmes, we
                        realise{" "}
                        <strong>customer satisfaction and loyalty studies</strong>{" "}
                        with customised{" "}
                        <strong>online reporting systems</strong> for banks,
                        insurance companies and other finance providers. Typical
                        set-ups combine continuous tracking with ad-hoc modules
                        for new products, campaigns or touchpoints.
                      </>
                    ) : (
                      <>
                        For internal programmes we conduct{" "}
                        <strong>employee satisfaction and engagement surveys</strong>,
                        helping you understand loyalty, motivation and service
                        culture in your branches and contact centres. Results
                        can be broken down to team level while respecting local
                        data protection rules.
                      </>
                    )}
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Across both angles, we make sure that stakeholders receive
                    exactly the level of detail they need: from concise
                    management summaries to detailed drill-downs on regions,
                    segments and individual branches.
                  </Typography>
                </Stack>

                <Divider sx={{ my: 1 }} />

                <Grid container spacing={2}>
                  {pillars.map((pillar) => (
                    <Grid item xs={12} sm={4} key={pillar.title}>
                      <MotionPaper
                        whileHover={{
                          y: -4,
                          boxShadow: isDark
                            ? "0 18px 40px rgba(0,0,0,0.85)"
                            : "0 14px 30px rgba(80,100,160,0.35)",
                        }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                        sx={{
                          borderRadius: 3,
                          p: 2,
                          height: "100%",
                          background: isDark
                            ? "linear-gradient(135deg, #191b25, #232634)"
                            : "linear-gradient(135deg, #ffffff, #e7ebf8)",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, mb: 0.5 }}
                        >
                          {pillar.title}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {pillar.desc}
                        </Typography>
                      </MotionPaper>
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  As far as reporting is concerned, we put a focus on{" "}
                  <strong>modern charts</strong> that show the essential findings
                  at first sight, even when underlying results are complex.
                  Time-series, benchmarks and open-text analyses can be placed
                  side by side, so decision makers spot issues early instead of
                  sifting through raw tables.
                </Typography>
              </Stack>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerSatisfactionSection;
