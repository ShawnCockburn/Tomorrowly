import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionButton from 'react-native-action-button';
import Header from '../../components/header/header';
import TodoCard from '../../components/todoItem/todoCard';
import { Theme } from '../../constants/Theme';

const HomeScreen = () => {
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

    //todo remove this test data and add redux
    const [listViewData, setListViewData] = useState([{ key: `${1}`, text: `item #${1}` }]);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>Today</Header>
            <SwipeListView
                data={listViewData}
                keyExtractor={(item, index) => item.text}
                renderItem={(data, rowMap) => (
                    <TodoCard>{data.item.text}</TodoCard>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <></>
                )}
                leftOpenValue={75}
                stopRightSwipe={1}
                onRowOpen={item => { setListViewData([...listViewData.filter((e,i) => i !== (item-1))])}}
            />
            <ActionButton
                buttonColor={theme.colors.primary}
                onPress={() => { setListViewData([...listViewData, { key: `${listViewData.length+1}`, text: `item #${listViewData.length+1}` }])}}
                shadowStyle={styles.actionButtonShadow}
                position="center"
            />
        </SafeAreaView>
    )
}

export default HomeScreen;

