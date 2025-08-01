import { createBrowserRouter } from "react-router";
import Login from "./containers/login";
import Register from "./containers/register"
import { AuthLayout } from "./layouts/AuthLayout";

export const router = createBrowserRouter([
    { 
        path: "/", 
        Component: AuthLayout, 
        children: [
            { 
                path: "login", 
                Component: Login
            },
            {
                path: "register", 
                Component: Register
            },
        ],
    },
]);