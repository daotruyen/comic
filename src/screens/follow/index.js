//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {CustomText} from '../../components/CustomText';
import Header from '../../components/Header';
import images, {imageDemo} from '../../config/images';
import ItemFollow from './com/ItemFollow';

// create a component
const FollowComicScreen = () => {
  const renderItem = ({item}) => <ItemFollow item={item} />;

  return (
    <View style={styles.container}>
      <Header />
      <View style={{flexDirection: 'row', padding: 8, paddingVertical: 12}}>
        <Image
          source={images.bottomTab.follow}
          style={{width: 30, height: 30}}
        />
        <CustomText
          children={'Đang theo dõi'}
          style={{fontWeight: 'bold', paddingLeft: 8}}
          size={20}
        />
      </View>
      <FlatList
        data={imageDemo}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={index => index + Math.random()}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          alignItems: 'flex-start',
        }}
        style={{marginBottom: 80}}
        // style={{flex: 1}}
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
