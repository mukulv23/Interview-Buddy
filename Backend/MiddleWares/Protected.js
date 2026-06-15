import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import userModel from '../Models/UserModel.js';
dotenv.config();

export const Protected = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token)
            return res.status(401).json({
                success: false,
                message: "Please login first"
            })
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded._id).select("-password");

        if (!user)
            return res.status(404).json({
                success: false,
                message: "User not found"
            })

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}