import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const GlowingTypography = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(2rem, 6vw, 5rem)",
    fontWeight: 900,
    letterSpacing: "0.1em",
    display: "flex",
    zIndex: 2,
    color: theme.palette.text.primary,
    textShadow: `0 0 10px ${theme.palette.text.primary}, 0 0 20px ${theme.palette.text.primary}`,
  }));
  
  const FlickerChar = styled("span")(({ flicker }) => ({
    animation: flicker ? "flicker 0.2s infinite alternate" : "none",
    "@keyframes flicker": {
      from: { opacity: 0.2 },
      to: { opacity: 1 },
    },
  }));

  const FlickeringText = ({ text }) => {
    const [flickerIndices, setFlickerIndices] = useState([]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const indices = [];
        while (indices.length < 3) {
          const rand = Math.floor(Math.random() * text.length);
          if (!indices.includes(rand)) indices.push(rand);
        }
        setFlickerIndices(indices);
      }, 500);
  
      return () => clearInterval(interval);
    }, [text]);
  
    return (
      <GlowingTypography>
        {text.split("").map((char, index) => (
          <FlickerChar key={index} flicker={flickerIndices.includes(index)}>
            {char}
          </FlickerChar>
        ))}
      </GlowingTypography>
    );
  };
  
  export default FlickeringText;