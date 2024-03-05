import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Colors from "@/constants/Colors";

function changeLocation() {

}

function LocationButton( ) {
    return (
        <TouchableOpacity style={styles.locationBtn} onPress={changeLocation}>
            <Text style={styles.locBtnText}>Location</Text>
            <Image style={styles.arrow} source={require('@/assets/images/down-arrow-icon.png')} />
        </TouchableOpacity>
    );
}

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            {/* <ScrollView> */}
                <View style={styles.locationBtnContainer}>
                    <LocationButton></LocationButton>
                </View>                
            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    locationBtnContainer: {
        top: -330,
    },
    locationBtn: {
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginVertical: 5,
        minWidth: 200,
        alignItems: 'center',
        justifyContent: 'centers',
        flexDirection: 'row',
    },
    locBtnText: {
        fontSize: 18,
        color: '#fff'
    },
    arrow: {
        width: 20,
        height: 20,
        tintColor: 'ffffff',
    },
});