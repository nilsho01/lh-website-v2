import { Paper, Box, LinearProgress, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo";

const GlobalLoading = () => {
    const { globalLoading } = useSelector((state) => state.globalLoading);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(globalLoading);
        }, globalLoading ? 0 : 500);

        return () => clearTimeout(timeout);
    }, [globalLoading]);

    return (
        <>
            <Paper sx={{
                    opacity: isLoading ? 1 : 0,
                    pointerEvents: "none",
                    transition: "all .3s ease",
                    position: "fixed",
                    inset: 0,
                    width: "100%",
                    height: "100dvh",
                    zIndex: 999
                }}
            >
                <Toolbar />
                <LinearProgress />
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)s"
                }}>
                    <Logo disableLink />
                </Box>
            </Paper>
        </>
    )
};

export default GlobalLoading;