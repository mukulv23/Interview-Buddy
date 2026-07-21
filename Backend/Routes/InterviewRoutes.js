import express from 'express'
import {
    getQuestions,
    SubmitAnswers,
    StartInterview,
    result
} from '../Controllers/InterviewLogic.js';

import { Protected } from '../MiddleWares/Protected.js';

const router = express.Router()

router.post("/start-interview", Protected, StartInterview);
router.patch("/submit-answers/:id", Protected, SubmitAnswers);
router.get("/get-questions/:id", Protected, getQuestions)
router.get('/result',result)
export default router;