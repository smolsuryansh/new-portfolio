import React, { useState, useEffect } from "react";
import Loading from "./components/Loading"
import './locomotive-scroll.css';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Preload fonts
  useEffect(() => {
    const loadFonts = async () => {
      try {
        // Preload your WOFF2 fonts
        const fontPromises = [
          new FontFace('Beanco-Font', 'url(/fonts/beanco.woff2)').load(),
          new FontFace('EudoxusSans-Medium', 'url(/fonts/eudoxus-medium.woff2)').load(),
          new FontFace('EudoxusSans-Regular', 'url(/fonts/eudoxus-regular.woff2)').load(),
          // Add more fonts as needed
        ];

        const loadedFonts = await Promise.all(fontPromises);

        // Add fonts to document
        loadedFonts.forEach(font => {
          document.fonts.add(font);
        });

        setFontsLoaded(true);
      } catch (error) {
        console.warn('Some fonts failed to load:', error);
        // Set fontsLoaded to true anyway to prevent infinite loading
        setFontsLoaded(true);
      }
    };

    loadFonts();
  }, []);


  useEffect(() => {

    document.documentElement.className = theme;
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Don't render anything until fonts are loaded
  if (!fontsLoaded) {
    return (
      <div className="fixed inset-0 bg-backgroundDiff flex items-center justify-center">
        <div className="text-fontMain">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <div className="relative">
          {/* dropup? toggle */}
          <button
            className="p-3 bg-background border-1 border border-fontSpecial text-fontMain rounded-full shadow-md"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Themes
          </button>

          {/* dropup? menu */}
          {isDropdownOpen && (
            <ul className="absolute bottom-full right-0 mb-2 bg-backgroundDiff text-fontMain shadow-md rounded-md overflow-hidden">
              <li>
                <button
                  className='w-full px-4 py-2 text-left hover:bg-fontSpecial hover:text-fontMain'
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
                  className='w-full px-4 py-2 text-left hover:bg-fontSpecial hover:text-fontMain'
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
                  className='w-full px-4 py-2 text-left hover:bg-fontSpecial hover:text-fontMain'
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
                  className='w-full px-4 py-2 text-left hover:bg-fontSpecial hover:text-fontMain'
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