import { StyleSheet, Text } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { useBooks } from "../../../hooks/useBooks"

// themed components
import ThemedText from "../../../components/ThemedText"
import ThemedButton from "../../../components/ThemedButton"
import ThemedView from "../../../components/ThemedView"
import Spacer from "../../../components/Spacer"
import ThemedCard from "../../../components/ThemedCard"
import ThemedLoader from "../../../components/ThemedLoader"

const BookDetails = () => {
    const { id } = useLocalSearchParams()
    const [book, setBook] = useState(null)
    const { fetchBookById, deleteBook } = useBooks()
    useEffect(() => {
        const fetchBook = async () => {
            const bookData = await fetchBookById(id)
            setBook(bookData)
        }
        fetchBook()
    }, [id])
    const router = useRouter()
    if (!book) {
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader />
            </ThemedView>
        )
    }

    const handleDelete = async () => {
        await deleteBook(id)
        setBook(null)
        router.replace("/books")
    }
    return (
        <ThemedView safe={true} style={styles.container}>
            {/* Fixed: changed 'styles' to 'style' so the styling actually applies */}
            <ThemedCard style={styles.card}>
                <Spacer />
                <ThemedText style={styles.title}>{book?.title || "Book Details"}</ThemedText>
                <Spacer height={10} />
                <ThemedText style={styles.author}>Written by {book?.author}</ThemedText>
                <Spacer />
                <ThemedText title={true}>Book Description</ThemedText>
                <Spacer height={10} />
                <ThemedText style={styles.description}>{book?.description}</ThemedText>
            </ThemedCard>

            <ThemedButton style={styles.delete} onPress={handleDelete}>
                <Text style={{ color: "#fff", textAlign: "center" }}>
                    Delete Book
                </Text>
            </ThemedButton>
        </ThemedView >
    )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Fixed: React Native uses "flex-start", not "start"
        justifyContent: "flex-start",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    author: {
        fontSize: 18,
        fontStyle: "italic",
    },
    description: {
        fontSize: 16,
    },
    card: {

        width: "auto",
        borderRadius: 10,

        // Added: Border styles
        borderWidth: 1,
        borderColor: "#ccc",

        // Added: Shadow effects to give the card depth
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    delete: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: "auto",
    }
})