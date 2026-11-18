import { useState } from "react";
import axios from "axios";

function App() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const handleDebug = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/debug/", {
        code,
        error,
      });

      setResult(res.data.result);
    } catch (err) {
      console.log(err);
      setResult("❌ Error connecting to backend");
    }
  };

  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      
      {/* LEFT SIDE INPUT */}
      <div style={{ width: "50%" }}>
        <h2>💻 Code</h2>
        <textarea
          rows="10"
          style={{ width: "100%" }}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <h2>⚠️ Error</h2>
        <input
          style={{ width: "100%", padding: "10px" }}
          value={error}
          onChange={(e) => setError(e.target.value)}
        />

        <button
          onClick={handleDebug}
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          🚀 Debug Code
        </button>
      </div>

      {/* RIGHT SIDE OUTPUT */}
      <div
        style={{
          width: "50%",
          background: "#111",
          color: "#0f0",
          padding: "10px",
        }}
      >
        <h2>🤖 AI Output</h2>
        <pre>{result}</pre>
      </div>
    </div>
  );
}

export default App;