import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MatchingTabStack } from "./tabs/matching/MatchingTabStack";
import ProfileScreen from './tabs/profile/profile';
import ItineraryScreen from './tabs/itinerary/itinerary';

import OnboardingScreen from './OnboardingScreen';
// import AuthScreen from './YourAuthScreenPath'; // Update this path

const Tab = createBottomTabNavigator();

export default function App() {
    AsyncStorage.clear();
    const [isLoading, setIsLoading] = useState(true);
    const [isOnboarded, setIsOnboarded] = useState(false);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check AsyncStorage to see if the user has onboarded
    useEffect(() => {
        const checkOnboarding = async () => {
            const hasOnboarded = await AsyncStorage.getItem('hasOnboarded');
            const hasAuthenticated = await AsyncStorage.getItem('isAuthenticated');
            setIsOnboarded(hasOnboarded === 'true');
            // setIsAuthenticated(hasAuthenticated === 'true');
            setIsLoading(false);
        };

        checkOnboarding();
    }, []);

    if (isLoading) {
        // You can return a loading screen here if you like
        return null;
    }

    if (!isOnboarded) {
        return <OnboardingScreen onComplete={() => setIsOnboarded(true)} />;
    }

    // if (!isAuthenticated) {
    //     return <AuthScreen onSignIn={() => setIsAuthenticated(true)} />;
    // }

    // Main app
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
