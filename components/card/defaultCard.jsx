import React from 'react';
import { StyleSheet } from 'react-native';

import { Theme } from "../../constants/Theme";
import Card from "./card";

const defaultCard = props => {
    const theme = Theme();
    const styles = StyleSheet.create({
        defaultCard: {
            borderRadius:5,
            padding: 10
        }
    });
    return (
        <Card style={{ ...styles.defaultCard, ...props.style }}>
            {props.children}
        </Card>
    );
};

export default defaultCard;
