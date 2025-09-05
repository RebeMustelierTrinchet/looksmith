// QuickTipsCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./tips.module.css";
import { FaLightbulb, FaCar, FaHome, FaShieldAlt, FaLock, FaKey } from "react-icons/fa";

export default function QuickTipsCarousel() {
  const tips =  [
  {
    icon: <FaLightbulb />,
    title: "How to Avoid Losing Your Keys 🔑",
    content: "Stop hiding your keys in a 'safe place.' Use noticeable keychains and always have a spare hidden somewhere. Your dog won't always find it before you do."
  },
  {
    icon: <FaCar />,
    title: "What to Do if You Get Locked Out of Your Car 🚗",
    content: "Take a deep breath and call your trusted locksmith. Trying to open the door with cards might work in movies, but not here. Always have a spare key handy."
  },
  {
    icon: <FaHome />,
    title: "5 Home Security Tips 🏠",
    content: "1️⃣ Change your locks when you move. 2️⃣ Don’t hide keys under the doormat. 3️⃣ Install automatic lights. 4️⃣ Consider keyless systems. 5️⃣ Keep your home safe and happy."
  },
  {
    icon: <FaKey />,
    title: "Spare Keys for Your New Home 🔑",
    content: "Do you only have one key to your new house? Danger! We make duplicates for your mom, your partner, and even your dog (well, almost 🐶)."
  },
  {
    icon: <FaKey />,
    title: "Secure Key Duplication 🔐",
    content: "We only duplicate your keys using professional techniques so no one else can open them. Fast, secure, and reliable copies."
  },
  {
    icon: <FaLock />,
    title: "Don’t Wait for an Emergency ⏱️",
    content: "Avoid the stress of being locked out. Always have a spare key and a trusted locksmith contact. Better safe than calling at midnight in pajamas with cold coffee."
  },
  {
    icon: <FaShieldAlt />,
    title: "Lock Security Matters 🔒",
    content: "Install certified locks and change your keys if you lose any. A small step now prevents theft and headaches later."
  },
  {
    icon: <FaHome />,
    title: "Smart Keys, Safe Home 🏡",
    content: "Keyless entry systems are convenient and secure. No more lost keys, and you can control home access from your phone. Futuristic and reliable."
  }
];


  return (
    <section className={styles.main_container_Section}>
      <section className={styles.tipsSection}>
        <hr className={styles.line}></hr>
        <h2 className={styles.sectionTitle}>Quick Tips & Fun Advice</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          autoplay={{ delay: 8000 }}
          loop={true}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className={styles.mySwiper}
        >
          {tips.map((tip, index) => (
            <SwiperSlide key={index} className={styles.Swiper_Slide}>
              <div className={styles.tipCard}>
                <div className={styles.icon}>{tip.icon}</div>
                <h3 className={styles.title}>{tip.title}</h3>
                <p className={styles.content}>{tip.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
