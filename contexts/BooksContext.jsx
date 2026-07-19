import { createContext, useEffect, useState } from "react";
import { databases, client } from '../lib/appwrite';
// Imported Query, Permission, Role, and ID from the official SDK package
import { ID, Permission, Role, Query } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    const { user } = useUser();


    async function fetchBooks() {
        try {
            const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
                Query.orderAsc('title'),
                Query.equal('userId', [user.$id])
            ]);
            setBooks(response.documents);
        } catch (error) {
            console.error("Fetch books error:", error.message);
        }
    }

    // Fetches a single book's details by its document ID
    async function fetchBookById(id) {
        try {
            const book = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id);
            return book;
        } catch (error) {
            console.error("Fetch book by ID error:", error.message);
            throw error;
        }
    }

    // Creates a new book document with strict user-level permissions
    async function createBook(data) {
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                { ...data, userId: user.$id },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            );
            setBooks(prevBooks => [...prevBooks, newBook]);
            return newBook;
        } catch (error) {
            console.error("Create book error:", error.message);
        }
    }

    // Deletes a book from Appwrite and immediately updates local state
    async function deleteBook(id) {
        try {
            await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
            setBooks(prevBooks => prevBooks.filter(book => book.$id !== id));
        } catch (error) {
            console.error("Delete book error:", error.message);
        }
    }
    useEffect(() => {
        let unsubscribe;
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;


        if (user) {
            fetchBooks();
            unsubscribe = client.subscribe(channel, (response) => {
                const { payload, events } = response;
                if (events[0].includes('databases.documents.create')) {
                    setBooks(prevBooks => [...prevBooks, payload]);
                }
                if (events[0].includes('databases.documents.delete')) {
                    setBooks(prevBooks => prevBooks.filter(book => book.$id !== payload.$id));
                }
            });
        }
        else {
            setBooks([]);
        }

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        }
    }, [user])
    return (
        <BooksContext.Provider value={{ books, setBooks, fetchBooks, fetchBookById, createBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    );
}