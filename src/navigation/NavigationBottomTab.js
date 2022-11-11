import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import TopComicScreen from '../screens/topComic/index';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from '../screens/profile';
import TypeComicScreen from '../screens/typeComic';
import Colors from '../utils/colors';
import images from '../config/images';
import FollowComicScreen from '../screens/follow';

const MainBottomTab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <MainBottomTab.Navigator screenOptions={screenOptions}>
        <MainBottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused ? images.bottomTab.home_active : images.bottomTab.home
                }
                style={styles.icon}
              />
            ),
          }}
        />
        <MainBottomTab.Screen
          name="TopComic"
          component={TopComicScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused ? images.bottomTab.top_active : images.bottomTab.top
                }
                style={styles.icon}
              />
            ),
          }}
        />
        {/* <MainBottomTab.Screen
          name="TypeComic"
          component={TypeComicScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? images.bottomTab.filter_active
                    : images.bottomTab.filter
                }
                style={styles.icon}
              />
            ),
          }}
        />
        <MainBottomTab.Screen
          name="Follow"
          component={FollowComicScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? images.bottomTab.follow_active
                    : images.bottomTab.follow
                }
                style={styles.icon}
              />
            ),
          }}
        />
        <MainBottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused ? images.bottomTab.user : images.bottomTab.profile
                }
                style={styles.icon}
              />
            ),
          }}
        /> */}
      </MainBottomTab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 21,
    left: 5,
    right: 5,
    borderRadius: 10,
    height: 60,
  },
};
export default MainApp;
