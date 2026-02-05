import React from 'react';
import './cssbox/Footer.css'; 
import TextAni from "../svgani/TextAni.jsx";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <TextAni>
            <h2 className="footer-name">JANG SEO HYUN</h2>
            </TextAni>
            <p className="footer-role">UX · PRODUCT · GROWTH</p>
          </div>
          
          <div className="footer-social">
            <a
              href="https://mail.google.com/mail/?view=cm&to=acau63536353@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/contact-gmail.svg" alt="Gmail" className="social-icon" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=choco6353@naver.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/contact-nmail.svg" alt="Mail" className="social-icon" />
            </a>
            <a
              href="https://discord.com/users/544515839483707393"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/contact-discord.svg"
                alt="Discord"
                className="social-icon"
              />
            </a>
            <a href="https://www.instagram.com/amongguri?igsh=MWN0czkxcXl6eXdrMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src="/img/contact-instagram.svg" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://youtube.com/channel/UCrQDh5l_3JcfIxh58nFQJPQ?si=cquTmYYML3nAV7GW" target="_blank" rel="noopener noreferrer">
              <img src="/img/contact-youtube.svg" alt="YouTube" className="social-icon" />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <p className="footer-copyright">© 2026 JANG SEO HYUN</p>
          <p className="footer-copyright">Music: Cute – Bensound (royalty free)</p>
        </div>
      </div>
    </footer>
  );
}
