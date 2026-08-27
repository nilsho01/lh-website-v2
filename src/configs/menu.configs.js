import HomeOutlinedIcon from "@mui/icons-material/HomeMaxOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SavingsIcon from "@mui/icons-material/Savings";
import ArticleIcon from "@mui/icons-material/Article";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const getMenuConfigs = (t) => {
    const main = [
        {
            display: t("buttons.home"),
            path: "/",
            icon: HomeOutlinedIcon,
            state: "home",
        },
        {
            display: t("buttons.automobile.main"),
            path: "/automobile",
            icon: DirectionsCarIcon,
            state: "automobile",
            children: [
                {
                    display: t("buttons.automobile.how-we-work"),
                    path: "/automobile#how-we-work",
                    state: "automobile_how-we-work"
                },
                {
                    display: t("buttons.automobile.who-we-work-for"),
                    path: "/automobile#who-we-work-for",
                    state: "automobile_who-we-work-for"
                },
                {
                    display: t("buttons.automobile.methods-consulting"),
                    path: "/automobile#methods-consulting",
                    state: "automobile_methods-consulting"
                },
                {
                    display: t("buttons.automobile.car-clinics"),
                    path: "/automobile#car-clinics",
                    state: "automobile_car-clinics"
                }
            ]
        },
        {
            display: t("buttons.customer-satisfaction"),
            path: "/customer-satisfaction",
            icon: PermContactCalendarIcon,
            state: "customer-satisfaction"
        },
        {
            display: t("buttons.financial-markets.main"),
            path: "/financial-markets",
            icon: SavingsIcon,
            state: "financial-markets",
            children: [
                {
                    display: t("buttons.financial-markets.online-surveys"),
                    path: "/financial-markets#online-surveys",
                    state: "financial-markets_online-surveys"
                },
                {
                    display: t("buttons.financial-markets.reporting-systems"),
                    path: "/financial-markets#reporting-systems",
                    state: "financial-markets_reporting-systems"
                },
            ]
        },
        {
            display: t("buttons.contact"),
            path: "/contact",
            icon: ArticleIcon,
            state: "contact"
        }
    ];

    const footer = [
        {
            display: t("buttons.contact"),
            path: "/contact",
            state: "contact",
        },
        {
            display: t("buttons.imprint"),
            path: "/imprint",
            state: "imprint",
        },
        {
            display: t("buttons.data-protection"),
            path: "/data-protection",
            state: "data-protection",
        },
        {
            display: t("buttons.directions"),
            path: "/directions",
            state: "directions",
        },
        {
            display: t("buttons.job_career"),
            path: "/job-career",
            state: "job-career",
        },
  ];

    const socials = [
        {
            icon: LinkedInIcon,
            directTo: "https://de.linkedin.com/company/l-h"
        }
    ];

    return { main, footer, socials };
};

export default getMenuConfigs;