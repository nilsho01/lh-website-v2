// src/components/pages/customerSatisfaction/CustomerSatisfactionSegmentsSection.jsx
import React, { useRef } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Paper,
  Chip,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DevicesIcon from "@mui/icons-material/Devices";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);
const MotionBox = motion.create ? motion.create(Box) : motion(Box);

// Adjust image paths as needed
const SEGMENTS = [
  {
    id: "automotive",
    icon: <DirectionsCarIcon />,
    label: "Automotive",
    image: "/wallpapers/customer_automotive.jpg",
    text: "In the automotive sector we measure satisfaction along the entire ownership journey: from sales and delivery through service, repair and remarketing. Dealer satisfaction is often integrated so that manufacturer, retailer and end-customer perspectives can be compared.",
    bullets: [
      "Customer & dealer satisfaction surveys",
      "Sales, aftersales and connected services",
      "Benchmarks across brands, networks and markets",
    ],
  },
  {
    id: "finance",
    icon: <AccountBalanceIcon />,
    label: "Finance",
    image: "/wallpapers/customer_finance.jpg",
    text: "In banking and insurance, satisfaction programmes focus on trust, transparency and ease of use. We link feedback from branches, contact centres and digital channels directly to retention and product usage.",
    bullets: [
      "Customer and employee satisfaction",
      "Branches, call centres and digital channels",
      "Link to churn and cross-sell indicators",
    ],
  },
  {
    id: "hardware",
    icon: <DevicesIcon />,
    label: "Hardware & software",
    image: "/wallpapers/customer_software.jpg",
    text: "For hardware and software providers, we track satisfaction across onboarding, support tickets and updates. This includes B2B and B2C environments with very different decision cycles.",
    bullets: [
      "Implementation, onboarding and training",
      "Support quality and response times",
      "Net recommendation and renewal intent",
    ],
  },
  {
    id: "consumer",
    icon: <ShoppingBagIcon />,
    label: "Consumer goods",
    image: "/wallpapers/customer_consumer.jpg",
    text: "In consumer goods, brand perception and usage situations are key. Satisfaction studies help clarify how communication, availability and product experience interact.",
    bullets: [
      "Brand, product and retail experience",
      "Multi-country concept & product tests",
      "Tracking of repeat purchase and loyalty",
    ],
  },
  {
    id: "services",
    icon: <MiscellaneousServicesIcon />,
    label: "Services & others",
    image: "/wallpapers/customer_services.jpg",
    text: "For services and mixed portfolios, we support satisfaction measurements that combine transactional feedback with periodic relationship surveys.",
    bullets: [
      "Transactional and relationship surveys",
      "Service level, quality and perceived value",
      "Reporting at contract, client and portfolio level",
    ],
  },
];

