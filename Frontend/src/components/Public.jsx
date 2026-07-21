import React from 'react'
import { Auth } from '../contexts/AuthContext.jsx'
import { Navigate } from 'react-router-dom';

export const Public = ({ children }) => {
    const { user, loading } = Auth();
    if (loading)
        return <p>loading...</p>
    if (user) {
        alert("User Already Logged in");
        return <Navigate to='/' replace />
    }
    return children;
}
