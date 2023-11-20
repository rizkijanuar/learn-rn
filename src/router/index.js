import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  OrderScreen,
  ProfileScreen,
  SigninScreen,
  SignupAddressScreen,
  SignupScreen,
  SignupSuccessScreen,
  SplashScreen,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator(); // Stack Navigator
const Tab = createBottomTabNavigator(); // Bottom Navigator

// Bottom Navigator
const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

// Stack Navigator
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
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
