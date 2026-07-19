import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import GuestOnly from '../../components/auth/GuestOnly'

export default function AuthLayout() {
    return (
        <>
            <GuestOnly>
                <StatusBar value="auto" />
                <Stack screenOptions={{ animation: 'none' }} />
            </GuestOnly>
        </>
    )
}

