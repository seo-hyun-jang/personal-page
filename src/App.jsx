import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Works.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import IntroAnimation from "./components/IntroAnimation.jsx";
import "./App.css";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* ===== INTRO : 최상단 ===== */}
      {!introDone && (
        <IntroAnimation onComplete={() => setIntroDone(true)} />
      )}

      {/* ===== MAIN CONTENT : 인트로 끝난 후에만 렌더 ===== */}
      {introDone && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home introDone={introDone} />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      )}

    </div>
  );
}
