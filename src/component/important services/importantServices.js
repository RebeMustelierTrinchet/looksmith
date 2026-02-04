import React from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaLaptopCode, FaSyncAlt } from "react-icons/fa";
import styles from "./importanteServices.module.css";

export default function ImportantServices({ onRequest }) {
  const services = [
    {
      Icon: MdMiscellaneousServices,
      title: "Dealer Level Diagnosis",
      description:
        "Advanced diagnostic tools just like the dealership—pinpointing issues quickly and accurately.",
    },
    {
      Icon: FaLaptopCode,
      title: "Programming",
      description:
        "From keys to electronic modules, we handle dealer-level programming without the dealership price.",
    },
    {
      Icon: FaSyncAlt,
      title: "Dealer Level Software Update",
      description:
        "Keep your vehicle running at its best with the latest dealer-approved software updates.",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Dealer Level <span>Services</span>
        </h2>
        <p className={styles.subtitle}>
          Professional technology and expertise — for reliability, precision, and speed when your car needs it most.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s, idx) => (
          <article key={idx} className={styles.card}>
            <div className={styles.iconWrapper}>
              <s.Icon className={styles.icon} />
            </div>

            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardText}>{s.description}</p>

            <button
              onClick={() =>
                onRequest?.(s) ||
                (window.location.href = `mailto:services@yourshop.com?subject=${encodeURIComponent(
                  s.title
                )}&body=${encodeURIComponent(
                  'Hi, I would like more information about: ' + s.title
                )}`)
              }
              className={styles.button}
            >
              Request Now
            </button>
          </article>
        ))}
      </div>

        <div className={styles.ctaButtons}>
          <a
            href="https://wa.me/1234567890?text=Hi%20I%20would%20like%20advice%20on%20a%20dealer%20service"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.consultBtn}
          >
            Contact via WhatsApp
          </a>
        </div>
    </section>
  );
}
