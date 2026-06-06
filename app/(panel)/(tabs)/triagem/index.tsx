import { generalStyles } from '@/app/styles/generalStyles';
import MenuButton from '@/components/buttons/MenuButton';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_PERGUNTAS = [
  {
    pergunta: "Qual destas opções melhor descreve o seu problema principal agora?",
    opcaoA: "Dores agudas ou localizadas",
    opcaoB: "Problemas respiratórios ou febre",
    opcaoC: "Lesões, acidentes, ou sintomas visíveis",
    opcaoD: "Alterações de sentidos ou mal-estar geral",
  },
  {
    pergunta: "Há quanto tempo você está sentindo esses sintomas?",
    opcaoA: "Começou de forma súbita há menos de 1 hora",
    opcaoB: "Entre 1 e 24 horas",
    opcaoC: "Há alguns dias",
    opcaoD: "É um problema crônico (há mais de uma semana)",
  },
  {
    pergunta: "Você apresenta algum destes sinais de alerta associados?",
    opcaoA: "Falta de ar grave ou dor no peito irradiando",
    opcaoB: "Febre muito alta (acima de 39°C) persistente",
    opcaoC: "Pequenos sangramentos ou náuseas moderadas",
    opcaoD: "Nenhum sinal de alerta, apenas o sintoma principal",
  },
  {
    pergunta: "Em uma escala de 0 a 10, qual é a intensidade da sua dor atual?",
    opcaoA: "Insuportável / Extrema (9 a 10)",
    opcaoB: "Forte / Intensa (7 a 8)",
    opcaoC: "Moderada / Desconfortável (4 a 6)",
    opcaoD: "Leve / Quase imperceptível (0 a 3)",
  }
];

export default function App() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const router = useRouter();

  const ligarEmergencia = () => {
    Linking.openURL('tel:192');
  };

  function lidarAvanco() {
    if (indiceAtual < MOCK_PERGUNTAS.length - 1) {
      setIndiceAtual(indiceAtual + 1);
    } else {
      router.push('/triagem/resultado/tipo-emergencia');
    }
  }

  function lidarRetrocesso() {
    if (indiceAtual > 0) {
      setIndiceAtual(indiceAtual - 1);
    }
  }

  function Perguntas({ dadosPergunta, onResponder, onVoltar, onAvancar, isPrimeira, isUltima }: any) {
    return (
      <View style={styles.containerQuestao}>
        <View style={styles.pergunta}>
          <Text style={styles.titulo}>Principais Sintomas</Text>
          <View style={styles.linha} />
          <Text style={styles.textoPergunta}>{dadosPergunta.pergunta}</Text>
        </View>

        <TouchableOpacity style={styles.alternativas} onPress={onResponder}>
          <Text style={styles.textoAlternativa}>{dadosPergunta.opcaoA}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.alternativas} onPress={onResponder}>
          <Text style={styles.textoAlternativa}>{dadosPergunta.opcaoB}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.alternativas} onPress={onResponder}>
          <Text style={styles.textoAlternativa}>{dadosPergunta.opcaoC}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.alternativas} onPress={onResponder}>
          <Text style={styles.textoAlternativa}>{dadosPergunta.opcaoD}</Text>
        </TouchableOpacity>

        <View style={styles.setas}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={onVoltar} disabled={isPrimeira}>
              <AntDesign name="backward" size={40} color={isPrimeira ? "#C4C4C4" : "#13315C"} />
            </TouchableOpacity>
            <Text style={[styles.textoSeta, { color: isPrimeira ? "#C4C4C4" : "#13315C" }]}>Voltar</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={onAvancar} disabled={isUltima}>
              <Entypo name="controller-next" size={40} color={isUltima ? "#C4C4C4" : "#13315C"} />
            </TouchableOpacity>
            <Text style={[styles.textoSeta, { color: isUltima ? "#C4C4C4" : "#13315C" }]}>Próximo</Text>
          </View>
        </View>
      </View>
    );
  }

  const progressoPorcentagem = ((indiceAtual + 1) / MOCK_PERGUNTAS.length) * 100;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={generalStyles.container}>
        <View style={styles.cabecalho}>
          <MenuButton color="black" />
          <View style={styles.logo}>
            <Text style={styles.textoLogo}>CheckMed</Text>
            <FontAwesome6 name="stethoscope" size={24} color="black" />
          </View>
          
          <Image 
            source={require('@/assets/images/profile.jpg')} 
            style={styles.fotoPerfil}
          />
        </View>
        
        <View style={{ flex: 1 }}>
          <View style={styles.conteudo}>
            <TouchableOpacity style={styles.ligar} onPress={ligarEmergencia}>
              <Text style={styles.textoLigar}>Ligar 192</Text>
              <FontAwesome5 name="phone" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.progressContainer}>
            <View style={[styles.progressFill, { width: `${progressoPorcentagem}%` }]} />
          </View>

          <View style={styles.questionario} >
            <Perguntas
              dadosPergunta={MOCK_PERGUNTAS[indiceAtual]}
              onResponder={lidarAvanco}
              onVoltar={lidarRetrocesso}
              onAvancar={lidarAvanco}
              isPrimeira={indiceAtual === 0}
              isUltima={indiceAtual === MOCK_PERGUNTAS.length - 1}
            />
          </View>
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

  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 15,
    marginTop: 5,
  },

  logo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6
  },

  textoLogo: {
    fontWeight: "bold",
    fontSize: 20
  },

  fotoPerfil: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#CACACA'
  },

  conteudo: {
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
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    borderRadius: 5,
    elevation: 3,
  },

  textoLigar: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18
  },

  progressContainer: {
    height: 10,
    backgroundColor: "#E5E5E5",
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 25,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#13315C",
  },

  questionario: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  containerQuestao: {
    gap: 15,
    width: "90%"
  },

  pergunta: {
    backgroundColor: "#13315C",
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    minHeight: 110,
  },

  titulo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },

  linha: {
    backgroundColor: "white",
    width: "90%",
    height: 1,
    marginVertical: 8
  },

  textoPergunta: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 10
  },

  alternativas: {
    backgroundColor: "#8DA9C4",
    borderRadius: 10,
    height: 45,
    justifyContent: "center",
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    paddingHorizontal: 15,
    elevation: 2,
  },

  textoAlternativa: {
    color: "white",
    fontSize: 15,
    fontWeight: "500"
  },

  setas: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },

  textoSeta: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5
  }
})