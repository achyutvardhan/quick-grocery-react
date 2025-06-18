import React, { useState, useRef, useEffect , useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { ProfileContext } from "../context/ProfileContext";
import { AuthContext } from "../context/AuthContext";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {profile} = useContext(ProfileContext)
  const {logout} = useContext(AuthContext)
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
      style={{ position: "relative", display: "inline-block" }}
    >
      <button
        className="profile-icon-btn"
        onClick={() => setOpen((prev) => !prev)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
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
            top: "2.5rem",
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            minWidth: "140px",
            zIndex: 1000,
          }}
        >
          <Link
            to={`/profile/${profile.id}`}
            className="dropdown-item"
            style={{
              width: "100%",
              background: "none",
              border: "none",
              padding: "0.75rem 1.25rem",
              textAlign: "left",
              cursor: "pointer",
              fontSize: "1rem",
              color: "#2f855a",
            }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "0.5rem" }} />{" "}
            Profile
          </Link>
          <button
            className="dropdown-item"
            style={{
              width: "100%",
              background: "none",
              border: "none",
              padding: "0.75rem 1.25rem",
              textAlign: "left",
              cursor: "pointer",
              fontSize: "1rem",
              color: "#e53e3e",
            }}
            onClick={() => {
                 logout();
              setOpen(false);
            }}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
