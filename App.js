import React, { useState } from 'react';
import Navigation from "./navigation/navigation";
import * as Font from "expo-font"
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'Ubuntu-Bold': require("./assets/fonts/Ubuntu-Bold.ttf"),
    'Ubuntu-Medium': require("./assets/fonts/Ubuntu-Medium.ttf"),
    'Ubuntu-Regular': require("./assets/fonts/Ubuntu-Regular.ttf"),
    'Ubuntu-Light': require("./assets/fonts/Ubuntu-Light.ttf")
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
  } else {
    return (
      <Navigation/>
    );
  }
}

export default App;


