import React from 'react'
import { Navigate } from 'react-router-dom';

const Protected_route = ({children, user}) => {
    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
}

export default Protected_route
