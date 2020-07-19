import * as React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TaskList from "./screens/taskList";
import { Theme } from "../constants/Theme";

const Tab = createBottomTabNavigator();

const ROUTE_NAMES = {
  COMPLETED: "COMPLETED",
  TODAY: "TODAY",
  TOMORROW: "TOMORROW"
}

const Navigation = () => {
  return (
    <AppearanceProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={Theme()}>
          <Tab.Navigator headerMode="none" screenOptions={{ tabBarVisible: false }} initialRouteName={ROUTE_NAMES.TODAY}>
            <Tab.Screen name={ROUTE_NAMES.COMPLETED} component={TaskList} initialParams={{ ROUTE_NAMES: ROUTE_NAMES }}/>
            <Tab.Screen name={ROUTE_NAMES.TODAY} component={TaskList} initialParams={{ ROUTE_NAMES: ROUTE_NAMES }}/>
            <Tab.Screen name={ROUTE_NAMES.TOMORROW} component={TaskList} initialParams={{ ROUTE_NAMES: ROUTE_NAMES }}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppearanceProvider>
  );
}

export default Navigation;
