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
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Provider } from 'react-redux'

import Main from './src/screens/Main'
import MyList from './src/screens/MyList'
import Store from './utils/store/Store';
import ExDetail from './src/screens/ExDetail';
import Setting from './src/screens/Setting';


const App: () => React$Node = () => {

  console.disableYellowBox = true;
  // const MainStack = createStackNavigator();
  const MainStack = createDrawerNavigator();

  return (
    <Provider store={Store}> 
      <NavigationContainer>
        <MainStack.Navigator initialRouteName={'Main'}>
          <MainStack.Screen options={{ headerShown: false }} name='Main' component={Main} />
          <MainStack.Screen options={{ headerShown: false }} name='MyList' component={MyList} />
          <MainStack.Screen options={{ headerShown: false,drawerLabel:()=>null}} name='Setting' component={Setting} />
          <MainStack.Screen options={{ headerShown: false,drawerLabel:()=>null }} name='Detail' component={ExDetail} />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}; 

export default App;
