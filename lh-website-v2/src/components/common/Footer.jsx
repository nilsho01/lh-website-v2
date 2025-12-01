import { Stack, Paper, Box, Button, IconButton } from '@mui/material';
import { useSelector } from "react-redux";
import Container from './Container';
import Logo from './Logo';
import React from 'react';
import { Link } from 'react-router-dom';

import getMenuConfigs from "../../configs/menu.configs";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const menuConfigs = getMenuConfigs(t);
    const { appState } = useSelector((state) => state.appState);
  return (
    <Container includeMargin={false}>
        <Paper square={true} sx={{backgroundImage: "unset", padding: "2rem"}}>
            <Stack
                alignItems= "center"
                justifyContent="space-between"
                direction={{ xs: "column", md: "row"}}
                sx={{ height: "max-content" }}
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
                    {menuConfigs.social.map((item, index) => (
                        <IconButton
                            key={index}
                            component="a"
                            href={item.directTo}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: "inherit" }}
                        >
                            <item.icon />
                        </IconButton>
                    ))}
                </Box>
            </Stack>
        </Paper>
    </Container>
  )
};

export default Footer;