import MainTopBar from '@/components/topBar/MainTopBar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generalStyles } from '../styles/generalStyles';


export default function Sobre() {

  return (
    <SafeAreaView style={generalStyles.container}>
      <View style={generalStyles.container}>
        <MainTopBar/>

        <View style={styles.sobre}>
          <Text style={styles.titulo}>Sobre Nós</Text>
          <Text style={styles.textoSobre}>O CheckMed nasce da união entre tecnologia e cuidado humano. Desenvolvido como parte da Atividade de Estudo Programada (AEP) da Unicesumar. </Text>
          <Text style={styles.textoSobre}>Nosso objetivo é transformar a triagem hospitalar por meio da Inteligência Artificial.</Text>
          <Text style={styles.textoSobre}>Alinhado ao ODS 3 da ONU (Saúde e Bem-Estar), o app utiliza o Protocolo de Manchester para oferecer uma orientação rápida e segura, ajudando a reduzir filas e priorizar o que realmente importa: a vida.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  cabecalho:{
    flexDirection:"row",
    justifyContent:"space-around",
    height:45,
    backgroundColor:"#13315C",
    alignItems:"center",
  },

  logo:{
    flexDirection:"row",
    justifyContent:"center",
    gap:6
  },
 
  textoLogo:{
    fontWeight:"bold",
    fontSize:20,
    color:"white",
  },

  sobre:{
    flex:1, 
    alignItems:"center",
  },

  titulo:{
    fontWeight:"bold",
    fontSize:30,
    fontFamily:"arial",
    marginTop:40,
  },

  textoSobre:{
    fontFamily:"arial",
    textAlign:"center",
    width:"85%",
    marginTop:50
  },

  rodape:{
    backgroundColor:"#8DA9C4",
    flexDirection:"row",
    justifyContent:"space-around"
  },

  texto:{
    color:"white",
  },

  opcao:{
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:5,
    marginBottom:3,
  },

  triagem:{
    height:50,
    width:50,
    backgroundColor: "#E5E5E5",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:35,
    marginTop:-20,
  },

});
