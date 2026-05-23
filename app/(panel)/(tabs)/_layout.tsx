import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout() {
  const insets = useSafeAreaInsets()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          styles.rodape, 
          {
            height: 70 + insets.bottom,
            paddingBottom: 10 + insets.bottom
          }
      ],
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#134074',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarLabelStyle: styles.texto,
      }}
    >
      <Tabs.Screen
        name="hospitais/index"
        options={{
          title: 'Hospitais',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hospital" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="triagem/index"
        options={{
          title: 'Nova Triagem',
          tabBarIcon: ({ color }) => (
            <View style={styles.triagemContainer}>
              <Ionicons name="medical" size={30} color="#134074" />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="perfil/index"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  rodape: {
    backgroundColor: '#8FAADC', 
    height: 70,
    borderTopWidth: 0,
    paddingBottom: 10,
    paddingTop: 10,
  },
  texto: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  triagemContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  }
});