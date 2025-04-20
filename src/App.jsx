import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Services } from "./components/services";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import Footer from "./components/footer"; // Footer
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = ({ data }) => {
  return (
    <>
      <Header data={data.Header} features={data.Features} />
      <Services data={data.Services} />
      <Team data={data.Team} />
    </>
  );
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home data={landingPageData} />} />
          <Route path="/iletisim" element={<Contact data={landingPageData.Contact} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
