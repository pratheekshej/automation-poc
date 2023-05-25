/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { currentUserData } from 'src/redux/user/user.selectors';

const GuardedRoute = ({ children }) => {
    const currentUser = useSelector(currentUserData);
    let location = useLocation();

    if (!currentUser) {
        return (
            <Navigate to="/login" state={{ from: location }} replace />
        );
    }
    return children;
};

export default GuardedRoute;