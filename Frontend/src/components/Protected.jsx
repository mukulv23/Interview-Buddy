import React from 'react'
import { Auth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

export const Protected = ({ children }) => {
    const { user, loading } = Auth();

    if (loading)
        return <p>loading...</p>
    if (!user)
        return <Navigate to='/login' replace />
    return children;
}
