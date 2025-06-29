import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image} from 'react-native';
import { useFonts, LexendExa_200ExtraLight, LexendExa_300Light,LexendExa_400Regular,LexendExa_500Medium } from '@expo-google-fonts/lexend-exa'
import {Petrona_200ExtraLight } from '@expo-google-fonts/petrona'
import {MerriweatherSans_600SemiBold } from '@expo-google-fonts/merriweather-sans';

export default function CadastroScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fontLoaded] = useFonts({
        LexendExa_200ExtraLight,
        LexendExa_300Light,
        LexendExa_400Regular,
        LexendExa_500Medium,
        Petrona_200ExtraLight,
        MerriweatherSans_600SemiBold,
    });

    if (!fontLoaded) {
        return null; 
    }


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
        const userExists = response.data.find(user => user.username === username);
        const emailExists = response.data.find(user => user.email === email);

        if (userExists || emailExists) {
            Alert.alert('Erro', userExists ? 'Usuário já cadastrado!' : 'Email já cadastrado!');
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
        <Image source={require('../assets/image/logo.png')} style={styles.logo} />
        <Text style={styles.titulo}>Cadastre-se</Text>
        <Text style={styles.subtitulo}>Ajude a mapear problemas na sua cidade.</Text>

        <Text style={styles.label}>Usuário</Text>
        <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
        />
        <Text style={styles.label}>Confirme a senha</Text>
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

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F5',
        padding: 24,
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 20,
    },
    titulo: {
        fontSize: 30.2,
        color: '#3E5245',
        textAlign: 'center',
        fontFamily: 'MerriweatherSans_600SemiBold',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 17,
        color: '#3E5245',
        textAlign: 'center',
        fontFamily: 'Petrona_200ExtraLight',
        marginBottom: 30,
    },
    label: {
        fontSize: 12,
        color: '#3E5245',
        fontWeight: 'bold',
        marginBottom: 6,
        marginLeft: 4,
    },
    input: {
        backgroundColor: '#97A893',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 16,
        color: '#3E5245',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#324D3E',
        borderRadius: 20,
        padding: 12,
        alignItems: 'center',
        marginVertical: 12,
    },
    buttonText: {
        color: '#F0F0F5',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
