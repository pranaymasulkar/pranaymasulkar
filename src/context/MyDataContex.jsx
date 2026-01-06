"use client";
import React, { useEffect, useState, createContext, useMemo } from "react";
import { usePathname } from "next/navigation"; // ✅ Next.js version of useLocation
import data from "../utils/mydata";
import Loader from "@/layout/Loader";

export const myDataContex = createContext(null);

const MyDataContex = ({ children }) => {
    const [mydata, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(true);
    const pathname = usePathname();

    // fetch data once
    useEffect(() => {
        setTimeout(() => {
            setMyData(data);
            setLoading(false);
        }, 1500);
    }, []);

    // show loader on every route change
    useEffect(() => {
        setShowLoader(true);
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, [pathname]);

    const values = useMemo(() => ({ mydata, setMyData }), [mydata]);

    if (loading) return <Loader />;

    return (
        <myDataContex.Provider value={values}>
            {showLoader ? <Loader /> : children}
        </myDataContex.Provider>
    );
};

export default MyDataContex;