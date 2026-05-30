import MenuButton from '@/components/buttons/MenuButton';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import { useRouter } from 'expo-router';
import React from "react";
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ProtocoloProps = {
  gravidade: string;
  texto1: string;
  texto2: string;
  onPressHospitais: () => void;
}

function Protocolo({ gravidade, texto1, texto2, onPressHospitais }: ProtocoloProps) {
  return (
    <View style={styles.protocolo}>
      <View style={styles.resultado}>
        <Text style={styles.gravidade}>{gravidade}</Text>
        <Foundation name="alert" size={80} color="#FFC012" />
      </View>
      
      <Text style={styles.textoInfo}>{texto1}</Text>
      <Text style={styles.textoInfo}>{texto2}</Text>

      <TouchableOpacity style={styles.botaoInfo} onPress={onPressHospitais} activeOpacity={0.8}> 
        <Text style={styles.textoBotaoInfo}>Hospitais mais próximos</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const router = useRouter();

  const ligarEmergencia = () => {
    Linking.openURL('tel:192');
  };

  const irParaHospitais = () => {
    router.push('/hospitais');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.cabecalho}>
          <MenuButton color="black" />
          <View style={styles.logo}>
            <Text style={styles.textoLogo}>CheckMed</Text>
            <FontAwesome6 name="stethoscope" size={24} color="black" />
          </View>
          <FontAwesome name="user-circle-o" size={24} color="black" />
        </View>

        <View style={styles.conteudoLigar}>
          <TouchableOpacity style={styles.ligar} onPress={ligarEmergencia} activeOpacity={0.7}>
            <Text style={styles.textoLigar}>Ligar 192</Text>
            <FontAwesome5 name="phone" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Protocolo 
            gravidade="Urgente"
            texto1="Seu caso requer atenção médica, mas você apresenta sinais estáveis no momento."
            texto2="Recomendamos procurar atendimento em até 60 minutos. Evite esforços físicos até ser avaliado."
            onPressHospitais={irParaHospitais}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  container: {
    flex: 1,
  },

  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 10
  },

  logo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6
  },
 
  textoLogo: {
    fontWeight: "bold",
    fontSize: 20
  },

  conteudoLigar: {
    paddingHorizontal: 15,
    marginTop: 10,
  },

  ligar: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FF1212",
    height: 40,
    alignItems: "center",
    gap: 15,
    borderRadius: 5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    elevation: 3,
  },

  textoLigar: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18
  },

  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40
  },

  protocolo: {
    alignItems: "center",
    gap: 25,
    width: "100%"
  },

  gravidade: {
    color: "#FFC012",
    fontWeight: "bold",
    fontSize: 35,
  },

  resultado: {
    alignItems: "center",
    gap: 12
  },

  textoInfo: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
    width: "85%",
    lineHeight: 22
  },

  botaoInfo: {
    backgroundColor: "#134074",
    height: 45,
    width: "85%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    elevation: 4,
    marginTop: 15
  },

  textoBotaoInfo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
});