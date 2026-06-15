import { otpModel } from "../Models/OtpModel.js";
import userModel from "../Models/UserModel.js";
import bcrypt from 'bcrypt';
import { sendOtp } from "../Utils/SendMail.js";
import jwt from 'jsonwebtoken'

export const GenerateOtp = async (req, res, next) => {

    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        })
    }

    try {

        const match = await userModel.findOne({
            $or: [
                { email },
                { username }
            ]
        });
        /*
            I was checking (by email) if user already exists, then i had to return user
            already exists ASAP.
            But there is a scenario that if user entered diff email and same username,
            then the flow will lead to sending otp and try to register the New user By
            same username. 
            Which is a huge bug. But my schema has username (unique:true)
            So it will stop it at the last stage BY Mongo db. But its a waste of resources.
            So now i am updating the match, will be checking userexists by username as well.
        */

        if (match) {
            return res.status(409).json({
                success: false,
                message: "User already Registerd."
            })
        }

        await otpModel.findOneAndDelete({ email });

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await otpModel.create({
            email, otp, userData: {
                name, email, username, password: hashedPassword
            }
        })

        const sent = await sendOtp(email, otp, "Interview-Buddy Registration");

        if (!sent)
            return res.status(500).json({
                success: false,
                message: "Sending otp failed."
            })

        return res.status(200).json({
            success: true,
            message: "Otp sent"
        })

    } catch (error) {
        next(error);
    }
}

export const RegisterUser = async (req, res, next) => {
    const { email, otp } = req.body;

    if (!email || !otp)
        return res.status(400).json({
            success: false,
            message: "Please Enter the Otp"
        })

    try {
        const OtpData = await otpModel.findOne({ email, otp });
        if (!OtpData)
            return res.status(400).json({
                success: false,
                message: "Invalid Otp"
            })

        const user = OtpData.userData;
        const registerd = await userModel.create(user);
        if (!registerd)
            return res.status(400).json({
                success: false,
                message: "Error in Registration"
            })

        await otpModel.deleteOne({ email });

        return res.status(201).json({
            success: true,
            message: "User registered"
        })
    }
    catch (error) {
        next(error);
    }
}

export const LoginUser = async (req, res, next) => {

    const { identifier, password } = req.body;

    if (!identifier || !password)
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })

    try {
        const userExist = await userModel.findOne({
            $or: [
                { email: identifier },
                { username: identifier }
            ]
        })

        if (!userExist)
            return res.status(404).json({
                success: false,
                message: "User does'nt exist, Please Register"
            })

        const match = await bcrypt.compare(password, userExist.password)
        if (!match)
            return res.status(400).json({
                success: false,
                message: "Wrong Password"
            })

        const token = jwt.sign(
            { _id: userExist._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: "User logged in"
        })

    } catch (error) {
        next(error);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const data = req.user;
        if (!data)
            res.status(400).json({
                success: false,
                message: "Some Error Occured"
            })
        res.status(200).json({
            success: true,
            message: "Logged User data received",
            data
        })
    } catch (error) {
        next(error);
    }
}