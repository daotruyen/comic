//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ItemComic from './ItemComic';

// create a component
const TopDay = () => {
  const renderItem = ({item}) => <ItemComic />;
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
        renderItem={renderItem}
        keyExtractor={item => item + ''}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 90,
  },
});

//make this component available to the app
export default TopDay;
