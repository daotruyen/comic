//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {CustomText} from '../../../components/CustomText';
import {AppConstant} from '../../../config/constants';
import images from '../../../config/images';
import Colors from '../../../utils/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// create a component
const ItemHotComic = ({item}) => {
  const layout = useWindowDimensions();
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <View>
        <View style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
          <Image
            source={images.null}
            style={{
              backgroundColor: 'red',
              width: 200,
              height: 200 * AppConstant.ratio,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: Colors.light_blue,
            paddingVertical: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <EvilIcons size={20} color={Colors.white} name="eye" />
            <CustomText children={'1,200'} style={{color: Colors.white}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome size={20} color={Colors.red} name="heart" />
            <CustomText children={'200'} style={{color: Colors.white}} />
          </View>
        </View>
      </View>
      <View style={{padding: 8}}>
        <CustomText
          children={'DDo thi chinghix thiend tosnd'}
          style={{fontWeight: '500'}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CustomText children={'Chap 1001'} size={13} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <EvilIcons size={20} color={Colors.black} name="clock" />
            <CustomText children={'20/12/1002'} size={13} />
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: 200,
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: Colors.white200,
  },
  button: {
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 99,
    right: 0,
    top: 10,
    padding: 3,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
});

//make this component available to the app
export default ItemHotComic;
