import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { IoPersonCircleSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai"; // for stars
import styles from './testimonials.module.css';

// Testimonials array
const testimonials = [
  { name: "Anna M.", comment: "Excellent service! My car key was duplicated in minutes." },
  { name: "Carlos P.", comment: "Very reliable and fast. Highly recommended." },
  { name: "Lucy R.", comment: "Saved my day! I lost my house key and they helped instantly." },
  { name: "George S.", comment: "Professional and attentive, the best key duplication service." },
  { name: "Sofia L.", comment: "Fast, safe, and reliable. I’ll definitely come back!" },
];

export default function Testimonials() {
  return (
    <div className={styles.main_container} id="testimonials">
      <h1 className={styles.title}>Testimonials</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className={styles.Swiper_Slide}>
            <div className={styles.card}>
              <IoPersonCircleSharp className={styles.avatar} />
              <h3>{t.name}</h3>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} color="#FFD700" />
                ))}
              </div>
              <p>{t.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
