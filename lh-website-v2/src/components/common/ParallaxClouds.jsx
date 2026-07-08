// src/components/common/ParallaxClouds.jsx
import React, { useMemo } from "react";
import { Box, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionDiv = motion.div;

// Deterministischer PRNG (mulberry32): pro Wolken-Index stabile "Zufalls"-Werte,
// damit das Rendering pur bleibt (react-hooks/purity) und nicht bei Re-Renders springt
const mulberry32 = (seed) => {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};

const Cloud = ({ index }) => {
  const theme = useTheme();
  const { scrollY } = useScroll();

  const props = useMemo(() => {
    const rand = mulberry32(index * 7919 + 1);
    const between = (min, max) => rand() * (max - min) + min;
    const isPrimary = rand() < 0.5;
    return {
      top: `${between(5, 80)}%`,
      left: `${between(0, 100)}%`,
      size: between(150, 300),
      blur: between(80, 150),
      opacity: between(0.65, 0.9),
      delay: between(0, 2),
      duration: between(10, 30),
      yFactor: between(0.3, 0.5),
      color: isPrimary
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    };
  }, [theme, index]);

  const y = useTransform(scrollY, [0, 1000], [0, 1000 * props.yFactor]);

  return (
    <MotionDiv
      style={{
        position: "absolute",
        top: props.top,
        left: props.left,
        width: props.size,
        height: props.size,
        backgroundColor: props.color,
        borderRadius: "50%",
        filter: `blur(${props.blur}px)`,
        opacity: props.opacity,
        y,
      }}
      transition={{
        duration: props.duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        delay: props.delay,
      }}
    />
  );
};

const ParallaxClouds = ({ count = 5, infront = false }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        // Hinten = 0, vorne = 10
        zIndex: infront ? 10 : 0,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Cloud key={index} index={index} />
      ))}
    </Box>
  );
};

export default ParallaxClouds;
