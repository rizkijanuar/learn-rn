import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../components'

const SigninScreen = () => {
  return (
    <View style={styles.page}>
      <Header title={'Sign In'} subTitle={'Find your best ever meal'} />
      <View style={styles.container}>
        <TextInput
          label={'Email Address'}
          placeholder={'Type your email address'}
        />
        <Gap height={16} />
        <TextInput label={'Password'} placeholder={'Type your password'} />
        <Gap height={24} />
        <Button text={'Sign in'} />
        <Gap height={12} />
        <Button text={'New Account'} color={'#8D92A3'} textColor={"white"} />
      </View>
    </View>
  );
}

export default SigninScreen

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