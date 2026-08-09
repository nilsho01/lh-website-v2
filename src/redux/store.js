import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from "./features/themeModeSlice";
import globalLoadingReducer from "./features/globalLoadingSlice";
import appStateReducer from "./features/appStateSlice";

const store = configureStore({
    reducer: {
        themeMode: themeModeReducer,
        globalLoading: globalLoadingReducer,
        appState: appStateReducer,
    }
});

export default store;