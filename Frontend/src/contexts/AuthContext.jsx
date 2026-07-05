import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const AuthContext = createContext();

export const ProvideContext = ({ children }) => {
    const API = import.meta.env.VITE_API_URL;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getLoggedUser = async () => {
        try {
            const response = await fetch(`${API}/auth/get-user`, {
                credentials: "include"
            })
            const data = await response.json();
            if (data.success)
                setUser(data.data);
            else
                setUser(null);
        } catch (error) {
            console.log(error.message);
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getLoggedUser();
    }, [])
    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const Auth = () => useContext(AuthContext);