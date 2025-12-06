// src/pages/DirectionsPage.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Button,
  Chip,
  useTheme,
} from "@mui/material";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PlaceIcon from "@mui/icons-material/Place";
import MapIcon from "@mui/icons-material/Map";

import PageWrapper from "../components/common/PageWrapper";
import HeroSection from "../components/common/HeroSection";
import ParallaxClouds from "../components/common/ParallaxClouds";
import ScrollCarSection from "../components/pages/directions/DirectionsScrollCarSection";

import { useTranslation } from "react-i18next";
import DirectionsHero from "../components/pages/directions/DirectionsHero";
import sectionFade from "../components/common/SectionFade";
import DirectionsInformationCards from "../components/pages/directions/DirectionsInformationCards";
import DirectionsMapsCard from "../components/pages/directions/DirectionsMapsCard";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const DirectionsPage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { t } = useTranslation('directions');

  // Consent nur für aktuelle Session
  const [mapsConsent, setMapsConsent] = useState(false);
  const handleAcceptMaps = () => setMapsConsent(true);

  return (
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <DirectionsHero />

        <Box sx={{ position: 'relative' }}>
          <ParallaxClouds count={5} infront={false} />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <DirectionsInformationCards />
            <DirectionsMapsCard />
            <ScrollCarSection />
          </Box>
        </Box>
      </Box>
  );
};

export default DirectionsPage;
