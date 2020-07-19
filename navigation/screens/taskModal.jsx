import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header/header';
import { Theme } from '../../constants/Theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from '../../store/actions/todos';
import Todo from "../../data/models/todo";
import { MaterialIcons } from "@expo/vector-icons";
import uidGenerator from '../../util/uidGenerator';
import _ from "lodash";
import { getDueDate, getToday, getTomorrow } from '../../util/dateHelper';

const TaskList = ({ navigation, route }) => {
    const theme = Theme();
    const styles = StyleSheet.create({
       
    });

    return (

        <LinearGradient
            colors={[theme.colors.secondary, theme.colors.background]}
            style={{ flex: 1 }}
            start={[0.15, -0.6]}
            end={[0.95, 0.6]}
        >
            <SafeAreaView style={{ flex: 1 }}>

                <Header>{_.upperFirst("new task")}</Header>
                
            </SafeAreaView>

        </LinearGradient>
    )
}

export default TaskList;