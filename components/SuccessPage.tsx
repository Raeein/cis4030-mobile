import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import OrangePrimaryButton from '@/components/OrangePrimaryButton'; 

interface SuccessFrameProps {
    uri: string
    message: string
}

const SuccessFrame:React.FC<SuccessFrameProps> = ({ uri, message }) => {
    console.log(uri);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
            <Image source={require('@/assets/images/excited-people.png')}   style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#F38957'
    },
    text: {
        fontSize: 25,
        fontWeight: '700',
        color: 'white'
    },
    image: {
        height: 300,
        width: 300,
    }

});

export default SuccessFrame