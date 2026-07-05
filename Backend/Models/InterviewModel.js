import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["Frontend Developer", "Backend Developer", "Data Analyst"],
        default: "Frontend Developer",
        required: true
    },
    round: {
        type: String,
        enum: ["Technical Round", "Hr Round", "Coding Round"],
        default: "Hr Round",
        required: true
    },
    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        default: "Easy",
        required: true
    },
    totalQuestions: {
        type: Number,
        default: 10,
        min: 5,
        max: 20,
        required: true
    },
    questions: {
        type: Object,
        required: true,
        min: 20,
        max: 20,
        required: true
    },
    answers: {
        type: Object,
        required: true,
        min: 20,
        max: 20,
        required: true
    },
    durationInMin: {
        type: Number,
        default: 20
    }
}, { timestamps: true });

const interviewModel = mongoose.model("interviews", interviewSchema);

export default interviewModel;