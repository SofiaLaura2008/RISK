import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

export default function ContactScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const salvarMensagem = async (mensagemObj) => {
    const nova = { ...mensagemObj, id: uuidv4(), timestamp: Date.now() };
    try {
      const armazenadas = await AsyncStorage.getItem('mensagens');
      const lista = armazenadas ? JSON.parse(armazenadas) : [];
      await AsyncStorage.setItem('mensagens', JSON.stringify([...lista, nova]));
    } catch (e) {
      console.log('Erro ao salvar local:', e);
    }
  };

  const handleEnviar = async () => {
    console.log('Clique detectado');

    if (!nome || !email || !assunto || !mensagem) {
      console.log('Campos obrigatórios ausentes');
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
      return;
    }

    console.log('Todos os campos preenchidos. Enviando e-mail...');

    const serviceId = 'service_rsk';
    const templateId = 'template_n0yl7gk';
    const publicKey = '0ILnJfa0FjtsOrjWD';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: nome,
        reply_to: email,
        subject: assunto,
        message: mensagem,
      },
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Mensagem enviada com sucesso!');
        Alert.alert('Sucesso', 'Sua mensagem foi enviada com sucesso!');
        salvarMensagem({ nome, email, assunto, mensagem });
        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
      } else {
        const erro = await response.text();
        console.log('Erro no envio:', erro);
        Alert.alert('Erro ao enviar', 'A mensagem não pôde ser enviada.');
      }
    } catch (err) {
      console.log('Erro de rede:', err);
      Alert.alert('Erro de conexão', 'Verifique sua internet ou tente novamente.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: '70%', padding: 5, alignItems: 'flex-start' }}>
          <Image source={require('../assets/image/logo.png')} style={{ width: 50, height: 50 }} />
        </View>
        <View style={{ backgroundColor: '#3e5345', borderRadius: 5, padding: 3 }}>
          <Text style={{ color: 'white' }}> Denunciar</Text>
        </View>
        <View style={{ padding: 15 }}>
          <FontAwesomeIcon icon={faCircleUser} size={24} color="#324d3e" />
        </View>
      </View>

      <Text style={styles.titulo}>ENTRE EM CONTATO</Text>
      <Text style={styles.subtitulo}>ENVIE UMA MENSAGEM</Text>

      <Text style={styles.label}>NOME</Text>
      <TextInput
        placeholder="Seu nome"
        placeholderTextColor="#fff"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>EMAIL</Text>
      <TextInput
        placeholder="Seu e-mail"
        placeholderTextColor="#fff"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>ASSUNTO</Text>
      <TextInput
        placeholder="Seu assunto"
        placeholderTextColor="#fff"
        style={styles.input}
        value={assunto}
        onChangeText={setAssunto}
      />

      <Text style={styles.label}>MENSAGEM</Text>
      <TextInput
        placeholder="Sua mensagem"
        placeholderTextColor="#fff"
        style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
        multiline
        value={mensagem}
        onChangeText={setMensagem}
      />

      <TouchableOpacity style={styles.button} onPress={handleEnviar}>
        <Text style={styles.buttonText}>ENVIAR</Text>
      </TouchableOpacity>

      {/* Footer icons */}
      <View style={styles.barra}>
        <TouchableOpacity><Icon name="phone" size={30} color="#3e5345" /></TouchableOpacity>
        <TouchableOpacity><Icon name="map-marker-alt" size={30} color="#3e5345" /></TouchableOpacity>
        <TouchableOpacity><Icon name="bell" size={30} color="#3e5345" /></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F0F5',
    padding: 24,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    color: '#3E5245',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: '#3E5245',
    textAlign: 'center',
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
    color: '#fff',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#324D3E',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center',
    width: 160,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  barra: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
});
