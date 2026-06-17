import { RegisterUser, GenerateOtp, LoginUser, getUser } from "../Controllers/AuthLogic.js";
import express from 'express'
import { Protected } from "../MiddleWares/Protected.js";

const router = express.Router();

router.post("/generate-otp", GenerateOtp);
router.post("/register-user", RegisterUser)
router.post("/login-user", LoginUser);
router.get("/get-user", Protected, getUser)

export default router;