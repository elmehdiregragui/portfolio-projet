import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import ChatBox from "./components/ChatBox";
import Chat from "./pages/Chat";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

<Routes>
  <Route path="/" element={<Home theme={theme} />} />
  <Route path="/apropos" element={<About theme={theme} />} />
  <Route path="/projets" element={<Projects theme={theme} />} />
  <Route path="/contact" element={<Contact theme={theme} />} />
  <Route path="/competences" element={<Skills theme={theme} />} />
  <Route path="/experience" element={<Experience theme={theme} />} />
  <Route path="/chat" element={<Chat theme={theme} />} />
</Routes>

<div className={theme === "dark" ? "bg-slate-950 px-6 pb-10" : "bg-slate-100 px-6 pb-10"}>
  <div className="max-w-4xl mx-auto">
    <ChatBox />
  </div>
</div>

<Footer />
    </>
  );
}

export default App;