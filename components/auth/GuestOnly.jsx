import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";

const GuestOnly = ({ children }) => {
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            router.replace("/(dashboard)/profile");
        }
    }, [user, loading]);

    if (loading) {
        return <Text style={{ color: '#fff', textAlign: 'center', marginTop: 50 }}>Loading...</Text>;
    }

    // 2. Fix: If no user is logged in (meaning they are a guest), allow them to see the login/register children screens
    return !user ? children : null;
};

export default GuestOnly;