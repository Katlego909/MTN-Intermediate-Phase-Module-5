import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Buttons = ({ onPress, text, type = "btn_primary" }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles['container_${type}']]}>
      <Text style={[styles.text, styles['text_${type}']]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
     backgroundColor: '#3871F3', 
     width: '100%',
     padding: 15,
     marginVertical: 5,
     alignItems: "center",
     borderRadius: 5,
    },

    container_btn_primary: {
        backgroundColor: '#3871F3',
    },

    container_btn_tertiary: {
        backgroundColor: '',
    },



    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_tertiary: {
        color: "gray",
    },
    
});

export default Buttons;

