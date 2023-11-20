import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Sign up'}
        subTitle={'Register and eat'}
        onBack={() => navigation.navigate('SigninScreen')}
      />
      <View style={styles.container}>
        <Gap height={16} />
        <View style={styles.photo}>
          <View style={styles.photoBorder}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Foto</Text>
            </View>
          </View>
        </View>
        <Gap height={16} />
        <TextInput label={'Fullname'} placeholder={'Type your full name'} />
        <Gap height={16} />
        <TextInput label={'Email'} placeholder={'Type your email'} />
        <Gap height={16} />
        <TextInput label={'Password'} placeholder={'Type your password'} />
        <Gap height={24} />
        <Button
          text={'Continue'}
          onPress={() => navigation.navigate('SignupAddressScreen')}
        />
      </View>
    </View>
  );
};

export default SignupScreen;

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
  photo: {
    alignItems: 'center',
  },
  photoBorder: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 120,
    width: 120,
    height: 120,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light-300',
    textAlign: 'center',
  },
});
