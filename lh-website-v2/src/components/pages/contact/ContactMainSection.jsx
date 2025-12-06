// src/components/contact/ContactMainSection.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  TextField,
  Button,
  useTheme,
  FormControlLabel,
  Checkbox,
  Alert,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import BusinessIcon from "@mui/icons-material/Business";
import SendIcon from "@mui/icons-material/Send";
import DirectionsIcon from '@mui/icons-material/Directions';
import { Link as RouterLink } from "react-router-dom";
import sectionFade from "../../common/SectionFade";
import { useTranslation } from "react-i18next";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const ContactMainSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { t } = useTranslation('contact')

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: "" });

  const handleChange = (field) => (event) => {
    const value =
      field === "consent" ? event.target.checked : event.target.value;

    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formValues.name.trim()) newErrors.name = t('informations.contact_form.error.name');
    if (!formValues.email.trim()) {
      newErrors.email = t('informations.contact_form.error.enter_mail');
    } else if (!/^\S+@\S+\.\S+$/.test(formValues.email.trim())) {
      newErrors.email = t('informations.contact_form.error.valid_mail');
    }
    if (!formValues.message.trim())
      newErrors.message = t('informations.contact_form.error.message');
    if (!formValues.consent)
      newErrors.consent = t('informations.contact_form.error.consent');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      setStatus({
        type: "error",
        message: t('informations.contact_form.error.general'),
      });
      return;
    }

    console.log("[contact-form] submit:", formValues);

    setStatus({
      type: "success",
      message:
        t('informations.contact_form.success'),
    });

    setFormValues({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      consent: false,
    });
    setErrors({});
  };

  return (
    <Box sx={{ py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Contact info */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
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
                <Stack spacing={2} position="relative" zIndex={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <BusinessIcon color="primary" />
                    <Typography variant="h6" fontWeight={700}>
                      {t('informations.contact_details.title')}
                    </Typography>
                  </Stack>

                  <Typography variant="body1">
                    <strong>{t('informations.contact_details.company_name')}</strong>
                    <br />
                    {t('informations.contact_details.street')}
                    <br />
                    {t('informations.contact_details.city')}
                  </Typography>

                  <Stack spacing={1.2}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocalPhoneIcon sx={{ fontSize: 18, opacity: 0.8 }} />
                      <Typography variant="body2">
                        {t('informations.contact_details.phone')}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocalPhoneIcon sx={{ fontSize: 18, opacity: 0.8 }} />
                      <Typography variant="body2">
                        {t('informations.contact_details.fax')}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <EmailIcon sx={{ fontSize: 18, opacity: 0.8 }} />
                      <Typography variant="body2">
                        {t('informations.contact_details.mail')}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography
                      variant="subtitle2"
                      sx={{ mt: 1, opacity: 0.85 }}
                    >
                      {t('informations.contact_details.office_hours.title')}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {t('informations.contact_details.office_hours.times')}
                      <br />
                      {t('informations.contact_details.office_hours.disclaimer')}
                    </Typography>
                  </Stack>

                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    {t('informations.contact_details.contact_info')}
                  </Typography>
                </Stack>
              </MotionPaper>

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
                <Stack spacing={1.5}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <PlaceIcon color="primary" />
                        <Typography variant="subtitle1" fontWeight={600}>
                        {t('informations.on_side.title')}
                        </Typography>
                    </Stack>

                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {t('informations.on_side.content')}
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={1}
                        mt={1}
                        flexWrap="wrap"
                        rowGap={1}
                    >
                        <Chip
                        label={t('informations.on_side.tag_1')}
                        size="small"
                        variant="outlined"
                        />
                        <Chip
                        label={t('informations.on_side.tag_2')}
                        size="small"
                        variant="outlined"
                        />
                    </Stack>

                    {/* Centered secondary button */}
                    <Box
                        sx={{
                        mt: 3,
                        display: "flex",
                        justifyContent: "center",
                        }}
                    >
                        <motion.div
                        whileHover={{ scale: 1.04, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        >
                        <Button
                            component={RouterLink}
                            to="/directions"
                            variant="contained"
                            color="primary"
                            endIcon={<DirectionsIcon />}
                            sx={{
                            borderRadius: "999px",
                            px: 3,
                            py: 1,
                            fontWeight: 600,
                            boxShadow: (theme) =>
                                theme.palette.mode === "dark"
                                ? "0 10px 24px rgba(0,0,0,0.7)"
                                : "0 10px 24px rgba(90,110,180,0.35)",
                            }}
                        >
                            {t('informations.on_side.button')}
                        </Button>
                        </motion.div>
                    </Box>
                    </Stack>

              </MotionPaper>
            </Stack>
          </Grid>

          {/* Right: Contact form */}
          <Grid item xs={12} md={7}>
            <MotionPaper
              custom={0.2}
              variants={sectionFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              sx={{
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
                }`,
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 18px 40px rgba(0,0,0,0.7)"
                    : "0 18px 40px rgba(90,110,180,0.4)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.06,
                  background:
                    "radial-gradient(circle at top right, #90a4f4, transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ position: "relative", zIndex: 1 }}
              >
                <Stack spacing={2.5}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <SendIcon color="primary" />
                    <Typography variant="h6" fontWeight={700}>
                      {t('informations.contact_form.title')}
                    </Typography>
                  </Stack>

                  {status.type && (
                    <Alert
                      severity={status.type}
                      onClose={() =>
                        setStatus({ type: null, message: "" })
                      }
                    >
                      {status.message}
                    </Alert>
                  )}

                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label={`${t('informations.contact_form.name')} *`}
                        value={formValues.name}
                        onChange={handleChange("name")}
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label={`${t('informations.contact_form.mail')} *`}
                        value={formValues.email}
                        onChange={handleChange("email")}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label={t('informations.contact_form.company')}
                        value={formValues.company}
                        onChange={handleChange("company")}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label={t('informations.contact_form.subject')}
                        value={formValues.subject}
                        onChange={handleChange("subject")}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={`${t('informations.contact_form.message')} *`}
                        multiline
                        minRows={4}
                        value={formValues.message}
                        onChange={handleChange("message")}
                        error={Boolean(errors.message)}
                        helperText={errors.message}
                      />
                    </Grid>
                  </Grid>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formValues.consent}
                        onChange={handleChange("consent")}
                        color="primary"
                      />
                    }
                    sx={{
                      alignItems: "flex-start",
                      "& .MuiFormControlLabel-label": {
                        fontSize: "0.85rem",
                      },
                    }}
                    label={
                      <Typography variant="caption" sx={{ opacity: 0.9 }}>
                        {t('informations.contact_form.agreement')}
                      </Typography>
                    }
                  />
                  {errors.consent && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ mt: -1 }}
                    >
                      {errors.consent}
                    </Typography>
                  )}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mt: 1,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        endIcon={<SendIcon />}
                        sx={{
                          borderRadius: "999px",
                          px: 3,
                          py: 1,
                          fontWeight: 600,
                        }}
                      >
                        {t('informations.contact_form.button')}
                      </Button>
                    </motion.div>
                  </Box>
                </Stack>
              </Box>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMainSection;
