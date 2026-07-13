import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const sendOtp = async (email, otp, title) => {
  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: process.env.SENDER_NAME,
          email: process.env.SENDER_EMAIL,
        },
        to: [{ email }],
        subject: title,
        htmlContent: `
          <div style="font-family:Arial;padding:20px;text-align:center;">
            <h2>${title}</h2>
            <p>Your OTP is:</p>
            <h1 style="color:#8e51ff;letter-spacing:5px">${otp}</h1>
            <p>This OTP is valid for 5 minutes.</p>
          </div>
        `,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    return true;
  } catch (error) {
    console.error(
      error.response?.data || error.message
    );
    return false;
  }
};