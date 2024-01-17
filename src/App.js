import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const[markdown, setMarkdown]= useState("")
  return (
    <div className="app">
      <div className="half">
        <textarea onChange={(e)=>setMarkdown(e.target.value)} value={markdown} placeholder="Enter a markdown..."></textarea>
      </div>

      <div className="half">
        <div className="output">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>

    </div>
  )
}

export default App;
