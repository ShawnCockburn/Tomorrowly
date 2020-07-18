import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Theme } from "../../constants/Theme";

const DefaultText = props => {
    const theme = Theme();
    const styles = StyleSheet.create({
        defaultText:{
            fontFamily: "Ubuntu-Regular",
            color: theme.colors.text
        }
    });
    return (
        <Text style={{ ...styles.defaultText, ...props.style }}>
            {props.children}
        </Text>
    );
};

export default DefaultText;
