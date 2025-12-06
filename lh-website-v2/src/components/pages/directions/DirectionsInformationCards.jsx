// src/components/pages/directions/DirectionsInformationCards.jsx
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PlaceIcon from "@mui/icons-material/Place";

import sectionFade from "../../common/SectionFade";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const DirectionsInformationCards = () => {
    const{ t } = useTranslation('directions')

  return (
    <Box sx={{ py: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
            {/* Linke Spalte: Adresse + Street View */}
            <Grid item xs={12} md={6}>
            <Stack spacing={3}>
                {/* Adresse / Kontakt */}
                <MotionPaper
                custom={0}
                variants={sectionFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -4, boxShadow: 6 }}
                elevation={3}
                sx={{
                    borderRadius: 3,
                    p: 3,
                    position: "relative",
                    overflow: "hidden",
                }}
                >
                <Box
                    sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.05,
                    background:
                        "radial-gradient(circle at top left, #5564b5, transparent 60%)",
                    pointerEvents: "none",
                    }}
                />
                <Stack spacing={2} position="relative" zIndex={1}>
                    <Stack direction="row" spacing={1} alignItems="center">
                    <PlaceIcon color="primary" />
                    <Typography variant="h6" fontWeight={700}>
                        {t('adress_card.title')}
                    </Typography>
                    </Stack>

                    <Typography variant="body1">
                    {t('adress_card.company_name')}
                    <br />
                    {t('adress_card.street')}
                    <br />
                    {t('adress_card.postal_code_city')}
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 1 }}>
                    {t('adress_card.phone')}
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Chip
                        label={t('adress_card.tags.0')}
                        size="small"
                        variant="outlined"
                    />
                    <Chip
                        label={t('adress_card.tags.1')} 
                        size="small"
                        variant="outlined"
                    />
                    </Stack>
                </Stack>
                </MotionPaper>

                {/* Street View Card */}
                <MotionPaper
                custom={0.1}
                variants={sectionFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -4, boxShadow: 6 }}
                sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative",
                    height: { xs: 260, md: 320 },
                }}
                >
                {/* Inhalt: Entweder StreetView ODER Bild */}
                <Box
                    component="img"
                    src="/images/office.png" // <-- dein Bild hier
                    alt="Office street view"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                    />
                

                {/* Overlay-Hinweis immer oben links – egal ob Bild oder StreetView */}
                <Box
                    sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 2,
                    background:
                        "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.1))",
                    color: "#fff",
                    zIndex: 1,
                    maxWidth: 260,
                    }}
                >
                    <Typography variant="caption" fontWeight={600}>
                    {t('adress_card.office_details')}
                    </Typography>
                </Box>
                </MotionPaper>


            </Stack>
            </Grid>

            {/* Rechte Spalte: Anreiseoptionen */}
            <Grid item xs={12} md={6}>
            <Stack spacing={2}>
                <MotionBox
                custom={0.2}
                variants={sectionFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                >
                <Typography variant="h6" fontWeight={700} gutterBottom>
                    {t('directions_card.title')}
                </Typography>
                <Typography variant="body2">
                    {t('directions_card.subtitle')}
                </Typography>
                </MotionBox>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                {/* ÖPNV */}
                <Grid item xs={12} sm={6}>
                    <MotionPaper
                    whileHover={{ y: -4, boxShadow: 6 }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                    }}
                    sx={{
                        borderRadius: 3,
                        p: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                    >
                    <Stack direction="row" spacing={1} alignItems="center">
                        <TrainIcon color="primary" />
                        <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        >
                        {t('directions_card.by_public_transport.title')}
                        </Typography>
                    </Stack>
                    <Typography variant="body2">
                        {t('directions_card.by_public_transport.description')}
                    </Typography>
                    </MotionPaper>
                </Grid>

                {/* Zu Fuß / Rad */}
                <Grid item xs={12} sm={6}>
                    <MotionPaper
                    whileHover={{ y: -4, boxShadow: 6 }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                    }}
                    sx={{
                        borderRadius: 3,
                        p: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                    >
                    <Stack direction="row" spacing={1} alignItems="center">
                        <DirectionsWalkIcon color="primary" />
                        <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        >
                        {t('directions_card.on_foot.title')}
                        </Typography>
                    </Stack>
                    <Typography variant="body2">
                        {t('directions_card.on_foot.description')}
                    </Typography>
                    </MotionPaper>
                </Grid>

                {/* Auto 1 */}
                <Grid item xs={12} sm={6}>
                    <MotionPaper
                    whileHover={{ y: -4, boxShadow: 6 }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                    }}
                    sx={{
                        borderRadius: 3,
                        p: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                    >
                    <Stack direction="row" spacing={1} alignItems="center">
                        <DirectionsCarIcon color="primary" />
                        <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        >
                        {t('directions_card.by_car_A3.title')}
                        </Typography>
                    </Stack>
                    <Typography variant="body2">
                        {t('directions_card.by_car_A3.description')}
                    </Typography>
                    </MotionPaper>
                </Grid>

                {/* Auto 2 – z. B. alternative Route */}
                <Grid item xs={12} sm={6}>
                    <MotionPaper
                    whileHover={{ y: -4, boxShadow: 6 }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                    }}
                    sx={{
                        borderRadius: 3,
                        p: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                    >
                    <Stack direction="row" spacing={1} alignItems="center">
                        <DirectionsCarIcon color="primary" />
                        <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        >
                        {t('directions_card.by_car_north_west.title')}
                        </Typography>
                    </Stack>
                    <Typography variant="body2">
                        {t('directions_card.by_car_north_west.description')}
                    </Typography>
                    </MotionPaper>
                </Grid>
                {/* Auto 2 – z. B. alternative Route */}
                <Grid item xs={12}>
                    <MotionPaper
                    whileHover={{ y: -4, boxShadow: 6 }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                    }}
                    sx={{
                        borderRadius: 3,
                        p: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                    >
                    <Stack direction="row" spacing={1} alignItems="center">
                        <DirectionsCarIcon color="primary" />
                        <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        >
                        {t('directions_card.by_car_south_east.title')}
                        </Typography>
                    </Stack>
                    <Typography variant="body2">
                        {t('directions_card.by_car_south_east.description')}
                    </Typography>
                    </MotionPaper>
                </Grid>
                </Grid>
            </Stack>
            </Grid>
        </Grid>
        </Container>
    </Box>
  )
}

export default DirectionsInformationCards