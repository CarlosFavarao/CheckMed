import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function PanelLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Início',
            title: 'Início',
          }}
        />

        <Drawer.Screen
          name="sobre"
          options={{
            drawerLabel: 'Sobre Nós',
            title: 'Sobre Nós',
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  );
}