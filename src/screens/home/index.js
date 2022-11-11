import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {CustomText} from '../../components/CustomText';
import Carousel from 'react-native-reanimated-carousel';
import {imageDemo} from '../../config/images';
import Colors from '../../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemHotComic from './com/item';

export default function HomeScreen() {
  const width = Dimensions.get('window').width;
  const onPress = () => {};
  const renderItem = ({item}) => <ItemHotComic />;
  return (
    <View>
      <Header />
      <ScrollView style={{backgroundColor: Colors.blue25, paddingBottom: 60}}>
        <View style={{}}>
          <CustomText
            children={'Truyện nổi bật'}
            size={18}
            style={styles.title}
          />
          <View style={styles.container}>
            <Carousel
              style={{backgroundColor: Colors.blue25}}
              loop
              width={width}
              height={(width * 9) / 16}
              autoPlay={true}
              data={imageDemo}
              mode="parallax"
              scrollAnimationDuration={2000}
              renderItem={({index}) => {
                return (
                  <TouchableOpacity activeOpacity={1} onPress={onPress}>
                    <Image
                      source={{
                        uri: 'https://i.truyenvua.com/slider/290x191/slider_1567830171.jpg?gf=hdfgdfg&mobile=2',
                      }}
                      style={{
                        width: width,
                        height: (width * 9) / 16,
                      }}
                      resizeMode="stretch"
                    />
                    <View style={styles.chapter}>
                      <CustomText
                        children={'chap 1001'}
                        style={{color: Colors.white}}
                      />
                    </View>
                    <View style={styles.nameComic}>
                      <CustomText
                        children={'Ten truyen'}
                        size={25}
                        style={{color: Colors.white, fontWeight: 'bold'}}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.center}>
            <MaterialCommunityIcons name="bookshelf" size={35} />
            <CustomText children={'Danh sách'} />
          </View>
          <View style={styles.center}>
            <MaterialCommunityIcons name="book" size={35} />
            <CustomText children={'Thể loại'} />
          </View>
          <View style={styles.center}>
            <Ionicons name="search" size={35} />
            <CustomText children={'Tìm kiếm'} />
          </View>
          {/* <View style={styles.center}>
          <MaterialCommunityIcons name="heart" size={35} />
          <CustomText children={'Theo dõi'} />
        </View> */}
        </View>
        <View>
          <CustomText
            children={'Truyện hot nhất'}
            size={18}
            style={styles.title}
          />
          <FlatList
            horizontal
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            keyExtractor={index => index + Math.random()}
            renderItem={renderItem}
            style={{paddingHorizontal: 8}}
          />
        </View>
        <View style={{padding: 80}}></View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    padding: 20,
    paddingTop: 8,
    paddingBottom: 0,
  },
  container: {backgroundColor: Colors.blue25},
  chapter: {
    position: 'absolute',
    backgroundColor: Colors.blue400,
    padding: 8,
    borderRadius: 8,
    top: 10,
    left: 10,
  },
  nameComic: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  center: {justifyContent: 'center', alignItems: 'center'},
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
