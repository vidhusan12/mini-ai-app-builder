import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./BuildApp.css";
import { GoogleGenAI } from "@google/genai";

const BuildApp = () => {
  const apiKey = process.env.REACT_APP_GEMINI_KEY;
  const ai = new GoogleGenAI({ apiKey });

  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! Ask me anything about AI app building." }
  ]);
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("code");
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash", 
        contents: `Write only the React code for this UI component:\n${input}`,
      });
      const code = response.text;
      setMessages(msgs => [
        ...msgs,
        { role: "ai", text: "Here is your code!" }
      ]);
      setGeneratedCode(code);
    } catch (err) {
      setMessages(msgs => [
        ...msgs,
        { role: "ai", text: "Sorry, something went wrong generating code." }
      ]);
      console.error(err);
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    alert("Code copied!");
  };

  return (
    <div className="build-ai-app-container">
      <Navbar showButton={false} />
      <div className="chat-layout">
        <div className="chatbox">
          <div className="messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.role}`}>{msg.text}</div>
            ))}
          </div>
          <div className="input-row">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={loading ? "Generating code..." : "Type your message..."}
              disabled={loading}
            />
            <button onClick={handleSend} disabled={loading}>
              Send
            </button>
          </div>
        </div>
        <div className="resultbox">
          <div className="result-tabs">
            <button
              className={activeTab === "code" ? "active" : ""}
              onClick={() => setActiveTab("code")}
            >
              Code
            </button>
            <button
              className={activeTab === "preview" ? "active" : ""}
              onClick={() => setActiveTab("preview")}
            >
              Preview
            </button>
            <button onClick={handleCopy}>Copy</button>
          </div>
          <div className="result-content">
            {activeTab === "code" && (
              <pre className="code-block">
                {generatedCode || "Code will appear here."}
              </pre>
            )}
            {activeTab === "preview" && (
              <div
                className="preview-block"
                dangerouslySetInnerHTML={{ __html: generatedCode }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildApp;