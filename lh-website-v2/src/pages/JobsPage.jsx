// src/pages/JobsPage.jsx
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import PageWrapper from "../components/common/PageWrapper";
import ParallaxClouds from "../components/common/ParallaxClouds";

import JobsHeroSection from "../components/pages/jobs/JobsHeroSection";
import JobsWhyJoinSection from "../components/pages/jobs/JobsWhyJoinSection";
import JobsCareerDevelopmentSection from "../components/pages/jobs/JobsCareerDevelopmentSection";
import JobsOpenPositionsSection from "../components/pages/jobs/JobsOpenPositionsSection";
import JobsHiringProcessSection from "../components/pages/jobs/JobsHiringProcessSection";

const JobsPage = () => {
  const theme = useTheme();

  return (
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <JobsHeroSection />

        <Box sx={{ position: "relative" }}>
          <ParallaxClouds count={5} infront={false} />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <JobsWhyJoinSection />
            <JobsOpenPositionsSection />
            <JobsHiringProcessSection />
            <JobsCareerDevelopmentSection />
          </Box>
        </Box>
      </Box>
  );
};

export default JobsPage;
