import React from "react";
import styles from "./abaut_us.module.css";
import aboutImage from "../../images/img.png"; 

export default function AboutUs() {
  return (
    <section className={styles.about_container} id="abaout_us">
      <div className={styles.text_container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.subtitle}>
          We are a locksmith service dedicated to solving your problems quickly 
          and efficiently. Whether you are locked out, need a duplicate, or 
          require emergency assistance, we are here 24/7 to give you peace of mind.
        </p>
        <p className={styles.subtitle}>
          Our team combines experience, reliability, and modern tools to ensure 
          your keys and locks are always in safe hands.
        </p>
      </div>
      <div className={styles.image_container}>
        <img src={aboutImage} alt="About our locksmith service" />
      </div>
    </section>
  );
}
