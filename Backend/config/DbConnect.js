import mongoose from 'mongoose'

async function connection() {
    try {
        console.log("DB connected")
        await mongoose.connect(process.env.DB_URL)
    } catch (error) {
        console.log(error.message)
    }
}

export default connection;