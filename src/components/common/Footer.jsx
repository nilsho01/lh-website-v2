import React from "react";
import { Stack, Paper, Box, Button, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router"

import Logo from "./Logo";
import getMenuConfigs from "../../configs/menu.configs";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const menuConfigs = getMenuConfigs(t);
    const { appState } = useSelector((state) => state.appState);

    return (
        <Box sx={{ marginX: "auto", color: "text.primary" }}>
            <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem", zIndex: 10 }}>
                <Stack
                    direction={{ xs: "column", md: "row"}}
                    sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "max-content",
                    }}
                >
                    <Logo />
                    <Box>
                        {menuConfigs.footer.map((item, index) => (
                            <Button
                                key={index}
                                sx={{
                                    color: appState.includes(item.state) ? "primary.contrastText" : "inherit",
                                }}
                                component={Link}
                                to={item.path}
                                variant={appState.includes(item.state) ? "contained" : "text"}
                            >
                                {item.display}
                            </Button>
                        ))}
                        {menuConfigs.socials.map((item, index) => (
                            <IconButton
                                key={index}
                                component="a"
                                href={item.directTo}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: "inherit "}}
                            >
                                <item.icon />
                            </IconButton>
                        ))}
                    </Box>
                </Stack>
            </Paper>
        </Box>
    )
};

export default Footer;