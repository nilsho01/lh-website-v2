// src/components/pages/customerSatisfaction/CustomerSatisfactionPlaygroundSection.jsx
import React, { useState } from "react";
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
import { motion, useMotionValue, useTransform } from "framer-motion";

import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupIcon from "@mui/icons-material/Group";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);
const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const PROFILES = {
  customers: {
    icon: <EmojiPeopleIcon />,
    label: "Customer satisfaction",
    desc: "Measures how end-customers experience your products, services and communication – across touchpoints and markets.",
    focus: [
      "Perceived value & fairness",
      "Ease of use across channels",
      "Recommendation & churn risk",
    ],
  },
  dealers: {
    icon: <StorefrontIcon />,
    label: "Dealer satisfaction",
    desc: "Shows how your network partners see cooperation, processes and support from headquarters.",
    focus: [
      "Support quality & tools",
      "Margin and conditions",
      "Brand alignment & communication",
    ],
  },
  employees: {
    icon: <GroupIcon />,
    label: "Employee satisfaction",
    desc: "Reveals how employees perceive culture, leadership and the tools they use to serve customers.",
    focus: [
      "Engagement & loyalty",
      "Leadership & communication",
      "Enablement to deliver service",
    ],
  },
};

const CustomerSatisfactionPlaygroundSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [active, setActive] = useState("customers");
  const activeProfile = PROFILES[active];

  // motion values for 3D-ish tilt & glow
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    // map [0,1] → [-0.5,0.5]
    x.set(relX - 0.5);
    y.set(relY - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Box
      ref={refProp}
      sx={{
        py: { xs: 6, md: 8 },
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1.5} mb={4} alignItems="center" textAlign="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            Interactive view
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            Play with the satisfaction universe.
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 780, mx: "auto", opacity: 0.9 }}
          >
            Customer retention programmes often combine different perspectives:
            customers, dealers and employees. Use the playground below to see
            how each group adds a layer to the overall picture.
          </Typography>
        </Stack>

        <Grid container spacing={4} alignItems="center">
          {/* Left: interactive playground card */}
          <Grid item xs={12} md={7}>
            <MotionPaper
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              sx={{
                borderRadius: 4,
                p: 3,
                position: "relative",
                overflow: "hidden",
                transformStyle: "preserve-3d",
                background: isDark
                  ? "radial-gradient(circle at top left, #181a24, #050712)"
                  : "radial-gradient(circle at top left, #ffffff, #e6ecff)",
                boxShadow: isDark
                  ? "0 24px 60px rgba(0,0,0,0.9)"
                  : "0 20px 50px rgba(60,80,140,0.35)",
              }}
            >
              {/* moving glow */}
              <MotionBox
                aria-hidden
                style={{ left: glowX }}
                sx={{
                  position: "absolute",
                  top: "-20%",
                  width: "40%",
                  height: "140%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)",
                  filter: "blur(6px)",
                  pointerEvents: "none",
                }}
              />

              {/* content */}
              <Stack spacing={2} sx={{ position: "relative", zIndex: 1 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Typography
                    variant="overline"
                    sx={{ letterSpacing: 3, opacity: 0.9 }}
                  >
                    {activeProfile.label}
                  </Typography>
                  <Chip
                    label="Part of one programme"
                    size="small"
                    variant="outlined"
                    sx={{ borderRadius: 999 }}
                  />
                </Stack>

                <Typography variant="h6" fontWeight={700}>
                  Combine perspectives instead of running isolated surveys.
                </Typography>

                <Typography variant="body2" sx={{ opacity: 0.95 }}>
                  In the context of customer retention programmes we offer the
                  realisation of customer, dealer or employee satisfaction
                  surveys with customised online reporting systems. Each
                  perspective can be analysed separately – or combined in one
                  integrated cockpit.
                </Typography>

                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  The programme can start with one group and grow over time
                  without changing the underlying logic or breaking existing
                  reports.
                </Typography>

                <Stack spacing={0.5} sx={{ mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.9, fontWeight: 600 }}
                  >
                    Focus for {activeProfile.label.toLowerCase()}:
                  </Typography>
                  {activeProfile.focus.map((f) => (
                    <Typography
                      key={f}
                      variant="body2"
                      sx={{ opacity: 0.9 }}
                    >
                      {`• ${f}`}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            </MotionPaper>
          </Grid>

          {/* Right: playful selector tiles */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Typography variant="subtitle2" sx={{ opacity: 0.85 }}>
                Switch perspective
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Click or tap on a tile to change the active perspective. The
                content on the left updates and the glow reacts to your mouse
                movement, making the whole card feel alive.
              </Typography>

              <Grid container spacing={2} sx={{ mt: 1 }}>
                {Object.entries(PROFILES).map(([key, profile]) => {
                  const selected = key === active;
                  return (
                    <Grid key={key} item xs={12} sm={6}>
                      <MotionPaper
                        onClick={() => setActive(key)}
                        whileHover={{
                          y: -4,
                          scale: 1.02,
                          boxShadow: isDark
                            ? "0 18px 40px rgba(0,0,0,0.9)"
                            : "0 16px 36px rgba(80,100,160,0.45)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                        sx={{
                          borderRadius: 3,
                          p: 2,
                          cursor: "pointer",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          border: `1px solid ${
                            selected
                              ? theme.palette.primary.main
                              : isDark
                              ? "rgba(255,255,255,0.08)"
                              : "rgba(0,0,0,0.08)"
                          }`,
                          background: selected
                            ? isDark
                              ? "linear-gradient(135deg, #20263a, #151827)"
                              : "linear-gradient(135deg, #e6ecff, #ffffff)"
                            : isDark
                            ? "linear-gradient(135deg, #141622, #1b1e2b)"
                            : "linear-gradient(135deg, #ffffff, #f5f6ff)",
                        }}
                      >
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: isDark
                              ? "rgba(255,255,255,0.06)"
                              : "rgba(0,0,0,0.04)",
                          }}
                        >
                          {profile.icon}
                        </Box>
                        <Typography
                          variant="subtitle2"
                          fontWeight={700}
                          noWrap
                        >
                          {profile.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            opacity: 0.9,
                            fontSize: "0.8rem",
                          }}
                          noWrap
                        >
                          {profile.desc}
                        </Typography>
                      </MotionPaper>
                    </Grid>
                  );
                })}
              </Grid>

              <Typography
                variant="caption"
                sx={{ opacity: 0.8, mt: 1, maxWidth: 360 }}
              >
                All perspectives feed into the same structured reporting layer
                with modern charts, so essential findings can be recognised at
                first sight – even when the underlying results are complex.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerSatisfactionPlaygroundSection;
