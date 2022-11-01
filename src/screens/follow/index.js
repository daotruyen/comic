//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import ItemFollow from './com/ItemFollow';

// create a component
const FollowComicScreen = () => {
    const renderItem = ({item}) => <ItemFollow />;

    return (
        <View style={styles.container}>
            <Header />
            <FlatList 
                data = {[1,2,3,4,5, 6]}
                numColumns = {2}
                renderItem = {renderItem}
                keyExtractor = {index => index + ""}
                columnWrapperStyle={{ justifyContent: 'space-around', alignItems: 'flex-start' }}
                style={{flex: 1}}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default FollowComicScreen;
