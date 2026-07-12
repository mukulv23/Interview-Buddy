import mongoose from 'mongoose'

async function connection() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("DB connected",process.env.DB_URL)
    } catch (error) {
        console.log("MongoDB connection failed:", error)
    }
}

export default connection;