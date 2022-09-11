import React, {useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity} from 'react-native'
import Logo from '../../assets/images/logo.png';
import CustomInputs from '../components/CustomInputs/CustomInputs';
import Buttons from '../components/Buttons/Buttons';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebase';

const LoginScreen = () => {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.replace("Dashboard")
        }
        return unsubscribe
      })
    }, [])
    
    const onLoginPressed = () => {
      auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
    }

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    }

    const onSignUpPressed = () => {
        console.log('onSignUpPressed');
        navigation.navigate('SignUp');
    }

  return (

    <View style={styles.root}>
      <Image source={Logo} 
      style={[styles.Logo, {height: height * 0.30}]} 
      resizeMode='contain'>
      </Image>

      <CustomInputs 
      placeholder="Email" 
      value={email} 
      setValue={setEmail}
       
      />

      <CustomInputs 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry = {true}
      />

      <TouchableOpacity>
          <Text style = {styles.text} onPress={onForgotPasswordPressed}>Forgot Password?</Text> 
      </TouchableOpacity>

      <Buttons text="Login" onPress={onLoginPressed}/>

      <TouchableOpacity>
          <Text style = {styles.text}>Don't have an account? <Text style={styles.link} onPress={onSignUpPressed}> Sign Up </Text>
          </Text> 
      </TouchableOpacity>

    
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        padding: 20,
    },
    Logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    text: {
      color: "black",
      padding: 10,
    },
    link: {
      fontWeight: 'bold',
      color: 'blue',
  },
})

export default LoginScreen;