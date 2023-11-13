import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {SigninScreen, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <SigninScreen/>
    </NavigationContainer>
  );
};

export default App;
