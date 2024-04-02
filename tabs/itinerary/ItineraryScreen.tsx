import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import DropDownSelect from '@/components/DropDownSelect';
import ActionButton from '@/components/ActionButton';
import EventBox from '@/components/EventBox';
import cities from '@/assets/info/cities.json'
import eventData from '@/assets/info/events.json'
import userData from '@/assets/info/userTrips.json'
import UserTrips from '@/components/UserTrips';

export default function ItineraryScreen({ navigation }) {
  const [events, setEvents] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const userTripData = userData.trips

  const handleAddTrip = () => {
    console.log('Handle Add Trip');
    navigation.navigate('Trip');
  }

  const handleCityChange = async (city) => {
    console.log('Handle City Change', city);
    setSelectedCity(city);
  }

  useEffect(() => {
    const fetchEvents = async() => {
      try {
        // if (!selectedCity) return; // Return if no city is selected
        // console.log("selected city");
        const myCity = "Toronto";
        fetch('https://www.eventbriteapi.com/v3/events/49216045517/', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer N6AAKEJO22HNNPCPYGWD',
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          // console.log('Status:', response.status);
          // console.log('Headers:', response.headers);
          return response.json();
        })
        .then(data => {
          const eventData = JSON.stringify(data);
          console.log('Fetched JSON data:', eventData);

        })
        .catch(error => {
          console.error('Error:', error);
        });

      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, [selectedCity]);

  return (
    <ScrollView contentContainerStyle={styles.container} >
      <View style={styles.dropDownCtnr}>
        <DropDownSelect item={cities} boxColor={'#F38957'} textColor={'#FFFFFF'} boxText={cities.information[0] } onSelect={handleCityChange}/>
      </View>
      <Text style={styles.h1}>Events starting from: </Text>
      {events.map((event, index) => (
        <EventBox key={index} data={event} image={event.logo_id} />
      ))}
      <Text style={styles.h1}>Your trips</Text> 
      <UserTrips data={userTripData} navigation={navigation}/>
      <View style={{ flex: 1, marginTop: 20}}>
        <ActionButton title={"Add Trip"} buttonColor='#F0A365' textColor='white' onPress={handleAddTrip} height={40} width={200} borderRadius={10}/>  
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    padding: 15
  },
  dropDownCtnr: {
    width: '50%',
    paddingBottom: 20
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
  h1: {
    fontWeight: '700',
    fontSize: 20,
    alignSelf: 'flex-start',
    padding: 15
  }
});