import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Theme } from "../../constants/Theme";
import Card from "./card";

const gradientCard = props => {
    const theme = Theme();
    const styles = StyleSheet.create({
        defaultCard: {
            borderRadius: 5
        },
        outer: {
            overflow: "hidden",
            flex: 1,
            borderRadius: 5
        },
        inner: {
            flex: 1
        }
    });
    return (
        <Card style={{ ...styles.defaultCard, ...props.style }}>
            <View style={styles.outer}>
                <LinearGradient
                    colors={props.gradientColors ? props.gradientColors : ['#fff', '#fff']}
                    style={{ ...styles.inner }}
                    start={[0.45, -1.5]}
                    end={[0.65, 2.0]}
                >
                    {props.children}
                </LinearGradient>
            </View>
        </Card>
    );
};

export default gradientCard;
