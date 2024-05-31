import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, Button, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/loginAndRegister'

const RegisterSreen = () => {

    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate('Login')
    }

    return (

        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>

        
        <ScrollView 
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.image} />
            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Welcome to Lungo !!</Text>
            <Text style={{ fontSize: 12, color: '#828282', marginTop: 20 }}>Login to Continue</Text>
            <SafeAreaView style={{ marginTop: 20 }}>

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#828282"
                />

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

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Re-type password"
                        placeholderTextColor="#828282"
                        secureTextEntry
                    />
                    <Image source={require('../icons/eye.png')} />
                </View>
            </SafeAreaView>

            <View style={styles.buttonLayout}>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#D17842' }]}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

            </View>

            <Text style={{ color: '#828282', marginTop: 36 }}>You have an account? Click <Text onPress={goToLogin} style={{ color: 'orange' }}>Sign in</Text></Text>


        </View>
        </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default RegisterSreen

