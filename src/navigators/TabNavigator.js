import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import CartScreen from '../screens/CartScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import { BlurView } from '@react-native-community/blur'
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarBackground: () => {
                    <BlurView overlayColor='' blurAmount={15} style={styles.BlurViewStyles} />
                }
            }}>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="home" size={30} color={focused ? 'orange' : '#fff'} />
                    )
                }}></Tab.Screen>

            <Tab.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="cart" size={30} color={focused ? 'orange' : '#fff'} />
                    )
                }}></Tab.Screen>
            <Tab.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="heart" size={30} color={focused ? 'orange' : '#fff'} />
                    )
                }}></Tab.Screen>
            <Tab.Screen
                name='History'
                component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="notifications" size={30} color={focused ? 'orange' : '#fff'} />
                    )
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
        backgroundColor: '#0C0F14'
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    }
})