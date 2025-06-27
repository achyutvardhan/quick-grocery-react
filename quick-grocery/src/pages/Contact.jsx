import Loader from "../components/Loader";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../css/contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(form)
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          width: "100%",
        }}
      >
        <Loader color="#32cd32" size="medium" text="" textColor="" />
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
    >
      {/* Hero Banner */}
      <motion.section
        className={styles.heroBanner}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2>Contact Us</h2>
            <p>We're here to help with any questions or concerns</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className={styles.contactSection}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className={styles.container}>
          <motion.div
            className={styles.contactContainer}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <motion.div
              className={styles.contactInfo}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <h2>Get In Touch</h2>
              <p>
                We'd love to hear from you. Please fill out the form or use the
                contact information below.
              </p>
              <div className={styles.infoItem}>
                <h3>Address</h3>
                <p>
                  123 Grocery Lane
                  <br />
                  Fresh City, FC 12345
                </p>
              </div>
              <div className={styles.infoItem}>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+11234567890">(123) 456-7890</a>
                </p>
              </div>
              <div className={styles.infoItem}>
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@quickgrocery.com">
                    info@quickgrocery.com
                  </a>
                </p>
              </div>
              <div className={styles.infoItem}>
                <h3>Hours</h3>
                <p>
                  Monday - Friday: 9am - 8pm
                  <br />
                  Saturday: 9am - 6pm
                  <br />
                  Sunday: 10am - 5pm
                </p>
              </div>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  Facebook
                </a>
                <a href="#" className={styles.socialLink}>
                  Instagram
                </a>
                <a href="#" className={styles.socialLink}>
                  Twitter
                </a>
              </div>
            </motion.div>
            <motion.div
              className={styles.contactFormContainer}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <h2>Send a Message</h2>
              <div>
                {submitted ? (
                  <div className={styles.formSuccess}>
                    <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#43e97b"
                        opacity="0.2"
                      />
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#43e97b"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>
                      Thank you! Your message has been submitted successfully.
                    </p>
                  </div>
                ) : (
                  <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        required
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a subject</option>
                        <option value="order">Order Inquiry</option>
                        <option value="product">Product Information</option>
                        <option value="delivery">Delivery Issue</option>
                        <option value="return">Returns/Refunds</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Write your message here..."
                        required
                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className={styles.formCheck}>
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        checked={form.privacy}
                        onChange={handleChange}
                      />
                      <label htmlFor="privacy">
                        I agree to the privacy policy
                      </label>
                    </div>
                    <button
                      type="submit"
                      className={`${styles.btn} ${styles.btnFull}`}
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section - full width */}
      <div className={styles.mapContainer}>
        <div className={styles.mapInner}>
          <h2 className={styles.sectionTitle}>Find Us</h2>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203407197!2d78.24323352502226!3d17.412281016555596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1747129062628!5m2!1sen!2sin"
              className={styles.mapIframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section - full width */}
      <div className={styles.faqSection}>
        <div className={styles.faqInner}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            {/*
            [
              {
                q: "How do I track my order?",
                a: "You can track your order by logging into your account and navigating to the order history section. There, you'll find real-time updates on your order status.",
              },
              {
                q: "What are your delivery hours?",
                a: "We deliver from 9am to 9pm, seven days a week. You can select your preferred delivery window during checkout.",
              },
              {
                q: "How do I return a product?",
                a: "If you're not satisfied with a product, please contact our customer service within 24 hours of delivery, and we'll arrange a return or refund.",
              },
              {
                q: "Do you offer same-day delivery?",
                a: "Yes, we offer same-day delivery for orders placed before 2pm, subject to availability in your area.",
              },
            ].map((faq, i) => (
              <motion.div
                className={styles.faqItem}
                key={faq.q}
                whileHover={{
                  background: "rgba(50,205,50,0.13)",
                  boxShadow: "0 4px 24px rgba(50,205,50,0.10)",
                  backdropFilter: "blur(2px)",
                  borderRadius: "14px",
                  transition: { duration: 0.3 }
                }}
              >
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </motion.div>
            ))}
            */}
            <motion.div
              className={styles.faqItem}
              key="How do I track my order?"
              whileHover={{
                background: "rgba(50,205,50,0.13)",
                boxShadow: "0 4px 24px rgba(50,205,50,0.10)",
                backdropFilter: "blur(2px)",
                borderRadius: "14px",
                transition: { duration: 0.3 }
              }}
            >
              <h3>How do I track my order?</h3>
              <p>
                You can track your order by logging into your account and
                navigating to the order history section. There, you'll find
                real-time updates on your order status.
              </p>
            </motion.div>
            <motion.div
              className={styles.faqItem}
              key="What are your delivery hours?"
              whileHover={{
                background: "rgba(50,205,50,0.13)",
                boxShadow: "0 4px 24px rgba(50,205,50,0.10)",
                backdropFilter: "blur(2px)",
                borderRadius: "14px",
                transition: { duration: 0.3 }
              }}
            >
              <h3>What are your delivery hours?</h3>
              <p>
                We deliver from 9am to 9pm, seven days a week. You can select
                your preferred delivery window during checkout.
              </p>
            </motion.div>
            <motion.div
              className={styles.faqItem}
              key="How do I return a product?"
              whileHover={{
                background: "rgba(50,205,50,0.13)",
                boxShadow: "0 4px 24px rgba(50,205,50,0.10)",
                backdropFilter: "blur(2px)",
                borderRadius: "14px",
                transition: { duration: 0.3 }
              }}
            >
              <h3>How do I return a product?</h3>
              <p>
                If you're not satisfied with a product, please contact our
                customer service within 24 hours of delivery, and we'll arrange
                a return or refund.
              </p>
            </motion.div>
            <motion.div
              className={styles.faqItem}
              key="Do you offer same-day delivery?"
              whileHover={{
                background: "rgba(50,205,50,0.13)",
                boxShadow: "0 4px 24px rgba(50,205,50,0.10)",
                backdropFilter: "blur(2px)",
                borderRadius: "14px",
                transition: { duration: 0.3 }
              }}
            >
              <h3>Do you offer same-day delivery?</h3>
              <p>
                Yes, we offer same-day delivery for orders placed before 2pm,
                subject to availability in your area.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
