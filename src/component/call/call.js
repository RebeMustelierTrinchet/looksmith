import React from "react";
import styles from "./call.module.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
  const phoneNumber = "+1-555-123-4567"; // Cambia por tu número

  return (
    <a href={`tel:${phoneNumber}`} className={styles.callButton}>
      <FaPhoneAlt className={styles.icon} />
      Call Now
    </a>
  );
}
