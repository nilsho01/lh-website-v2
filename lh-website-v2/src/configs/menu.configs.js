import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import GroupsIcon from "@mui/icons-material/Groups";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InfoIcon from "@mui/icons-material/Info";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

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
      icon: CalendarMonthIcon,
      state: "company",
      children: [
        {
          display: t("buttons.flexibility"),
          path: "/company/flexibility",
          icon: GroupsIcon,
          state: "flexibility",
        },
        {
          display: t("buttons.specializations"),
          path: "/company/specializations",
          icon: GroupsIcon,
          state: "specializations",
        },
        {
            display: t("buttons.internationality"),
            path: "/company/internationality",
            icon: GroupsIcon,
            state: "internationality",
        }
      ]
    },
    {
      display: t("buttons.automobile"),
      path: "/automobile",
      icon: BookOnlineIcon,
      state: "automobile",
      children: [
        {
          display: t("buttons.performance"),
          path: "/automobile/performance",
            icon: GroupsIcon,
            state: "performance",
        },
        {
          display: t("buttons.customers"),
          path: "/automobile/customers",
          icon: GroupsIcon,
          state: "customers",
        },
        {
            display: t("buttons.methods"),
            path: "/automobile/methods",
            icon: GroupsIcon,
            state: "methods",
        },
        {
            display: t("buttons.car_clinics"),
            path: "/automobile/car-clinics",
            icon: GroupsIcon,
            state: "car-clinics",
        }
       ]
    },
    {
      display: t("buttons.customersatisfaction"),
      path: "/customersatisfaction",
      icon: InfoIcon,
      state: "customersatisfaction",
    },
    {
      display: t("buttons.finanzmarket"),
      path: "/finanzmarket",
      icon: SearchOutlinedIcon,
      state: "finanzmarket",
      children: [
        {
          display: t("buttons.online_surveys"),
          path: "/finanzmarket/online-surveys",
          icon: GroupsIcon,
          state: "online-surveys",
        },
        {
          display: t("buttons.reportingsystem"),
          path: "/finanzmarket/reporting-system",
          icon: GroupsIcon,
          state: "reporting-system",
        }
      ]
    },
    {
      display: t("buttons.team"),
      path: "/team",
      icon: AddCircleIcon,
      state: "team",
    },
  ];

  const user = [
    {
      display: t("buttons.favorites"),
      path: "/favorites",
      icon: FavoriteBorderOutlinedIcon,
      state: "favorites",
    },
    {
      display: t("buttons.suggestions"),
      path: "/suggestions",
      icon: RateReviewOutlinedIcon,
      state: "suggestions",
    },
    {
      display: t("buttons.ownSuggestions"),
      path: "/own-suggestions",
      icon: AddCircleIcon,
      state: "own-suggestions",
    },
    {
      display: t("buttons.passwordUpdate"),
      path: "/password-update",
      icon: LockResetOutlinedIcon,
      state: "password-update",
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

  return { main, user, footer, social };
};

export default getMenuConfigs;
