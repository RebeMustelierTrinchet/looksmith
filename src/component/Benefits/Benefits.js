
import React, { useEffect, useRef } from "react";
import styles from "./../benefit/benefit.module.css";
import { FaUserShield, FaCheckCircle, FaTools } from "react-icons/fa";

export default function Benefits() {
const cardsRef = useRef([]);

  useEffect(() => {
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show); // activa animación
            observer.unobserve(entry.target); // evita repetir animación
          }
        });
      },
      { threshold: 0.2 } // se activa cuando el 20% del elemento entra en pantalla
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <FaTools />,
      title: "+10 Years of Experience",
      description: "A solid track record providing reliable service."
    },
    {
      icon: <FaCheckCircle />,
      title: "Guaranteed Service",
      description: "We stand behind the quality of every job we do."
    },
    {
      icon: <FaUserShield />,
      title: "Certified Technicians",
      description: "Our team is fully trained and certified to help you."
    }
  ];

  return (
    <section className={styles.main_container_Section}>
      
      <section className={styles.featuresSection}>
        <hr className={styles.line}></hr>
        <h2 className={styles.sectionTitle}>Trust & Reliability</h2>
        <div className={styles.featuresGrid}>
          {benefits.map((benefit, index) => (
               <div
              key={index}
              className={`${styles.featureCard} ${styles.hidden}`} // inicia oculto
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.icon}>{benefit.icon}</div>
              <h3 className={styles.title}>{benefit.title}</h3>
              <p className={styles.description}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
