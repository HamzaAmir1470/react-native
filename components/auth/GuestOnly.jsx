import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";

const GuestOnly = ({ children }) => {
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            router.replace("/(dashboard)/profile");
        }
    }, [user, loading]);

    if (loading) {
        return
        <ThemedLoader />
    }

    return !user ? children : null;
};

export default GuestOnly;