import { useContext, useEffect } from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

// 1. Import your context
import { useBooks } from '../../hooks/useBooks';

const Books = () => {
    const { books, fetchBooks } = useBooks();

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <ThemedView style={styles.container}>
            <Spacer />

            <ThemedText title={true} style={styles.heading}>
                Your Reading List
            </ThemedText>

            {/* 4. Render the list dynamically */}
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
                    <Pressable>
                        <ThemedView style={styles.bookCard}>
                            <ThemedText style={styles.bookTitle}>{item.title}</ThemedText>
                            {item.author && (
                                <ThemedText style={styles.bookAuthor}>by {item.author}</ThemedText>
                            )}
                        </ThemedView>
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
        justifyContent: "flex-start", // Changed from center so the list starts at the top
        alignItems: "stretch",
        paddingHorizontal: 16,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 22, // Bumped up slightly for a prominent title
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
        borderColor: '#ccc', // You can swap this with a themed border color if available
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