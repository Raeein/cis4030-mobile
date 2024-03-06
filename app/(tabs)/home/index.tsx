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
                <View style={styles.profileContainer}>
                    <View style={styles.imageContainer}></View>
                    <Text style={styles.nameText}>Name</Text> 
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
        padding: 20,
        backgroundColor: '#fff',
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
        top: 5,
        position: 'absolute',
    },
    locationBtn: {
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginVertical: 5,
        minWidth: 200,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    locBtnText: {
        fontSize: 18,
        color: '#fff'
    },
    arrow: {
        width: 20,
        height: 20,
        tintColor: 'fff',
    },
    profileContainer: {
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        padding: 10,
        marginTop: 10,
        borderRadius: 15,
        width: '90%',
        height: '90%',
    },
    imageContainer: {
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: "#2f95dc",
        padding: 10,
        width: 160,
        height: 160,
        borderRadius: 90,
    },
    nameText: {
        fontSize: 30,
    }
});