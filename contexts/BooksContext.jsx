import { createContext, useState } from "react";
import { databases } from '../lib/appwrite';

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);

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

        } catch (error) {

        }
    }

    async function deleteBook(id) {
        try {

        } catch (error) {

        }
    }

    return (
        <BooksContext.Provider value={{ books, setBooks, fetchBooks, fetchBookById, createBook, deleteBook }}>

            {children}
        </BooksContext.Provider>
    );
}
