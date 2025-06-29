import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NotificationScreen from './screens/NotificationScreen';
import LoginScreen from './screens/LoginScreen';
import Home from './screens/HomeScreen';
import CadastroScreen from './screens/CadastroScreen';
import InitialScreen from './screens/InitialScreen';
import ProximasScreen from './screens/ProximasScreen';
import MinhaDenunciaScreen from './screens/MinhasDenuncias';
import DenunciarScreen from './screens/DenunciarScreen';
import AjudaSuporteScreen from './screens/AjudaSuporteScreen';
import ContatoScreen from './screens/ContatoScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contato">
        <Stack.Screen name="Inicial" component={InitialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Proximas" component={ProximasScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Minhas Denuncias" component={MinhaDenunciaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Denunciar" component={DenunciarScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Notificacao" component={NotificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Ajuda e Suporte" component={AjudaSuporteScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contato" component={ContatoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

