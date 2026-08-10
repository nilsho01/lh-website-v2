import React from "react";
import { Typography, useTheme, Box, Stack } from "@mui/material";

const Logo = () => {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "flex-end" }}
        >
            <Box
                component="img"
                src="/L+H_Logo.png"
                alt="L+H Logo"
                sx={{
                    height: "1.4em",
                    width: "auto",
                    display: "block"
                }}
            />
            
            <Typography
                component="span"
                sx={{ fontWeight: 700, fontSize: "0.7em", lineHeight: 1 }}
            >
                MarketingServices
                <span
                    style={{
                        display: "block",
                        color: theme.palette.primary.main
                    }}
                >
                    AutomobilConsult
                </span>
            </Typography>
        </Stack>
    );
};

export default Logo;