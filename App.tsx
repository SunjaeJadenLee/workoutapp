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
import { Provider } from 'react-redux'

import Main from './src/screens/Main'
import Store from './utils/store/Store';


const App: () => React$Node = () => {

  const MainStack = createStackNavigator()

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen options={{ headerShown: false }} name='Main' component={Main} />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}; 

export default App;
