import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";

const UserOnly = ({ children }) => {
    // 1. Destructure the 'loading' flag instead of the 'checkUserSession' function
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        // 2. If the auth service is done loading and no user session is found, redirect
        if (!loading && !user) {
            router.replace("/(auth)/login"); // Make sure this matches your relative auth path
        }
    }, [user, loading]);

    // 3. Keep showing a loading state while the Appwrite API call is executing
    if (loading) {
        return <Text style={{ color: '#fff', textAlign: 'center', marginTop: 50 }}>Loading...</Text>;
    }

    // 4. If a user exists, render the dashboard tabs
    return user ? children : null;
};

export default UserOnly;