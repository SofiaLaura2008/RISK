import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView, SafeAreaView, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function AjudaSuporteScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '70%', padding: 5, alignItems: 'flex-start' }}>
                        <Image source={require('../assets/image/logo.png')} style={{ width: 50, height: 50 }} />
                    </View>
                    <View style={{ backgroundColor: '#3e5345', borderRadius: 5, padding: 3, marginTop: 10 }}>
                        <Text style={{ color: 'white', fontFamily: 'OpenSans_300Light', fontSize: 15 }}> Denunciar</Text>
                    </View>
                    <View style={{ paddingRight: 15, paddingLeft: 5, marginTop: 10 }}>
                        <FontAwesomeIcon icon={faCircleUser} size={30} color="#324d3e" />
                    </View>
        </View>
        <View style={{
                    width: '100%',
                    paddingHorizontal: 1000,
                    borderBottomWidth: 1,
                    borderColor: 'black',
                    marginVertical: 10,
                    marginHorizontal: -20,
                }}
                />
                
        <Text style={styles.title}>Suporte & Ajuda</Text>
        <Text style={styles.subtitle}>
          Aqui estão os contatos para denúncias graves em Jaboatão dos Guararapes:
        </Text>

        {/* Prefeitura */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Prefeitura – Secretaria de Infraestrutura</Text>
          <Text style={styles.cardText}>Relatos de buracos, vias danificadas, iluminação pública.</Text>
          <Text style={styles.phoneNumber}>0800 281 1925</Text>
          <Text style={styles.phoneNumber}>(81) 3476-1721</Text>
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('tel:08002811925')}>
            <Text style={styles.buttonText}>Ligar para Prefeitura</Text>
          </TouchableOpacity>
        </View>

        {/* Defesa Civil */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Defesa Civil – Alagamentos e Deslizamentos</Text>
          <Text style={styles.cardText}>Emergências em áreas de risco.</Text>
          <Text style={styles.phoneNumber}>0800 281 2099</Text>
          <Text style={styles.phoneNumber}>(81) 99195-6655 (WhatsApp)</Text>
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('tel:08002812099')}>
            <Text style={styles.buttonText}>Ligar para Defesa Civil</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>Em caso de emergência, disque 190 (Polícia Militar)</Text>
         <View style={styles.barra}>
                    <TouchableOpacity>
                      <Icon name="phone" size={30} color="#3e5345" onPress={() => navigation.navigate('Contato')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                      <Icon name="map-marker-alt" size={30} color="#3e5345" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notificacao')}>
                      <Icon name="bell" size={30} color="#3e5345" />
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
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#3E5245',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#3E5245',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#97A893',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    color: '#3E5245',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#3E5245',
    marginBottom: 8,
  },
  phoneNumber: {
    fontSize: 16,
    color: '#324D3E',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#324D3E',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: '#3E5245',
    textAlign: 'center',
    marginTop: 32,
  },
  barra: {
    flexDirection: 'row',
    backgroundColor: '#dae6d8',
    borderRadius: 40,
    margin: 60,
    justifyContent: 'space-around',
    marginVertical: 15,
  },
});