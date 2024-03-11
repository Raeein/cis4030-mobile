import React from "react";
import { View, Text, StyleSheet } from 'react-native' 
import {UserTripData, Event} from '@/types';
import userData from '@/assets/info/userTrips.json'

const userTripData = userData.trips

const Schedule: React.FC<UserTripData> = ({data}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tripTitle}>{data.name}</Text>
            <Text style={styles.tripSubtitle}>{data.location}, {data.dateStart} - {data.dateEnd}</Text>
            <View style={styles.eventContainer}>
                {data.events.map((event, index) => (
                    <View key={index}>
                        <Text style={styles.eventDate}>{event.date}</Text>
                        <View style={styles.eventNameContainer}>
                            <Text style={styles.eventName}>{event.name}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

const FullScheduleScreen = () => {
    return (
        <Schedule data={userTripData} />
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        padding: 15
    }, 
    tripTitle: {
        color: '#F38957',
        fontSize: 26,
        fontWeight: '800',
        paddingBottom: 5
    },
    tripSubtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    eventContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    eventNameContainer: {
        backgroundColor: '#F0A365',
        width: '90%',
    }, 
    eventName: {
        fontSize: 16,
    },
    eventDate: {

    }
});

export default FullScheduleScreen;