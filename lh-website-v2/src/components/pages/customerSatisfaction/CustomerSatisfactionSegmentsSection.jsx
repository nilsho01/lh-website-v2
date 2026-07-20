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
import { useTranslation } from "react-i18next";

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
    image: "/wallpapers/customer_automotive.jpg",
  },
  {
    id: "finance",
    icon: <AccountBalanceIcon />,
    image: "/wallpapers/customer_finance.jpg",
  },
  {
    id: "hardware",
    icon: <DevicesIcon />,
    image: "/wallpapers/customer_software.jpg",
  },
  {
    id: "consumer",
    icon: <ShoppingBagIcon />,
    image: "/wallpapers/customer_consumer.jpg",
  },
  {
    id: "services",
    icon: <MiscellaneousServicesIcon />,
    image: "/wallpapers/customer_services.jpg",
  },
];

const SegmentCard = ({ seg, index, totalSlides, dense = false }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("customer_satisfaction");

  const label = t(`segments.items.${seg.id}.label`);
  const text = t(`segments.items.${seg.id}.text`);
  const bullets = t(`segments.items.${seg.id}.bullets`, {
    returnObjects: true,
  });

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
            label={label}
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
          {text}
        </Typography>

        <Stack
          component="ul"
          spacing={0.4}
          sx={{
            pl: 2.2,
            mt: 0.35,
          }}
        >
          {bullets.map((b) => (
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
            label={t("segments.chips.international_programmes")}
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
            label={t("segments.chips.structured_reporting")}
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
  const { t } = useTranslation("customer_satisfaction");
  const sectionRef = useRef(null);
  const totalSlides = SEGMENTS.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Matches each card's flex-basis below (50 / totalSlides % of the track's own width),
  // so the track finishes moving exactly when the last card has fully arrived.
  const cardBasis = 50 / totalSlides;

  const trackX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(totalSlides - 1) * cardBasis}%`]
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
            {t("segments.header")}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {t("segments.title")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 720, mx: "auto", opacity: 0.9 }}
          >
            {t("segments.subtitle")}
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
          height: `${100 + (totalSlides - 1) * 50}vh`,
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
            overflow: "hidden",
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
