import { StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

// themed Component
import ThemedView from '../../components/ThemedView'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link, useRouter } from 'expo-router' // Added useRouter for navigation
import ThemedButton from '../../components/ThemedButton'
import { useUser } from '../../hooks/useUser'

const login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isSubmitting, setIsSubmitting] = React.useState(false) // Added loading state

    // Destructure the login action out of your hook
    const { login: appwriteLogin } = useUser()
    const router = useRouter()
    
    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please enter both email and password.")
            return
        }

        setIsSubmitting(true)

        try {
            // Call the authentication method from UserContext
            await appwriteLogin(email, password)
            
            // Clear inputs on success
            setEmail('')
            setPassword('')
            
            // Redirect them to the home page or main dashboard
            router.replace('/profile') // Update this string to your target main route
        } catch (error) {
            // Friendly error message for bad credentials or network issues
            alert(error.message || "Login failed. Please check your credentials.")
        } finally {
            setIsSubmitting(false)
        }
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
                autoCapitalize="none" // Keeps email from capitalizing first letter
                value={email}
                onChangeText={setEmail}
                editable={!isSubmitting} // Disable inputs during network request
            />
            <ThemedTextInput
                style={{ width: '80%', marginTop: 20, borderColor: Colors.primary, borderWidth: 1, borderRadius: 5 }}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
                editable={!isSubmitting}
            />

            {/* Disable button and show alternative text if loading */}
            <ThemedButton 
                style={[styles.button, isSubmitting && styles.disabledButton]} 
                onPress={handleLogin}
                disabled={isSubmitting}
            >
                <ThemedText style={{ color: Colors.light.text }}>
                    {isSubmitting ? "Logging in..." : "Login"}
                </ThemedText>
            </ThemedButton>

            <Spacer height={10} />
            
            {/* Cleaned up duplicate nested Link components */}
            <Link href="/register" asChild>
                <ThemedText style={styles.registerText}>
                    Don't have an account? Register here
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
    disabledButton: {
        opacity: 0.5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#E0A96D",
    }
})