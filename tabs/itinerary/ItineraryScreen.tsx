import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import DropDownSelect from '@/components/DropDownSelect';
import ActionButton from '@/components/ActionButton';
import EventBox from '@/components/EventBox';
import cities from '@/assets/info/cities.json';
import userData from '@/assets/info/userTrips.json';
import UserTrips from '@/components/UserTrips';
import eventData from '@/assets/info/events.json';

export default function ItineraryScreen({ navigation }) {
    const [events, setEvents] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const userTripData = userData.trips;

    const handleAddTrip = () => {
        console.log('Handle Add Trip');
        navigation.navigate('Trip');
    };

    const handleCityChange = (city) => {
        console.log('Handle City Change', city);
        setSelectedCity(city);
        console.log(selectedCity);
    };

    const handleEventClick = (data) => {
        console.log('Handle Event Click');
        navigation.navigate('Event', {data});
    }   

    useEffect(() => {

        const fetchEvents = async () => {
            try {
                const cityObject = eventData.events.find(cityObj => cityObj.city === selectedCity);

                if (cityObject) {
                    const eventsPromises = cityObject.ids.map(async eventId => {
                        const url = 'https://www.eventbriteapi.com/v3/events/' + eventId + '/'
                        const response = await fetch(url, {
                            method: 'GET',
                            headers: {
                                Authorization: 'Bearer N6AAKEJO22HNNPCPYGWD',
                                'Content-Type': 'application/json',
                            },
                        });
                        const eventData = await response.json();
                        return eventData;
                    });

                    const eventsData = await Promise.all(eventsPromises);

                    setEvents(eventsData);
                    // console.log("data", eventsData);
                }
                else {
                    console.error('City not found in JSON data');
                }
                    
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
                    select={handleCityChange}
                />
            </View>
            <Text style={styles.heading}>Local events in {selectedCity.substring(0, selectedCity.indexOf(','))}</Text>
            <Swiper style={styles.wrapper} loop={false}>
                {events.map((event, index) => (
                    <EventBox key={index} data={event} onClick={() => handleEventClick(event)}/>
                ))}
            </Swiper>
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
    wrapper: {
        alignSelf: 'center',
        height: 500,
        marginLeft: 20,
    }
});
