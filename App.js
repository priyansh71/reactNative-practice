/** @format */

import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Drawer from "./routes/Drawer";

const App = () => {
  let [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/regular.ttf"),
    semibold: require("./assets/fonts/semibold.ttf"),
    light: require("./assets/fonts/light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Drawer />;
  }
};

export default App;