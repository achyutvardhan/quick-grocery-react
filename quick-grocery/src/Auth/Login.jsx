import React, { useEffect, useState, useContext } from "react";
import styles from "../css/login.module.css";
import { Link } from "react-router";
import { LoginFetch } from "../js/ProfileFetch";
import { AuthContext } from "../context/AuthContext";
import { ProfileContext } from "../context/ProfileContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const { setProfile } = useContext(ProfileContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    const checkProfile = async () => {
      const result = await LoginFetch(email, password);
      if (result?.status) {
        console.log("loggedin");
        const profile = result?.data;
        login();
        setProfile(profile);
      } else {
        setError(`${result.message}`);
      }
    };
    checkProfile();
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Welcome Back!</h2>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="login-email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="login-email"
              name="login-email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
              placeholder="you@example.com"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="login-password" className={styles.label}>
              Password
            </label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                id="login-password"
                name="login-password"
                className={`${styles.input} ${styles.passwordInput}`} // Combine styles
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className={styles.showPasswordButton}
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1} // Keep it out of tab order
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

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
        <div className={styles.footer}>
          <span>Don't have an account?</span>{" "}
          <Link to={"/Signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
