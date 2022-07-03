import React from "react";

// Dependencies
import { useFonts } from "expo-font";

import GameContainer from "./src/components/GameContainer";

const App = () => {
  const [fontsLoaded] = useFonts({
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    MontserratLight: require("./assets/fonts/Montserrat-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <GameContainer />;
};

export default App;
