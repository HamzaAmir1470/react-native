import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import Tiger from "../assets/img/logoDark.jpg" 

const Home = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                
                {/* Hero Image Container */}
                <View style={styles.imageContainer}>
                    <Image source={Tiger} style={styles.image} resizeMode="cover" />
                    <View style={styles.imageOverlay} />
                </View>

                {/* Content Card */}
                <View style={styles.contentContainer}>
                    <Text style={styles.category}>RARE SPECIES</Text>
                    <Text style={styles.title}>The Black Tiger</Text>
                    <Text style={styles.subtitle}>The Shadow of the Jungle</Text>

                    {/* Quick Stats Badges */}
                    <View style={styles.badgeContainer}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeLabel}>Status</Text>
                            <Text style={styles.badgeValue}>Critically Rare</Text>
                        </View>
                        <View style={styles.badge}>
                            <Text style={styles.badgeLabel}>Habitat</Text>
                            <Text style={styles.badgeValue}>Similipal, India</Text>
                        </View>
                        <View style={styles.badge}>
                            <Text style={styles.badgeLabel}>Genetic</Text>
                            <Text style={styles.badgeValue}>Melanistic</Text>
                        </View>
                    </View>

                    {/* Divider Line */}
                    <View style={styles.divider} />

                    {/* Description Section */}
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
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0F0F10', // Deep dark background
    },
    scrollContainer: {
        flexGrow: 1,
    },
    imageContainer: {
        width: '100%',
        height: 350,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(15, 15, 16, 0.3)', // Subtle dark overlay over the image
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#161618', // Slightly lighter dark gray for the content card
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30, // Pulls the card up over the image
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 40,
    },
    category: {
        fontSize: 12,
        fontWeight: '800',
        color: '#E0A96D', // Premium gold accent color
        letterSpacing: 2,
        marginBottom: 6,
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        color: '#A0A0A5',
        fontWeight: '500',
        marginBottom: 24,
    },
    badgeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    badge: {
        backgroundColor: '#222225',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '31%',
        alignItems: 'center',
    },
    badgeLabel: {
        fontSize: 10,
        color: '#8A8A8F',
        marginBottom: 4,
        textTransform: 'uppercase',
        fontWeight: '600',
    },
    badgeValue: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: '#2A2A2E',
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 12,
    },
    description: {
        fontSize: 15,
        lineHeight: 24,
        color: '#D1D1D6',
        marginBottom: 16,
        textAlign: 'justify',
    },
})