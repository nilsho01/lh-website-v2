import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";


export const routesGen = {
    home: "/",
};

const routes = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },
    {
        path: "*",
        element: <PageNotFound />,
        state: "404"
    },
];

export default routes;