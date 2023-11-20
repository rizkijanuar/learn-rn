import { View, Text } from 'react-native'
import React, {useEffect} from 'react';
import {Logo} from '../../assets';
import {Gap} from '../../components';

const SplashScreen = ({navigation}) => {
  // ini untuk ngasih waktu agar bisa berpindah halaman
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SigninScreen'); // kalo diback otomatis kembali ke halaman Splashscreen
      // navigation.replace('SigninScreen'); // kalo diback otomatis aplikasinya keluar
    }, 2000);
  }, []);

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
      <Text
        style={{
          fontSize: 32,
          color: '#020202',
          fontFamily: 'Poppins-Medium-500',
        }}>
        SplashScreen
      </Text>
    </View>
  );
};

export default SplashScreen