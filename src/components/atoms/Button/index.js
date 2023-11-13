import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = (props) => {
  const {text, color = '#FFC700', textColor = '#020202'} = props;
  return (
    <View style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium-500',
    color: color,
    textAlign: 'center',
  }),
});