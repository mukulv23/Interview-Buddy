import interviewModel from "../Models/InterviewModel.js";

export const StartInterview = async (req, res, next) => {
    const { role, round, level, numQuestions } = req.body;

    try {
        if (!role || !round || !level || !numQuestions)
            return res.status(400).json({
                success: false,
                message: "Please provide proper details"
            })
        const savedData = await interviewModel.create({ role, round, level, numQuestions, user: req.user._id });
        return res.status(201).json({
            success: true,
            message: "added"
        })
    } catch (error) {
        next(error)
    }
}