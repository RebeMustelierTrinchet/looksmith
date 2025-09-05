import React from "react";
import styles from "./home_text.module.css";
import heroImage from "../../images/img.png"; // tu imagen de hero

export default function Text() {
  return (
    <div className={styles.homePage}>
 

      {/* Why Choose Us */}
      <section className={styles.whyChoose}>
        <h1 lassName={styles.tittle_1}>KeyMaster</h1>
          <p>Your key to peace of mind 🔑</p>
        <h2 lassName={styles.tittle_2}>Why Choose Us?</h2>
        <p>
          Todos hemos pasado por ese momento de película: llegas al estacionamiento, listo para tu escapada… y tu llave de auto decide tomarse vacaciones dentro del coche. 
          ¡No te preocupes! Duplicado de llaves de auto rápido, seguro y preciso. Llaves tradicionales, mandos a distancia o llaves inteligentes, hacemos copias en minutos para que nunca pierdas el control.
        </p>
         <h2 className={styles.tittle_2}>Don’t wait for the door (or your car) to leave you behind!</h2>
        <button className={styles.btn}>Get Your Duplicate Now</button>
      </section>

     
    </div>
  );
}
