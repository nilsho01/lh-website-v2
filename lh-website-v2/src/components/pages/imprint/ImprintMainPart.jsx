// src/pages/ImprintPage.jsx
import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Divider,
  Paper
} from "@mui/material";

import { motion } from "framer-motion";
import sectionFade from "../../common/SectionFade";

import BusinessIcon from "@mui/icons-material/Business";
import MapIcon from "@mui/icons-material/Map";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GavelIcon from "@mui/icons-material/Gavel";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";
import TransText from "../../common/TransText";

// Framer Motion Wrapper für MUI
const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const ImprintMainPart = () => {
    const { t } = useTranslation('imprint')
  return (
    <Grid item xs={12} md={7}>
        <Stack spacing={3}>
        {/* Company & Address */}
        <MotionPaper
            custom={0}
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -3, boxShadow: 6 }}
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
                opacity: 0.06,
                background:
                "radial-gradient(circle at top left, #5564b5, transparent 60%)",
                pointerEvents: "none",
            }}
            />
            <Stack
            spacing={2}
            position="relative"
            zIndex={1}
            >
            <Stack direction="row" spacing={1} alignItems="center">
                <BusinessIcon color="primary" />
                <Typography variant="h6" fontWeight={700}>
                {t('company_information.title')}
                </Typography>
            </Stack>

            <Typography variant="body1">
                <strong>{t('company_information.company')}</strong>
                <br />
                {t('company_information.street')}
                <br />
                {t('company_information.city')}
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap">
                <Stack direction="row" spacing={1} alignItems="center">
                <LocalPhoneIcon
                    sx={{ fontSize: 18, opacity: 0.8 }}
                />
                <Typography variant="body2">
                    {t('company_information.phone')}
                </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                <LocalPhoneIcon
                    sx={{ fontSize: 18, opacity: 0.8 }}
                />
                <Typography variant="body2">
                    {t('company_information.fax')}
                </Typography>
                </Stack>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon sx={{ fontSize: 18, opacity: 0.8 }} />
                <Typography variant="body2">
                {t('company_information.mail')}
                </Typography>
            </Stack>
            </Stack>
        </MotionPaper>

        {/* Register + VAT + Management */}
        <MotionPaper
            custom={0.1}
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -3, boxShadow: 6 }}
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
                opacity: 0.03,
                background:
                "linear-gradient(135deg, #5564b5 0%, transparent 60%)",
                pointerEvents: "none",
            }}
            />
            <Stack spacing={2} position="relative" zIndex={1}>
            <Stack direction="row" spacing={1} alignItems="center">
                <MapIcon color="primary" />
                <Typography variant="h6" fontWeight={700}>
                {t('register_management.title')}
                </Typography>
            </Stack>

            <Typography variant="body2">
                <TransText
                    i18nKey='register_management.content'
                    t={t}
                />
            </Typography>

            <Typography variant="body2">
                {t('register_management.managing')}
                <br />
                <strong>{t('register_management.name')}:</strong>
            </Typography>

            <Divider sx={{ my: 1 }} />

            <Typography variant="body2">
                <TransText
                    i18nKey='register_management.vat'
                    t={t}
                />
            </Typography>
            </Stack>
        </MotionPaper>

        {/* Copyright */}
        <MotionPaper
            custom={0.2}
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -3, boxShadow: 6 }}
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
                opacity: 0.04,
                background:
                "radial-gradient(circle at bottom right, #5564b5, transparent 60%)",
                pointerEvents: "none",
            }}
            />
            <Stack spacing={2} position="relative" zIndex={1}>
            <Stack direction="row" spacing={1} alignItems="center">
                <InfoIcon color="primary" />
                <Typography variant="h6" fontWeight={700}>
                 {t('copyright.title')}
                </Typography>
            </Stack>

            <Typography variant="body2">
                <TransText
                    i18nKey='copyright.content'
                    t={t}
                />
            </Typography>
            </Stack>
        </MotionPaper>

        {/* VSBG Hinweis */}
        <MotionPaper
            custom={0.3}
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -3, boxShadow: 6 }}
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
                opacity: 0.04,
                background:
                "linear-gradient(135deg, #5564b5 0%, transparent 60%)",
                pointerEvents: "none",
            }}
            />
            <Stack spacing={2} position="relative" zIndex={1}>
            <Stack direction="row" spacing={1} alignItems="center">
                <GavelIcon color="primary" />
                <Typography variant="h6" fontWeight={700}>
                 {t('dispute_resolution.title')}
                </Typography>
            </Stack>

            <Typography variant="body2">
                {t('dispute_resolution.content')}
            </Typography>
            </Stack>
        </MotionPaper>
        </Stack>
    </Grid>
  )
}

export default ImprintMainPart