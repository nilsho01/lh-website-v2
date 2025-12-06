import HomePage from "../pages/HomePage";
import DataProtection from "../pages/DataProtection";
import PageNotFound from "../pages/PageNotFound";
import DirectionsPage from "../pages/DirectionsPage";
import ImprintPage from "../pages/ImprintPage";
import ContactPage from "../pages/ContactPage";
import StatusPage from "../pages/StatusPage";
import JobsPage from "../pages/JobsPage";


export const routesGen = {
    home: "/",
};

const routes = [
    {
        index: true,
        element: <StatusPage />,
        state: "status"
    },
    {
        path: "/home",
        element: <HomePage />,
        state: "home"
    },
    {
        path: "/contact",
        element: <ContactPage />,
        state: "contact"
    },
    {
        path: "data-protection",
        element: <DataProtection />,
        state: "data-protection"
    },
    {
        path: "directions",
        element: <DirectionsPage />,
        state: "directions"
    },
    {
        path: "imprint",
        element: <ImprintPage />,
        state: "imprint"
    },
    {
        path: "/job-career",
        element: <JobsPage />,
        state: "job-career"
    },

    {
        path: "status",
        element: <StatusPage />,
        state: "status"
    },

    {
        path: "*",
        element: <PageNotFound />,
        state: "404"
    },
];

export default routes;