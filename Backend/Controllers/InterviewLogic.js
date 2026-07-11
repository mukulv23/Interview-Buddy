import interviewModel from "../Models/InterviewModel.js";
import { generateQuestions } from "../services/aiService.js";

export const StartInterview = async (req, res, next) => {
    const { role, round, level, numQuestions } = req.body;

    try {
        if (!role || !round || !level || !numQuestions)
            return res.status(400).json({
                success: false,
                message: "Please provide proper details"
            })

        const questions = await generateQuestions({ role, round, level, numQuestions })

        if (!questions) {
            return res.status(500).json({
                success: false,
                message: "Failed to generate questions",
            });
        }

        const qna = questions.map((question) => ({
            question,
            userAnswer: ""
        }));

        const savedData = await interviewModel.create({
            role,
            round,
            level,
            numQuestions,
            user: req.user._id,
            qna
        });

        if (!savedData)
            return res.status(500).json({
                success: false,
                message: "Some Error Occured"
            })

        return res.status(201).json({
            success: true,
            message: "Ai has responded and generated questions",
            questions,
            savedData
        })
    } catch (error) {
        next(error)
    }
}

export const getQuestions = async (req, res, next) => {
    try {
        const id = req.params.id;

        const data = await interviewModel.findById(id);
        if (!data) {
            res.status(200).json({
                success: true,
                message: "No Interview Found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Got Ai generated questions",
            data
        })

    } catch (error) {
        next(error)
    }
}