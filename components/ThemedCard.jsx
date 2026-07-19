import { StyleSheet, View, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const ThemedCard = ({ style, children, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;

    return (
        <View 
            style={[
                { backgroundColor: theme.background }, 
                styles.card, 
                style
            ]} 
            {...props}
        >
            {children} {/* Fixed: Now rendering the actual content inside the card */}
        </View>
    );
};

export default ThemedCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        padding: 20,
        justifyContent: 'center',
        marginVertical: 50,
        alignItems: 'center',
    }

});