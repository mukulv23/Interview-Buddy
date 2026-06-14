import { RegisterUser, GenerateOtp, LoginUser } from "../Controllers/AuthLogic.js";
import express from 'express'

const router = express.Router();

router.post("/generate-otp", GenerateOtp);
router.post("/register-user", RegisterUser)
router.post("/login-user", LoginUser);

export default router;