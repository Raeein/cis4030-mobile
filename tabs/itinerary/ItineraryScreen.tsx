import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from 'react-native';
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
    const [selectedCity, setSelectedCity] = useState('Saigon, VN');
    const [loading, setLoading] = useState(false);
    const userTripData = userData.trips;
    const swiperRef = useRef(null);

    const handleAddTrip = () => {
        console.log('Handle Add Trip');
        navigation.navigate('Trip');
    };

    const handleCityChange = (city) => {
        console.log('Handle City Change', city);
        const cityObject = eventData.events.find(cityObj => cityObj.city === selectedCity)

        setSelectedCity(city);

        if (cityObject && cityObject.ids.length < 0) {
            // Scroll Swiper back to the beginning
            swiperRef.current.scrollBy(-events.length);
        }
            
        console.log(selectedCity);
    };

    const handleEventClick = (data) => {
        console.log('Handle Event Click');
        navigation.navigate('Event', {data});
    }   

    useEffect(() => {

        const fetchEvents = async () => {
            try {
                setLoading(true);
                const cityObject = eventData.events.find(cityObj => cityObj.city === selectedCity);

                if (cityObject && cityObject.ids.length > 0) {
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
                } else {
                    // No event IDs found for the selected city
                    setEvents([]);
                    console.log('No events found for this city.');
                }
                    
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
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

            {loading ? ( // Show loading indicator if loading is true
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#808080" />
                </View>
            ) : events.length > 0 ? ( // Show events if events exist
                <Swiper style={styles.wrapper} loop={false} ref={swiperRef}>
                    {events.map((event, index) => (
                        <EventBox key={index} data={event} onClick={() => handleEventClick(event)} />
                    ))}
                </Swiper>
            ) : ( // Show no results message if no events found
                <View style={styles.emptyEvents}>
                    <Text style={styles.noResults}>No events found for this city.</Text>  
                </View>
            )}
            
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
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200,
    },
    emptyEvents: {
        marginBottom: 200,
    },
    noResults: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
    },
});
