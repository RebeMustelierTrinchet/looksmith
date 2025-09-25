import React, { useState, useEffect } from "react";
import styles from "./action.module.css";
import img from "./../../images/img.png";

// Icons
import { BsTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";

/**
 * Action component
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
    "We’re just one call away 🌙",
  ],
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // rotador de frases: cambia cada 9s
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 9000);

    return () => clearInterval(timer);
  }, [phrases.length, paused]);

  const currentPhrase = phrases[index];
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;
  const waHref = `https://wa.me/${phone.replace(/\D/g, "")}?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services`;
  const smsHref = `sms:${phone.replace(/\D/g, "")}?body=Hi%2C%20I%20am%20interested%20in%20your%20locksmith%20services`;

  return (
    <section className={styles.callSection} aria-label="Call to action">
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
            <BsTelephoneFill className={styles.icon} />
            Call now
          </a>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.phoneButton}
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className={styles.icon} />
            WhatsApp
          </a>

          <a
            href={smsHref}
            className={styles.phoneButton}
            aria-label="Send SMS"
          >
            <TbMessageCircle className={styles.icon} />
            SMS Message
          </a>
        </div>

        <p className={styles.smallText}>
          Click to call — no data needed.{" "}
          <span className={styles.phoneNumber}>{phone}</span>
        </p>
      </div>

      <div className={styles.imgCnt}>
        <img
          className={styles.img}
          src={img}
          alt="Locksmith service illustration"
          loading="lazy"
        />
      </div>
    </section>
  );
}
