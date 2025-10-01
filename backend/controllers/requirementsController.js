import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyB5-SJAEo_LjHbGwWi_tCsxC1mGYuudzuA"
});

export const getRequirements = async (req, res) => {
  try {
    const { description } = req.body;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ text: `Generate software requirements for: ${description}` }]
    });
    res.json({ requirements: response.text });
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ error: "Failed to generate requirements.", details: error.message });
  }
};