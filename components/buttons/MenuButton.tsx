import { iconsSize } from '@/app/styles/generalStyles';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';

interface MenuButtonProps {
  color: string;
}

export default function MenuButton({ color }: MenuButtonProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      activeOpacity={0.7}
    >
      <Ionicons name="menu-outline" size={iconsSize} color={color} />
    </TouchableOpacity>
  );
}