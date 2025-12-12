// src/pages/TeamPage.jsx
import { Box } from "@mui/material";

import TeamHero from "../components/pages/team/TeamHero";
import GlowingLinesBackground from "../components/common/GlowingLinesBackground";
import TeamMainSection from "../components/pages/team/TeamMainSection";
import JoinTeamCTASection from "../components/pages/team/TeamJoinCTASection";

const TeamPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {/* Hintergrund-Linien für die ganze Seite */}
      <GlowingLinesBackground count={6} infront={false} fullPage />

      {/* Inhaltsebene darüber */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <TeamHero />
        <TeamMainSection />
        <JoinTeamCTASection />
      </Box>
    </Box>
  );
};

export default TeamPage;
