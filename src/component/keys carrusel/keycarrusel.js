import { useEffect, useState } from "react";
import styles from "./keycarrusel.module.css";

export default function KeyCarrusel() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/avto-dev/vehicle-logotypes@2.x/src/vehicle-logotypes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const arrayData = Object.values(data); // 🔥 convertimos a array
        const selected = arrayData.slice(0, 20);
        setLogos(selected);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.track}>
        {logos.concat(logos).map((item, index) => (
          <img
            key={index}
            src={item.logotype.uri}
            alt={item.name}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
}