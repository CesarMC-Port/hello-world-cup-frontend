import { createBrowserRouter } from "react-router";
import Login from "./containers/login";
import Register from "./containers/register"
import Dashboard from "./containers/dashboard";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { OutLayout } from "./layouts/OutLayout";

export const router = createBrowserRouter([
    { 
        path: "/", 
        Component: DefaultLayout, 
        children: [
            { 
                path: "login", 
                Component: Login
            },
            {
                path: "register", 
                Component: Register
            },
            {
                path: "dashboard",
                Component: Dashboard
            },
        ],
    },
    {
        path: "*",
        Component: OutLayout,
    },
]);