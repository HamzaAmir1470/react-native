import { StyleSheet, Text, View, SafeAreaView, Pressable, Linking } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Contact = () => {
    const handleEmailPress = () => {
        // Automatically opens the user's default mail client
        Linking.openURL('mailto:support@readinglist.com?subject=Rare Species App Inquiry');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                {/* Back Navigation Link */}
                <Link href="/" asChild>
                    <Pressable style={styles.backButton}>
                        <Text style={styles.backButtonText}>← Back to Home</Text>
                    </Pressable>
                </Link>

                {/* Header */}
                <Text style={styles.sectionTitle}>Get in Touch</Text>
                <Text style={styles.subtitle}>Have questions about our reading lists or rare wildlife features? We'd love to hear from you.</Text>

                {/* Contact Card */}
                <View style={styles.card}>
                    <Text style={styles.cardLabel}>SUPPORT EMAIL</Text>
                    <Pressable onPress={handleEmailPress}>
                        <Text style={styles.cardValue}>support@readinglist.com</Text>
                    </Pressable>

                    <View style={styles.divider} />

                    <Text style={styles.cardLabel}>RESPONSE TIME</Text>
                    <Text style={styles.cardValueText}>Within 24-48 Hours</Text>
                </View>

                {/* Footer Note */}
                <Text style={styles.footerText}>
                    Designed for wildlife enthusiasts and researchers tracking vulnerable global ecosystems.
                </Text>

            </View>
        </SafeAreaView>
    )
}

export default Contact

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0F0F10', // Consistent deep dark background
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    backButton: {
        alignSelf: 'flex-start',
        backgroundColor: '#1C1C1E',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginBottom: 40,
        borderWidth: 1,
        borderColor: '#2C2C2E',
    },
    backButtonText: {
        color: '#E0A96D', // Signature gold accent
        fontSize: 14,
        fontWeight: '600',
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: '900',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 15,
        lineHeight: 22,
        color: '#A0A0A5',
        marginBottom: 32,
    },
    card: {
        backgroundColor: '#161618', // Card background color
        borderRadius: 16,
        padding: 24,
        borderWidth: 1,
        borderColor: '#222225',
        marginBottom: 24,
    },
    cardLabel: {
        fontSize: 11,
        fontWeight: '700',
        color: '#E0A96D',
        letterSpacing: 1.5,
        marginBottom: 6,
    },
    cardValue: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        textDecorationLine: 'underline', // Makes it look clickable
    },
    cardValueText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    divider: {
        height: 1,
        backgroundColor: '#2A2A2E',
        marginVertical: 20,
    },
    footerText: {
        fontSize: 13,
        lineHeight: 18,
        color: '#636366',
        textAlign: 'center',
        marginTop: 'auto', // Pushes footer note to the absolute bottom of the container
        marginBottom: 20,
    },
})