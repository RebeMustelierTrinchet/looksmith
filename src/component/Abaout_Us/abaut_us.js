import React from "react";
import styles from "./abaut_us.module.css";
import aboutImage from "../../images/about_us.jpg"; 

export default function AboutUs() {
  return (
    <section className={styles.about_container} id="abaout_us">
      <div className={styles.text_container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.subtitle}>
          We, at XKEY, provide top-level locksmith services that match your specific needs. Whether you need an emergency lockout, key replacement, or other security solutions, you can rest assured that our experienced technicians will be there to help.
        </p>
        <p className={styles.subtitle}>
          Trust, credibility and customer satisfaction is what our method is surrounded by. Satisfaction Guaranteed.
        </p>
      </div>
      <div className={styles.image_container}>
        <img src={aboutImage} alt="About our locksmith service" loading="lazy"/>
      </div>
    </section>
  );
}
