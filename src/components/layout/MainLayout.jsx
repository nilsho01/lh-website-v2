import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Footer from "../common/Footer";
import GlobalLoading from "../common/GlobalLoading";
import Topbar from "../common/Topbar";

const MainLayout = () => {
    return(
        <>
            <GlobalLoading />

            <Box sx={{ display: "flex", minHeight: "100vh" }}>
                <Topbar />

                <Box
                    component="main"
                    sx={{ flexGrow: 1, minWidth: 0, minHeight: "100vh" }}
                >
                    <Outlet />
                </Box>
            </Box>

            <Footer />
        </>
    )
};

export default MainLayout;