import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import GroupsIcon from "@mui/icons-material/Groups";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ApartmentIcon from '@mui/icons-material/Apartment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SavingsIcon from '@mui/icons-material/Savings';

const getMenuConfigs = (t) => {
  const main = [
    {
      display: t("buttons.home"),
      path: "/",
      icon: HomeOutlinedIcon,
      state: "home",
    },
    {
      display: t("buttons.company"),
      path: "/company",
      icon: ApartmentIcon,
      state: "company",
      children: [
        {
          display: t("buttons.flexibility"),
          path: "/company/flexibility",
          state: "flexibility",
        },
        {
          display: t("buttons.specialisation"),
          path: "/company/specializations",
          state: "specializations",
        },
        {
            display: t("buttons.internationality"),
            path: "/company/internationality",
            state: "internationality",
        }
      ]
    },
    {
      display: t("buttons.automobile"),
      path: "/automobile",
      icon: DirectionsCarIcon,
      state: "automobile",
      children: [
        {
          display: t("buttons.performance"),
          path: "/automobile/performance",
          state: "performance",
        },
        {
          display: t("buttons.customers"),
          path: "/automobile/customers",
          state: "customers",
        },
        {
            display: t("buttons.methods"),
            path: "/automobile/methods",
            state: "methods",
        },
        {
            display: t("buttons.car_clinics"),
            path: "/automobile/car-clinics",
            state: "car-clinics"  ,
        }
       ]
    },
    {
      display: t("buttons.customersatisfaction"),
      path: "/customer-satisfaction",
      icon: PermContactCalendarIcon,
      state: "customer-satisfaction",
    },
    {
      display: t("buttons.finanzmarket"),
      path: "/finanzmarket",
      icon: SavingsIcon,
      state: "finanzmarket",
      children: [
        {
          display: t("buttons.online_surveys"),
          path: "/finanzmarket/online-surveys",
          state: "online-surveys",
        },
        {
          display: t("buttons.reportingsystem"),
          path: "/finanzmarket/reporting-system",
          state: "reporting-system",
        }
      ]
    },
    {
      display: t("buttons.team"),
      path: "/team",
      icon: GroupsIcon,
      state: "team",
    },
  ];

  const footer = [
    {
      display: t("buttons.contact"),
      path: "/contact",
      icon: ArticleIcon,
      state: "contact",
    },
    {
      display: t("buttons.imprint"),
      path: "/imprint",
      icon: ArticleIcon,
      state: "imprint",
    },
    {
      display: t("buttons.data_protection"),
      path: "/data-protection",
      icon: HistoryEduIcon,
      state: "data-protection",
    },
    {
      display: t("buttons.directions"),
      path: "/directions",
      icon: AlternateEmailIcon,
      state: "directions",
    },
    {
      display: t("buttons.job_career"),
      path: "/job-career",
      icon: CloudDownloadIcon,
      state: "job-career",
    },
  ];

  const social = [
    {
      icon: InstagramIcon,
      directTo: "https://www.instagram.com/",
    },
    {
      icon: FacebookIcon,
      directTo: "https://www.facebook.com/",
    },
  ];

  return { main, footer, social };
};

export default getMenuConfigs;
