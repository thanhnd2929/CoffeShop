import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Login')
      }, 2000);
    }, [])
    
    return (
        <View style={styles.container}>
          <Image source={require('../images/logo.png')} style={styles.image} />
        </View>
      )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0C0F14'
    },
    image: {
      /* Group 72 */
      position: 'absolute',
      width: 189,
      height: 189,
    }
  })

  export default SplashScreen
