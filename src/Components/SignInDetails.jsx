import React from "react";
import { useAuth } from "../Contexts/FakeAuthContext";
import styles from "../pages/AnimatedStyle"; // Import the styles

function SigninDetails() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) return null; // Do not render if not authenticated

  return (
    <div style={styles.notificationContainer}>
      <div style={styles.notificationBox}>
        <img src={user.avatar} alt={user.name} style={styles.avatar} />
        <p>{user.name}, you have logged in successfully! 🎉</p>
        <button onClick={logout} style={styles.signOutButton}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default SigninDetails;
