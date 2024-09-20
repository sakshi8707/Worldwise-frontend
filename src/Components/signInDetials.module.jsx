const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    /* Your existing styles for form container */
  },
  notificationContainer: {
    position: "fixed",
    top: "10px",
    right: "10px",
    backgroundColor: "#f0f8ff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notificationBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
  signOutButton: {
    backgroundColor: "#ff6347",
    border: "none",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  },
};

export default styles;
