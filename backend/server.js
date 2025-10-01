require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/requirements', async (req, res) => {
  const { description } = req.body;

  try {
    // Prompt Gemini for requirements extraction and UI code
    const prompt = `
You are an app requirements extraction assistant.
Given this description: "${description}"
Extract these:
- App Name
- Entities (list, e.g. Student, Course, Grade)
- Roles (list, e.g. Teacher, Student, Admin)
- Features (list, e.g. Add course, Enrol students, View reports)
Then, generate a simple React JSX mockup (just the UI code, no imports or comments) that matches the requirements.
Reply in this JSON format:
{
  "appName": "...",
  "entities": [...],
  "roles": [...],
  "features": [...],
  "generatedCode": "..."
}
`;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    // Try to parse the JSON returned by Gemini
    let requirements = {};
    try {
      requirements = JSON.parse(response);
    } catch (err) {
      // Fallback: Try to extract only the generatedCode or send error
      return res.status(500).json({ error: "Failed to parse Gemini response.", raw: response });
    }

    res.json(requirements);
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ error: "Gemini API call failed." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));