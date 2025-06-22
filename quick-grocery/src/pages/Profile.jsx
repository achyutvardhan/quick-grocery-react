import React, { useContext } from "react";
import styles from "../css/profile.module.css";
import { ProfileContext } from "../context/ProfileContext";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/Loader";

export default function Profile() {
  const { profile } = useContext(ProfileContext);
  const { noOfItems } = useContext(CartContext);

  if (!profile) {
    return (
      <div className={styles.loading}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
            width: "100%",
          }}
        >
          <Loader color="#32cd32" size="medium" text="" textColor="" />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "0.5rem" }} />{" "}
          </div>
          <h2 className={styles.name}>{profile.name}</h2>
          <p className={styles.email}>{profile.email}</p>
        </div>
        <div className={styles.infoSection}>
          <h3>Account Details</h3>
          <ul className={styles.infoList}>
            <li>
              <strong>User ID:</strong> {profile.id}
            </li>
            <li>
              <strong>Name:</strong> {profile.name}
            </li>
            <li>
              <strong>Email:</strong> {profile.email}
            </li>
            <li>
              <strong>Items in Cart:</strong> {noOfItems()}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
