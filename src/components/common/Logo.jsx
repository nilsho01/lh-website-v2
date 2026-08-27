import React from "react";
import { Typography, useTheme, Box, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router";

/**
 * Das Logo verweist standardmaessig auf die Startseite - so erwartet man es
 * von einem Website-Logo.
 *
 * disableLink fuer Stellen, an denen es rein dekorativ steht (Ladeoverlay):
 * dort waere ein Verweis fuer Screenreader nur Rauschen und ohnehin nicht
 * anklickbar.
 *
 * onClick reicht die Sidebar durch, um beim Navigieren das Panel zu schliessen.
 */
const Logo = ({ disableLink = false, onClick }) => {
    const theme = useTheme();

    const content = (
        <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "flex-end" }}
        >
            <Box
                component="img"
                src="/L+H_Logo.png"
                alt=""
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

    if (disableLink) return content;

    return (
        <Box
            component={RouterLink}
            to="/"
            onClick={onClick}
            aria-label="L+H MarketingServices AutomobilConsult - zur Startseite"
            sx={{
                display: "inline-flex",
                color: "inherit",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
                "&:hover": { opacity: 0.8 },
            }}
        >
            {content}
        </Box>
    );
};

export default Logo;
