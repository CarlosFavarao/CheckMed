import { generalStyles } from '@/app/styles/generalStyles';
import { NoEditTopBar } from '@/components/topBar/MainTopBar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetalhesHospital() {
  const router = useRouter();

  return (
    <SafeAreaView style={generalStyles.containerBlue} edges={['top']}>
      <View style={generalStyles.container}>
       <NoEditTopBar/>
        <View style={styles.conteudo}>

          <View style={styles.hospitalHeader}>
            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
              <Ionicons name="chevron-back-outline" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.nomeHospital}>UPA Zona Sul</Text>
          </View>

          <View style={styles.dados}>
            <View style={styles.dado}>
              <Text style={styles.info}>Distância</Text>
              <Text style={styles.resposta}>1.8 km</Text>
            </View>
            <View style={styles.dado}>
              <Text style={styles.info}>Tempo de Chegada</Text>
              <Text style={styles.resposta}>6 minutos</Text>
            </View>
            <View style={styles.dado}>
              <Text style={styles.info}>Status</Text>
              <Text style={styles.resposta}>Aberto</Text>
            </View>
            <View style={styles.dado}>
              <Text style={styles.info}>Especialidades</Text>
              <Text style={styles.resposta}>Clínica Geral, Pediatria, Odontologia de Urgência.</Text>
            </View>
            <View style={styles.dado}>
              <Text style={styles.info}>Endereço</Text>
              <Text style={styles.resposta}>Av. Arquiteto Nildo Ribeiro da Rocha, 865</Text>
            </View>
            <View style={styles.dado}>
              <Text style={styles.info}>Telefone</Text>
              <Text style={styles.resposta}>(44) 3221-4812</Text>
            </View>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 55,
    backgroundColor: "#13315C",
    paddingHorizontal: 15,
  },

  logo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6
  },
  
  textoLogo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  hospitalHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    gap: 10,
    marginLeft: -5 
  },

  nomeHospital: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    flexShrink: 1,
  },

  dados: {
    gap: 20,
  },

  dado: {
    gap: 4
  },

  info: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#000000"
  },

  resposta: {
    fontSize: 16,
    color: "#333333",
  }
});