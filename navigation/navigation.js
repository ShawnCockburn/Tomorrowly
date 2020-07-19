import * as React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TaskList from "./screens/taskList";
import TaskModal from "./screens/taskModal";
import { Theme } from "../constants/Theme";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const ROUTE_NAMES = {
  COMPLETED: "COMPLETED",
  TODAY: "TODAY",
  TOMORROW: "TOMORROW",
  INPUT: "INPUT"
}

const Main = () => (
  <Tab.Navigator headerMode="none" screenOptions={{ tabBarVisible: false }} initialRouteName={ROUTE_NAMES.TODAY}>
    <Tab.Screen name={ROUTE_NAMES.COMPLETED} component={TaskList} initialParams={{ ROUTE_NAMES: ROUTE_NAMES }} />
    <Tab.Screen name={ROUTE_NAMES.TODAY} component={TaskList} initialParams={{ ROUTE_NAMES: ROUTE_NAMES }} />
    <Tab.Screen name={ROUTE_NAMES.TOMORROW} component={TaskList} initialParams={{ ROUTE_NAMES: ROUTE_NAMES }} />
  </Tab.Navigator>
);

const Modal = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={ROUTE_NAMES.INPUT} component={TaskModal} />
  </Stack.Navigator>
);

const Navigation = () => {
  return (
    <AppearanceProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={Theme()}>
          <RootStack.Navigator headerMode="none" >
            <RootStack.Screen name="main" component={Main} />
            <RootStack.Screen name="modal" component={Modal} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppearanceProvider>
  );
}

export default Navigation;
