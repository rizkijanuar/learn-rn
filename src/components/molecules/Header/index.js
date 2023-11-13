import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = (props) => {
  const {title, subTitle} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24
    },
    title: {
        fontSize: 22, fontFamily: 'Poppins-Medium-500', color: "#020202"
    },
    subTitle: {
        fontSize: 14, fontFamily: 'Poppins-Light-300', color: "#8D92A3"
    },
})