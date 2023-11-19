import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SigninScreen, SplashScreen} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
