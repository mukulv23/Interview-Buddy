import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import cookieParser from 'cookie-parser'

import connection from './config/DbConnect.js' /* DataBase Connection */

import AuthRoutes from './Routes/AuthRoutes.js'
import interviewRoutes from './Routes/InterviewRoutes.js'
import { ErrorForCatch } from './MiddleWares/Error.js'
const app = express()

app.use(cors({
    origin: [
        "http://localhost:5173/",
        process.env.CLIENT_URL,
    ],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// Making Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/interview", interviewRoutes);

app.use(ErrorForCatch);
connection();

app.listen(process.env.PORT || 4500, () => {
    console.log("Server Started");
})