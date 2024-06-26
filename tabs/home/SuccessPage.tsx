import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

// interface SuccessFrameProps {
//     uri?: string;
//     message: string;
// }

const SuccessPage = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("HomeScreen");
        }, 3000);

        return () => clearTimeout(timer);

    }, [])

    return (
      <View style={styles.container}>
          <Text style={styles.text}>Matched!</Text>
          <Image source={require('@/assets/images/excited-people.png')} style={styles.image}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#F38957',
        position: 'relative',
    },
    text: {
        fontSize: 25,
        fontWeight: '700',
        color: 'white'
    },
    image: {
        height: 300,
        width: 300,
    },
    loadingContainer: {
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SuccessPage;
