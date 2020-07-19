import React, { useState, useEffect } from "react";
import { StyleSheet, View } from 'react-native';
import { Theme } from "../../constants/Theme";
import DefaultText from '../text/defaultText';

const header = props => {
    const [time, setTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        let secTimer = setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(secTimer);
    }, []);

    const theme = Theme();
    const styles = StyleSheet.create({
        header: {
            padding: 20,
            alignContent: "center",
            alignItems: "center"
        },
        headerTextLarge: {
            fontSize: 30
        },
        headerTextSmall: {
            fontSize: 12,
            fontFamily: "Ubuntu-Light"
        }
    });
    return (
        <View style={{ ...styles.header, ...props.style }}>
            <DefaultText style={styles.headerTextLarge}>
                {props.children}
            </DefaultText>
            <DefaultText style={styles.headerTextSmall}>
                {props.subtitle ? props.subtitle: time}
            </DefaultText>
        </View>
    );
};

export default header;
