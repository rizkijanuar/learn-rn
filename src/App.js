import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {SigninScreen, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
