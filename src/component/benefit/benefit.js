import React, { useEffect, useRef } from "react";
import styles from "./benefit.module.css";
import { FaCarSide, FaShieldAlt, FaIdBadge, FaFileContract } from "react-icons/fa";
import image from './../../images/key.png'

export default function Features() {
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


  const features = [
   
      {
    icon: <FaIdBadge />,
    title: "Licensed",
    description: "We are proudly registered with the Texas Department of Public Safety, Regulatory Services Division – Private Security Bureau (PSB), ensuring compliance with state regulations and standards for professional locksmith services."
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
    icon: <FaFileContract />,
    title: "Insured",
    description: "We are fully insured in compliance with all applicable regulations, providing our clients with added assurance and peace of mind when using our professional locksmith services."
  },
  //  {
  //     icon: <FaLock />,
  //     title: "Secure Payments",
  //     description: "All transactions are encrypted and 100% safe."
  //   },
  ];

  return (
    <section className={styles.main_container_Section}>
      <section className={styles.featuresSection}>
        <hr className={styles.line}></hr>
        <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
             <div
              key={index}
              className={`${styles.featureCard} ${styles.hidden}`} // inicia oculto
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}

        </div>
      
           <img 
        src={image}  
        className={styles.image}  
        loading="lazy"
        alt="Car remote key with modern design" 
      />
      </section>
    </section>
  );
}
