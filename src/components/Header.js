//import liraries
import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import images from '../config/images';
import Colors from '../utils/colors';
import {CustomText} from './CustomText';

// create a component
const Header = () => {
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Image source={images.logo} />
          <CustomText
            children={'ShopComic'}
            style={styles.textLogo}
            size={20}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <CustomText children={'Login'} style={{color: Colors.white}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lineBlack,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  button: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  logo: {flexDirection: 'row', alignItems: 'center'},
  textLogo: {paddingLeft: 5, fontWeight: 'bold'},
});

//make this component available to the app
export default Header;
