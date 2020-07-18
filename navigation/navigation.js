import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from "./screens/home";
import { Theme } from "../constants/Theme";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <AppearanceProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={Theme()}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppearanceProvider>
  );
}

export default Navigation;
