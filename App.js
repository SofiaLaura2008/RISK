import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image, ScrollView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

import { useFonts } from 'expo-font';

import axios from 'axios';

const Stack = createNativeStackNavigator();
const BASE_URL = 'http://192.168.0.19:3000';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/usuario`);
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('Home', { username: user.username });
      } else {
        Alert.alert('Erro', 'Usuário ou senha inválidos!');
      }
    } catch (error) {
      console.error('Erro no login:', error.message);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <FontAwesomeIcon icon={faCircleUser} size={50} color="blue" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

function NotificationScreen({ navigation }) {
  const notifications = [
    {
      status: 'PROBLEMA REPORTADO',
      date: '05/05',
      description:
        'Av. Bernardo Vieira de Melo, 225D. Buraco grande na calçada causando risco de acidentes para pedestres.',
      color: '#f6f6f8',
      image: require('./assets/image/buracos.png'), // Exemplo de imagem
    },
    {
      status: 'PROBLEMA EM ANDAMENTO',
      date: '',
      description:
        'Av. Santana Vieira da Silva, 215B. Buraco na pista oferece risco ao trânsito.',
      color: '#f6f6f8',
      image: require('./assets/image/buracos.png'),
    },
    {
      status: 'PROBLEMA RESOLVIDO',
      date: '15/05',
      description:
        'Av. Santana Vieira da Silva, 215B. Buraco na pista oferece risco ao trânsito.',
      color: '#f6f6f8',
      image: require('./assets/image/buracos.png'),
    },
  ];

  return (
    <View style={styles.notificationContainer}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: '70%', padding: 5, alignItems: 'flex-start' }}>
          <Image
            source={require('./assets/image/logo.png')}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={{ backgroundColor: '#3e5345', borderRadius: 5, padding: 3 }}>
          <Text style={{ color: 'white' }}> Denunciar</Text>
        </View>
        <View style={{ padding: 15 }}>
          <FontAwesomeIcon
            icon={faCircleUser}
            size={24}
            color="#324d3e"
            onPress={() => alert('Perfil!')}
          />
        </View>
      </View>

      <View style={{ borderBottomWidth: 1, borderColor: 'black', marginVertical: 10 }} />

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>NOTIFICAÇÕES</Text>
        <Text style={styles.subtitle}>+ 3 atualizações</Text>
        <ScrollView style={styles.scrollView}>
          {notifications.map((item, index) => (
            <View key={index} style={{ marginBottom: 15 }}>
              {/* Description View */}
              <View style={{ backgroundColor: item.color, borderRadius: 20, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={item.image}
                  style={{ width: 90, height: 70, borderRadius: 10, marginRight: 10 }}
                  resizeMode="cover"
                />
                <Text style={{ flex: 1, fontSize: 14 }}>{item.description}</Text>
              </View>

              {/* Status View */}
              <View style={{ backgroundColor: '#97a893', borderRadius: 20, padding: 10, alignSelf: 'flex-start', marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold', color: '#222', fontSize: 16 }}>
                  {item.status}  -  {item.date}
                </Text>
              </View>
            </View>
          ))}

          <Button labelStyle={{ color: '#727171' }}>
            LIMPAR
          </Button>

        </ScrollView>
      </View>
    </View>
  );
}


function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/usuario`);
      const userExists = response.data.find(
        (user) => user.username === username
      );
      const emailExists = response.data.find((user) => user.email === email);

      if (userExists) {
        Alert.alert('Erro', 'Usuário já cadastrado!');
        return;
      }
      if (emailExists) {
        Alert.alert('Erro', 'Email já cadastrado!');
        return;
      }

      await axios.post(`${BASE_URL}/usuario`, { username, email, password });
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro no cadastro:', error.message);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme a Senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

function Home({ route }) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a), {username}!</Text>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notificacao">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            header: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                }}
              >
                <Image
                  source={require('./assets/image/logo.png')}
                  style={{ width: 50, height: 50 }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 200,
                  }}
                >
                  <Text
                    style={{ marginRight: 10, fontSize: 16, color: '#000' }}
                  >
                    Denunciar
                  </Text>
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    size={24}
                    color="#324d3e"
                    onPress={() => alert('Perfil!')}
                  />
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: '#f0f0f5',
              height: 40,
            },
          }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Notificacao"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f5',
  },
  notificationContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#f0f0f5',
  },
  title: {
    fontFamily: 'Lexend Exa',
    fontSize: 22.4,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  link: {
    marginTop: 10,
    color: '#007bff',
  },
  scrollView: {
    width: '100%',
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
  },
  clearButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  clearText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
