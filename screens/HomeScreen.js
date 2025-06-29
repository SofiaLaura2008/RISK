import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Home({ navigation }) {
return (
    <View style={styles.container}>
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

        <View style={{ width: '100%', paddingHorizontal: 1000,borderBottomWidth: 1, borderColor: 'black', marginVertical: 10, marginHorizontal: -20 }} />

        {/* Tabs */}
        <View style={styles.tabs}>
            
            <Text style={styles.tabActive} onPress={() => navigation.navigate('Home')}>Recentes</Text>
            <Text style={styles.tab} onPress={() => navigation.navigate('Proximas')}>Próximos</Text>
            <Text style={styles.tab} onPress={() => navigation.navigate('Minhas Denuncias')}>Minhas Denúncias</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
            <Text style={styles.title}>BURACO NA CALÇADA</Text>
            <Text style={styles.subtitle}>Pendente</Text>
            <Text style={styles.description}>
            Av. Bernardo Vieira de Melo, 2250
            Buraco grande na calçada causando risco de acidentes para pedestres.
            </Text>
            <Image
            source={require('../assets/image/buracos.png')}
            style={styles.image}
            />
        </View>

        {/* Barra */}
        <View style={styles.barra}>
            <TouchableOpacity><Icon name="phone" size={30} color="#3e5345" /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}><Icon name="map-marker-alt" size={30} color="#3e5345" /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notificacao')}><Icon name="bell" size={30} color="#3e5345" /></TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F5',
        padding: 24,
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        marginTop: 280,
    },
    tab: {
        fontSize: 16,
        color: '#324D3E',
    },
    tabActive: {
        fontSize: 16,
        color: '#324D3E',
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderColor: '#324D3E',
    },
    content: {
        paddingHorizontal: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#324D3E',
        marginBottom: 4,
    },
    subtitle: {
        color: '#324D3E',
        fontSize: 14,
        marginBottom: 8,
    },
    description: {
        color: '#324D3E',
        fontSize: 14,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 160,
        borderRadius: 20,
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
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
        fontWeight: 'bold',
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