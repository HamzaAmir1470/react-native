import { Text, useColorScheme } from 'react-native'; //  Added 'Text' here!
import { Colors } from '../constants/Colors';

const ThemedText = ({ style, title, ...props }) => { //  Added 'children' here!
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;
    const textStyle = title ? theme.title : theme.text;

    return (
        <Text
            style={
                [{
                    color: textStyle,
                }, style]
            }
            {...props}

        />
    );
}

export default ThemedText;