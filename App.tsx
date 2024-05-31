import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegisterSreen from './src/screens/RegisterSreen';
import TabNavigator from './src/navigators/TabNavigator';
import SettingScreen from './src/screens/SettingScreen';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#0C0F14' barStyle='light-content' />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterSreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='BottomTab' component={TabNavigator} />
        <Stack.Screen name='Settings' component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})