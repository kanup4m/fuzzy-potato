import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
    const [admin, setAdmin] = useState()

    setTimeout(function () {
        let data = JSON.parse(localStorage.getItem('isAdmin'));
        setAdmin(data)
    }, 50);


    if (admin == false) {
        // user is not admin
        return <Navigate replace to="/" />;
    }

    return children;
};

export default AdminProtected;
