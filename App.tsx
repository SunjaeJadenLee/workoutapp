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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/screens/Main'


const App: () => React$Node = () => {

  const MainStack = createStackNavigator()

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen options={{headerShown:false}} name='Main' component={Main} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}; 

export default App;
