import { StyleSheet, Text, View, TextInput as RNTextInput } from 'react-native'
import React from 'react'

const TextInput = (props) => {
  const {label, placeholder} = props;
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput style={styles.input} placeholder={placeholder} />
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular-400',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10
  },
});