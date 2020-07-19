import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/Theme';
import { TouchableHighlight } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';


const CheckBox = props => {
    const theme = Theme();
    const [isSelected, setSelection] = useState(true);

    const styles = StyleSheet.create({
        checkbox: {
            alignSelf: "center",
            height: 25,
            width: 25,
            borderRadius: 5,
            borderWidth: 0,
            backgroundColor: isSelected ? theme.colors.notification : "grey",
            opacity: isSelected ? 1 : 0.5         
          }
    });

    return (
        <TouchableHighlight onPress={() => {
            Haptics.impactAsync("heavy")
            setSelection(!isSelected);
            if (props.onPress) props.onPress();
        }}
        style={styles.checkbox}
        >
            
        </TouchableHighlight>
    )

}

export default CheckBox;

