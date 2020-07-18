import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionButton from 'react-native-action-button';
import Header from '../../components/header/header';
import TodoCard from '../../components/todoItem/todoCard';
import { Theme, generateGradientArray } from '../../constants/Theme';
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, addTodo, delTodo } from '../../store/actions/todos';
import Todo from "../../data/models/todo";
import DueDate from "../../data/models/dueDate";
import uidGenerator from '../../util/uidGenerator';

const HomeScreen = () => {

    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

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
        }
    });

    const today = {
        // year: 2020,
        // month: 07,
        // day: 18
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>Today</Header>
            <SwipeListView
                data={todos}
                keyExtractor={(item, index) => item.id}
                renderItem={(data, rowMap) => (
                    <TodoCard todo={data.item} />
                )}
                renderHiddenItem={(data, rowMap) => (
                    <></>
                )}
                leftOpenValue={75}
                stopRightSwipe={1}
                onRowOpen={id => { dispatch(delTodo(id))}}
            />
            <ActionButton
                buttonColor={theme.colors.primary}
                onPress={async () => {
                    dispatch(addTodo(
                        new Todo(
                            await uidGenerator(),
                            today,
                            "Test",
                            "",
                            generateGradientArray(),
                            {},
                            false)
                    ));
                }}
                shadowStyle={styles.actionButtonShadow}
                position="center"
            />
        </SafeAreaView>
    )
}

export default HomeScreen;

