//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import images from '../../../config/images';

// create a component
const ItemFollow = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={images.view} style={{width: 150, height: 200 * 386/266}}/>
                <View>
                    <View></View>
                </View>
            </View>
            <View>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ItemFollow;
