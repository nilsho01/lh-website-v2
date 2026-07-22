import { createSlice } from "@reduxjs/toolkit";

const getInitialThemeMode = () => {
    if (typeof window === "undefined") return "dark";

    const stored = localStorage.getItem("themeMode");
    if (stored === "dark" || stored === "light") return stored;

    // No manual choice yet: follow the browser/OS colour-scheme setting.
    const prefersLight = window.matchMedia?.(
        "(prefers-color-scheme: light)"
    ).matches;
    return prefersLight ? "light" : "dark";
};

export const themeModeSlice = createSlice({
    name: "ThemeMode",
    initialState: {
        themeMode: getInitialThemeMode()
    },
    reducers: {
        setThemeMode: (state, action) => {
            state.themeMode = action.payload;
            localStorage.setItem("themeMode", action.payload);
        }
    }
});

export const {
    setThemeMode
} = themeModeSlice.actions;

export default themeModeSlice.reducer;