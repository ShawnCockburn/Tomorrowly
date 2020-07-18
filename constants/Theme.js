import { useColorScheme } from 'react-native-appearance';
import { StatusBar } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const customDarkTheme = {
    ...DarkTheme
};
export const customLightTheme = {
    ...DefaultTheme
};


export const Theme = () => {
    const scheme = useColorScheme();
    // const scheme = "dark";

    StatusBar.setBarStyle(scheme === 'dark' ? "light-content" : "dark-content");
    return scheme === 'dark' ? customDarkTheme : customLightTheme;
};