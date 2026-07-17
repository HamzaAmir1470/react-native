import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
// themed Component
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText.jsx'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton.jsx'

const register = () => {

    const handleRegister = () => {
        // Handle register logic here
        console.log('Register button pressed');
    }
    return (
        <ThemedView style={styles.container}>
            <Spacer height={20} />
            <ThemedText title={true} style={styles.title}>
                Register for an account
            </ThemedText>

            <ThemedButton style={styles.button} onPress={handleRegister}>
                <ThemedText style={{ color: Colors.light.text }}>
                    Register
                </ThemedText>
            </ThemedButton>

            <Spacer height={100} />
            <ThemedText style={styles.registerText}>
                <Link href="/login">
                    Already have an account? Login here
                </Link>
            </ThemedText>
        </ThemedView>
    )
}

export default register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerText: {
        color: 'blue',
        textDecorationLine: 'underline'
    }
})