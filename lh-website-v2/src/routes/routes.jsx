import HomePage from "../pages/HomePage";
import DataProtection from "../pages/DataProtection";
import PageNotFound from "../pages/PageNotFound";
import DirectionsPage from "../pages/DirectionsPage";
import ImprintPage from "../pages/ImprintPage";
import ContactPage from "../pages/ContactPage";
import StatusPage from "../pages/StatusPage";
import JobsPage from "../pages/JobsPage";
import TeamPage from "../pages/TeamPage";
import FinancialMarketPage from "../pages/FinancialMarketPage";


export const routesGen = {
    home: "/",
};

const routes = [
    // index
    {
        index: true,
        element: <StatusPage />,
        state: "status"
    },

    // TopBar
    {
        path: "/finanzmarket",
        element: <FinancialMarketPage />,
        state: "finanzmarket"
    },
    {
        path: "/team",
        element: <TeamPage />,
        status: "team"
    },
    {
        path: "/home",
        element: <HomePage />,
        state: "home"
    },

    //Footer
    {
        path: "/contact",
        element: <ContactPage />,
        state: "contact"
    },
    {
        path: "imprint",
        element: <ImprintPage />,
        state: "imprint"
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
        path: "/job-career",
        element: <JobsPage />,
        state: "job-career"
    },


    // Extra redirects
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