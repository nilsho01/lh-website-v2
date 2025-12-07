import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';
import HeroSection from '../components/common/HeroSection';
import TransText from '../components/common/TransText';
import FadeInOnScroll from '../components/common/FadeInOnScroll';
import ParallaxClouds from "../components/common/ParallaxClouds";
import { useTheme } from '@mui/material/styles';

const DataProtection = () => {
  const { t } = useTranslation('data_protection');
  const theme = useTheme();


  return (
    <>
      {/* HeroSection mit Titel */}
      <HeroSection backgroundUrl={'/wallpapers/data-protection_hero.jpg'} big={false}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textShadow: '0px 2px 10px rgba(0,0,0,0.6)',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          {t('title')}
        </Typography>
      </HeroSection>

      {/* Hauptinhalt */}
      <Box sx={{ position: 'relative' }}>
      <ParallaxClouds theme={theme} count={5}/>
      <Container maxWidth="md" sx={{ pt: 2, pb: 4 }}>
        {/* Intro mit dynamischem Link */}
        <Typography paragraph>
            <TransText
                i18nKey="disclaimer"
                t={t}
            />
        </Typography>

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
