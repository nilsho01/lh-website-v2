import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";

import { cloneElement, useState, useRef } from "react";
import { Link } from "react-router-dom";
import getMenuConfigs from "../../configs/menu.configs";
import { themeModes } from "../../configs/theme.configs";
import { setThemeMode } from "../../redux/features/themeModeSlice";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import Flag from "react-world-flags";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

/* === ScrollAppBar keeps color/background in sync with scroll,
   but now MERGES sx instead of overwriting it. === */
const ScrollAppBar = ({ children, window }) => {
  const { themeMode } = useSelector((state) => state.themeMode);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  const extraSx = {
    color: trigger
      ? "text.primary"
      : themeMode === themeModes.dark
      ? "primary.contrastText"
      : "text.primary",
    backgroundColor: trigger
      ? "background.paper"
      : themeMode === themeModes.dark
      ? "transparent"
      : "background.paper",
    backdropFilter: trigger ? "blur(8px)" : "none",
  };

  return cloneElement(children, {
    sx: {
      ...(children.props.sx || {}),
      ...extraSx,
    },
  });
};

const Topbar = () => {
  const { appState } = useSelector((state) => state.appState);
  const { themeMode } = useSelector((state) => state.themeMode);

  // robust gegen undefined / falschen Typ
  const safeAppState =
    typeof appState === "string" ? appState : String(appState ?? "");

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // which top menu is open (hover)
  const closeTimeoutRef = useRef(null); // delayed close timer

  const [languageOpen, setLanguageOpen] = useState(false);

  const dispatch = useDispatch();

  const { t } = useTranslation();
  const menuConfigs = getMenuConfigs(t);

  const onSwitchTheme = () => {
    const theme =
      themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
    dispatch(setThemeMode(theme));
  };

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  // === Hover helpers mit kleinem Delay beim Schließen ===
  const handleMenuEnter = (state) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(state);
  };

  const handleMenuLeave = (state) => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu((prev) => (prev === state ? null : prev));
    }, 220);
  };

  // === Sprachkonfiguration (wie in Sidebar) ===
  const languages = [
    { code: "en", label: "English", flag: "GB" },
    { code: "de", label: "Deutsch", flag: "DE" },
    { code: "cn", label: "中文", flag: "CN" }, // deine dritte Sprache
  ];

  const currentLanguage =
    languages.find((lang) => i18n.language.startsWith(lang.code)) ||
    languages[0];

  const handleSelectLanguage = (code) => {
    i18n.changeLanguage(code);
    setLanguageOpen(false);
  };

  return (
    <>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />

      <ScrollAppBar>
        <AppBar elevation={0} sx={{ zIndex: 999 }}>
          <Toolbar
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: 64,
            }}
          >
            {/* Left: menu icon + small logo on mobile */}
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                color="inherit"
                sx={{ mr: 2, display: { lg: "none" } }}
                onClick={toggleSidebar}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ display: { xs: "inline-block", lg: "none" } }}>
                <Logo />
              </Box>
            </Stack>

            {/* Center: main menu (desktop) */}
            <Box
              flexGrow={1}
              alignItems="center"
              display={{ xs: "none", lg: "flex" }}
            >
              <Box sx={{ mr: 3 }}>
                <Logo />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {menuConfigs.main.map((item) => {
                  const hasChildren =
                    item.children && item.children.length > 0;
                  const isActive = safeAppState.includes(item.state);
                  const isOpen = openMenu === item.state;

                  return (
                    <Box
                      key={item.state}
                      sx={{ position: "relative", display: "inline-flex" }}
                      onMouseEnter={() =>
                        hasChildren && handleMenuEnter(item.state)
                      }
                      onMouseLeave={() =>
                        hasChildren && handleMenuLeave(item.state)
                      }
                    >
                      <Button
                        component={Link}
                        to={item.path}
                        sx={{
                          textTransform: "uppercase",
                          fontSize: "0.8rem",
                          borderRadius: "999px",
                          px: 2,
                          py: 0.75,
                          mr: 0.5,
                          color: isActive
                            ? "primary.contrastText"
                            : "text.primary",
                          backgroundColor: isActive
                            ? "primary.main"
                            : "transparent",
                          boxShadow: isActive ? 1 : "none",
                          transition:
                            "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                          "&:hover": {
                            backgroundColor: isActive
                              ? "primary.dark"
                              : "action.hover",
                            transform: "translateY(-1px)",
                            boxShadow: 2,
                          },
                          "& .MuiButton-endIcon": {
                            ml: 0.5,
                            transition: "transform 0.2s ease",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                          },
                        }}
                        variant={isActive ? "contained" : "text"}
                        endIcon={
                          hasChildren ? (
                            <ExpandMoreIcon sx={{ fontSize: 18 }} />
                          ) : null
                        }
                      >
                        {item.display}
                      </Button>

                      {/* Hover dropdown for children */}
                      {hasChildren && (
                        <Box
                          onMouseEnter={() => handleMenuEnter(item.state)}
                          onMouseLeave={() => handleMenuLeave(item.state)}
                          sx={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            mt: 1,
                            minWidth: 220,
                            bgcolor: "background.paper",
                            boxShadow: 4,
                            borderRadius: 2,
                            overflow: "hidden",
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen
                              ? "translateY(0)"
                              : "translateY(8px)",
                            pointerEvents: isOpen ? "auto" : "none",
                            transition:
                              "opacity 0.2s ease, transform 0.2s ease",
                            zIndex: 1300,
                          }}
                        >
                          {item.children.map((child) => {
                            const childActive =
                              safeAppState.includes(child.state);
                            return (
                              <Button
                                key={child.state}
                                component={Link}
                                to={child.path}
                                onClick={() => setOpenMenu(null)}
                                fullWidth
                                sx={{
                                  justifyContent: "flex-start",
                                  borderRadius: 0,
                                  textTransform: "uppercase",
                                  fontSize: "0.8rem",
                                  px: 2,
                                  py: 1,
                                  color: childActive
                                    ? "primary.contrastText"
                                    : "text.primary",
                                  backgroundColor: childActive
                                    ? "primary.main"
                                    : "transparent",
                                  transition:
                                    "background-color 0.2s ease, padding-left 0.2s ease",
                                  "&:hover": {
                                    backgroundColor: childActive
                                      ? "primary.dark"
                                      : "action.hover",
                                    pl: 2.5,
                                  },
                                }}
                              >
                                {child.display}
                              </Button>
                            );
                          })}
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Right: language dropdown + theme (desktop) */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 1,
                ml: 2,
                position: "relative",
              }}
            >
              {/* Language selector */}
              <Box sx={{ position: "relative" }}>
                <Button
                  onClick={() => setLanguageOpen((prev) => !prev)}
                  sx={{
                    textTransform: "none",
                    borderRadius: "999px",
                    px: 1.5,
                    py: 0.5,
                    gap: 1,
                    color: "inherit",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                  startIcon={
                    <Flag
                      code={currentLanguage.flag}
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                        objectFit: "cover",
                      }}
                    />
                  }
                  endIcon={
                    <ExpandMoreIcon
                      sx={{
                        fontSize: 18,
                        transition: "transform 0.2s ease",
                        transform: languageOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  }
                >
                  {currentLanguage.label}
                </Button>

                {/* Dropdown */}
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: "100%",
                    mt: 1,
                    minWidth: 160,
                    bgcolor: "background.paper",
                    boxShadow: 4,
                    borderRadius: 2,
                    overflow: "hidden",
                    opacity: languageOpen ? 1 : 0,
                    transform: languageOpen
                      ? "translateY(0)"
                      : "translateY(6px)",
                    pointerEvents: languageOpen ? "auto" : "none",
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                    zIndex: 1500,
                  }}
                >
                  {languages.map((lang) => {
                    const isCurrent =
                      i18n.language && i18n.language.startsWith(lang.code);
                    return (
                      <Button
                        key={lang.code}
                        onClick={() => handleSelectLanguage(lang.code)}
                        fullWidth
                        sx={{
                          justifyContent: "flex-start",
                          textTransform: "none",
                          borderRadius: 0,
                          px: 1.5,
                          py: 0.75,
                          gap: 1,
                          color: isCurrent
                            ? "primary.contrastText"
                            : "text.primary",
                          backgroundColor: isCurrent
                            ? "primary.main"
                            : "transparent",
                          "&:hover": {
                            backgroundColor: isCurrent
                              ? "primary.dark"
                              : "action.hover",
                          },
                        }}
                        startIcon={
                          <Flag
                            code={lang.flag}
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                              objectFit: "cover",
                            }}
                          />
                        }
                      >
                        {lang.label}
                      </Button>
                    );
                  })}
                </Box>
              </Box>

              {/* Theme toggle */}
              <IconButton
                sx={{
                  color: "inherit",
                  borderRadius: "999px",
                  transition:
                    "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    backgroundColor: "action.hover",
                    transform: "translateY(-1px)",
                    boxShadow: 2,
                  },
                }}
                onClick={onSwitchTheme}
              >
                {themeMode === themeModes.dark && <DarkModeOutlinedIcon />}
                {themeMode === themeModes.light && <WbSunnyOutlinedIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ScrollAppBar>
    </>
  );
};

export default Topbar;
