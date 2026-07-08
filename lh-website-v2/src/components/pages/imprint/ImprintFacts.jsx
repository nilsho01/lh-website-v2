// src/pages/ImprintPage.jsx
import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Paper,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import sectionFade from "../../common/SectionFade";
import { useTranslation } from "react-i18next";

// Framer Motion Wrapper für MUI
const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const ImprintFacts = () => {
    const { t } = useTranslation('imprint')

  return (
    <Grid item xs={12} md={5}>
        <Stack spacing={3}>
        <MotionPaper
            custom={0.15}
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4, boxShadow: 7 }}
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
                opacity: 0.08,
                background:
                "radial-gradient(circle at 20% 0%, #ffffff, transparent 55%)",
                pointerEvents: "none",
            }}
            />
            <Stack spacing={2} position="relative" zIndex={1}>
            <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                {t('facts.header')}
            </Typography>
            <Typography variant="h6" fontWeight={700}>
                {t('facts.title')}
            </Typography>

            <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center">
                <Chip
                    label={t('facts.fact.0.tag')}
                    size="small"
                    color="secondary"
                    variant="outlined"
                />
                <Typography variant="body2">
                    {t('facts.fact.0.content')}
                </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                <Chip
                    label={t('facts.fact.1.tag')}
                    size="small"
                    variant="outlined"
                    color="secondary"
                />
                <Typography variant="body2">
                    {t('facts.fact.1.content')}
                </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                <Chip
                    label={t('facts.fact.2.tag')}
                    size="small"
                    variant="outlined"
                    color="secondary"
                />
                <Typography variant="body2">
                    {t('facts.fact.2.content')}
                </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                <Chip
                    label={t('facts.fact.3.tag')}
                    size="small"
                    variant="outlined"
                    color="secondary"
                />
                <Typography variant="body2">
                    {t('facts.fact.3.content')}
                </Typography>
                </Stack>
            </Stack>
            </Stack>
        </MotionPaper>

        <MotionPaper
            custom={0.25}
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4, boxShadow: 7 }}
            sx={{
            borderRadius: 3,
            p: 3,
            position: "relative",
            overflow: "hidden",
            }}
        >
            <Stack spacing={1.5}>
            <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                {t('hint.title')}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t('hint.content')}
            </Typography>
            </Stack>
        </MotionPaper>
        </Stack>
    </Grid>
  )
}

export default ImprintFacts