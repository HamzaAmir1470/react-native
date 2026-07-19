import { createContext, useState, useEffect } from "react";
// Import the account instance we configured earlier
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUserSession();
    }, []);

    async function checkUserSession() {
        try {
            const currentAccount = await account.get();
            setUser(currentAccount);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    async function login(email, password) {
        try {
            try {
                const currentAccount = await account.get();
                if (currentAccount) {
                    setUser(currentAccount);
                    return currentAccount;
                }
            } catch (sessionError) {
                console.log(sessionError);
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

    async function register(name, email, password) {
        try {
            await account.create(ID.unique(), email, password, name);

            return await login(email, password);
        } catch (error) {
            console.error("Registration failed:", error.message);
            throw error;
        }
    }

    async function logout() {
        try {
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