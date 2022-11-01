import React, {useState} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Header from '../../components/Header';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TopDay from './TopDay';
import TopMonth from './TopMonth';
import TopYear from './TopYear';
import Colors from '../../utils/colors';

const renderScene = SceneMap({
  day: TopDay,
  month: TopMonth,
  year: TopYear,
});

export default function TopComicScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'day', title: 'Top day'},
    {key: 'month', title: 'Top month'},
    {key: 'year', title: 'Top year'},
  ]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              key={i + ''}
              style={[styles.tabItem, index === i && {backgroundColor: 'red'}]}
              onPress={() => setIndex(i)}>
              <Animated.Text
                style={[{opacity}, index === i && {color: Colors.white}]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Header />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={index => setIndex(index)}
        initialLayout={{width: Dimensions.get('window').width}}
        style={styles.container}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 0,
    borderBottomWidth: 0.5,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
