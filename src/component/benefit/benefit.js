import React from "react";
import styles from "./benefit.module.css";
import { FaShippingFast, FaLock, FaGift, FaHeadset } from "react-icons/fa";
import { FaCarSide, FaShieldAlt, FaIdBadge, FaFileContract } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      description: "Get your order delivered quickly and reliably right to your door."
    },
    {
      icon: <FaLock />,
      title: "Secure Payments",
      description: "All transactions are encrypted and 100% safe."
    },
     {
    icon: <FaCarSide />,
    title: "Car Key Specialists",
    description: "Whether you’re locked out or need key duplication, our experts provide comprehensive automotive locksmith services."
  },
  {
    icon: <FaShieldAlt />,
    title: "Satisfaction Guarantee",
    description: "We pride ourselves on delivering exceptional customer service and ensuring you’re completely satisfied with our work."
  },
  {
    icon: <FaIdBadge />,
    title: "Licensed",
    description: "We are proudly registered with the Texas Department of Public Safety, Regulatory Services Division – Private Security Bureau (PSB), ensuring compliance with state regulations and standards for professional locksmith services."
  },
  {
    icon: <FaFileContract />,
    title: "Insured",
    description: "We are fully insured in compliance with all applicable regulations, providing our clients with added assurance and peace of mind when using our professional locksmith services."
  }
  ];

  return (
    <section className={styles.main_container_Section}>
      <section className={styles.featuresSection}>
        <hr className={styles.line}></hr>
        <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
