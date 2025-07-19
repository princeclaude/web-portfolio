import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useDarkMode } from "./contexts/DarkModeContext";
import FirstVisitExperience from "./components/FirstVisitExperience";
import { Toaster } from "react-hot-toast";

// Pages

import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const { darkMode } = useDarkMode();
  

 

  return (
    <>
      
      <FirstVisitExperience />
      <Toaster position="top-center"/>
    <Router>
      <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
      </Router>
      </>
  );
}

export default App;