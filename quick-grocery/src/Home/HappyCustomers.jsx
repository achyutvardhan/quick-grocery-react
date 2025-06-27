import React from "react";
import styles from "../css/HappyCustomers.module.css";

const testimonials = [
  {
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "QuickGrocery made my weekly shopping so easy! Fast delivery and fresh products every time.",
  },
  {
    name: "Rahul Verma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Great selection and amazing customer service. Highly recommend to everyone!",
  },
  {
    name: "Aisha Khan",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Love the app! The deals and convenience are unbeatable.",
  },
];

export default function HappyCustomers() {
  return (
    <section className={styles.happySection}>
      <h2 className={styles.title}>Happy Customers</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((c, i) => (
          <div className={styles.testimonialCard} key={i}>
            <img src={c.image} alt={c.name} className={styles.avatar} />
            <p className={styles.text}>"{c.text}"</p>
            <div className={styles.name}>{c.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}