import React, { useState, useEffect } from "react";
import styles from "./action.module.css";
import img from "./../../images/img.png"
import { BsTelephoneXFill } from "react-icons/bs";

/**
 * CallCTA component
 * - phone: string -> número en formato tel: (ej. "+535001234567")
 * - phrases: array de strings -> frases que rotan
 */
export default function Action({
  phone = "+1234567890", // reemplaza por el número real
  phrases = [
  "Locked out? Call us now 📞",
  "Key duplicates in minutes — call today ⏱️",
  "Car emergency? Call and we’ll help 🚗",
  "Peace of mind starts with a copy — call now 🔑",
  "24/7 service — we’re just one call away 🌙"
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

        <p className={styles.smallText}>
          Click to call — no data needed. <span className={styles.phoneNumber}>{phone}</span>
        </p>
      </div>
      </div>
      <div className={styles.img}>
        <img src={img}/>
      </div>
    </section>
  );
}
