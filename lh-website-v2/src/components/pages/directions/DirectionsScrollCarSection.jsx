import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import { Box, Container, Stack, Typography, useTheme, Button } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Framer Motion: neue API bevorzugen, alte fallback
const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const ScrollCarSection = () => {
  const theme = useTheme();
  const { t } = useTranslation('directions')

  const sectionRef = useRef(null); // gesamte Sektion
  const trackRef = useRef(null);   // Pill-Container
  const roadRef = useRef(null);    // Straße (Linie)
  const carRef = useRef(null);     // Auto

  // 0 = ganz links, 1 = ganz rechts
  const carProgress = useMotionValue(0);

  const [layout, setLayout] = useState({
    roadLeft: 0,   // Offset der Straße im Track
    maxOffset: 0,  // wie weit das Auto maximal fahren kann
  });

  // Layout messen (wenn gerendert + bei Resize)
  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current || !roadRef.current || !carRef.current) return;

      const trackRect = trackRef.current.getBoundingClientRect();
      const roadRect = roadRef.current.getBoundingClientRect();
      const carRect = carRef.current.getBoundingClientRect();

      const roadLeft = roadRect.left - trackRect.left; // Straße relativ zum Track
      const maxOffset = Math.max(0, roadRect.width - carRect.width); // bis rechte Straßenkante

      console.log("[car-debug] layout:", {
        trackWidth: trackRect.width,
        roadWidth: roadRect.width,
        carWidth: carRect.width,
        roadLeft,
        maxOffset,
      });

      setLayout({ roadLeft, maxOffset });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // X-Bewegung in Pixeln: 0 .. maxOffset der Straße
  const carX = useTransform(carProgress, [0, 1], [0, layout.maxOffset]);
  const carScale = useTransform(carProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  const carRotate = useTransform(carProgress, [0, 0.5, 1], [-3, 0, 3]);

  // Reset, wenn Sektion den Viewport verlässt
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.bottom > 0 && rect.top < window.innerHeight;

      if (!inView) {
        const current = carProgress.get();
        if (current !== 0) {
          console.log("[car-debug] section left viewport -> reset car to 0");
          carProgress.set(0);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial

    const unsub = carProgress.on("change", (v) => {
      console.log("[car-debug] carProgress:", v.toFixed(3));
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      unsub();
    };
  }, [carProgress]);

  // Scrollsteuerung
  useEffect(() => {
    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const isSectionInView = () => {
      if (!sectionRef.current) return false;
      const rect = sectionRef.current.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight;
    };

    const handleWheel = (event) => {
      if (!isSectionInView()) return;

      const delta = event.deltaY || 0;
      if (!delta) return;

      const current = carProgress.get();
      // langsamer: kleiner Faktor
      const next = clamp(current + delta * 0.0003, 0, 1);

      console.log("[car-debug] wheel global:", {
        deltaY: delta,
        prev: current.toFixed(3),
        next: next.toFixed(3),
      });

      carProgress.set(next);

      const goingDown = delta > 0;

      // Nach unten immer erlauben, nach oben blocken, solange Auto nicht am Anfang steht
      if (!goingDown && next > 0) {
        event.preventDefault();
      }
    };

    let touchStartY = null;

    const handleTouchStart = (event) => {
      if (!isSectionInView()) return;
      if (!event.touches || event.touches.length === 0) return;
      touchStartY = event.touches[0].clientY;
      console.log("[car-debug] touchstart global:", touchStartY);
    };

    const handleTouchMove = (event) => {
      if (!isSectionInView()) return;
      if (!event.touches || event.touches.length === 0) return;
      if (touchStartY == null) return;

      const currentY = event.touches[0].clientY;
      const delta = touchStartY - currentY; // Finger hoch = delta > 0
      touchStartY = currentY;

      const current = carProgress.get();
      const next = clamp(current + delta * 0.0005, 0, 1);

      console.log("[car-debug] touchmove global:", {
        delta,
        prev: current.toFixed(3),
        next: next.toFixed(3),
      });

      carProgress.set(next);

      const scrollingUp = delta < 0; // Finger nach unten → Seite nach oben

      if (scrollingUp && next > 0) {
        event.preventDefault();
      }
    };

    // passive: false, damit preventDefault funktioniert
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [carProgress]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} mb={3} textAlign="center">
          <Typography variant="h6" fontWeight={700}>
            {t('on_your_way.title')}
          </Typography>
          <Typography variant="body2">
            {t('on_your_way.description')}
          </Typography>
        </Stack>

        <Box
          ref={trackRef}
          sx={{
            position: "relative",
            width: "100%",
            height: 56,
            borderRadius: 999,
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(90deg, #141824, #1f2435)"
                : "linear-gradient(90deg, #e0e4f2, #cdd6f5)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 18px 40px rgba(0,0,0,0.6)"
                : "0 14px 30px rgba(90,110,180,0.45)",
            px: { xs: 3, md: 5 },
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 30% 120%, rgba(255,255,255,0.18), transparent 60%)",
              opacity: theme.palette.mode === "dark" ? 0.6 : 0.85,
              pointerEvents: "none",
              mixBlendMode:
                theme.palette.mode === "dark" ? "screen" : "multiply",
            }}
          />

          {/* Straße */}
          <Box
            ref={roadRef}
            sx={{
              position: "absolute",
              left: "4%",
              right: "4%",
              top: "50%",
              height: 3,
              borderRadius: 999,
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 24px, transparent 24px, transparent 40px)",
              transform: "translateY(-50%)",
              opacity: theme.palette.mode === "dark" ? 0.4 : 0.6,
            }}
          />

          {/* Auto */}
          <MotionBox
            ref={carRef}
            style={{
              x: carX,
              scale: carScale,
              rotate: carRotate,
            }}
            whileHover={{
              scale: 1.08,
              y: -2,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            sx={{
              position: "absolute",
              left: `${layout.roadLeft}px`, // Start = linke Kante der Straße
              top: "50%",
              mt: "-22px", // 44px / 2 -> vertikal mittig
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            {/* Schatten */}
            <Box
              sx={{
                position: "absolute",
                bottom: -6,
                left: "50%",
                width: 52,
                height: 12,
                bgcolor: "rgba(0,0,0,0.45)",
                borderRadius: "50%",
                transform: "translateX(-50%)",
                filter: "blur(4px)",
                opacity: 0.9,
              }}
            />

            {/* Auto-Kapsel */}
            <Box
              sx={{
                width: 76,
                height: 44,
                borderRadius: 999,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 10px 24px rgba(0,0,0,0.8)"
                    : "0 10px 24px rgba(70,90,160,0.7)",
              }}
            >
              <DirectionsCarIcon
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: 30,
                }}
              />
            </Box>
          </MotionBox>
        </Box>

        <Typography
          variant="overline"
          sx={{ display: "block", textAlign: "center", mt: 2, opacity: 0.7 }}
        >
            {t('on_your_way.subtitle')}
        </Typography>
                        {/* Hinweis + Call-to-Action unter der Straße */}
        <Stack
          spacing={1.5}
          alignItems="center"
          sx={{ mt: 5, textAlign: "center" }}
        >
        <Typography variant="h6" fontWeight={700}>
            {t('on_your_way.title2')}
          </Typography>

          <Typography variant="body2" sx={{ maxWidth: 420, opacity: 0.9 }}>
            {t('on_your_way.description2')}
          </Typography>

          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              variant="contained"
              color="secondary"
              component={RouterLink}
                to="/contact"
              sx={{
                mt: 0.5,
                borderRadius: "999px",
                px: 3.5,
                py: 1.1,
                fontWeight: 600,
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 10px 24px rgba(0,0,0,0.7)"
                    : "0 10px 24px rgba(120,140,200,0.6)",
                color: theme.palette.getContrastText(theme.palette.secondary.main),
              }}
            >
              {t('on_your_way.contact_us')}
            </Button>
          </motion.div>
        </Stack>

      </Container>
    </Box>
  );
};

export default ScrollCarSection;
