import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import styles from "../App.module.css";
import GenerateButton from "./GenerateButton";
import PoemDisplay from "./PoemDisplay";

export default function PoemBox() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  const fetchPoem = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
  
      const data = await res.json();
  
      if (!res.ok) throw new Error(data.error || "Something went wrong");
  
      setResponse(data.poem);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("❌ " + err.message);
      setResponse([]);
    }
  };
  

  useEffect(() => {
    fetchPoem();
    const interval = setInterval(fetchPoem, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.poemBox}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your poem prompt here..."
          className={styles.promptInput}
        />
        <GenerateButton onClick={fetchPoem} />
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <PoemDisplay response={response} />
        )}
      </div>
    </>
  );
}
