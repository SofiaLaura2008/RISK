import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useFonts, OpenSans_300Light, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import {LexendExa_200ExtraLight, LexendExa_300Light, LexendExa_400Regular, LexendExa_500Medium,} from '@expo-google-fonts/lexend-exa';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function NotificationScreen({ navigation }) {
    const notifications = [
        {
        status: 'PROBLEMA REPORTADO',
        date: '05/05',
        description: 'Buraco na calçada - Av. Bernardo Vieira de Melo, 225D',
        color: '#f6f6f8',
        image: require('../assets/image/buracos.png'),
        },
        {
        status: 'PROBLEMA EM ANDAMENTO',
        date: '',
        description: 'Buraco na pista - Av. Santana Vieira da Silva, 215B',
        color: '#f6f6f8',
        image: require('../assets/image/buracos.png'),
        },
        {
        status: 'PROBLEMA RESOLVIDO',
        date: '15/05',
        description: 'Buraco resolvido - Av. Santana Vieira da Silva, 215B',
        color: '#f6f6f8',
        image: require('../assets/image/buracos.png'),
        },
    ];

    const [fontLoaded] = useFonts({
        LexendExa_200ExtraLight,
        LexendExa_300Light,
        LexendExa_400Regular,
        LexendExa_500Medium,
        OpenSans_300Light,
        OpenSans_400Regular,
    });

    const [selectedRisk, setSelectedRisk] = useState(null);

    return (
    <View style={styles.notificationContainer}>
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

        <Text style={styles.titulo}>DENUNCIAR</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}> TIPO DE PROBLEMA</Text>
        <View style={styles.scrollView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ backgroundColor: 'white', padding: 8, borderRadius: 15 }}>
                <Icon name="exclamation-circle" size={20} color="#c4434d" style={{ marginRight: 8, alignSelf: 'center'}} />
                <Text>Buracos</Text>
            </View>
            <View style={{ backgroundColor: 'white', padding: 8, borderRadius: 15 }}>
                <Text>Alagamentos</Text>
            </View>
            <View style={{ backgroundColor: 'white', padding: 8, borderRadius: 15 }}>
                <Text>Calçada</Text>
            </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <View style={{ backgroundColor: 'white', padding: 8, borderRadius: 15 }}>
                <Text>Problemas Elétricos</Text>
            </View>
            <View style={{ backgroundColor: 'white', padding: 8, borderRadius: 15 }}>
                <Text>Outros</Text>
            </View>
            </View>

            <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 30 }}> Descrição</Text>
            <View style={{ backgroundColor: 'white', borderRadius: 15, padding: 10, marginTop: 8}}>
            <TextInput placeholder="Descreva o problema" multiline numberOfLines={4} />
            </View>

        <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 30 }}> Nível de risco</Text>
        <View style={{ marginTop: 10, borderRadius: 5, paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
            {['Baixo', 'Médio'].map((risk) => (
            <TouchableOpacity
                key={risk}
                onPress={() => setSelectedRisk(risk)}
                style={[
                styles.riskOption,
                selectedRisk === risk && styles.riskOptionSelected,
                ]}
            >
                <Text style={selectedRisk === risk ? styles.riskTextSelected : styles.riskText}>{risk}</Text>
            </TouchableOpacity>
            ))}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {['Alto', 'Crítico'].map((risk) => (
            <TouchableOpacity
                key={risk}
                onPress={() => setSelectedRisk(risk)}
                style={[
                styles.riskOption,
                selectedRisk === risk && styles.riskOptionSelected,
                ]}
            >
                <Text style={selectedRisk === risk ? styles.riskTextSelected : styles.riskText}>{risk}</Text>
            </TouchableOpacity>
            ))}
        </View>
        </View>

        
        <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 30 }}>Adicionar foto/vídeo</Text>
        <View style={{backgroundColor: 'white', borderRadius: 15}}>
            <TextInput placeholder='Adicione sua foto/vídeo'>

            </TextInput>
        </View>

        <View style={styles.barra}>
            <TouchableOpacity>
                <Icon name="phone" size={30} color="#3e5345" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Icon name="map-marker-alt" size={30} color="#3e5345" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notificacao')}>
                <Icon name="bell" size={30} color="#3e5345" />
            </TouchableOpacity>
        </View>
        </View>
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
  notificationContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#f0f0f5',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontFamily: 'LexendExa_400Regular',
    color: '#3E5245',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 12,
    fontFamily: 'OpenSans_400Regular',
    color: '#3E5245',
    textAlign: 'center',
    marginBottom: 30,
  },
  clearButtonStyled: {
    alignSelf: 'center',
    backgroundColor: '#324D3E',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 20,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'OpenSans_300Light',
  },
  barra: {
    flexDirection: 'row',
    backgroundColor: '#dae6d8',
    borderRadius: 40,
    margin: 60,
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  scrollView: {
    marginTop: 10,
  },
  riskOption: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#324d3e',
    backgroundColor: '#fff',
  },
  riskOptionSelected: {
    backgroundColor: '#324d3e',
  },
  riskText: {
    color: '#324d3e',
    fontWeight: '600',
  },
  riskTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
