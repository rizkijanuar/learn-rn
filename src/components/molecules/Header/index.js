import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcBack} from '../../../assets';

const Header = props => {
  const {title, subTitle, onBack} = props;
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.9}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium-500',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light-300',
    color: '#8D92A3',
  },
  back: {padding: 16, marginRight: 16},
});
