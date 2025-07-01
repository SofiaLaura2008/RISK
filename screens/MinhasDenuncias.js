import {StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useFonts, OpenSans_300Light, OpenSans_400Regular} from '@expo-google-fonts/open-sans'

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function MinhaDenunciaScreen({ navigation }) {
    const [fontLoaded] = useFonts({
            OpenSans_300Light,
            OpenSans_400Regular,
        });
    return (
        <ScrollView style={styles.container}>
        {/* Header */}
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

            {/* Tabs */}
            <View style={styles.tabs}>
                
                <Text style={styles.tab} onPress={() => navigation.navigate('Home')}>Recentes</Text>
                <Text style={styles.tab} onPress={() => navigation.navigate('Proximas')} >Próximos</Text>
                <Text style={styles.tabActive} onPress={() => navigation.navigate('Minhas Denuncias')}>Minhas Denúncias</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.title}>NÃO HÁ DENÚNCIAS</Text>
                <Text style={styles.subtitle}>Deseja fazer alguma denúncia?</Text>
                
                <View style={{ backgroundColor: '#c4434d', borderRadius: 5, paddingVertical: 6, paddingHorizontal: 12, alignSelf: 'flex-start', marginBottom: 10 }}>
                    <Text style={{ color: 'white', fontFamily: 'OpenSans_300Light', fontSize: 15, textAlign: 'center' }}>Denunciar</Text>
                </View>

            </View>

            {/* Barra */}
            <View style={styles.barra}>
                <TouchableOpacity>
                    <Icon name="phone" size={30} color="#3e5345" onPress={() => navigation.navigate('Contato')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Icon name="map-marker-alt" size={30} color="#3e5345" /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notificacao')}><Icon name="bell" size={30} color="#3e5345" /></TouchableOpacity>
            </View>
        </ScrollView>
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
        fontFamily: 'OpenSans_400Regular',
        color: '#324D3E',
    },
    tabActive: {
        fontSize: 16,
        color: '#324D3E',
        fontFamily: 'OpenSans_400Regular',
        borderBottomWidth: 2,
        borderColor: '#324D3E',
    },
    content: {
        backgroundColor: '#d2dfcc',
        borderRadius: 15,
        padding: 5,
        paddingHorizontal: 10,
        marginBottom: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#324D3E',
        marginBottom: 4,
    },
    subtitle: {
        color: '#324D3E',
        fontFamily:'OpenSans_400Regular',
        fontSize: 13,
        marginBottom: 8,
    },
    description: {
        color: '#324D3E',
        fontSize: 14,
        marginBottom: 10,
    },
    image: {
        width: '40%',
        height: '50%',
        borderRadius: 15,
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
        marginBottom: 70,
    },
    scrollView: {
        marginTop: 10,
    },
    reportsContainer: {
        marginTop: 10,
        marginBottom: 20,
        gap: 10,
    },
});