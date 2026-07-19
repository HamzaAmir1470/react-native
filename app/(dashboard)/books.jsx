import { useEffect } from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

import { useBooks } from '../../hooks/useBooks';
import { useRouter } from 'expo-router';

const Books = () => {
    // 1. Destructure fetchBooks alongside your books state array
    const { books, fetchBooks } = useBooks();
    const router = useRouter();

    // 2. Uncomment and run fetchBooks when the component mounts
    useEffect(() => {
        if (fetchBooks) {
            fetchBooks();
        }
    }, []);

    return (
        <ThemedView style={styles.container}>
            <Spacer />

            <ThemedText title={true} style={styles.heading}>
                Your Reading List
            </ThemedText>

            <FlatList
                data={books}
                keyExtractor={(item) => item.$id}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={
                    <ThemedText style={styles.emptyText}>
                        Your reading list is empty. Add a book to get started!
                    </ThemedText>
                }
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => router.push(`/books/${item.$id}`)}
                        style={styles.bookCard}
                    >
                        <ThemedText style={styles.bookTitle}>{item.title}</ThemedText>
                        {item.author && (
                            <ThemedText style={styles.bookAuthor}>by {item.author}</ThemedText>
                        )}
                    </Pressable>
                )}
            />
        </ThemedView>
    );
};

export default Books;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        paddingHorizontal: 16,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center",
        marginBottom: 16,
    },
    listContainer: {
        paddingVertical: 10,
        flexGrow: 1,
    },
    bookCard: {
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 12,
    },
    bookTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    bookAuthor: {
        fontSize: 14,
        opacity: 0.7,
        marginTop: 4,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 40,
        opacity: 0.6,
    }
});