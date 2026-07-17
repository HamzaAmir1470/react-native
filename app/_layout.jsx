import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'

const RootLayout = () => {

    const colorScheme = useColorScheme()
    console.log('Color Scheme:', colorScheme)
    const theme = Colors[colorScheme] ?? Colors.light


    return (
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
            <Stack.Screen name="about" options={{ title: 'About' }} />
            <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})