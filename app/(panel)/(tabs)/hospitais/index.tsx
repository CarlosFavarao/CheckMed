import MenuButton from '@/components/buttons/MenuButton';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type HospitalProps = {
    nome: string,
    distancia: string,
    tempo: string
}

function Hospital({ nome, distancia, tempo }: HospitalProps) {
    return (
        <TouchableOpacity>
            <View style={styles.info}>
                <View>
                    <Text>{nome}</Text>
                    <View style={styles.tempo}>
                        <Text style={styles.textoTempo}>{distancia}</Text>
                        <Text style={styles.textoTempo}>{tempo}</Text>
                    </View>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </View>
        </TouchableOpacity>
    );
}

export default function Hospitais() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <MenuButton color="white"/>
                    <View style={styles.logo}>
                        <Text style={styles.textoLogo}>CheckMed</Text>
                        <FontAwesome6 name="stethoscope" size={24} color="white" />
                    </View>
                    <Feather name="edit" size={24} color="white" />
                </View>

                <View style={styles.conteudo}>
                    <View style={styles.hospital}>
                        <Text style={styles.nomeHospital}>Busque por Hospitais</Text>
                        <View style={styles.busca}><FontAwesome name="search" size={18} color="black" /></View>
                    </View>

                    <View style={styles.dados}>
                        <Text style={styles.nomeHospital}>Hospitais mais próximos</Text>
                        <View style={styles.hospitais}>
                            <Hospital
                                nome="Upa 24h - Unidade Central"
                                distancia="1.8 km"
                                tempo="6 minutos"
                            />
                            <Hospital
                                nome="Hospital Santa Marina"
                                distancia="3.5 km"
                                tempo="10 minutos"
                            />
                            <Hospital
                                nome="Hospital Infantil"
                                distancia="5.0 km"
                                tempo="15 minutos"
                            />
                            <Hospital
                                nome="Hospital Universitário Regional"
                                distancia="10.7 km"
                                tempo="23 minutos"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },

    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 45,
        backgroundColor: "#13315C",
        alignItems: "center",
        padding: 10,
    },

    conteudo: {
        padding: 8
    },

    logo: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 6
    },

    textoLogo: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },

    hospital: {
        marginTop: 15,
        gap: 8,
    },

    nomeHospital: {
        fontSize: 15,
        fontWeight: "bold",
    },

    busca: {
        backgroundColor: "#CACACA",
        height: 30,
        borderRadius: 10,
        justifyContent: "center",
        padding: 8
    },

    dados: {
        flex: 1,
        marginTop: 20,
        gap: 18
    },

    hospitais: {
        gap: 25
    },

    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 10,
    },

    tempo: {
        flexDirection: "row",
        gap: 40,
        marginTop: 5,
    },

    textoTempo: {
        fontSize: 13,
        color: "grey"
    },

    rodape: {
        backgroundColor: "#8DA9C4",
        flexDirection: "row",
        justifyContent: "space-around"
    },

    texto: {
        color: "white",
    },

    textoHospital: {
        color: "#134074"
    },

    opcao: {
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5,
        marginBottom: 3,
    },

    triagem: {
        height: 50,
        width: 50,
        backgroundColor: "#E5E5E5",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35,
        marginTop: -20,
    },

});
