import React, { useState, useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { ProfileContext } from "../context/ProfileContext";
import { AuthContext } from "../context/AuthContext";

export default function ProfileDropdown({  }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { profile } = useContext(ProfileContext);
  const { logout } = useContext(AuthContext);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="profile-dropdown"
      ref={dropdownRef}
      style={{
        position: "relative",
        display: "inline-block",
        zIndex: 100,
      }}
    >
      <button
        className="profile-icon-btn"
        onClick={() => setOpen((prev) => !prev)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Profile menu"
      >
        <FontAwesomeIcon icon={faUserCircle} size="2x" color="#38a169" />
      </button>
      {open && (
        <div
          className="dropdown-menu"
          style={{
            position: "absolute",
            right: 0,
            top: "100%",
            marginTop: "8px",
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(56,161,105,0.12)",
            minWidth: "180px",
            zIndex: 9999,
            padding: "0.5rem 0",
            transition: "box-shadow 0.2s",
          }}
        >
          <Link
            to={`/profile/${profile?.id}`}
            className="dropdown-item"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              background: "none",
              border: "none",
              padding: "0.75rem 1.5rem",
              textAlign: "left",
              cursor: "pointer",
              fontSize: "1rem",
              color: "#22543d",
              textDecoration: "none",
              fontWeight: 500,
              transition: "background 0.15s",
            }}
            onClick={() => {
              setOpen(false);
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#f0fff4")}
            onMouseOut={(e) => (e.currentTarget.style.background = "none")}
          >
            <FontAwesomeIcon
              icon={faUser}
              style={{ marginRight: "0.75rem", color: "#38a169" }}
            />
            Profile
          </Link>
          <button
            className="dropdown-item"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              background: "none",
              border: "none",
              padding: "0.75rem 1.5rem",
              textAlign: "left",
              cursor: "pointer",
              fontSize: "1rem",
              color: "#e53e3e",
              fontWeight: 500,
              transition: "background 0.15s",
            }}
            onClick={() => {
              logout();
              setOpen(false);
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#fff5f5")}
            onMouseOut={(e) => (e.currentTarget.style.background = "none")}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ marginRight: "0.75rem", color: "#e53e3e" }}
            />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
