import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import DropDownSelect from '@/components/DropDownSelect';
import ActionButton from '@/components/ActionButton';
import EventBox from '@/components/EventBox';
import cities from '@/assets/info/cities.json'
import eventData from '@/assets/info/events.json'
import userData from '@/assets/info/userTrips.json'
import UserTrips from '@/components/UserTrips';

export default function ItineraryScreen({ navigation }) {
  const events = eventData.events
  const userTripData = userData.trips

  const handleAddTrip = () => {
    console.log('Handle Add Trip');
    navigation.navigate('Trip');
  }

  return (
    <ScrollView contentContainerStyle={styles.container} >
      <View style={styles.dropDownCtnr}>
        <DropDownSelect item={cities} boxColor={'#F38957'} textColor={'#FFFFFF'} boxText={cities.information[0]}/>
      </View>
      <Text style={styles.h1}>Events starting from: </Text>
      <EventBox data={events} image={'@/assets/images/carnival.png'} />
      <Text style={styles.h1}>Your trips</Text> 
      <UserTrips data={userTripData} navigation={navigation}/>
      <ActionButton title={"Add Trip"} buttonColor='#F0A365' textColor='white' onPress={handleAddTrip}/>
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