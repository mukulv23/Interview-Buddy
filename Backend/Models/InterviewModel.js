import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        role: {
            type: String,
            enum: ["Frontend Developer", "Backend Developer", "Data Analyst"],
            required: true,
        },

        round: {
            type: String,
            enum: ["Technical Round", "HR Round", "Coding Round"],
            required: true,
        },

        level: {
            type: String,
            enum: ["Easy", "Medium", "Hard"],
            required: true,
        },

        status: {
            type: String,
            enum: ["in_progress", "completed"],
            default: "in_progress",
        },

        numQuestions: {
            type: Number,
            min: 1,
            max: 20,
            required: true,
        },

        durationInMin: {
            type: Number,
            default: 300,
        },

        score: {
            type: Number,
            min: 0,
            max: 10,
            default: null,
        },

        qna: [
            {
                question: {
                    type: String,
                    trim: true
                },
                userAnswer: {
                    type: String,
                    trim: true
                }
            }
        ],

        feedback: {
            type: String,
            default: null
        },

        startedAt: {
            type: Date,
            default: null
        },

        completedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

const interviewModel = mongoose.model("Interview", interviewSchema);

export default interviewModel;