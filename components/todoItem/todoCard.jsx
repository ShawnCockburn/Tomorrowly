import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GradientCard from '../../components/card/gradientCard';
import DefaultText from '../../components/text/defaultText';
import { Theme } from '../../constants/Theme';
import CheckBox from "../interactives/checkbox";

const TodoCard = props => {
    const theme = Theme();
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
            paddingHorizontal: 15,
        },
        title: {
            color: "#fff"
        }
    });

    const [isSelected, setSelection] = useState(true);

    return (
        <GradientCard style={styles.card} gradientColors={props.todo.gradient}>
            <View style={styles.innerCard}>
                <DefaultText style={styles.title}>
                    {props.todo.title}
                </DefaultText>
            </View>
        </GradientCard>
    )

}

export default TodoCard;

