// src/pages/TeamPage.jsx
import { useRef } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Avatar,
  Chip,
  Paper,
  useTheme,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

// Framer Motion wrappers
const MotionDiv = motion.div;
const MotionPaper =
  motion.create && typeof motion.create === "function"
    ? motion.create(Paper)
    : motion(Paper);

const TeamSectionBlock = ({
  section,
  sectionIndex,
  accentColor,
  sectionNumber,
}) => {
  const theme = useTheme();
  const sectionRef = useRef(null);

  // Scrollprogress nur für diesen Block
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"],
  });

  const isEven = sectionIndex % 2 === 0;

  // Header fliegt aus der einen Seite rein und auf der anderen wieder raus
  const headerX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isEven ? -180 : 180, 0, isEven ? 120 : -120]
  );

  // Cards in entgegengesetzte Richtung
  const cardsX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isEven ? 180 : -180, 0, isEven ? -120 : 120]
  );

  // Opacity: Header darf am Ende etwas ausfaden
  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.6, 1],
    [0, 0.4, 1, 0.4]
  );

  // Cards bleiben am Ende voll sichtbar
  const cardsOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.6, 1],
    [0, 0.3, 1, 1]
  );

  const getInitials = (name) => {
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0][0] || "?";
    return `${parts[0][0] || ""}${parts[parts.length - 1][0] || ""}`;
  };

  return (
    <>
      <Box
        ref={sectionRef}
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr", // gleichbreit, Seite wird über order geregelt
          },
          gap: 3,
          alignItems: "stretch",
        }}
      >
        {/* ===== HEADER PANEL (Beschreibung) ===== */}
        <MotionDiv
          style={{
            x: headerX,
            opacity: headerOpacity,
          }}
        >
          <Box
            sx={{
              position: "relative",
              minWidth: 0,
              // abwechselnd links/rechts
              order: { xs: 0, md: isEven ? 0 : 1 },
              textAlign: { xs: "left", md: isEven ? "left" : "right" },
            }}
          >
            {/* Hintergrundblock mit leichter Schrägung */}
            <Box
              sx={{
                position: "absolute",
                inset: -14,
                borderRadius: 4,
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #141726, #121320)"
                    : "linear-gradient(145deg, #f4f6ff, #e7ebff)",
                opacity: 0.9,
                zIndex: 0,
                transform: isEven ? "skewX(-4deg)" : "skewX(4deg)",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Stack
                spacing={2}
                alignItems={{
                  xs: "flex-start",
                  md: isEven ? "flex-start" : "flex-end",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  sx={{
                    flexDirection: isEven ? "row" : "row-reverse",
                    width: "100%",
                  }}
                >
                  {/* runder Nummer-Badge */}
                  <Box
                    sx={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      backgroundColor: accentColor,
                      boxShadow: `0 0 12px ${accentColor}55`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: theme.palette.getContrastText(accentColor),
                      flexShrink: 0,
                    }}
                  >
                    {sectionNumber.toString().padStart(2, "0")}
                  </Box>

                  {/* dünne Linie */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: 1,
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.8), transparent)",
                      opacity: 0.6,
                    }}
                  />
                </Stack>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    textAlign: {
                      xs: "left",
                      md: isEven ? "left" : "right",
                    },
                  }}
                >
                  {section.title}
                </Typography>

                {section.description && (
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.9,
                      maxWidth: 360,
                      textAlign: {
                        xs: "left",
                        md: isEven ? "left" : "right",
                      },
                    }}
                  >
                    {section.description}
                  </Typography>
                )}

                {section.highlight && (
                  <Chip
                    label="Key contact for strategic topics"
                    size="small"
                    sx={{
                      borderRadius: 999,
                      backgroundColor: `${accentColor}22`,
                      color: accentColor,
                      alignSelf: isEven ? "flex-start" : "flex-end",
                    }}
                  />
                )}
              </Stack>
            </Box>
          </Box>
        </MotionDiv>

        {/* ===== PEOPLE CARDS (Namen) ===== */}
        <MotionDiv
          style={{
            x: cardsX,
            opacity: cardsOpacity,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              // gegenüberliegende Seite vom Header
              order: { xs: 1, md: isEven ? 1 : 0 },
              justifyContent: { md: isEven ? "flex-start" : "flex-end" },
            }}
          >
            {section.people.map((person) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={`${section.id}-${person.name}`}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    md: isEven ? "flex-start" : "flex-end",
                  },
                }}
              >
                <MotionPaper
                  whileHover={{
                    y: -4,
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0 16px 30px rgba(0,0,0,0.8)"
                        : "0 14px 26px rgba(80,100,160,0.35)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    display: "flex",
                    alignItems: "flex-start", // besser für mehrzeiligen Text
                    gap: 2,
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, #181a25, #202438)"
                        : "linear-gradient(135deg, #ffffff, #f5f6ff)",
                    border: `1px solid ${accentColor}33`,
                    minWidth: 0,
                    width: "100%",          // nimmt volle Breite der Grid-Spalte
                    maxWidth: 360,          // optional: etwas begrenzen, damit es nicht ewig lang wird
                  }}
                >
                  <Avatar
                    sx={{
                      width: 44,
                      height: 44,
                      bgcolor: accentColor,
                      color: theme.palette.getContrastText(accentColor),
                      fontWeight: 700,
                      textTransform: "uppercase",
                      flexShrink: 0,
                    }}
                  >
                    {getInitials(person.name)}
                  </Avatar>

                  <Stack
                    spacing={0.5}
                    sx={{
                      textAlign: {
                        xs: "left",
                        md: isEven ? "left" : "right",
                      },
                      minWidth: 0,
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      sx={{ wordBreak: "break-word" }}
                    >
                      {person.name}
                    </Typography>
                    {person.role && (
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.8,
                          wordBreak: "break-word",
                        }}
                      >
                        {person.role}
                      </Typography>
                    )}
                  </Stack>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </MotionDiv>
      </Box>

      {/* separator zwischen den Abschnitten */}
      <Box
        sx={{
          mt: 5,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(150,160,200,0.7), transparent)",
            opacity: 0.7,
          }}
        />
      </Box>
    </>
  );
};

export default TeamSectionBlock;
