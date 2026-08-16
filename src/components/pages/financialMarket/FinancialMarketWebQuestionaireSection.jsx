// src/components/pages/financialMarket/FinancialMarketWebQuestionaireSection.jsx
import React from "react";
import { Box, Container, Grid, Stack, Typography, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TransText from "../../common/TransText";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import WebQuestionaireProcessDiagram from "./WebQuestionaireProcessDiagram";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const FinancialMarketWebQuestionaireSection = ({ refProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { t } = useTranslation("financial_market");

  return (
    <Box id="online-surveys" ref={refProp} sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center", mb: 4 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>
            {t("webquestionaire.header")}
          </Typography>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            {t("webquestionaire.title")}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 720 }}>
            {t("webquestionaire.subheader")}
          </Typography>
        </Stack>

        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <MotionPaper
              whileHover={{ y: -6, boxShadow: 6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              sx={{
                height: "100%",
                borderRadius: 3,
                p: 3,
                textAlign: "center",
                background: theme.palette.mode === "light" ? "#ffffff" : theme.palette.background.paper,
                border: isDark ? `1px solid ${theme.palette.divider}` : "none",
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  mx: "auto",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
              >
                <AutorenewIcon />
              </Box>
              <Typography variant="h6" gutterBottom>
                {t("webquestionaire.tile.header")}
              </Typography>
              <Typography variant="body2">
                <TransText i18nKey="webquestionaire.tile.content" t={t} />
              </Typography>
            </MotionPaper>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <WebQuestionaireProcessDiagram />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FinancialMarketWebQuestionaireSection;
