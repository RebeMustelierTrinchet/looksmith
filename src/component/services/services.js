// ServicesCarousel.jsx
import React from "react";
import styles from "./services.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaCarSide,
  FaKey,
  FaHome,
  FaLock,
  FaBuilding,
  FaFingerprint
} from "react-icons/fa";

export default function ServicesCarousel() {
  const services = [
    {
      icon: <FaCarSide />,
      title: "Car Lockout Services",
      description:
        "Locked your keys inside? Don’t panic—we’ll get you back in your car faster than you can say tow truck."
    },
    {
      icon: <FaKey />,
      title: "Car Key Replacement",
      description:
        "Lost your only car key? We replace it quick, secure, and without breaking your wallet."
    },
    {
      icon: <FaKey />,
      title: "Car Key Duplication",
      description:
        "Having just one key is risky. We’ll duplicate your car key so you’re never stuck in an emergency."
    },
    {
      icon: <FaHome />,
      title: "Home Lockout",
      description:
        "Your house is your kingdom. We’ll get you back inside without damaging your door (or your royal mood)."
    },
    {
      icon: <FaLock />,
      title: "Home Locks Replacement",
      description:
        "Moved into a new place or lost your keys? Changing your locks keeps your home safe and sound."
    },
    {
      icon: <FaFingerprint />,
      title: "Home Keyless Entry System",
      description:
        "Go keyless and control your door with style. Safer, smarter, and no more searching for keys at 2 AM."
    },
    {
      icon: <FaBuilding />,
      title: "Business Lockout",
      description:
        "Locked out of your office? We’ll get you back in fast so your business doesn’t miss a beat."
    },
    {
      icon: <FaLock />,
      title: "Business Locks Replacement",
      description:
        "Keep your employees and assets secure. Professional lock replacement tailored for businesses."
    },
    {
      icon: <FaFingerprint />,
      title: "Keyless Entry Solutions",
      description:
        "From homes to offices, keyless systems give you convenience + safety in one. Welcome to the future of locks."
    }
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <h2 className={styles.sectionTitle}>Our Locksmith Services</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className={styles.mySwiper}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