const SegmentCard = ({ seg, index, totalSlides, dense = false }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const primary = theme.palette.primary;
  const secondary = theme.palette.secondary || theme.palette.primary;
  const bgPaper = theme.palette.background.paper;

  const gradient = isDark
    ? `linear-gradient(135deg, ${alpha(primary.dark, 0.9)}, ${alpha(
        secondary.main,
        0.7
      )})`
    : `linear-gradient(135deg, ${alpha(primary.light, 0.98)}, ${alpha(
        secondary.main,
        0.85
      )})`;

  return (
    <MotionPaper
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{
        y: -12,
        rotateX: -4,
        rotateY: 4,
        boxShadow: isDark
          ? "0 30px 80px rgba(0,0,0,0.95)"
          : "0 24px 60px rgba(40,60,140,0.45)",
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 23,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        border: `1px solid ${alpha(
          theme.palette.common.black,
          isDark ? 0.35 : 0.18
        )}`,
        maxWidth: dense ? "100%" : 480, // bigger, wider
        width: "100%",
        background: gradient,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* IMAGE TOP – bigger for more room */}
      <Box
        sx={{
          position: "relative",
          height: dense ? 190 : 240,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${seg.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.06)",
            filter: isDark ? "brightness(0.9)" : "brightness(1)",
          }}
        />
        {/* Overlay based on theme */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(
              to top,
              ${alpha(bgPaper, 0.94)},
              ${alpha(bgPaper, 0.08)}
            )`,
            mixBlendMode: isDark ? "normal" : "multiply",
          }}
        />

        {/* Icon + Label bottom-left */}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            position: "absolute",
            left: 14,
            bottom: 14,
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: alpha(bgPaper, 0.95),
              color: theme.palette.text.primary,
              boxShadow: `0 0 0 1px ${alpha(primary.main, 0.55)}`,
            }}
          >
            {seg.icon}
          </Box>
          <Chip
            label={seg.label}
            size="small"
            sx={{
              borderRadius: 999,
              bgcolor: alpha(primary.main, 0.98),
              color: primary.contrastText,
              height: 26,
              fontWeight: 600,
            }}
          />
        </Stack>

        {/* index top-right */}
        <Chip
          label={`${index + 1}/${totalSlides}`}
          size="small"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            borderRadius: 999,
            bgcolor: alpha(bgPaper, 0.9),
            color: theme.palette.text.secondary,
            border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
            fontSize: "0.72rem",
            height: 24,
          }}
        />
      </Box>

      {/* CONTENT – more padding & bigger type */}
      <Stack
        spacing={1.1}
        sx={{
          p: dense ? 2.3 : 2.8, // more padding
        }}
      >
        <Typography
          variant="body1"
          sx={{
            opacity: 0.98,
            fontSize: dense ? "0.98rem" : "1.02rem",
            lineHeight: 1.5,
          }}
        >
          {seg.text}
        </Typography>

        <Stack
          component="ul"
          spacing={0.4}
          sx={{
            pl: 2.2,
            mt: 0.35,
          }}
        >
          {seg.bullets.map((b) => (
            <Typography
              key={b}
              component="li"
              variant="body2"
              sx={{
                opacity: 0.94,
                fontSize: dense ? "0.94rem" : "0.98rem",
                lineHeight: 1.45,
              }}
            >
              {b}
            </Typography>
          ))}
        </Stack>

        <Stack
          direction="row"
          spacing={0.9}
          flexWrap="wrap"
          sx={{ mt: 0.8 }}
        >
          <Chip
            label="International programmes"
            size="small"
            variant="outlined"
            sx={{
              borderRadius: 999,
              borderColor: alpha(primary.contrastText, 0.6),
              color: alpha(primary.contrastText, 0.95),
              fontSize: "0.76rem",
              height: 26,
              px: 1,
            }}
          />
          <Chip
            label="Structured reporting"
            size="small"
            variant="outlined"
            sx={{
              borderRadius: 999,
              borderColor: alpha(primary.contrastText, 0.6),
              color: alpha(primary.contrastText, 0.95),
              fontSize: "0.76rem",
              height: 26,
              px: 1,
            }}
          />
        </Stack>
      </Stack>
    </MotionPaper>
  );
};

const CustomerSatisfactionSegmentsSection = ({ refProp }) => {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const totalSlides = SEGMENTS.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const step = 100 / totalSlides;

  const trackX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(totalSlides - 1) * step}%`]
  );

  return (
    <Box
      ref={refProp}
      sx={{
        pt: { xs: 1.5, md: 1.5 },
        pb: { xs: 2.5, md: 2 },
      }}
    >
      {/* Header – still compact */}
      <Container maxWidth="lg" sx={{ mb: { xs: 1.5, md: 1.3 } }}>
        <Stack spacing={0.75} alignItems="center" textAlign="center">
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            Industries & target groups
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            One framework, many sectors.
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 720, mx: "auto", opacity: 0.9 }}
          >
            From automotive and finance to hardware, software, consumer goods
            and services – the same satisfaction logic adapts to different
            markets while keeping reporting and KPIs consistent.
          </Typography>
        </Stack>
      </Container>

      {/* Mobile / Tablet – same design, slightly denser but still roomy */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Container maxWidth="lg">
          <Stack spacing={1.4}>
            {SEGMENTS.map((seg, index) => (
              <SegmentCard
                key={seg.id}
                seg={seg}
                index={index}
                totalSlides={totalSlides}
                dense
              />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Desktop – pinned horizontal slider with larger, roomy cards */}
      <Box
        ref={sectionRef}
        sx={{
          display: { xs: "none", md: "block" },
          position: "relative",
          height: `${totalSlides * 14}vh`,
          mt: 0.3,
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container maxWidth="lg">
            <MotionBox
              style={{ x: trackX }}
              sx={{
                display: "flex",
                width: `${totalSlides * 100}%`,
              }}
            >
              {SEGMENTS.map((seg, index) => (
                <Box
                  key={seg.id}
                  sx={{
                    flex: `0 0 ${50 / totalSlides}%`,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <SegmentCard
                    seg={seg}
                    index={index}
                    totalSlides={totalSlides}
                  />
                </Box>
              ))}
            </MotionBox>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerSatisfactionSegmentsSection;
