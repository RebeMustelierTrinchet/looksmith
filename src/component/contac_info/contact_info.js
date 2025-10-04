// ContactInfo.js
import React from "react";
import styles from "./contac_info.module.css";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import contactImage from "./../../images/img.png"; // Pon tu imagen aquí

function ContactInfo() {
  return (
     <section className={styles.main_container_Section}>
      
    <div className={styles.container}>
      
      {/* Div izquierdo con info */}
      <div className={styles.info}>
        <div className={styles.text_conteiner}>
          <h2>Contact Info</h2>
          <p><strong>Email:</strong> damarco.tx@gmail.com</p>
          <p><strong>Phone:</strong> (poner número)</p>
          <p>Lic# B29755301</p>
          <p>Monday - Saturday</p>
          <p>8:00am - 5:00pm</p>
          <div className={styles.social}>
            <a href="https://www.facebook.com/VibeLocksmith" target="_blank" rel="noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.tiktok.com/@vibe.locksmith" target="_blank" rel="noreferrer">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Div derecho con imagen */}
      <div className={styles.image}>
        <img src={contactImage} alt="Contact" loading="lazy"/>
      </div>
    </div>
    </section>
  );
}

export default ContactInfo;
