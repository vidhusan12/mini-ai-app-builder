import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./BuildApp.css";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cleanCode } from "./codeHelpers";
import { renderPreview } from "./previewHelpers";

const BuildApp = () => {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! Describe the app you want to build." }
  ]);
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("code");
  const [requirements, setRequirements] = useState(null);
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false);

  const cleanedCode = cleanCode(generatedCode);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages(msgs => [...msgs, { role: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5050/api/requirements",
        { description: input }
      );
      // Assume response.data.requirements is the requirements object
      // and response.data.generatedCode is the raw code
      setRequirements(response.data.requirements || null);
      setGeneratedCode(response.data.generatedCode || "");
      setMessages(msgs => [
        ...msgs,
        { role: "ai", text: "Here is your generated code!" }
      ]);
    } catch (err) {
      setMessages(msgs => [
        ...msgs,
        { role: "ai", text: "Sorry, something went wrong generating code." }
      ]);
      setGeneratedCode("");
      setRequirements(null);
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanedCode);
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
              placeholder={loading ? "Generating code..." : "Type your app idea..."}
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
            >Code</button>
            <button
              className={activeTab === "preview" ? "active" : ""}
              onClick={() => setActiveTab("preview")}
            >Preview</button>
            <button onClick={handleCopy}>Copy</button>
          </div>
          <div className="result-content">
            {activeTab === "code" && (
              <SyntaxHighlighter language="jsx" style={darcula} className="code-block">
                {cleanedCode || "Code will appear here."}
              </SyntaxHighlighter>
            )}
            {activeTab === "preview" && (
              requirements ? (
                <div className="preview-block">{renderPreview(requirements)}</div>
              ) : (
                <div className="preview-block">Preview will appear here.</div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildApp;