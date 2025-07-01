import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';

export default function InitialScreen({ navigation }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        Animated.parallel([
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }),
        ]).start();

        const timer = setTimeout(() => {
        navigation.replace('Login');
        }, 6000); 

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
        <Animated.Image
            source={require('../assets/image/logo.png')}
            style={[styles.logo, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}
        />
        <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
            Ajude a reportar problemas de infraestrutura na sua cidade.
        </Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: 'Black',
        textAlign: 'center',
    },
});