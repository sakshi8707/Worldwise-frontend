import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


  const showToast = (type, message) => {
    const options = {
      position: "top-center",
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      className: "custom-toast",
      style: {
        backgroundColor: "var(--color-dark--1)",
      },
  progressStyle: {
      backgroundColor: type === "error" ? "red" : "var(--color-brand--2)",
    },
  
    };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    case "warning":
      toast.warning(message, options);
      break;
    default:
      toast(message, options);
  }
};

export {showToast };