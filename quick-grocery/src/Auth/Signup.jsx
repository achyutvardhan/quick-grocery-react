import React, { useState } from "react";
import styles from "../css/signup.module.css"; // Import the new CSS module
import { Link } from "react-router";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    // Handle signup logic here
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <h2 className={styles.title}>Create Account</h2>
        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="signup-name" className={styles.label}>
              Full Name
            </label>
            <input
              type="text"
              id="signup-name"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="John Doe"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="signup-email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="signup-email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="signup-password" className={styles.label}>
              Password
            </label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                id="signup-password"
                className={`${styles.input} ${styles.passwordInput}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
              <button
                type="button"
                className={styles.showPasswordButton}
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={styles.eyeIcon}
                  >
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path
                      fillRule="evenodd"
                      d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={styles.eyeIcon}
                  >
                    <path d="M13.875 12.825A10.065 10.065 0 0110 14.5c-4.257 0-7.893-2.66-9.336-6.41a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c.996 0 1.953.138 2.863.395L14.4 2.25A11.96 11.96 0 0010 1.5C4.475 1.5.75 6.362.75 10a11.96 11.96 0 005.026 5.975L3.25 17.5a.75.75 0 001.06 1.06l12-12a.75.75 0 00-1.06-1.06L13.875 12.825z" />
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path
                      fillRule="evenodd"
                      d="M10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1.5a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="signup-confirm-password" className={styles.label}>
              Confirm Password
            </label>
            <div className={styles.passwordWrapper}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="signup-confirm-password"
                className={`${styles.input} ${styles.passwordInput}`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className={styles.showPasswordButton}
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                tabIndex={-1}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={styles.eyeIcon}
                  >
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path
                      fillRule="evenodd"
                      d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={styles.eyeIcon}
                  >
                    <path d="M13.875 12.825A10.065 10.065 0 0110 14.5c-4.257 0-7.893-2.66-9.336-6.41a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c.996 0 1.953.138 2.863.395L14.4 2.25A11.96 11.96 0 0010 1.5C4.475 1.5.75 6.362.75 10a11.96 11.96 0 005.026 5.975L3.25 17.5a.75.75 0 001.06 1.06l12-12a.75.75 0 00-1.06-1.06L13.875 12.825z" />
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path
                      fillRule="evenodd"
                      d="M10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1.5a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
        <div className={styles.footer}>
          <span>Already have an account?</span> <Link to={"/Login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
