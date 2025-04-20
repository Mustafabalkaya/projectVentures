import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export const Navigation = () => {

  // 🔽 Scroll olduğunda navbar'a 'scrolled' class'ı ekleyen useEffect
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("menu");
      if (window.scrollY > 80) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand page-scroll">
            <img
              src="/logo.png"
              alt="Ventures Logo"
              style={{ maxHeight: "50px" }}
            />
          </Link>
        </div>

        <div
          className="navbar-right"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
  

        </div>
      </div>
    </nav>
  );
};
