import React from "react";
import styles from "./home_text.module.css";

export default function Text() {
  return (
    <div className={styles.homePage}>

  {/* Why Choose Us */}
      <section className={styles.whyChoose}>
        <h1 className={styles.title_1}>KeyMaster</h1>
        <p  className={styles.text}>Your key to peace of mind </p>

        <h2 className={styles.title_2}>Why Choose Us?</h2>
        <p className={styles.text2}>
          We’ve all had that movie-moment: you arrive at the parking lot, ready to go…and your car key decides to take a vacation inside the vehicle.
          Don’t worry! Fast, safe, and precise car key duplication. Traditional keys, remote fobs, or smart keys — we copy them in minutes so you never lose control.
        </p>

        <h2 className={styles.title_2}>Don’t wait for the door (or your car) to leave you behind!</h2>
        <button className={styles.btn}>Get Your Duplicate Now</button>
      </section>
    </div>

  );
}
