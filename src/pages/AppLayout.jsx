import Map from "../Components/Map";
import Sidebar from "../Components/Sidebar";
import styles from "./AppLayout.module.css";
import User from "../Components/User.jsx";

import { useCities } from "../Contexts/CitiesContext";

function AppLayout() {
  const { cities } = useCities();

  return (
    <div className={styles.app}>
      <Sidebar />

      <User />
      <div className={styles.mapContainer}>
        <Map cities={cities} />
      </div>
    </div>
  );
}

export default AppLayout;
