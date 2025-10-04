import styles from "./hero.module.css";
import image from "./../../images/key and car.png";
import { BsTelephoneXFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Locksmith services and key duplication">
      <div className={styles.container}>
        
        {/* Texto */}
        <div className={styles.textBox}>
          <h1 className={styles.title}>Securing today...</h1>
          <h2 className={styles.subtitle}>Protecting tomorrow.</h2>

          {/* Botones */}
          <div className={styles.actions}>
            <a href="tel:9367773999" className={styles.cta} aria-label="Call Vibe Locksmith">
              <BsTelephoneXFill className={styles.icon}/>
              Call Us
            </a>

            <a 
              href="https://wa.me/9367773999?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.cta}
            >
              <FaWhatsapp className={styles.icon}/>
              WhatsApp
            </a>

            <a href="sms:9367773999?body=Hi%2C%20I%20am%20interested%20in%20your%20locksmith%20services" 
               className={styles.cta}>
              <TbMessageCircle className={styles.icon}/>
              SMS Message
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className={styles.imageBox}>
          <img 
            src={image} 
            alt="Locksmith working on a lock" 
            className={styles.image} 
            loading="eager"   // LCP rápido
          />
        </div>

      </div>
    </section>
  );
}
