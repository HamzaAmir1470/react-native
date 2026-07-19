import { View, StyleSheet } from 'react-native';

const Spacer = ({ width = "100%", height = 40 }) => {
    return (
        <View style={[styles.spacer, { width, height }]} />
    );
};

const styles = StyleSheet.create({
    spacer: {
        backgroundColor: 'transparent',
    }
});

export default Spacer;