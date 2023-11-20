import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlustrationSuccess} from '../../assets';
import {Button, Gap} from '../../components';

const SignupSuccessScreen = () => {
  return (
    <View style={styles.page}>
      <IlustrationSuccess />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={10} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={10} />
      <View style={styles.buttonContainer}>
        <Button text={'Find Foods'} />
      </View>
    </View>
  );
};

export default SignupSuccessScreen;

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular-400',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light-300',
    color: '#8D92A3',
  },
  buttonContainer: {width: '100%', paddingHorizontal: 80},
});
