// src/components/common/PageWrapper.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { setAppState } from "../../redux/features/appStateSlice";

const PageWrapper = ({ state, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setAppState(state));
  }, [state, dispatch]);

  return (
    <Box
      sx={{
        // Gilt für *alle* Nachfahren, außer echte Eingabefelder & echte Editor-Komponenten
        "& *:not(input):not(textarea):not([contenteditable='true'])": {
          caretColor: "transparent",
          // Wenn du auch kein Markieren willst, einkommentieren:
          // userSelect: "none",
          // WebkitUserSelect: "none",
          // MozUserSelect: "none",
          // msUserSelect: "none",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
