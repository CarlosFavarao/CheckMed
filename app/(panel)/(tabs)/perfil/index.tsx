import { generalStyles, iconsSize } from '@/app/styles/generalStyles';
import MenuButton from '@/components/buttons/MenuButton';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Perfil() {

  return (
    <SafeAreaView style={generalStyles.container}>

      <View style={generalStyles.container}>
        <View style={styles.cabecalho}>
          <MenuButton color="white"/>
          <View style={styles.logo}>
            <Text style={styles.textoLogo}>CheckMed</Text>
            <FontAwesome6 name="stethoscope" size={24} color="white" />
          </View>
          <Feather name="edit" size={iconsSize - 2} color="white" />
        </View>

        <View style={styles.usuario}>
          <View style={styles.perfil}><FontAwesome name="user-circle-o" size={80} color="black" /></View>
          <Text style={styles.nomeUsuario}>Usuário</Text>
        </View>

        <View style={styles.dados}>
          <View style={styles.dado}>
            <Text style={styles.info}>Data de Nascimento</Text>
            <Text style={styles.resposta}>03/01/2005</Text>
          </View>
          <View style={styles.dado}>
            <Text style={styles.info}>Sexo</Text>
            <Text style={styles.resposta}>Feminino</Text>
          </View>
          <View style={styles.dado}>
            <Text style={styles.info}>Peso | Altura</Text>
            <Text style={styles.resposta}>44kg | 1,61m</Text>
          </View>
          <View style={styles.dado}>
            <Text style={styles.info}>Alergias</Text>
            <Text style={styles.resposta}>Não</Text>
          </View>
          <View style={styles.dado}>
            <Text style={styles.info}>Tipo Sanguíneo</Text>
            <Text style={styles.resposta}>B+</Text>
          </View>
          <View style={styles.dado}>
            <Text style={styles.info}>Doador de órgãos</Text>
            <Text style={styles.resposta}>Sim</Text>
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
    height: 90,
    backgroundColor: "#13315C",
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

  usuario: {
    alignItems: "center"
  },

  perfil: {
    marginTop: -45,
    backgroundColor: "white",
    width: 80,
    alignItems: "center",
    borderRadius: 200,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
  },

  nomeUsuario: {
    fontSize: 25,
  },

  dados: {
    flex: 1,
    marginTop: 10,
    gap: 15,
    padding: 8
  },

  dado: {
    gap: 8
  },

  info: {
    fontWeight: "bold"
  },

  resposta: {
    fontSize: 15,
    fontFamily: "Arial",
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

  textoPerfil: {
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
