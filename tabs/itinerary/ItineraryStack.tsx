import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTripScreen from './AddTripScreen';
import FullScheduleScreen from './FullScheduleScreen';
import ItineraryScreen from './ItineraryScreen';
import EventScreen from './EventScreen';

const Stack = createNativeStackNavigator();

const ItineraryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Events" component={ItineraryScreen} /> 
            <Stack.Screen name="Event" component={EventScreen} />
            <Stack.Screen name="Trip" component={AddTripScreen} />
            <Stack.Screen name="Schedule" component={FullScheduleScreen} />
        </Stack.Navigator>
    )
}

export default ItineraryStack;
