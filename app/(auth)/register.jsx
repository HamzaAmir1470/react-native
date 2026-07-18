import { Keyboard, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
// themed Component
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText.jsx'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton.jsx'
import ThemedTextInput from '../../components/ThemedTextInput'

const register = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const handleRegister = () => {
        // Handle register logic here
        console.log('Register button pressed', email, password, confirmPassword);
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
                <ThemedTextInput
                    style={{ width: '80%', marginTop: 20, borderColor: Colors.primary, borderWidth: 1, borderRadius: 5 }}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

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
    }

})