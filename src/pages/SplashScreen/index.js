import { View, Text } from 'react-native'
import React from 'react'
import { Logo } from '../../assets'
import { Gap } from '../../components';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <Gap height={30} />
      <Text style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium-500'}}>SplashScreen</Text>
    </View>
  );
}

export default SplashScreen