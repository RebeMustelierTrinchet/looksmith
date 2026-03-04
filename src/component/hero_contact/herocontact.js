import { useEffect, useState } from "react";
import styles from "./herocontact.module.css";

import img1 from "../../images/photo_2026-03-02_18-34-34.jpg";
import img2 from "../../images/photo_2026-03-02_18-34-35.jpg";
import img3 from "../../images/photo_2026-03-02_18-34-42.jpg";
import img4 from "../../images/photo_2026-03-02_18-34-44.jpg";
import img5 from "../../images/photo_2026-03-02_18-34-48.jpg";

const images = [img1, img2, img3, img4, img5];

const messages = [
  "Fast response when you need it most.",
  "Professional automotive locksmith specialists.",
  "Licensed and insured for your peace of mind.",
  "Advanced key programming technology.",
  "Customer satisfaction is our priority."
];

export default function ContactHero() {
  const [current, setCurrent] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  // Slide automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []); // ✅ now safe

  // Typing effect
  useEffect(() => {
    let i = 0;
    setDisplayedText("");

    const typing = setInterval(() => {
      setDisplayedText(messages[current].slice(0, i + 1));
      i++;
      if (i === messages[current].length) clearInterval(typing);
    }, 50);

    return () => clearInterval(typing);
  }, [current]); // ✅ clean dependency

  return (
    <section className={styles.hero}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className={styles.overlay}>
        <h1>Contact Us</h1>
        <p className={styles.typing}>{displayedText}</p>
      </div>
    </section>
  );
}