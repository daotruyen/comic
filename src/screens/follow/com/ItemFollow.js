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

// create a component
const ItemFollow = ({item}) => {
  const layout = useWindowDimensions();
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <CustomText children={'Login'} style={{color: Colors.white}} />
        </TouchableOpacity>
        <View style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
          <Image
            source={images.null}
            style={{
              backgroundColor: 'red',
              width: layout.width / 2 - 16,
              height: (layout.width / 2 - 16) * AppConstant.ratio,
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
          }}>
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
            <CustomText children={'view'} style={{color: Colors.white}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={images.bottomTab.follow_active}
              style={{width: 18, height: 18, marginRight: 5}}
            />
            <CustomText children={'view'} style={{color: Colors.white}} />
          </View>
        </View>
      </View>
      <View style={{padding: 8}}>
        <CustomText
          children={'DDo thi chinghix thiend tosnd'}
          style={{fontWeight: '500'}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CustomText children={'Chaper'} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={images.clock}
              style={{width: 18, height: 18, marginRight: 5}}
            />
            <CustomText children={'view'} />
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
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
export default ItemFollow;
