import AutomobilePage from "../pages/AutomobilePage";
import ContactPage from "../pages/ContactPage";
import CustomerSatisfactionPage from "../pages/CustomerSatisfactionPage";
import DataProtection from "../pages/DataProtection";
import DirectionsPage from "../pages/DirectionsPage";
import FinancialMarketPage from "../pages/FinancialMarketPage";
import HomePage from "../pages/HomePage";
import ImprintPage from "../pages/ImprintPage";
import JobsPage from "../pages/JobsPage";
import PageNotFound from "../pages/PageNotFound";

export const routesGen = {
    home: "/"
};

const routes = [
    // index
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },

    {
        path: "/automobile",
        element: <AutomobilePage />,
        state: "automobile"
    },
    {
        path: "/contact",
        element: <ContactPage />,
        state: "contact"
    },
    {
        path: "/imprint",
        element: <ImprintPage />,
        state: "imprint"
    },
    {
        path: "/data-protection",
        element: <DataProtection />,
        state: "data-protection"
    },
    {
        path: "/directions",
        element: <DirectionsPage />,
        state: "directions"
    },
    {
        path: "/job-career",
        element: <JobsPage />,
        state: "job-career"
    },
    {
        path: "/customer-satisfaction",
        element: <CustomerSatisfactionPage />,
        state: "customer-satisfaction"
    },
    {
        path: "/financial-markets",
        element: <FinancialMarketPage />,
        state: "financial-markets"
    },

    {
        path: "*",
        element: <PageNotFound />,
        state: "404"
    },
];

export default routes;