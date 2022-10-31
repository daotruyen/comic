/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import MainApp from './src/navigation/NavigationBottomTab';

const App = () => {

  return (
    <SafeAreaView style={{}}>
      <StatusBar/>
      <MainApp />
    </SafeAreaView>
  );
};

export default App;
