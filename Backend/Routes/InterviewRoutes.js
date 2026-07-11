import express from 'express'
import {
    getQuestions,
    StartInterview
} from '../Controllers/InterviewLogic.js';

import { Protected } from '../MiddleWares/Protected.js';

const router = express.Router()

router.post("/start-interview", Protected, StartInterview);
router.get("/get-questions/:id", getQuestions)

export default router;