import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native' 
import userTripData from '@/assets/info/userTrips.json'
import ActionButton from "@/components/ActionButton";

const AddTripScreen = ({ navigation }) => {
    const trips = userTripData.trips
    
    const HandleAddTrip = () => {
        console.log('Add trip');
        navigation.navigate('Events');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Trip</Text>
            <Text style={styles.h1}>Name: <Text style={styles.p}>{trips.name}</Text></Text>
            <Text style={styles.h1}>Location: <Text style={styles.p}>{trips.location}</Text></Text>
            <Text style={styles.h1}>Dates: </Text>
            <Text style={styles.p}>{trips.dateStart} {trips.dateEnd}</Text>
            <Text style={styles.h1}>Send Collaboration Invites</Text>
            <View style={styles.collabCtnr}>
                <View style={styles.collabRow}>
                    <TouchableOpacity style={styles.collabCell}>
                        <Text style={styles.addText}><Image style={styles.icon}source={require('@/assets/images/plus-ring.png')}/> add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.collabCell}>
                        <Text style={styles.addText}><Image style={styles.icon}source={require('@/assets/images/plus-ring.png')}/> add</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.collabRow}>
                    <TouchableOpacity style={styles.collabCell}>
                        <Text style={styles.addText}><Image style={styles.icon}source={require('@/assets/images/plus-ring.png')}/> add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.collabCell}>
                        <Text style={styles.addText}><Image style={styles.icon}source={require('@/assets/images/plus-ring.png')}/> add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity 
                style={styles.addBtn} 
                onPress={HandleAddTrip}>
                <Text style={styles.addBtnText}>Finish Trip</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 30
    },
    title: {
        fontSize: 30,
        color: '#FD4802',
        fontWeight: '700'
    },
    h1: {
        fontSize: 22,
        color: 'black',
        fontWeight: '700',
        paddingTop: 17,
        paddingBottom: 0
    },
    p: {
        fontSize: 18,
        fontWeight: '300'
    },
    collabCtnr: {
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        height: 500,
        paddingTop: 10,
    },
    collabRow: {
        flex: 1,
        gap: 20,
    },
    collabCell: {      
        height: 70,
        width: '100%',  
        backgroundColor: '#D9D9D9',
        justifyContent: 'center'
    },
    icon: {
        // height: 10
    },
    addText: {
        alignSelf: 'center',
    },
    addBtn: {
        marginBottom: 20,
        height: 60,
        width: 300,
        borderRadius: 10,
        backgroundColor: '#F38957',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    addBtnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }
})

export default AddTripScreen;