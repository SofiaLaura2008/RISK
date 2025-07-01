import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView, SafeAreaView, Image } from 'react-native';
import { useFonts, LexendExa_300Light, LexendExa_400Regular } from '@expo-google-fonts/lexend-exa';
import { Petrona_200ExtraLight } from '@expo-google-fonts/petrona';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

export default function AjudaSuporteScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    LexendExa_300Light,
    LexendExa_400Regular,
    Petrona_200ExtraLight,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../assets/image/logo.png')} style={styles.logo} />
          <View style={styles.reportButton}>
            <Text style={styles.reportText}>Denunciar</Text>
          </View>
          <FontAwesomeIcon icon={faCircleUser} size={28} color="#3E5245" />
        </View>

        {/* Título e subtítulo */}
        <Text style={styles.title}>Suporte & Ajuda</Text>
        <Text style={styles.subtitle}>
          Aqui estão os contatos para denúncias graves em Jaboatão dos Guararapes:
        </Text>

        {/* Prefeitura */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Prefeitura – Secretaria de Infraestrutura</Text>
          <Text style={styles.cardText}>
            Relatos de buracos, vias danificadas, iluminação pública.
          </Text>
          <Text style={styles.phoneNumber}>0800 281 1925</Text>
          <Text style={styles.phoneNumber}>(81) 3476-1721</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('tel:08002811925')}>
            <Text style={styles.buttonText}>Ligar para Prefeitura</Text>
          </TouchableOpacity>
        </View>

        {/* Defesa Civil */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Defesa Civil – Alagamentos e Deslizamentos</Text>
          <Text style={styles.cardText}>Emergências em áreas de risco.</Text>
          <Text style={styles.phoneNumber}>0800 281 2099</Text>
          <Text style={styles.phoneNumber}>(81) 99195-6655 (WhatsApp)</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('tel:08002812099')}>
            <Text style={styles.buttonText}>Ligar para Defesa Civil</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          Em caso de emergência, disque 190 (Polícia Militar)
        </Text>

        {/* Barra inferior */}
        <View style={styles.barra}>
          <TouchableOpacity>
            <Icon name="phone" size={26} color="#3e5245" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="map-marker-alt" size={26} color="#3e5245" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notificacao')}>
            <Icon name="bell" size={26} color="#3e5245" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
  },
  scrollContainer: {
    padding: 24,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  reportButton: {
    backgroundColor: '#3e5345',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  reportText: {
    color: 'white',
    fontFamily: 'LexendExa_300Light',
    fontSize: 14,
  },
  title: {
    fontFamily: 'LexendExa_400Regular',
    fontSize: 22,
    color: '#3E5245',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Petrona_200ExtraLight',
    fontSize: 16,
    color: '#3E5245',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#97A893',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontFamily: 'LexendExa_400Regular',
    fontSize: 16,
    color: '#3E5245',
    marginBottom: 4,
  },
  cardText: {
    fontFamily: 'LexendExa_300Light',
    fontSize: 14,
    color: '#3E5245',
    marginBottom: 8,
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#324D3E',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#3E5245',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'LexendExa_400Regular',
  },
  footerText: {
    fontSize: 12,
    color: '#3E5245',
    textAlign: 'center',
    marginTop: 24,
    fontFamily: 'LexendExa_300Light',
  },
  barra: {
    flexDirection: 'row',
    backgroundColor: '#dae6d8',
    borderRadius: 40,
    marginTop: 32,
    padding: 10,
    width: '80%',
    justifyContent: 'space-around',
  },
});
