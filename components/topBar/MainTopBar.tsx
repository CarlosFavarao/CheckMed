import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import MenuButton from "../buttons/MenuButton";

export default function MainTopBar() {
    return (
        <View style={styles.cabecalho}>
            <MenuButton color="white" />
            <View style={styles.logo}>
                <Text style={styles.textoLogo}>CheckMed</Text>
                <FontAwesome6 name="stethoscope" size={24} color="white" />
            </View>
            <Feather name="edit" size={24} color="white" />
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

});
