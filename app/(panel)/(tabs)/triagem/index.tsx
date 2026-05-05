import MenuButton from '@/components/buttons/MenuButton';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

  const [cont, setCont] = useState(0);

  function escolher() {
    if (cont === 0) {
      setCont(1)
    } else {
      setCont(0)
    }
  }


  function Perguntas({ pergunta, opcaoA, opcaoB, opcaoC, opcaoD }: any) {
    return (
      <View style={styles.containerQuestao}>
        <View style={styles.pergunta}>
          <Text style={styles.titulo}>Principais Sintomas</Text>
          <View style={styles.linha} />
          <Text style={styles.textoPergunta}>{pergunta}</Text>
        </View>
        <View style={[styles.alternativas, { backgroundColor: cont === 0 ? "#8DA9C4" : "#3E6B96" }]}>
          <TouchableOpacity onPress={escolher}>{opcaoA}</TouchableOpacity>
        </View>
        <View style={[styles.alternativas, { backgroundColor: cont === 0 ? "#8DA9C4" : "#3E6B96" }]}>
          <TouchableOpacity onPress={escolher}>{opcaoB}</TouchableOpacity>
        </View>
        <View style={[styles.alternativas, { backgroundColor: cont === 0 ? "#8DA9C4" : "#3E6B96" }]}>
          <TouchableOpacity onPress={escolher}>{opcaoC}</TouchableOpacity>
        </View>
        <View style={[styles.alternativas, { backgroundColor: cont === 0 ? "#8DA9C4" : "#3E6B96" }]}>
          <TouchableOpacity onPress={escolher}>{opcaoD}</TouchableOpacity>
        </View>
        <View style={styles.setas}>
          <View>
            <TouchableOpacity><AntDesign name="backward" size={50} color="#C4C4C4" /></TouchableOpacity>
            <Text style={styles.textoSeta}>Voltar</Text>
          </View>
          <View>
            <TouchableOpacity><Entypo name="controller-next" size={50} color="#C4C4C4" /></TouchableOpacity>
            <Text style={styles.textoSeta}>Próximo</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <MenuButton color="black"/>
          <View style={styles.logo}>
            <Text style={styles.textoLogo}>CheckMed</Text>
            <FontAwesome6 name="stethoscope" size={24} color="black" />
          </View>
          <FontAwesome name="user-circle-o" size={24} color="black" />
        </View>
        <View>
          <View style={styles.conteudo}>
            <TouchableOpacity style={styles.ligar}>
              <Text style={styles.textoLigar}>Ligar 192</Text>
              <FontAwesome5 name="phone" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.questionario} >
            <Perguntas
              pergunta="Qual destas opções melhor descreve o seu problema principal agora?"
              opcaoA="Dores agudas ou localizadas"
              opcaoB="Problemas respiratórios ou febre"
              opcaoC="Lesões, acidentes, ou sintomas visíveis"
              opcaoD="Alterações de sentidos ou mal-estar geral"
            />
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
    alignItems: "center",
    padding: 10
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

  conteudo: {
    padding: 8,
  },

  ligar: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FF1212",
    height: 40,
    alignItems: "center",
    gap: 15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
  },

  textoLigar: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18
  },

  questionario: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  containerQuestao: {
    gap: 15,
    width: "95%"
  },

  pergunta: {
    backgroundColor: "#13315C",
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,

  },

  titulo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },

  linha: {
    backgroundColor: "white",
    width: "90%",
    height: 1
  },

  textoPergunta: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },

  alternativas: {
    backgroundColor: "#8DA9C4",
    borderRadius: 10,
    height: 40,
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "arial",
    fontSize: 15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
  },

  setas: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  textoSeta: {
    color: "#C4C4C4",
    textAlign: "center"
  },

  rodape: {
    backgroundColor: "#8DA9C4",
    flexDirection: "row",
    justifyContent: "space-around"
  },

  texto: {
    color: "white",
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
    backgroundColor: "#134074",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    marginTop: -20,
  },

});
