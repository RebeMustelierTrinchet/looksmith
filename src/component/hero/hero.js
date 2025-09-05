import styles from "./hero.module.css";
import image from "./../../images/img.png";
import { BsTelephoneXFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";

export default function Hero() {
  return (
    <section 
      className={styles.hero} 
      aria-label="Locksmith services and key duplication"
    >
      <div className={styles.container}>
        
        {/* Text content */}
        <div className={styles.textBox}>
          <h1 className={styles.title}>
            Your Security, Our Keys 🔑
          </h1>
          <p className={styles.subtitle}>
            Fast, reliable locksmith services.  
            We duplicate keys, open locks, and provide solutions for your peace of mind.
          </p>

          {/* Call-to-action buttons */}
          <div className={styles.actions}>
            <a href="#services" className={styles.cta}><FaKey className={styles.icon}/>
              View Services
            </a>
            <a href="#contact" className={styles.cta}>< BsTelephoneXFill  className={styles.icon}/>
              Contact Us
            </a>
          </div>
        </div>

        {/* Image */}
        <div className={styles.imageBox}>
          <img 
            src={image} 
            alt="Locksmith working on a lock" 
            className={styles.image} 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
