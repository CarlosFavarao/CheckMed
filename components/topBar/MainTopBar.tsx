import { iconsSize } from "@/app/styles/generalStyles";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import MenuButton from "../buttons/MenuButton";

export default function MainTopBar() {
    return (
        <View style={styles.cabecalho}>
            <MenuButton color="white" />
            <View style={styles.logo}>
                <Text style={styles.textoLogo}>CheckMed</Text>
                <FontAwesome6 name="stethoscope" size={24} color="white" />
            </View>
            <Feather name="edit" size={iconsSize - 2} color="white" />
        </View>
    )
}

export function NoEditTopBar(){
    return (
        <View style={styles.cabecalho}>
            <MenuButton color="white" />
            <View style={styles.logo}>
                <Text style={styles.textoLogo}>CheckMed</Text>
                <FontAwesome6 name="stethoscope" size={24} color="white" />
            </View>
             <Image
                source={require('@/assets/images/profile.jpg')} 
                style={styles.fotoPerfil}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 45,
        backgroundColor: "#13315C",
        alignItems: "center",
        padding: 10,
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

    fotoPerfil: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#ffffff',
        backgroundColor: '#CACACA'
    },

});
