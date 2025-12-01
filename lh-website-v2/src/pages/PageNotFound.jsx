import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TransText from "../components/common/TransText";
import FlickeringText from "../components/common/SpecialTextObjects";

// === Styled Components ===
const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  backgroundImage: 'url("/wallpapers/PageNotFound_Wallpaper.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const MaskedBackground = styled("div")(({ x, y, theme }) => {
  const isLight = theme.palette.mode === "light";
  return {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1,
    backgroundColor: isLight ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.95)",
    maskImage: `radial-gradient(circle 500px at ${x}px ${y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)`,
    WebkitMaskImage: `radial-gradient(circle 500px at ${x}px ${y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)`,
    transition: "mask-image 0.1s ease-out",
  };
});

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  marginTop: theme.spacing(2),
  zIndex: 2,
  color: theme.palette.mode === "light" ? "#000" : "#fff",
}));

const FourOfour = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: "bold",
  marginTop: theme.spacing(2),
  color: theme.palette.mode === "light" ? "#000" : "#fff",
}));

const ReturnButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  zIndex: 2,
  padding: "0.6rem 2rem",
  fontSize: "1rem",
  fontWeight: 600,
  color: theme.palette.mode === "light" ? "#fff" : "#000",
  backgroundColor: theme.palette.mode === "light" ? "#000" : "#fff",
  "&:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#111" : "#ddd",
  },
}));

// === Component ===
const PageNotFound = () => {
  const theme = useTheme();
  const { t } = useTranslation('not_found');
  const text = t("title");

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [text.length]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Wrapper>
      <MaskedBackground x={mousePos.x} y={mousePos.y} theme={theme} />
      <FourOfour>404</FourOfour>
      <FlickeringText text={text} />
      <Subtitle>{t("content")}</Subtitle>
      <ReturnButton component={Link} to="/">
        {t("button")}
      </ReturnButton>

      <Typography sx={{ color: theme.palette.text.secondary }}>
        <TransText
          i18nKey='note'
          t={t}
        />
      </Typography>

    </Wrapper>
  );
};

export default PageNotFound;
