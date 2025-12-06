// src/components/common/ParallaxClouds.jsx
import React, { useMemo } from "react";
import { Box, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

const getRandom = (min, max) => Math.random() * (max - min) + min;

const Cloud = () => {
  const theme = useTheme();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 1000 * getRandom(0.3, 0.5)]);

  const props = useMemo(() => {
    const isPrimary = Math.random() < 0.5;
    return {
      top: `${getRandom(5, 80)}%`,
      left: `${getRandom(0, 100)}%`,
      size: getRandom(150, 300),
      blur: getRandom(80, 150),
      opacity: getRandom(0.65, 0.9),
      delay: getRandom(0, 2),
      duration: getRandom(10, 30),
      color: isPrimary
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    };
  }, [theme]);

  return (
    <motion.div
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
        <Cloud key={index} />
      ))}
    </Box>
  );
};

export default ParallaxClouds;
