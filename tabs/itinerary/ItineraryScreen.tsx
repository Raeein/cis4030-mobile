import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import DropDownSelect from '@/components/DropDownSelect';
import ActionButton from '@/components/ActionButton';
import EventBox from '@/components/EventBox';
import cities from '@/assets/info/cities.json';
import userData from '@/assets/info/userTrips.json';
import UserTrips from '@/components/UserTrips';

export default function ItineraryScreen({ navigation }) {
    const [events, setEvents] = useState();
    const [selectedCity, setSelectedCity] = useState('');
    const userTripData = userData.trips;

    const handleAddTrip = () => {
        console.log('Handle Add Trip');
        navigation.navigate('Trip');
    };

    const handleCityChange = async (city) => {
        console.log('Handle City Change', city);
        setSelectedCity(city);
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('https://www.eventbriteapi.com/v3/events/49216045517/', {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer N6AAKEJO22HNNPCPYGWD',
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setEvents(data);
                // console.log("data", data.name.text);
                // if (Array.isArray(data)) {
                //     setEvents(data);
                // } else {
                //     console.error('Invalid data format received from the API:', data);
                // }
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, [selectedCity]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.dropDownContainer}>
                <DropDownSelect
                    item={cities}
                    boxColor="#F38957"
                    textColor="#FFFFFF"
                    boxText={cities.information[0]}
                    onSelect={handleCityChange}
                />
            </View>
            <Text style={styles.heading}>Events starting from: </Text>
            {/* {events.map((event, index) => ( */}
                <EventBox data={events} />
            {/* ))} */}
            <Text style={styles.heading}>Your trips</Text>
            <UserTrips data={userTripData} navigation={navigation} />
            <View style={{ flex: 1, marginTop: 20 }}>
                <ActionButton
                    title="Add Trip"
                    buttonColor="#F0A365"
                    textColor="white"
                    onPress={handleAddTrip}
                    height={40}
                    width={200}
                    borderRadius={10}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        padding: 15,
    },
    dropDownContainer: {
        width: '50%',
        paddingBottom: 20,
    },
    heading: {
        fontWeight: '700',
        fontSize: 20,
        alignSelf: 'flex-start',
        padding: 15,
    },
});
