import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const SignupAddressScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Address'}
        subTitle={'Make sure it is valid'}
        onBack={() => {}}
      />
      <View style={styles.container}>
        <Gap height={16} />
        <TextInput label={'Phone No.'} placeholder={'Type your phone number'} />
        <Gap height={16} />
        <TextInput label={'Address'} placeholder={'Type your address'} />
        <Gap height={16} />
        <TextInput
          label={'House No.'}
          placeholder={'Type your house numbers'}
        />
        <Gap height={16} />
        <Select label={'City'} />
        <Gap height={24} />
        <Button
          text={'Signup Now'}
          onPress={() => navigation.navigate('SignupSuccessScreen')}
        />
      </View>
    </View>
  );
};

export default SignupAddressScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
  },
});
