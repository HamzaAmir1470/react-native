import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

// themed Component
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'

const login = () => {

    const handleLogin = () => {
        // Handle login logic here
        console.log('Login button pressed');
    }

    return (
        <ThemedView style={styles.container}>
            <Spacer height={20} />
            <ThemedText title={true} style={styles.title}>
                Login to your account
            </ThemedText>

            <ThemedButton style={styles.button} onPress={handleLogin}>
                <ThemedText style={{ color: Colors.light.text }}>
                    Login
                </ThemedText>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/register">
                <ThemedText style={styles.registerText}>
                    <Link href="/register">
                        Don't have an account? Register here
                    </Link>
                </ThemedText>
            </Link>
        </ThemedView >
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerText: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
    },
    pressed: {
        opacity: 0.8,
    }
})