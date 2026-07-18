import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

// themed Component
import ThemedView from '../../components/ThemedView'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'

const login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please enter both email and password.")
            return
        }
        console.log("You have successfully logged in!", email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <ThemedView style={styles.container}>
            <Spacer height={20} />
            <ThemedText title={true} style={styles.title}>
                Login to your account
            </ThemedText>

            <ThemedTextInput
                style={{ width: '80%', marginTop: 20, borderColor: Colors.primary, borderWidth: 1, borderRadius: 5 }}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <ThemedTextInput
                style={{ width: '80%', marginTop: 20, borderColor: Colors.primary, borderWidth: 1, borderRadius: 5 }}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <ThemedButton style={styles.button} onPress={handleLogin}>
                <ThemedText style={{ color: Colors.light.text }}>
                    Login
                </ThemedText>
            </ThemedButton>

            <Spacer height={10} />
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
        color: '#fff',
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#E0A96D",
    }
})