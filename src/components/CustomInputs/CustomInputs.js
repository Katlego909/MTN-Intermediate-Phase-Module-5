import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const CustomInputs = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value = {value}
      onChangeText = {setValue}
      placeholder = {placeholder} 
      style = {styles.input} 
      secureTextEntry = {secureTextEntry} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    input: {
        margin: 5,
        padding: 5,
    },
})

export default CustomInputs;