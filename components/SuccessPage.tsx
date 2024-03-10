import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

interface SuccessFrameProps {
    uri: string;
    message: string;
}

const SuccessFrame: React.FC<SuccessFrameProps> = ({ uri, message }) => {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>{message}</Text>
          <Image source={require('@/assets/images/excited-people.png')} style={styles.image}/>
          <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#FFFFFF" />
          </View>
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

export default SuccessFrame;
