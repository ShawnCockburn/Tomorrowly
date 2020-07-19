import { useColorScheme } from 'react-native-appearance';
import { StatusBar } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import _ from "lodash";

export const customDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        ...{
            primary: "#ff5e57",
            secondary: "#1e272e",
            // background: "#0e0e0e",
            card: "#485460",
            text: "#fff",
            border: "black",
            notification: "#f43789"
        }
    }
};
export const customLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...{
            primary: "#ff5e57",
            secondary: "white",
            background: "#f0f6fb",
            notification: "#f43789"
        }
    }
};


export const Theme = () => {
    // const scheme = useColorScheme();
    const scheme = "dark";

    StatusBar.setBarStyle(scheme === 'dark' ? "light-content" : "dark-content");
    return scheme === 'dark' ? customDarkTheme : customLightTheme;
};

export const generateGradientArray = colorQuantity => {
    const colors = [
        "#2C3E50",
        "#FD746C",
        "#405de6",
        "#5851db",
        "#833ab4",
        "#c13584",
        "#e1306c",
        "#fd1d1d",
        "#e96443",
        "#904e95",
        "#A43931",
        "#1D4350"
    ];
    return _.sampleSize(colors, colorQuantity > 0 ? colorQuantity : 2);
};