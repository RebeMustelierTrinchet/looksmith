import React from "react";
import styles from "./hero.module.css";
import heroImg from "./../../images/key and car.webp"; // ✅ Usa imagen optimizada WebP
import { BsTelephoneXFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";

import { useEffect, useState } from "react";


 

export default function Hero() {
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className={styles.hero} aria-label="Locksmith services and key duplication">
      <div className={styles.container}>
        {/* Texto */}
        <div className={styles.textBox}>
          <h1 className={styles.title}>Coded. Secured.</h1>

          {/* Botones */}
          <div className={styles.actions}>
            <a
              href="tel:9367773999"
              className={styles.cta}
              aria-label="Call Vibe Locksmith"
            >
              <BsTelephoneXFill className={styles.icon} />
              Call Us
            </a>

            <a
              href="https://wa.me/9367773999?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
              aria-label="WhatsApp Vibe Locksmith"
            >
              <FaWhatsapp className={styles.icon} />
              WhatsApp
            </a>

            <a
              href="sms:9367773999?body=Hi%2C%20I%20am%20interested%20in%20your%20locksmith%20services"
              className={styles.cta}
              aria-label="SMS Vibe Locksmith"
            >
              <TbMessageCircle className={styles.icon} />
              SMS
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className={styles.imageBox}>
          {!isMobile && (
          <img
            src={heroImg}
            alt="Locksmith working"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            className={styles.image}
          />
        )}
        </div>
      </div>
    </section>
  );
}
