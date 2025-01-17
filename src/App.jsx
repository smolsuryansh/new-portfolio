import React, { useState, useEffect } from "react";
import Loading from "./components/Loading"
import './locomotive-scroll.css';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Apply the selected theme to the document body
    document.documentElement.className = theme;
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };


  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <div className="relative">
          {/* Dropdown Toggle */}
          <button
            className="p-3 bg-background text-fontMain rounded-full shadow-md"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Themes
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute bottom-full right-0 mb-2 bg-backgroundDiff text-fontMain shadow-md rounded-md overflow-hidden">
              <li>
                <button
                  className={`w-full px-4 py-2 text-left hover:bg-fontSpecial hover:text-fontMain`}
                  onClick={() => {
                    handleThemeChange("arch");
                    setIsDropdownOpen(false);
                  }}
                >
                  Arch
                </button>
              </li>
              <li>
                <button
                  className={`w-full px-4 py-2 text-left hover:bg-fontSpecial hover:text-fontMain`}
                  onClick={() => {
                    handleThemeChange("dark");
                    setIsDropdownOpen(false);
                  }}
                >
                  Dark
                </button>
              </li>
              <li>
                <button
                  className={`w-full px-4 py-2 text-left hover:bg-fontSpecial hover:text-fontMain`}
                  onClick={() => {
                    handleThemeChange("light");
                    setIsDropdownOpen(false);
                  }}
                >
                  Light
                </button>
              </li>
              <li>
                <button
                  className={`w-full px-4 py-2 text-left hover:bg-fontSpecial hover:text-fontMain`}
                  onClick={() => {
                    handleThemeChange("default");
                    setIsDropdownOpen(false);
                  }}
                >
                  Default
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      <Loading />
    </>
  )
}

export default App
