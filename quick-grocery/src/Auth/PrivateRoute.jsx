import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = () => {
    const { loggedIn } = useContext(AuthContext);
    // let auth = true;
    return loggedIn ? <Outlet /> : <Navigate to="/Login" />;
};

export default PrivateRoute;