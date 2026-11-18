import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

function App() {
  const [code, setCode] = useState("print(x)");
  const [error, setError] = useState("NameError: name 'x' is not defined");
  const [result, setResult] = useState("");

  const handleDebug = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/debug/", {
        code,
        error,
      });
      setResult(res.data.result);
    } catch (err) {
      setResult("Error connecting to backend");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* LEFT: CODE EDITOR */}
      <div style={{ width: "60%", padding: "10px" }}>
        <h2>💻 DebugMind AI</h2>
        <Editor
          height="70%"
          defaultLanguage="python"
          value={code}
          onChange={(value) => setCode(value)}
        />

        <textarea
          placeholder="Paste error here..."
          value={error}
          onChange={(e) => setError(e.target.value)}
          style={{ width: "100%", height: "80px", marginTop: "10px" }}
        />

        <button
          onClick={handleDebug}
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          🚀 Debug Code
        </button>
      </div>

      {/* RIGHT: OUTPUT */}
      <div style={{ width: "40%", padding: "10px", background: "#111", color: "#0f0" }}>
        <h3>🧠 AI Output</h3>
        <pre>{result}</pre>
      </div>

    </div>
  );
}

export default App;