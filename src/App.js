import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => {
        // JSON 객체에서 'message'를 배열로 변환
        setMsg([data.message]);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {msg.map((content, idx) => (
            <li key={`${idx} - ${content}`}>{content}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;