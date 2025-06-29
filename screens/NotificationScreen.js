import {StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useFonts, OpenSans_300Light, OpenSans_400Regular} from '@expo-google-fonts/open-sans'


import Icon from 'react-native-vector-icons/FontAwesome5';

export default function NotificationScreen({navigation}) {
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
    OpenSans_300Light,
    OpenSans_400Regular,
  });

  return (
    <View style={styles.notificationContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: '70%', padding: 5, alignItems: 'flex-start' }}>
          <Image source={require('../assets/image/logo.png')} style={{ width: 50, height: 50 }} />
        </View>
        <View style={{ backgroundColor: '#3e5345', borderRadius: 5, padding: 3, marginTop: 10}}>
          <Text style={{ color: 'white', fontFamily: 'OpenSans_300Light', fontSize: 15 }}> Denunciar</Text>
        </View>
        <View style={{ paddingRight: 15, paddingLeft:5, marginTop: 10 }}>
          <FontAwesomeIcon icon={faCircleUser} size={30} color="#324d3e" />
        </View>
      </View>

      <View style={{ width: '100%', paddingHorizontal: 1000,borderBottomWidth: 1, borderColor: 'black', marginVertical: 10, marginHorizontal: -20 }} />

      <Text style={styles.titulo}>NOTIFICAÇÕES</Text>
      <Text style={styles.subtitulo}>+ 3 atualizações</Text>
      <ScrollView style={styles.scrollView}>
        {notifications.map((item, index) => (
          <View key={index} style={{ marginBottom: 15 }}>
            <View style={{ backgroundColor: item.color, borderRadius: 20, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Image source={item.image} style={{ width: 90, height: 70, borderRadius: 10, marginRight: 10 }} />
              <Text style={{ flex: 1, fontSize: 14, fontFamily: 'OpenSans_400Regular' }}>{item.description}</Text>
            </View>
            <View style={{ backgroundColor: '#97a893', borderRadius: 20, padding: 10, alignSelf: 'center', marginBottom: 5 }}>
              <Text style={{ fontWeight: 'bold', color: '#222', fontSize: 14}}>
                {item.status} - {item.date}
              </Text>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.clearButtonStyled} onPress={() => console.log('Limpar notificações')}>
          <Text style={styles.clearButtonText}>LIMPAR</Text>
        </TouchableOpacity>

        <View style={styles.barra}>
          <TouchableOpacity><Icon name="phone" size={30} color="#3e5345" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}><Icon name="map-marker-alt" size={30} color="#3e5345" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notificacao')}><Icon name="bell" size={30} color="#3e5345" /></TouchableOpacity>
        </View>
      </ScrollView>
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
});
