import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SigninScreen,
  SignupAddressScreen,
  SignupScreen,
  SignupSuccessScreen,
  SplashScreen,
} from '../pages';

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
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupAddressScreen"
        component={SignupAddressScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupSuccessScreen"
        component={SignupSuccessScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
