import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

function cleanJson(text) {
  return text.replace(/```json/gi, "").replace(/```/g, "").trim();
}

export const generateQuestions = async ({ role, round, level, numQuestions }) => {
  const prompt = `You are an expert interviewer. Generate exactly ${numQuestions} interview questions for:
- Job Role: ${role}
- Interview Type: ${round}
- Difficulty Level: ${level}

Return ONLY a valid JSON array of strings, no markdown, no preamble.
Example: ["Question 1", "Question 2"]`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  });

  const raw = cleanJson(response.text);
  const questions = JSON.parse(raw);

  if (!Array.isArray(questions)) throw new Error("AI response was not an array");
  return questions;
};