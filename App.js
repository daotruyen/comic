/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import MainApp from './src/navigation/NavigationBottomTab';
import Colors from './src/utils/colors';

const App = () => {
  return (
    <View style={{backgroundColor: Colors.blue25, flex: 1}}>
      <MainApp />
    </View>
  );
};

export default App;
