import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import GradientCard from '../../components/card/gradientCard';
import DefaultText from '../../components/text/defaultText';


const TodoCard = props => {
    const styles = StyleSheet.create({
        card: {
            flex: 1,
            height: 70,
            margin: 10
        },
        innerCard: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10
        },
        title: {
            color: "#fff"
        },
    });

    return (
        <GradientCard style={styles.card} gradientColors={["#405de6", "#5851db", "#833ab4", "#c13584", "#e1306c", "#fd1d1d"]}>
            <View style={styles.innerCard}>
                <DefaultText style={styles.title}>
                {props.children}
                </DefaultText>
            </View>
        </GradientCard>
    )

}

export default TodoCard;

