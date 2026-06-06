import { generalStyles, iconsSize } from '@/app/styles/generalStyles';
import MenuButton from '@/components/buttons/MenuButton';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Perfil() {
  return (
    <SafeAreaView style={generalStyles.containerBlue} edges={['top']}>
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
          <View style={styles.perfil}>
            <Image 
              source={require('@/assets/images/profile.jpg')} 
              style={styles.fotoPerfil}
            />
          </View>
          <Text style={styles.nomeUsuario}>Heloísa</Text>
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
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    elevation: 5,
  },


  fotoPerfil: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  nomeUsuario: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },

  dados: {
    flex: 1,
    marginTop: 10,
    gap: 15,
    padding: 8
  },

  dado: {
    marginHorizontal: 10,
    gap: 8
  },

  info: {
    fontSize: 17,
    fontWeight: "bold"
  },

  resposta: {
    fontSize: 17,
    fontFamily: "Arial",
    color: "grey",
    marginBottom: 10,
  },

  texto: {
    color: "white",
  },

  textoPerfil: {
    color: "#134074"
  },
});