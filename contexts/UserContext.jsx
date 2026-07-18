import { createContext, useState, useEffect } from "react";
// Import the account instance we configured earlier
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Automatically check if a user is already logged in when the app starts
    useEffect(() => {
        checkUserSession();
    }, []);

    async function checkUserSession() {
        try {
            const currentAccount = await account.get();
            setUser(currentAccount);
        } catch (error) {
            // No active session found
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    async function login(email, password) {
        try {
            // 1. Safety Check: If a session is already active, just pull the account and exit early
            try {
                const currentAccount = await account.get();
                if (currentAccount) {
                    setUser(currentAccount);
                    return currentAccount;
                }
            } catch (sessionError) {
                // If account.get() fails here, it simply means no active session exists.
                // That's exactly what we want, so we catch it silently and move forward.
            }

            // 2. Appwrite uses email sessions for standard logins
            await account.createEmailPasswordSession(email, password);

            // Fetch the logged-in user details to update the state
            const currentAccount = await account.get();
            setUser(currentAccount);
            return currentAccount;
        } catch (error) {
            console.error("Login failed:", error.message);
            throw error;
        }
    }

    async function register(email, password, name = "User") {
        try {
            // 1. Create the official user account in Appwrite
            await account.create(ID.unique(), email, password, name);

            // 2. Automatically log them in after registration
            return await login(email, password);
        } catch (error) {
            console.error("Registration failed:", error.message);
            throw error;
        }
    }

    async function logout() {
        try {
            // Deletes the current session token on the Appwrite server
            await account.deleteSession("current");
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error.message);
            throw error;
        }
    }

    return (
        <UserContext.Provider value={{
            user, login, logout, register, loading
        }}>
            {!loading && children}
        </UserContext.Provider>
    );
}