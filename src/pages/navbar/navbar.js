import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

// Importar imágenes de candados
import padlock_hover from "./../../icons/open-padlock.png";
import padlock_open from "./../../icons/unlock-padlock.png";
import padlock_close from "./../../icons/padlock.png";
import logo from "./../../images/Vibe Logo.png"

// Frases divertidas
const phrases = [
  "We unlock smiles 🔑          ",
  "Locked out? Not locked down 😅",
  "Your key to peace of mind 🗝️",
  "Lost keys, found solutions 🔓",
  "Locks fear us, doors love us 🚪"
];

export default function Navbar() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // Cambiar frases cada 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => {
        const idx = phrases.indexOf(prev);
        return phrases[(idx + 1) % phrases.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Definir qué candado mostrar
  
  const currentIcon = isHover
  ? padlock_hover
  : isOpen
  ? padlock_open
  : padlock_close;


  return (
    <nav className={styles.navbar}>
      {/* Botón de menú con candado */}
      <button
        className={styles.lockButton}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={currentIcon} alt="menu lock" />
        
      </button>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <a href="#services" className={({ isActive }) => isActive ? styles.active : ""}>
              Services
            </a>
          </li>
          <li>
            <a href="#abaout_us" className={({ isActive }) => isActive ? styles.active : ""}>
              About Us
            </a>
          </li>
          <li>
            <a href="#testimonials" className={({ isActive }) => isActive ? styles.active : ""}>
              Testimonials
            </a>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ""}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className={({ isActive }) => isActive ? styles.active : ""}>
              F.A.Q
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Frase central */}
      <div className={styles.centerText}>
        <h2>{currentPhrase}</h2>
      </div>

      {/* Logo a la derecha */}
      <div className={styles.logo}>
        <Link to="/">
        <img src={logo} className={styles.img_logo}/>
        </Link>
      </div>
    </nav>
  );
}
