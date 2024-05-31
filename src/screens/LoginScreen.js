import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, Button, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/loginAndRegister'


const LoginScreen = () => {

  const navigation = useNavigation();

  const goToHome = () => {
    console.log('chuyen man roi');
    navigation.navigate('BottomTab')
  };

  const goToRegister = () => {
    navigation.navigate('Register')
  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#0C0F14' barStyle='light-content' />

      <Image source={require('../images/logo.png')} style={styles.image} />
      <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Welcome to Lungo !!</Text>
      <Text style={{ fontSize: 12, color: '#828282', marginTop: 20 }}>Login to Continue</Text>
      <SafeAreaView style={{ marginTop: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#828282"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#828282"
            secureTextEntry
          />
          <Image source={require('../icons/eye.png')} />
        </View>
      </SafeAreaView>

      <View style={styles.buttonLayout}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#D17842' }]}
          onPress={goToHome}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FFFFFF', marginTop: 20 }]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
            <Image style={{ position: 'absolute', right: 200 }} source={require('../icons/icon_google.png')} />
            <Text style={[styles.buttonText, { color: '#0C0F14' }]}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={{ color: '#828282', marginTop: 36 }}>Don’t have account? Click <Text onPress={goToRegister} style={{ color: 'orange' }}>Register</Text></Text>
      <Text style={{ color: '#828282', marginTop: 10 }}>Forget Password? Click <Text style={{ color: 'orange' }}>Reset</Text></Text>
    </View>
  )
}




export default LoginScreen
