import {View, Text, Dimensions, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {CustomText} from '../../components/CustomText';
import Carousel from 'react-native-reanimated-carousel';
import {imageDemo} from '../../config/images';

export default function HomeScreen() {
  const width = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View>
      <Header />
      <View>
        <CustomText
          children={'Truyện nổi bật'}
          size={18}
          style={{
            fontWeight: '500',
            padding: 20,
            paddingVertical: 8,
          }}
        />
        <View style={{flex: 1}}>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={imageDemo}
            scrollAnimationDuration={3000}
            renderItem={({index}) => {
              console.log(index);
              return (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Image
                    source={require('../../assets/demo/truyen1.jpg')}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
