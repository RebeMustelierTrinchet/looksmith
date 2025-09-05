import React from "react";
import styles from "./Benefits.module.css";
import { FaUserShield, FaCheckCircle, FaTools } from "react-icons/fa";

export default function Benefits() {
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
      
      <section className={styles.benefitsSection}>
        <hr className={styles.line}></hr>
        <h2 className={styles.sectionTitle}>Trust & Reliability</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
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
