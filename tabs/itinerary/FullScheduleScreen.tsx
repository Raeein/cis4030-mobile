import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native' 
import {UserTripData, Event} from '@/types';
import userData from '@/assets/info/userTrips.json'

const userTripData = userData.trips

const formatDate = (dateString: string) => {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

const Schedule: React.FC<UserTripData> = ({data}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tripTitle}>{data.name}</Text>
            <Text style={styles.tripSubtitle}>{data.location} • {formatDate(data.dateStart)} - {formatDate(data.dateEnd)}</Text>
            <View style={styles.eventContainer}>
                <ScrollView style={styles.scroll}>
                    {data.events.map((event, index) => (
                        <View key={index}>
                            <View style={styles.eventDateContainer}>
                                <Text style={[styles.eventDate, {marginBottom: 3}]}>{formatDate(event.date)}</Text>
                            </View>
                            <Text style={[styles.eventDate, {marginBottom: 10}]}>9:00 AM</Text>
                            <View style={styles.eventNameContainer}>
                                <Text style={styles.eventName}>{event.name}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
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
        alignItems: 'flex-start',
        width: '100%',
        padding: 30
    }, 
    tripTitle: {
        color: '#F38957',
        fontSize: 35,
        fontWeight: '800',
        paddingBottom: 5
    },
    tripSubtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#708090',
        marginBottom: 40,
    },
    eventContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
    },
    scroll: {
       
    },
    eventNameContainer: {
        backgroundColor: '#F0A365',
        width: 250,
        borderRadius: 12,
        padding: 15,
        marginBottom: 30,
    }, 
    eventName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FFF",
    },
    eventDateContainer: {
        marginBottom: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    eventDate: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default FullScheduleScreen;