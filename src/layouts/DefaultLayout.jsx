import { useCallback, useState, useEffect } from "react"
import { Outlet, Navigate, useLocation } from "react-router"
import { axiosQuery } from "../utils/axios";
import { Spin } from "antd";

export const DefaultLayout = () => {
    const location = useLocation();
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    const verify = useCallback(async () => {
        try {
            await axiosQuery.get('/user');
            setLogged(true);
        } catch (error) {
            setLogged(false);
        } finally {
            setLoading(false);
        }
    },[])

    useEffect(() => {
        verify()
    },[])

    if (loading) {
        return (
            <div className="d-flex w-full h-[100vh] flex justify-center items-center">
                <Spin />
            </div>
        );
    }

    const isPublicPath = location.pathname === "/login" || location.pathname === "/register";

    if (logged && isPublicPath) {
        return <Navigate to="/dashboard" replace />;
    }

    if (!logged && !isPublicPath) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
