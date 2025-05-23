import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo..png'; // Logonuzun doğru yolu

const initialState = {
  name: "",
  email: "",
  company: "",
  message: "",
  subscribe: false,
};

export const Contact = () => {
  const [{ name, email, company, message, subscribe }, setState] = useState(initialState);
  const formRef = useRef();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const clearState = () => setState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gbfmanh", // EmailJS Service ID
        "template_y690fbs", // EmailJS Template ID
        formRef.current, // Form reference
        "5u8mCWdTdkmHUV9go" // Public Key
      )
      .then(
        (result) => {
          console.log("Mail gönderildi:", result.text);
          alert("Mesajınız başarıyla gönderildi!");
          clearState();
        },
        (error) => {
          console.error("Hata oluştu:", error.text);
          alert("Mesaj gönderilirken bir hata oluştu.");
        }
      );
  };

  useEffect(() => {
    if (location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
   <div id="contact" className="contact-section">
  <div className="container">
    <Link to="/">
      <img src={logo} alt="Logo" className="contact-logo" />
    </Link>
    <h1 className="contact-title">
      <span className="text-mask"></span>
    </h1>
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ad Soyad"
          required
          onChange={handleChange}
          value={name}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-Posta"
          required
          onChange={handleChange}
          value={email}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Firma Adı"
          onChange={handleChange}
          value={company}
        />
      </div>

      <div className="form-group">
        <textarea
          id="message"
          name="message"
          placeholder="Mesaj"
          required
          onChange={handleChange}
          value={message}
        ></textarea>
      </div>

      <div className="form-group checkbox">
        <input
          type="checkbox"
          id="subscribe"
          name="subscribe"
          checked={subscribe}
          onChange={handleChange}
        />
        <label htmlFor="subscribe">
          Ventures tarafından hazırlanan haberler hakkında e-posta almak istiyorum.
        </label>
      </div>

      <button type="submit" className="btn-custom">Gönder</button>
    </form>
  </div>
</div>
  );
};
