import React, { useState, useEffect } from "react";
import styles from "./action.module.css";
import img from "./../../images/img.png"
import { BsTelephoneXFill } from "react-icons/bs";


import { FaWhatsapp } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
/**
 * CallCTA component
 * - phone: string -> número en formato tel: (ej. "+535001234567")
 * - phrases: array de strings -> frases que rotan
 */
export default function Action({
  phone = "+9367773999", // reemplaza por el número real
  phrases = [
  "Locked out? Call us now 📞",
  "Key duplicates in minutes — call today ⏱️",
  "Car emergency? Call and we’ll help 🚗",
  "Peace of mind starts with a copy — call now 🔑",
  "we’re just one call away 🌙"
]

}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // rotador de frases: cambia cada 10s
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 9000); // 10000 ms = 10 s

    return () => clearInterval(timer);
  }, [phrases.length, paused]);

  const currentPhrase = phrases[index];

  // formato tel: sin espacios para el href
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  return (
    <section className={styles.callSection} aria-label="Call to action - phone">

      <div
        className={styles.phraseBox}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-live="polite"
      >
        <p className={styles.phrase}>{currentPhrase}</p>
      

        <div className={styles.actions}>
          <a
            className={styles.phoneButton}
            href={telHref}
            aria-label={`Call now ${phone}`}
          >
            <BsTelephoneXFill className={styles.icon}/>Call now
          </a>
          <a 
            href="https://wa.me/9367773999?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.phoneButton}
            >
            <FaWhatsapp className={styles.icon}/>
            WhatsApp
          </a>

            {/* SMS Message */}
          <a 
            href="sms:9367773999?body=Hi%2C%20I%20am%20interested%20in%20your%20locksmith%20services" 
            className={styles.phoneButton}
          >
            <TbMessageCircle className={styles.icon}/>
            SMS Message
          </a>       
      </div>
       <p className={styles.smallText}>
          Click to call — no data needed. <span className={styles.phoneNumber}>{phone}</span>
        </p>
      </div>
      <div className={styles.img_cnt}>
        <img className={styles.img} src={img}/>
      </div>
    </section>
  );
}
