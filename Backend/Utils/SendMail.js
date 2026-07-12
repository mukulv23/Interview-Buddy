import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAiL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
})

export const sendOtp = async (email, otp, title) => {
    const mailOptions = {
        from: process.env.USER,
        to: email,
        subject: `${title}`,
        html: `
         <div style="font-family:Arial; padding:20px; text-align:center;">
                <h2 style="color:#333;">${title}</h2>
                <p>Your OTP for ${title} is:</p>

                <div style="font-size:32px; font-weight:bold; color:#2563eb; letter-spacing:5px; margin:20px 0;">
                    ${otp}
                </div>

                <p>This OTP is valid for 5 minutes.</p>
            </div>
            `
    }
    await transporter.sendMail(mailOptions);
    return true;
}