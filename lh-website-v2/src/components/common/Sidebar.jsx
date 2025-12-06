import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  Box,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import uiConfigs from "../../configs/ui.configs";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import { themeModes } from "../../configs/theme.configs";
import { setThemeMode } from "../../redux/features/themeModeSlice";

import getMenuConfigs from "../../configs/menu.configs";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import i18n from "../../i18n";

const Sidebar = ({ open, toggleSidebar }) => {
  const dispatch = useDispatch();

  const { appState } = useSelector((state) => state.appState);
  const { themeMode } = useSelector((state) => state.themeMode);

  const SidebarWidth = uiConfigs.size.sidebarWith;

  const onSwitchTheme = () => {
    const theme =
      themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
    dispatch(setThemeMode(theme));
  };

  const { t } = useTranslation();
  const menuConfigs = getMenuConfigs(t);

  // track which parent menus are expanded
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [languageOpen, setLanguageOpen] = useState(false);

  const handleToggleSubmenu = (stateKey) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [stateKey]: !prev[stateKey],
    }));
  };

  // Sprachkonfiguration
  const languages = [
    { code: "en", label: "English", flag: "GB" },
    { code: "de", label: "Deutsch", flag: "DE" },
    { code: "cn", label: "中文", flag: "CN" }, // <-- hier deine "cn"-Sprache
  ];

  const currentLanguage =
    languages.find((lang) => i18n.language.startsWith(lang.code)) ||
    languages[0];

  const handleSelectLanguage = (code) => {
    i18n.changeLanguage(code);
    setLanguageOpen(false);
  };

  const drawer = (
    <>
      <Toolbar sx={{ paddingY: "20px", color: "text.primary" }}>
        <Stack width="100%" direction="row" justifyContent="center">
          <Logo />
        </Stack>
      </Toolbar>

      <List sx={{ paddingX: "30px" }}>
        <Typography variant="h6" marginBottom="20px">
          {t("general.menu")}
        </Typography>

        {/* MAIN MENU ITEMS */}
        {menuConfigs.main.map((item) => {
          const Icon = item.icon;
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = !!openSubmenus[item.state];
          const isActive = appState.includes(item.state);

          return (
            <Box key={item.state}>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => toggleSidebar(false)}
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  marginY: 0.5,
                  paddingY: 1,
                  backgroundColor: isActive ? "primary.main" : "transparent",
                  color: isActive ? "primary.contrastText" : "text.primary",
                  pl: 4,
                  transition:
                    "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    backgroundColor: isActive ? "primary.dark" : "action.hover",
                    transform: "translateX(4px)",
                    boxShadow: 2,
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 6,
                    top: 6,
                    bottom: 6,
                    width: 3,
                    borderRadius: "999px",
                    backgroundColor: isActive ? "secondary.main" : "transparent",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36, color: "inherit" }}>
                  <Icon />
                </ListItemIcon>

                <ListItemText
                  disableTypography
                  primary={
                    <Typography textTransform="uppercase" fontSize="0.8rem">
                      {item.display}
                    </Typography>
                  }
                />

                {hasChildren && (
                  <Box
                    sx={{
                      ml: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      backgroundColor: "action.hover",
                      flexShrink: 0,
                      cursor: "pointer",
                      transition:
                        "background-color 0.2s ease, transform 0.2s ease",
                      "&:hover": {
                        backgroundColor: "action.selected",
                        transform: "scale(1.05)",
                      },
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleToggleSubmenu(item.state);
                    }}
                  >
                    {isOpen ? (
                      <ExpandLessIcon fontSize="small" />
                    ) : (
                      <ExpandMoreIcon fontSize="small" />
                    )}
                  </Box>
                )}
              </ListItemButton>

              {hasChildren && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 6 }}>
                    {item.children.map((child) => {
                      const childActive = appState.includes(child.state);
                      return (
                        <ListItemButton
                          key={child.state}
                          component={Link}
                          to={child.path}
                          onClick={() => toggleSidebar(false)}
                          sx={{
                            borderRadius: "10px",
                            marginY: 0.3,
                            backgroundColor: childActive
                              ? "primary.main"
                              : "transparent",
                            color: childActive
                              ? "primary.contrastText"
                              : "text.secondary",
                            transition:
                              "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                            "&:hover": {
                              backgroundColor: childActive
                                ? "primary.dark"
                                : "action.hover",
                              transform: "translateX(4px)",
                              boxShadow: 1,
                            },
                          }}
                        >
                          <ListItemText
                            disableTypography
                            primary={
                              <Typography
                                variant="body2"
                                textTransform="uppercase"
                                fontSize="0.75rem"
                              >
                                {child.display}
                              </Typography>
                            }
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}

        {/* THEME SECTION */}
        <Typography variant="h6" marginY="20px">
          {t("general.general")}
        </Typography>

        {/* LANGUAGE DROPDOWN BUTTON */}
        <ListItemButton
          onClick={() => setLanguageOpen((prev) => !prev)}
          sx={{
            borderRadius: "12px",
            marginY: 0.5,
            paddingY: 1,
            transition:
              "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              backgroundColor: "action.hover",
              transform: "translateX(4px)",
              boxShadow: 1,
            },
          }}
        >
          <ListItemIcon sx={{ color: "inherit" }}>
            <Flag
              code={currentLanguage.flag}
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                boxShadow: "0 0 5px rgba(0,0,0,0.3)",
                objectFit: "cover",
              }}
            />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography textTransform="uppercase">
                {t("general.language")}
              </Typography>
            }
          />
          {languageOpen ? (
            <ExpandLessIcon fontSize="small" />
          ) : (
            <ExpandMoreIcon fontSize="small" />
          )}
        </ListItemButton>

        {/* LANGUAGE DROPDOWN LIST */}
        <Collapse in={languageOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            {languages.map((lang) => {
              const isCurrent =
                i18n.language && i18n.language.startsWith(lang.code);
              return (
                <ListItemButton
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang.code)}
                  sx={{
                    borderRadius: "10px",
                    marginY: 0.3,
                    backgroundColor: isCurrent
                      ? "primary.main"
                      : "transparent",
                    color: isCurrent
                      ? "primary.contrastText"
                      : "text.secondary",
                    "&:hover": {
                      backgroundColor: isCurrent
                        ? "primary.dark"
                        : "action.hover",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
                    <Flag
                      code={lang.flag}
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                        objectFit: "cover",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography variant="body2">{lang.label}</Typography>
                    }
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>

        {/* THEME TOGGLE BUTTON */}
        <ListItemButton
          onClick={onSwitchTheme}
          sx={{
            borderRadius: "12px",
            marginY: 0.5,
            paddingY: 1,
            transition:
              "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              backgroundColor: "action.hover",
              transform: "translateX(4px)",
              boxShadow: 1,
            },
          }}
        >
          <ListItemIcon sx={{ color: "inherit" }}>
            {themeMode === themeModes.dark && <DarkModeOutlinedIcon />}
            {themeMode === themeModes.light && <WbSunnyOutlinedIcon />}
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography textTransform="uppercase">
                {themeMode === themeModes.dark ? "dark mode" : "light mode"}
              </Typography>
            }
          />
        </ListItemButton>
      </List>
    </>
  );

  return (
    <Drawer
      open={open}
      onClose={() => toggleSidebar(false)}
      sx={{
        "& .MuiDrawer-Paper": {
          boxSizing: "border-box",
          width: SidebarWidth,
          borderRight: 0,
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default Sidebar;
