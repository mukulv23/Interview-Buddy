import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 4500;

app.listen(PORT,()=>{
    console.log("Server Started");
})