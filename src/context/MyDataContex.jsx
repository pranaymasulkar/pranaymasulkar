// MyDataContex.jsx
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";
import data from "../utils/mydata";
import Loadder from "../components/common/Loadder";
import { useMemo } from "react";

export const myDataContex = createContext(null);

const MyDataContex = (props) => {
    const [mydata, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const values = useMemo(() => ({
        mydata,

    }), [mydata]);

    useEffect(() => {
        setLoading(true); // show loader on every route change
        const timer = setTimeout(() => {
            setMyData(data);
            setLoading(false);
        }, 1500); // same duration as loader

        return () => clearTimeout(timer);
    }, [location.pathname]); // runs every time the route changes

    return (
        <myDataContex.Provider value={values}>
            {loading ? <Loadder duration={2} /> : props.children}
        </myDataContex.Provider>
    );
};

export default MyDataContex;
