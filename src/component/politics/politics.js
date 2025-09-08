import React from "react";
import styles from "./politics.module.css";
import aboutImage from "../../images/img.png"; 

export default function Politics() {
  return (
    <section className={styles.about_container} id="politics">
      <div className={styles.image_container}>
        <img src={aboutImage} alt="About our locksmith service" />
      </div>
      <div className={styles.text_container}>
        <h2 className={styles.title}>Privacy Policy</h2>
        <h3 className={styles.subtitle}>Information We Collect</h3>
        <p className={styles.texts}>
        Like many websites, our servers log data such as IP addresses, browser details,
         referring pages, and visit timestamps to enhance user experience.</p>
        
        <h3 className={styles.subtitle}>Information We Collect</h3>
        <p className={styles.texts}>
        We use collected data to provide personalized content and improve the site experience. We don’t sell your information.
        </p>
        
        <h3 className={styles.subtitle}>Cookies</h3>
        <p className={styles.texts}>
        Cookies track preferences and return visits. While optional, enabling cookies enhances site functionality. Third-party advertisers, including Google,
         may use cookies for targeted ads. Visitors can opt-out of Google’s DART cookies via their ad privacy policy.</p>
        
      </div>
      
    </section>
  );
}
