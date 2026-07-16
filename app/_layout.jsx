import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            // Deep dark theme for the header background
            headerStyle: {
                backgroundColor: '#0F0F10',
                borderBottomWidth: 1, // Subtle divider line
                borderBottomColor: '#222225',
                shadowColor: 'transparent', // Removes shadow on iOS
                elevation: 0, // Removes shadow on Android
            },
            headerTintColor: '#E0A96D',
            headerTitleStyle: {
                fontWeight: '800',
                fontSize: 18,
                color: '#FFFFFF',
            },
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="about" options={{ title: 'About' }} />
            <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})