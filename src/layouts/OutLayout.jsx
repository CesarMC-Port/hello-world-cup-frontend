import { useCallback, useState, useEffect } from "react"
import { Navigate } from "react-router"
import { axiosQuery } from "../utils/axios";
import { Spin } from "antd";

export const OutLayout = () => {
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    const verify = useCallback(async () => {
        try {
            await axiosQuery.get('/user');
            setLogged(true)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            throw error.response ? error.response.data : new Error('Network Error');
        } finally {
            setLoading(false)
        }
    },[])

    useEffect(() => { verify() },[])

    if (loading) {
        return <div className="d-flex w-full h-[100vh] flex justify-center items-center">
            <Spin />
        </div>
    }

    return logged ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />;
} 