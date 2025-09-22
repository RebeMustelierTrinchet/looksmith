import React from "react";
import styles from "./coverege.module.css";

const Coverage = () => {
  return (
    <section className={styles.coverage}>
      <div className={styles.container}>
        <h2 className={styles.title}>Service Coverage </h2>
        <p className={styles.subtitle}>
          We are proud to serve the {" "}
          <span className={styles.highlight}>Greater Houston, Texas Area</span> area,
          including:
        </p>

        {/* List of neighborhoods/areas */}
      

        {/* Embedded Map */}
        <div className={styles.map}>
          <iframe
            title="Coverage map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55430.48218972646!2d-95.422753804242!3d29.76019269091686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf3c2eaaa111%3A0x27d54cbea5f0b0e3!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1697823134567!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
