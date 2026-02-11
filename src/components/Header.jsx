import React, { useState, useEffect } from 'react';
import "./cssbox/Header.css";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">

      {/* 햄버거 버튼을 헤더 최상위에 배치 */}
      <button
        className={`hamburger-btn ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="menu"
        type="button"
      >
        <img
          src={
            isMenuOpen
              ? "/img/header-close-btn.svg"
              : "/img/header-hambuger.svg"
          }
          alt="menu"
        />
      </button>

      <div className="headerlayoutPadding">

        {/* Logo */}
        <div className="header-leftBox">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
            <img src="/img/logo-.png" alt="logo" />
          </a>
        </div>

        {/* Right Area */}
        <div className="header-rightBox">

          {/* Navigation */}
          <nav className={isMenuOpen ? "active" : ""}>
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            <a href="#work" onClick={(e) => scrollToSection(e, 'work')}>Work</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          </nav>

          {/* Theme Toggle */}
          <div
            className="headerFlowerBox"
            onClick={toggleTheme}
            style={{ cursor: 'pointer' }}
          >
            <img src="/img/header-flower.svg" alt="theme toggle" />
          </div>

        </div>
      </div>
    </header>
  );
}
