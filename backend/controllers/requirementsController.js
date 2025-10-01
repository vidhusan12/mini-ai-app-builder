import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyB5-SJAEo_LjHbGwWi_tCsxC1mGYuudzuA"
});

export const getRequirements = async (req, res) => {
  try {
    const { description } = req.body;
    // Use a prompt that directs Gemini to ONLY return the code!
    const prompt = `Write only the complete React JSX code for this request, with no explanation: ${description}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ text: prompt }]
    });
    // Send the code back to the frontend
    res.json({ generatedCode: response.text });
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ error: "Failed to generate code.", details: error.message });
  }
};