import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Theme } from "../../constants/Theme";

const Card = props => {
    const theme = Theme();
    const styles = StyleSheet.create({
        card: {
            backgroundColor: theme.colors.card,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 3
        }
    });
    return (
        <TouchableOpacity style={{ ...styles.card, ...props.style }}>
            {props.children}
        </TouchableOpacity>
    );
};

export default Card;
