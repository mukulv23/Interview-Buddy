import express from 'express'
import { StartInterview } from '../Controllers/InterviewLogic.js';
import { Protected } from '../MiddleWares/Protected.js';
const router = express.Router()

router.post("/start-interview", Protected, StartInterview);

export default router;