import HomePage from "../pages/HomePage";
import DataProtection from "../pages/DataProtection";
import PageNotFound from "../pages/PageNotFound";
import DirectionsPage from "../pages/DirectionsPage";
import ImprintPage from "../pages/ImprintPage";
import ContactPage from "../pages/ContactPage";
import StatusPage from "../pages/StatusPage";
import JobsPage from "../pages/JobsPage";
import TeamPage from "../pages/TeamPage";
import CustomerSatisfactionPage from "../pages/CustomerSatisfactionPage.jsx";
import FinancialMarketPage from "../pages/FinancialMarketPage";
import CompanyPage from "../pages/CompanyPage";
import AutomobilePage from "../pages/AutomobilePage";
import OnlineSurveysPage from "../pages/OnlineSurveysPage";
import ReportingSystemPage from "../pages/ReportingSystemPage";


export const routesGen = {
    home: "/",
};

const routes = [
    // index
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },

    // TopBar
    {
        path: "/company",
        element: <CompanyPage />,
        state: "company"
    },
    {
        path: "/company/flexibility",
        element: <CompanyPage section="flexibility" state="flexibility" />,
        state: "flexibility"
    },
    {
        path: "/company/specializations",
        element: <CompanyPage section="specializations" state="specializations" />,
        state: "specializations"
    },
    {
        path: "/company/internationality",
        element: <CompanyPage section="internationality" state="internationality" />,
        state: "internationality"
    },
    {
        path: "/automobile",
        element: <AutomobilePage />,
        state: "automobile"
    },
    {
        path: "/automobile/performance",
        element: <AutomobilePage section="performance" state="performance" />,
        state: "performance"
    },
    {
        path: "/automobile/customers",
        element: <AutomobilePage section="customers" state="customers" />,
        state: "customers"
    },
    {
        path: "/automobile/methods",
        element: <AutomobilePage section="methods" state="methods" />,
        state: "methods"
    },
    {
        path: "/automobile/car-clinics",
        element: <AutomobilePage section="car-clinics" state="car-clinics" />,
        state: "car-clinics"
    },
    {
        path: "/automobile/conclusion",
        element: <AutomobilePage section="conclusion" state="conclusion" />,
        state: "conclusion"
    },
    {
        path: "/customer-satisfaction",
        element: <CustomerSatisfactionPage />,
        state: "customer-satisfaction"
    },
    {
        path: "/finanzmarket",
        element: <FinancialMarketPage />,
        state: "finanzmarket"
    },
    {
        path: "/finanzmarket/online-surveys",
        element: <OnlineSurveysPage />,
        state: "online-surveys"
    },
    {
        path: "/finanzmarket/reporting-system",
        element: <ReportingSystemPage />,
        state: "reporting-system"
    },
    {
        path: "/team",
        element: <TeamPage />,
        state: "team"
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


    // Extra redirects
    {
        path: "/status",
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