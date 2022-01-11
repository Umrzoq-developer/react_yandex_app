import React from "react";
import styles from "./index.module.scss";
import { YMaps, Map } from "react-yandex-maps";

const App = () => {
  const mapState = {
    center: [55.73, 37.9],
    zoom: 10,
  };
  return (
    <div>
      <h1 className={styles.text}>Hello Wepack!</h1>
      <YMaps
        query={{
          ns: "use-load-options",
          apikey: "e3e687ba-3f11-4a48-92de-55ca45ab88b9",
          load: "Map,control.GeolocationControl,control.FullscreenControl",
        }}
      >
        <Map defaultState={mapState}></Map>
      </YMaps>
    </div>
  );
};

export default App;
