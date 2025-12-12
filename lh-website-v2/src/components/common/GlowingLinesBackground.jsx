// src/components/common/GlowingLinesBackground.jsx
import React, { useMemo } from "react";
import { Box, useTheme } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionPath = motion.path;

const rand = (min, max) => Math.random() * (max - min) + min;

const GlowingShape = ({ index, total }) => {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();

  const cfg = useMemo(() => {
    const isPrimary = Math.random() < 0.6;

    // Breite so groß, dass sie quer über den Viewport geht
    const width = rand(1600, 2600);
    const height = rand(160, 320);

    // vertikale Verteilung: gleichmäßig + zufälliger Offset
    const bandHeight = 100 / total;                    // Prozent
    const bandStart = bandHeight * index;
    const bandEnd = bandStart + bandHeight;

    // in dieser "Zone" leicht zufällig verteilen
    const topPercent = rand(
      bandStart + bandHeight * 0.15,
      bandEnd - bandHeight * 0.15
    );

    const shapeTypeRand = Math.random();
    let shapeType = "curve";
    if (shapeTypeRand > 0.66) shapeType = "loop";
    else if (shapeTypeRand > 0.33) shapeType = "diagonal";

    return {
      top: `${topPercent}%`,
      left: `${rand(-30, -5)}%`, // leicht links außerhalb starten
      width,
      height,
      strokeWidth: rand(1.5, 2.8),
      opacity: rand(0.25, 0.45),
      color: isPrimary
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
      glowBlurSmall: rand(8, 14),
      glowBlurBig: rand(24, 40),
      stopAt: rand(0.4, 0.9),
      yDrift: rand(-40, 40),
      shapeType,
      flipVertical: Math.random() < 0.5,
      flipHorizontal: Math.random() < 0.5,
    };
  }, [theme, index, total]);

  const pathLength = useTransform(scrollYProgress, [0, cfg.stopAt], [0, 1]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, cfg.yDrift]);

  const w = cfg.width;
  const h = cfg.height;

  let d;

  if (cfg.shapeType === "curve") {
    const c1y = cfg.flipVertical ? h * 0.2 : h * 0.8;
    const c2y = cfg.flipVertical ? h * 0.9 : h * 0.1;
    d = `
      M 0 ${h * 0.5}
      C ${w * 0.25} ${c1y},
        ${w * 0.55} ${c2y},
        ${w} ${h * 0.5}
    `;
  } else if (cfg.shapeType === "diagonal") {
    const startY = cfg.flipVertical ? h * 0.8 : h * 0.2;
    const endY = cfg.flipVertical ? h * 0.2 : h * 0.8;

    d = `
      M 0 ${startY}
      C ${w * 0.3} ${startY + (cfg.flipVertical ? -h * 0.3 : h * 0.3)},
        ${w * 0.7} ${endY + (cfg.flipVertical ? h * 0.3 : -h * 0.3)},
        ${w} ${endY}
    `;
  } else {
    const midY = h * 0.5;
    const arcHeight = cfg.flipVertical ? -h * 0.4 : h * 0.4;

    d = `
      M 0 ${midY}
      C ${w * 0.25} ${midY + arcHeight},
        ${w * 0.35} ${midY - arcHeight},
        ${w * 0.5} ${midY}
      S ${w * 0.75} ${midY + arcHeight},
        ${w} ${midY}
    `;
  }

  const scaleX = cfg.flipHorizontal ? -1 : 1;

  return (
    <Box
      sx={{
        position: "absolute",
        top: cfg.top,
        left: cfg.left,
        width: w,
        height: h,
        overflow: "visible",
        pointerEvents: "none",
      }}
    >
      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        style={{
          overflow: "visible",
          filter: `
            drop-shadow(0 0 ${cfg.glowBlurSmall}px ${cfg.color})
            drop-shadow(0 0 ${cfg.glowBlurBig}px ${cfg.color})
          `,
        }}
      >
        <defs>
          <linearGradient
            id={`glow-gradient-${index}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={cfg.color} stopOpacity="0.0" />
            <stop offset="30%" stopColor={cfg.color} stopOpacity="0.6" />
            <stop offset="70%" stopColor={cfg.color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={cfg.color} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <MotionPath
          d={d}
          style={{
            pathLength,
            translateY: yOffset,
            originX: 0.5,
            originY: 0.5,
            scaleX,
          }}
          fill="none"
          stroke={`url(#glow-gradient-${index})`}
          strokeWidth={cfg.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={cfg.opacity}
        />
      </svg>
    </Box>
  );
};

const GlowingLinesBackground = ({ count = 6, infront = false, fullPage = false }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: fullPage ? "fixed" : "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: infront ? 5 : 0,
        pointerEvents: "none",
        mixBlendMode: isDark ? "screen" : "multiply",
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <GlowingShape key={index} index={index} total={count} />
      ))}
    </Box>
  );
};

export default GlowingLinesBackground;
