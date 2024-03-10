import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MatchingTabStack} from "./tabs/matching/MatchingTabStack";
import ProfileScreen from './tabs/profile/profile';
import ItineraryScreen from './tabs/itinerary/itinerary';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Itinerary" component={ItineraryScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Matching" component={MatchingTabStack} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
