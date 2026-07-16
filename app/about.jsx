import { StyleSheet, Text, View, ScrollView, SafeAreaView, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const About = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                {/* Back Navigation Link styled like a premium button */}
                {/* <Link href="/" asChild>
                    <Pressable style={styles.backButton}>
                        <Text style={styles.backButtonText}>← Back to Home</Text>
                    </Pressable>
                </Link> */}

                {/* Content Section */}
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Overview</Text>

                    <Text style={styles.description}>
                        The legendary Black Tiger is not a distinct subspecies, but rather a melanistic variant of the Bengal Tiger.
                        Due to a rare genetic mutation, their black stripes are highly dilated and fuse together, nearly eclipsing their orange fur.
                        This striking coat acts as the perfect camouflage in the dense, dappled shadows of their native forests.
                    </Text>

                    <Text style={styles.description}>
                        Today, these elusive predators are almost exclusively found in the Similipal Tiger Reserve in Odisha, India.
                        With only a handful believed to exist in the wild, witnessing one is akin to catching a glimpse of a living myth.
                    </Text>

                    {/* Divider Line */}
                    <View style={styles.divider} />

                    {/* Contact Navigation Section */}
                    <View style={styles.contactContainer}>
                        <Text style={styles.contactTitle}>Have questions or observations?</Text>
                        <Text style={styles.contactSubtitle}>
                            Get in touch with our wildlife research and reading list support team.
                        </Text>

                        <Link href="/contact" asChild>
                            <Pressable style={styles.contactButton}>
                                <Text style={styles.contactButtonText}>Contact Support</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default About

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0F0F10', // Deep dark theme background
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 40,
    },
    backButton: {
        alignSelf: 'flex-start',
        backgroundColor: '#1C1C1E',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#2C2C2E',
    },
    backButtonText: {
        color: '#E0A96D', // Match the gold accent from the home screen
        fontSize: 14,
        fontWeight: '600',
    },
    content: {
        width: '100%',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: '#FFFFFF',
        marginBottom: 16,
        letterSpacing: 0.5,
    },
    description: {
        fontSize: 15,
        lineHeight: 24,
        color: '#D1D1D6',
        marginBottom: 16,
        textAlign: 'justify',
    },
    divider: {
        height: 1,
        backgroundColor: '#222225',
        marginVertical: 24,
    },
    contactContainer: {
        backgroundColor: '#161618',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: '#222225',
        alignItems: 'center',
    },
    contactTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 6,
        textAlign: 'center',
    },
    contactSubtitle: {
        fontSize: 13,
        lineHeight: 18,
        color: '#A0A0A5',
        textAlign: 'center',
        marginBottom: 16,
    },
    contactButton: {
        backgroundColor: '#E0A96D', // Premium gold color
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,
        width: '100%',
        alignItems: 'center',
    },
    contactButtonText: {
        color: '#0F0F10', // Dark text on light gold button
        fontSize: 15,
        fontWeight: '700',
    },
})