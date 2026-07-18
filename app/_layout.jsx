import 'react-native-url-polyfill/auto'; // 1. Added Appwrite network polyfill at the very top
import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    console.log('Color Scheme:', colorScheme)
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <UserProvider>
            <StatusBar style="auto" />

            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: theme.navBackground,
                    borderBottomWidth: 1,
                    borderBottomColor: '#222225',
                    shadowColor: 'transparent',
                    elevation: 0,
                },
                headerTintColor: theme.title,
                headerTitleStyle: {
                    fontWeight: '800',
                    fontSize: 18,
                    color: theme.title,
                },
                headerTitleAlign: 'center',
            }}>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
            </Stack>
        </UserProvider>
    )
}

export default RootLayout

const styles = StyleSheet.create({})