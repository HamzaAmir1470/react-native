import { Image, useColorScheme } from 'react-native';
import DarkLogo from '../assets/img/logoDark.jpg';
import LightLogo from '../assets/img/logoLight.jpg';

const ThemedLogo = ({ style, ...props }) => {
    const colorScheme = useColorScheme();
    const logoSource = colorScheme === 'dark' ? DarkLogo : LightLogo;

    return (
        <Image source={logoSource} style={style} {...props} />
    );
}

export default ThemedLogo;