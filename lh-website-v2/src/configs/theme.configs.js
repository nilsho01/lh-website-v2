import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light",
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette =
      mode === themeModes.dark
        ? {
            primary: {
              main: "#94959a",
              contrastText: "#ffffffff",
            },
            secondary: {
              main: "#5564b5",
              contrastText: "#ffffffff",
            },
            background: {
              default: "#000000ff",
              paper: "#1c1c1eff",
            },
          }
        : {
            primary: {
              main: "#5564b5",
            },
            secondary: {
              main: "#e04949ff",
            },
            background: {
              default: colors.grey["100"],
            },
          };

    return createTheme({
      palette: {
        mode,
        ...customPalette,
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
        },
      },
    });
  },
};

export default themeConfigs;
