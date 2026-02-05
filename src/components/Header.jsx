import React, { useState, useEffect } from 'react';
import "./cssbox/Header.css";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

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
  };

  return (
    <header className="header">
        <div className="layoutPadding">
            <div className="header-leftBox">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
                <img src="./img/logo.svg" alt="logo" />
              </a>
            </div>
            <div className="header-rightBox">
                <nav>
                    <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
                    <a href="#work" onClick={(e) => scrollToSection(e, 'work')}>Work</a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
                </nav>
            
                <div className="headerFlowerBox" onClick={toggleTheme} style={{ cursor: 'pointer' }}> 
                  <img src="./img/header-flower.svg" alt="header-flower" />
                </div>
            </div>
        </div>
    </header>   
  );
}
