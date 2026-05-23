import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generalStyles } from './styles/generalStyles';

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/perfil');
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={generalStyles.container}>
            <LinearGradient
                colors={['#0B2545', '#134074']}
                locations={[0.5, 1.0]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.background}
            >
                <View style={styles.logoContainer}>
                    <Text style={styles.texto}>CheckMed</Text>
                    <FontAwesome6 name="stethoscope" size={35} color="white" />
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        flexDirection: "row",
        gap: 15,
    },
    texto: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 7,
    },
});