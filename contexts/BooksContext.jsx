import { createContext, useState } from "react";
import { databases } from '../lib/appwrite';
import { ID } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    const { user } = useUser();

    async function fetchBooks() {
        try {

        } catch (error) {
            console.error(error.message);
        }
    }

    async function fetchBookById(id) {

        try {

        } catch (error) {

        }
    }

    async function createBook(data) {
        try {
            const newBook = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                ...data, userId: user.$id
            },
                [
                Permissions.read(Role.user(user.$id)),
                Permissions.update(Role.user(user.$id)),
                Permissions.delete(Role.user(user.$id))
            ]
            );
            setBooks(prevBooks => [...prevBooks, newBook]);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function deleteBook(id) {
        try {

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <BooksContext.Provider value={{ books, setBooks, fetchBooks, fetchBookById, createBook, deleteBook }}>

            {children}
        </BooksContext.Provider>
    );
}
