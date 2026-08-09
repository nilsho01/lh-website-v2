import React, { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Paper,
  Button,
  useTheme
} from "@mui/material";
import { motion } from "framer-motion";

import MapIcon from "@mui/icons-material/Map";

import { useTranslation } from "react-i18next";
import sectionFade from "../../common/SectionFade";

const MotionPaper = motion(Paper);

const DirectionsMapsCard = () => {
    const { t } = useTranslation('directions');
    const theme = useTheme();
      const isDark = theme.palette.mode === "dark";


    const [mapsConsent, setMapsConsent] = useState(false);
  const handleAcceptMaps = () => setMapsConsent(true);

  return (
    <Box
        sx={{
            py: { xs: 5, md: 7 },
            borderTop: "1px solid",
            borderColor: theme.palette.divider,
        }}
        >
        <Container maxWidth="lg">
            <Stack spacing={2} mb={3} textAlign="center">
            <Typography variant="h6" fontWeight={700}>
                {t('map_card.title')}
            </Typography>
            <Typography variant="body2">
                {t('map_card.description')}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
                {t('map_card.disclaimer')}
            </Typography>
            </Stack>

            <MotionPaper
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            elevation={4}
            sx={{
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                height: { xs: "40vh", sm: "45vh", md: "50vh", lg: "55vh" },
                maxHeight: 600,
                display: "flex",
            }}
            >
            {mapsConsent ? (
                <Box
                component="iframe"
                title={t('map_card.iframe_title')}
                src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5185.7869467849605!2d11.092399176783747!3d49.46762745763972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f57c034dbc863%3A0xb38edf9007a446d4!2sVirchowstra%C3%9Fe%2019%2C%2090409%20N%C3%BCrnberg!5e0!3m2!1sde!2sde!4v1764802796812!5m2!1sde!2sde"
                }
                style={{
                    border: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                />
            ) : (
                <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    background: isDark
                    ? "linear-gradient(135deg, #151826, #090b13)"
                    : "linear-gradient(135deg, #e3e7f2, #cdd5f0)",
                }}
                />
            )}

            {!mapsConsent && (
                <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(0,0,0,0.45)",
                    backdropFilter: "blur(6px)",
                    color: "#fff",
                    textAlign: "center",
                    px: 3,
                }}
                >
                <Stack spacing={2} maxWidth={480} alignItems="center">
                    <Box
                    sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1,
                        backdropFilter: "blur(8px)",
                    }}
                    >
                    <MapIcon sx={{ fontSize: 32 }} />
                    </Box>

                    <Typography variant="subtitle1" fontWeight={600}>
                    {t('map_card.window.title')}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {t('map_card.window.description')}
                    </Typography>

                    <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleAcceptMaps}
                    sx={{
                        borderRadius: "999px",
                        px: 3,
                        py: 1.1,
                        fontWeight: 600,
                        color: "#fff",
                    }}
                    >
                    {t('map_card.window.button')}
                    </Button>

                    <Typography
                    variant="caption"
                    sx={{ opacity: 0.8, maxWidth: 360 }}
                    >
                    {t('map_card.window.subtitle')}
                    </Typography>
                </Stack>
                </Box>
            )}
            </MotionPaper>
        </Container>
        </Box>
  )
}

export default DirectionsMapsCard