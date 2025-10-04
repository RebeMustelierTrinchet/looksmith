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
      title: "Dealer Level Programming",
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

      <div className={styles.ctaBox}>
        <div>
          <h4 className={styles.ctaTitle}>Not sure which service is right for you?</h4>
          <p className={styles.ctaText}>
            Contact us for a free consultation — we’ll help you choose the perfect dealer-level service for your vehicle.
          </p>
        </div>

        <div className={styles.ctaButtons}>
          <a
            href="https://wa.me/1234567890?text=Hi%20I%20would%20like%20advice%20on%20a%20dealer%20service"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            Contact via WhatsApp
          </a>

          <button
            onClick={() => onRequest?.({ title: 'Personal Consultation' })}
            className={styles.consultBtn}
          >
            Request Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
