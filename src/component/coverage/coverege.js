import React from "react";
import styles from "./coverege.module.css";

const Coverage = () => {
  return (
    <section 
      className={styles.coverage} 
      aria-labelledby="coverage-title"
    >
      <div className={styles.container}>
        {/* h2 con id para accesibilidad */}
        <h2 id="coverage-title" className={styles.title}>
          Service Coverage
        </h2>

        {/* p mejorado con span accesible */}
        <p className={styles.subtitle}>
          We are proud to serve the{"  "}
          <span className={styles.highlight}>
            Greater Houston, Texas Area
          </span>{" "}
          area, including:
        </p>

        {/* 🔹 Mapa con título accesible */}
        <div className={styles.map}>
         <iframe
          title="Google map showing XKEY service coverage in Houston 77089 area"
          src="https://www.google.com/maps?q=77089,+Houston,+TX&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />


        </div>
      </div>
    </section>
  );
};

export default Coverage;
