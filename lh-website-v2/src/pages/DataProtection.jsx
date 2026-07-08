import React from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';
import HeroSection from '../components/common/HeroSection';
import TransText from '../components/common/TransText';
import FadeInOnScroll from '../components/common/FadeInOnScroll';
import ParallaxClouds from "../components/common/ParallaxClouds";
import { useTheme } from '@mui/material/styles';
import { motion } from "framer-motion";

const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const DataProtection = () => {
  const { t } = useTranslation('data_protection');
  const theme = useTheme();


  return (
    <>
      {/* HeroSection mit Titel */}
      <HeroSection backgroundUrl={'/wallpapers/data-protection_hero.jpg'} big>

        <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    sx={{ position: "relative", width: "100%" }}
                  >
                    <Container
                      maxWidth="lg"
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Stack
                        spacing={2}
                        maxWidth={720}
                        sx={{
                          mt: { xs: 4, md: 6, lg: 8 },
                          textAlign: "left",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography
                          variant="overline"
                          sx={{ letterSpacing: 3, opacity: 0.9 }}
                        >
                          {t('header')}
                        </Typography>
                        <Typography variant="h4" component="h1" fontWeight={700}>
                          {t('title')}
                        </Typography>
                        <Typography variant="body1" sx={{ maxWidth: 540 }}>
                          {t('disclaimer')}
                        </Typography>
                      </Stack>
                    </Container>
                  </MotionBox>
      </HeroSection>

      {/* Hauptinhalt */}
      <Box sx={{ position: 'relative' }}>
      <ParallaxClouds theme={theme} count={5}/>
      <Container maxWidth="md" sx={{ pt: 2, pb: 4 }}>
        {/* Intro mit dynamischem Link */}

        <Typography paragraph>
            <TransText
                i18nKey="intro"
                t={t}
            />
        </Typography>

        {/* Dynamische Abschnitte */}
        {Object.entries(t('sections', { returnObjects: true })).map(
          ([key, section]) => (
            <Box key={key} sx={{ mb: 4 }}>
                <FadeInOnScroll delay={0.1}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  mt: 4,
                  mb: 2,
                  fontSize: { xs: '1.2rem', sm: '1.35rem', md: '1.5rem' },
                }}
              >
                <Trans
                    i18nKey={section.title}
                    t={t}
                />
              </Typography>

              {section.paragraphs.map((p, index) => (
                <Typography
                  key={index}
                  paragraph
                  sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}
                >
                    <TransText
                        i18nKey={`sections.${key}.paragraphs.${index}`}
                        t={t}
                    />
                </Typography>
              ))}
              </FadeInOnScroll>

              <Divider sx={{ mt: 3 }} />
            </Box>
          )
        )}

        {/* Fußnote */}
        <Box textAlign="center" mt={6}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem' } }}
          >
            <TransText
                i18nKey='footer.note'
                t={t}
            />
          </Typography>
        </Box>
      </Container>
      </Box>
    </>
  );
};

export default DataProtection;
