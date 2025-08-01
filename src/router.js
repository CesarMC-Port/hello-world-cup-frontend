import { createBrowserRouter } from "react-router";
import Login from "./containers/login";
import Register from "./containers/register"
import Inicio from "./containers/inicio";
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
                Component: Inicio
            },
        ],
    },
    {
        path: "*",
        Component: OutLayout,
    },
]);