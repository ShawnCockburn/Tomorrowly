import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionButton from 'react-native-action-button';
import Header from '../../components/header/header';
import TodoCard from '../../components/todoItem/todoCard';
import { Theme, generateGradientArray } from '../../constants/Theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, tomTodo, comTodo, uncompTodo, todTodo } from '../../store/actions/todos';
import Todo from "../../data/models/todo";
import { MaterialIcons } from "@expo/vector-icons";
import uidGenerator from '../../util/uidGenerator';
import _ from "lodash";
import { getDueDate, isLater, getToday, getTomorrow } from '../../util/dateHelper';


const TaskList = ({ navigation, route }) => {

    const theme = Theme();
    const styles = StyleSheet.create({
        actionButtonIcon: {
            fontSize: 20,
            height: 22,
            color: 'white'
        },
        actionButtonShadow: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 3
        },
        bottomBar: {
            width: "100%",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            paddingHorizontal: 30,
            paddingBottom: 38
        }
    });

    const ROUTE_NAMES = route.params.ROUTE_NAMES;

    const NAV_TO = {
        BACK: "BACK",
        NEXT: "NEXT"
    }
    const navTo = navTo => {
        if (navTo === NAV_TO.BACK) {
            switch (route.name) {
                case ROUTE_NAMES.TODAY:
                    return navigation.navigate(ROUTE_NAMES.COMPLETED);
                case ROUTE_NAMES.TOMORROW:
                    return navigation.navigate(ROUTE_NAMES.TODAY);
                default:
                    break;
            }
        } else {
            switch (route.name) {
                case ROUTE_NAMES.COMPLETED:
                    return navigation.navigate(ROUTE_NAMES.TODAY);
                case ROUTE_NAMES.TODAY:
                    return navigation.navigate(ROUTE_NAMES.TOMORROW);
                default:
                    break;
            }
        }
    };

    const todos = useSelector(state => state.todos.todos);

    const filterTodos = () => {
        switch (route.name) {
            case ROUTE_NAMES.TODAY:
                return todos.filter(todo => todo.completed !== true && isLater(todo.dueDate) === false);
            case ROUTE_NAMES.TOMORROW:
                return todos.filter(todo => todo.completed !== true && isLater(todo.dueDate) === true);
            default:
                return todos.filter(todo => todo.completed === true);
        }
    };

    const dispatch = useDispatch();

    const headerText = () => {
        switch (route.name) {
            case ROUTE_NAMES.COMPLETED:
                return "Tasks";
            case ROUTE_NAMES.TOMORROW:
                return getTomorrow().toLocaleString().substring(0, getTomorrow().toLocaleString().lastIndexOf(","));
            case ROUTE_NAMES.TODAY:
                return getToday().toLocaleString().substring(0, getToday().toLocaleString().lastIndexOf(","));
            default:
                return undefined;
        }
    };

    return (

        <LinearGradient
            colors={[theme.colors.secondary, theme.colors.background]}
            style={{ flex: 1 }}
            start={[0.15, -0.6]}
            end={[0.95, 0.6]}
        >
            <SafeAreaView style={{ flex: 1 }}>

                <Header subtitle={headerText()}>{_.upperFirst(_.lowerCase(route.name))}</Header>
                <SwipeListView
                    showsVerticalScrollIndicator={false}
                    data={filterTodos()}
                    keyExtractor={(item, index) => item.id}
                    renderItem={(data, rowMap) => (
                        <TodoCard todo={data.item} />
                    )}
                    renderHiddenItem={(data, rowMap) => (
                        <></>
                    )}
                    right
                    disableLeftSwipe={route.name === ROUTE_NAMES.COMPLETED ? true : false}
                    disableRightSwipe={route.name === ROUTE_NAMES.TOMORROW ? true : false}
                    leftActivationValue={200}
                    rightActivationValue={-200}
                    onLeftActionStatusChange={data => {
                        if (data.isActivated) dispatch(route.name === ROUTE_NAMES.COMPLETED ? uncompTodo(data.key) : tomTodo(data.key));
                    }}
                    onRightActionStatusChange={data => {
                        if (data.isActivated) dispatch(route.name === ROUTE_NAMES.TODAY ? comTodo(data.key) : todTodo(data.key))
                    }}
                    tension={200}
                />
                <View style={styles.bottomBar}>
                    <TouchableWithoutFeedback onPress={() => navTo(NAV_TO.BACK)} hitSlop={30}>
                        <MaterialIcons style={{ opacity: route.name === ROUTE_NAMES.COMPLETED ? 0 : 1 }} name="keyboard-arrow-left" size={30} color={theme.colors.text} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navTo(NAV_TO.NEXT)} hitSlop={30}>
                        <MaterialIcons style={{ opacity: route.name === ROUTE_NAMES.TOMORROW ? 0 : 1 }} name="keyboard-arrow-right" size={30} color={theme.colors.text} />
                    </TouchableWithoutFeedback>
                </View>
                {route.name !== ROUTE_NAMES.COMPLETED ? (<ActionButton
                    buttonColor={theme.colors.secondary}
                    buttonTextStyle={{ color: theme.colors.text }}
                    onPress={
                        async () => {
                            // navigation.navigate("INPUT")
                            dispatch(addTodo(
                                new Todo(
                                    await uidGenerator(),
                                    getDueDate(new Date()),
                                    "Test",
                                    "",
                                    generateGradientArray(),
                                    {},
                                    false)
                            ));
                        }}
                    shadowStyle={styles.actionButtonShadow}
                    position="center"
                />) : <></>}
            </SafeAreaView>

        </LinearGradient>
    )
}

export default TaskList;