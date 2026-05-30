import { generalStyles } from '@/app/styles/generalStyles';
import MainTopBar from '@/components/topBar/MainTopBar';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_HOSPITAIS = [
    {
        id: '1',
        nome: "Upa Zona Sul",
        distancia: "1.8 km",
        tempo: "6 minutos"
    },
    {
        id: '2',
        nome: "Hospital Santa Marina",
        distancia: "3.5 km",
        tempo: "10 minutos"
    },
    {
        id: '3',
        nome: "Hospital Infantil",
        distancia: "5.0 km",
        tempo: "15 minutos"
    },
    {
        id: '4',
        nome: "Hospital Universitário de Maringá",
        distancia: "6.7 km",
        tempo: "23 minutos"
    }
];

type HospitalProps = {
    nome: string,
    distancia: string,
    tempo: string,
    onPress: () => void
}

function Hospital({ nome, distancia, tempo, onPress }: HospitalProps) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
            <View style={styles.info}>
                <View>
                    <Text style={styles.nomeCard}>{nome}</Text>
                    <View style={styles.tempo}>
                        <Text style={styles.textoTempo}>{distancia}</Text>
                        <Text style={styles.textoTempo}>{tempo}</Text>
                    </View>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={18} color="#A0A0A0" />
            </View>
        </TouchableOpacity>
    );
}

export default function Hospitais() {
    const lidarCliqueHospital = (nomeHospital: string) => {
        Alert.alert(
            "Hospital Selecionado",
            `Abrindo detalhes e rotas para:\n${nomeHospital}`
        );
    };

    return (
        <SafeAreaView style={generalStyles.container}>
            <View style={generalStyles.container}>
                <MainTopBar/>

                <View style={styles.conteudo}>
                    <View style={styles.hospital}>
                        <Text style={styles.nomeHospital}>Busque por Hospitais</Text>
                        <View style={styles.busca}>
                            <FontAwesome name="search" size={18} color="black" />
                        </View>
                    </View>

                    <View style={styles.dados}>
                        <Text style={styles.nomeHospital}>Hospitais mais próximos</Text>
                        <View style={styles.hospitais}>
                            
                            {MOCK_HOSPITAIS.map((hospital) => (
                                <Hospital
                                    key={hospital.id}
                                    nome={hospital.nome}
                                    distancia={hospital.distancia}
                                    tempo={hospital.tempo}
                                    onPress={() => lidarCliqueHospital(hospital.nome)}
                                />
                            ))}

                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    conteudo: {
        padding: 16
    },

    hospital: {
        marginTop: 15,
        gap: 8,
    },

    nomeHospital: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#13315C"
    },

    nomeCard: {
        fontSize: 15,
        fontWeight: "500",
        color: "#333333"
    },

    busca: {
        backgroundColor: "#E5E5E5",
        height: 36,
        borderRadius: 10,
        justifyContent: "center",
        padding: 8
    },

    dados: {
        marginTop: 25,
        gap: 18
    },

    hospitais: {
        gap: 15
    },

    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },

    tempo: {
        flexDirection: "row",
        gap: 30,
        marginTop: 5,
    },

    textoTempo: {
        fontSize: 13,
        color: "grey"
    }
});