import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import headerData from "../data/data.json";
import { Navigation } from "./navigation"; // Navbar dahil edildi

export const Header = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = headerData.Header || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (slides.length === 0) return <div>Loading...</div>;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slideContent = slides[currentSlide][currentLang] || {};
  const { title, paragraph, image } = slideContent;

  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header id="header">
      <div className="intro" style={backgroundStyle}>
        <div className="overlay">
          <Navigation /> {/* 👈 Navbar slider'ın üzerine sabit görünür */}
          <div className="intro-center left-align">
            <div className="intro-content-wrapper">
              <div className="intro-text fade-in">
                <h1 className="intro-title">
                  {title?.split(" ").map((word, i) => (
                    <span key={i}>{word}</span>
                  ))}
                </h1>
                <p className="multi-line-text">{paragraph}</p>
                <div className="dots">
                  {slides.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === currentSlide ? "active" : ""}`}
                      onClick={() => goToSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
<div id="footer">
<div className="container text-center">
  <p>&copy; 2025 Tüm Hakları Saklıdır</p>
</div>
</div>