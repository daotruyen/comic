//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {CustomText} from '../../components/CustomText';
import images from '../../config/images';
import Colors from '../../utils/colors';

// create a component
const ItemComic = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rank}>
        <CustomText children={'1'} style={{color: Colors.white}} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{paddingRight: 10}}>
          <Image source={images.logo} style={{width: 60, height: 60}} />
        </View>

        <View style={{flex: 1}}>
          <CustomText
            children={'than khai'}
            size={18}
            style={{fontWeight: 'bold'}}
          />
          <View style={styles.info}>
            <CustomText children={'chap'} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={images.view}
                style={{width: 18, height: 18, marginRight: 5}}
              />
              <CustomText children={'view'} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  rank: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 26,
    height: 26,
    alignItems: 'center',
    borderRadius: 15,
    top: 5,
    left: 5,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default ItemComic;
