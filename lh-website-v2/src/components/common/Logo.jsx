import React from 'react';
import { Typography, useTheme, Box, Stack } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

return (
  <Stack
    direction="row"
    alignItems="flex-end"   // unten ausrichten
    spacing={1}
  >
    <Box
  component="img"
  src="/L+H_Logo.png"
  alt="L+H Logo"
  sx={{
    height: "1.4em",
    width: "auto",
    display: "block",
  }}
/>

    <Typography
  component="span"
  fontWeight={700}
  fontSize="0.7em"
  sx={{ lineHeight: 1 }}
>
  MarketingServices
  <span
    style={{
      display: "block", // ⬅️ sorgt für Zeilenumbruch
      color: theme.palette.primary.main,
    }}
  >
    AutomobilConsult
  </span>
</Typography>

  </Stack>
);

};

export default Logo;