import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildBundlePrompt } from './promptBuilder';

// FIX: Switch to Flash model (Higher rate limits, lower latency)
const MODEL_NAME = 'gemini-2.5-flash';

const parseGeminiResponse = (text) => {
  try {
    const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanedText);
  } catch (error) {
    throw new Error('AI response was not valid JSON: ' + text.substring(0, 50) + '...');
  }
};

export const generateBundle = async (goal, budget) => {
  // 1. Validation
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('MISSING_KEY: VITE_GEMINI_API_KEY is not in .env.local');
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const prompt = buildBundlePrompt(goal, budget);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) throw new Error('EMPTY_RESPONSE: AI returned no text.');

    return parseGeminiResponse(text);

  } catch (error) {
    // Transparent error logging
    const rawMessage = error.message || 'Unknown Error';
    const displayMessage = rawMessage
      .replace('[GoogleGenerativeAI Error]:', '')
      .replace('Error:', '')
      .trim();

    throw new Error(displayMessage);
  }
};
