import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["Frontend Developer", "Backend Developer", "Data Analyst"],
        required: true
    },
    round: {
        type: String,
        enum: ["Technical Round", "Hr Round", "Coding Round"],
        required: true
    },
    qna: [
        {
            question: {
                type: String,
                required: true,
                trim: true,
            },

            answer: {
                type: String,
                required: true,
                trim: true,
            },
        },
    ],
    level: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        required: true
    }
})

const questionModel = mongoose.model("questions", questionSchema);

export default questionModel;