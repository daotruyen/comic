import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import images from '../../config/images';
import {CustomText} from '../../components/CustomText';

export default function ProfileScreen() {
  return (
    <View style={{felx: 1}}>
      <Header />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 70}}>
        <Image
          source={images.logo}
          style={{width: 100, height: 100, borderRadius: 100}}
        />
        <CustomText
          children={'Name'}
          size={20}
          style={{fontWeight: 'bold', paddingVertical: 10}}
        />
      </View>
      <View style={{}}>
        <View style={{}}>
          <ItemProfie />
          <ItemProfie />
          <ItemProfie />
          <ItemProfie />
        </View>
        <View style={{}}>
          <ItemProfie />
        </View>
      </View>
    </View>
  );
}

const ItemProfie = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 0.5,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={images.bottomTab.profile}
          style={{width: 20, height: 20}}
        />
        <CustomText children={'Edit profile'} style={{paddingLeft: 10}} />
      </View>
      <Image source={images.next} style={{width: 20, height: 20}} />
    </TouchableOpacity>
  );
};
