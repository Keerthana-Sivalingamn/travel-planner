import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode based on system preference or saved state
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div>
        {/* Toggle dark mode button */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-blue-500 text-white py-2 px-4 rounded m-4"
        >
          Toggle Dark Mode
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
