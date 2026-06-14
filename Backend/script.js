import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import cookieParser from 'cookie-parser'

import connection from './config/DbConnect.js' /* DataBase Connection */

import AuthRoutes from './Routes/AuthRoutes.js'
const app = express()

app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json())
app.use(cookieParser())

// Making Routes
app.use("/api/auth", AuthRoutes);

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log("Server Started");
    connection()
})