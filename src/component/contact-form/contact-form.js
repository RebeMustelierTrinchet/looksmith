import React, { useState } from "react";
import styles from "./contact-form.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceType: "",
    preferredTime: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || process.env.REACT_APP_API_URL_VERCEL}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully 👍");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          serviceType: "",
          preferredTime: ""
        });
      } else {
        setStatus("Error sending message ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message ❌");
    }
  };

  return (
    <section className={styles.contactSection}>
      <h2>Contact Us</h2>
      <p>We respond within 24 hours</p>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label>
          Full Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Service Type
          <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="Car">Car</option>
            <option value="Home">Home</option>
            <option value="Business">Business</option>
          </select>
        </label>
        <label>
          Preferred Time
          <input type="text" name="preferredTime" value={formData.preferredTime} onChange={handleChange} />
        </label>
        <label>
          Message
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Send Message</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </section>
  );
}
