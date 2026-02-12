import React from "react";
import styles from "./footer.module.css";
import { FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Horario */}
        <div className={styles.infoBlock}>
          <h3 className={styles.title}>Business Hours</h3>
          <p>Monday - Saturday</p>
          <p>8:00am - 5:00pm</p>
        </div>

        {/* Redes Sociales */}
        <div className={styles.infoBlock}>
          <h3 className={styles.title}>Follow Us</h3>
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/VibeLocksmith"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook className={styles.icon}/>
            </a>
            <a
              href="https://www.tiktok.com/@vibe.locksmith"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit our TikTok profile"
            >
              <FaTiktok className={styles.icon} />
            </a>
          </div>
        </div>

        {/* Licencia */}
        <div className={styles.infoBlock}>
          <h3 className={styles.title}>License</h3>
          <p>Lic# B31113301</p>
        </div>
      </div>

      <div className={styles.copy}>
        <p>© {new Date().getFullYear()} Locksmith Services. All rights reserved.</p>
      </div>
    </footer>
  );
}
