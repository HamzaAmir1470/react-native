import { StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText.jsx'
import Spacer from '../../components/Spacer'
import { Link, useRouter } from 'expo-router' // Added useRouter
import ThemedButton from '../../components/ThemedButton.jsx'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser' // Import the hook

const register = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const { register: appwriteRegister } = useUser()
    const router = useRouter()

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!")
            return
        }

        setIsSubmitting(true)

        try {
            await appwriteRegister(email, password)
            alert("Account created successfully!")
            router.replace('/(auth)/login') // Navigate back to login or dashboard
        } catch (error) {
            alert(error.message || "Registration failed.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ThemedView style={styles.container}>
                <Spacer height={20} />
                <ThemedText title={true} style={styles.title}>
                    Register for an account
                </ThemedText>

                <ThemedTextInput
                    style={{ width: '80%', marginTop: 20, borderColor: Colors.primary, borderWidth: 1, borderRadius: 5 }}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    editable={!isSubmitting}
                />
                <ThemedTextInput
                    style={{ width: '80%', marginTop: 20, borderColor: Colors.primary, borderWidth: 1, borderRadius: 5 }}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    editable={!isSubmitting}
                />
                <ThemedTextInput
                    style={{ width: '80%', marginTop: 20, borderColor: Colors.primary, borderWidth: 1, borderRadius: 5 }}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    editable={!isSubmitting}
                />

                <ThemedButton
                    style={styles.button}
                    onPress={handleRegister}
                    disabled={isSubmitting}
                >
                    <ThemedText style={{ color: Colors.light.text }}>
                        {isSubmitting ? "Registering..." : "Register"}
                    </ThemedText>
                </ThemedButton>

                <Spacer height={100} />

                <Link href="/(auth)/login" asChild>
                    <ThemedText style={styles.registerText}>
                        Already have an account? Login here
                    </ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
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
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#E0A96D",
    }
})