import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {TypeComic, TypeList} from '../../config/constants';
import {CustomText} from '../../components/CustomText';
import Colors from '../../utils/colors';
import ItemFollow from '../follow/com/ItemFollow';
import {imageDemo} from '../../config/images';

export default function TypeComicScreen() {
  const [indexTypeComic, setIndexTypeComic] = React.useState(0);
  const renderList = ({item}) => (
    <TouchableOpacity
      style={[
        {padding: 5},
        indexTypeComic === item.id && {
          backgroundColor: 'red',
          borderRadius: 8,
          color: Colors.white,
        },
      ]}
      onPress={() => setIndexTypeComic(item.id)}>
      <CustomText
        children={item.type}
        style={indexTypeComic === item.id && {color: Colors.white}}
      />
    </TouchableOpacity>
  );

  const renderItem = ({item}) => <ItemFollow item={item} />;

  return (
    <View>
      <Header />
      <View style={{borderBottomWidth: 0.5, padding: 5}}>
        <FlatList
          data={TypeComic}
          keyExtractor={item => item + Math.random()}
          renderItem={renderList}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{borderBottomWidth: 0.5, padding: 5}}>
        <FlatList
          data={TypeList}
          keyExtractor={item => item + Math.random()}
          renderItem={renderList}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{marginBottom: 420}}>
        <FlatList
          data={imageDemo}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={index => index + Math.random()}
          columnWrapperStyle={{
            justifyContent: 'space-around',
            alignItems: 'flex-start',
          }}
        />
      </View>
    </View>
  );
}
