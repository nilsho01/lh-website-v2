import { createTheme, responsiveFontSizes } from "@mui/material/styles";
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

    // responsiveFontSizes skaliert die Ueberschriften auf kleinen Viewports
    // herunter. Ohne das bleibt h3 auch auf einem 360px-Display bei 48px -
    // lange deutsche Komposita ("Datenschutzerklaerung") sprengen dann die
    // Zeile und weiten ueber die min-content-Breite das ganze Layout.
    return responsiveFontSizes(
      createTheme({
        palette: {
          mode,
          ...customPalette,
        },
        components: {
          MuiButton: {
            defaultProps: { disableElevation: true },
          },
          MuiCssBaseline: {
            styleOverrides: {
              // Lange Komposita duerfen umbrechen, statt den Container zu
              // weiten. "anywhere" statt "break-word", weil nur ersteres in
              // die min-content-Breite eingeht - und genau die laesst ein
              // Flex-Kind sonst nicht unter die Wortbreite schrumpfen.
              // Bewusst ohne hyphens: auto, das zerlegt sonst auch dort
              // Woerter, wo die Zeile noch reicht.
              "h1, h2, h3, h4, h5, h6": {
                overflowWrap: "anywhere",
              },
            },
          },
        },
      })
    );
  },
};

export default themeConfigs;
