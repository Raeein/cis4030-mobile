import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MatchingTabStack } from "./tabs/matching/MatchingTabStack";
import HomeScreen from "./tabs/home/HomeScreen";
import ProfileScreen from './tabs/profile/ProfileScreen';
import ItineraryStack from './tabs/itinerary/ItineraryStack'
import AuthStack from './auth/AuthStack';

import OnboardingScreen from './OnboardingScreen';
import TabBarIcon from "./components/TabBarIcon";

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Session } from '@supabase/supabase-js'
import { supabase } from './lib/supabase'
import 'react-native-url-polyfill/auto'

const Tab = createBottomTabNavigator();



export default function App() {
    AsyncStorage.clear()
        .then(() => {
            console.log('Storage successfully cleared!');
        })
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isOnboarded, setIsOnboarded] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    // Check AsyncStorage to see if the user has onboarded
    useEffect(() => {
        const checkOnboarding = async () => {
            const hasOnboarded = await AsyncStorage.getItem('hasOnboarded');
            const hasAuthenticated = await AsyncStorage.getItem('isAuthenticated');
            setIsOnboarded(hasOnboarded === 'true');
            setIsAuthenticated(hasAuthenticated === 'true');
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

    if (!isAuthenticated) {
        return (
            <NavigationContainer>
                <AuthStack onAuthentication={() => setIsAuthenticated(true)} />
            </NavigationContainer>
        );
    }

    // Main app
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => <TabBarIcon IconComponent={AntDesign} name="clockcircleo" color={color} />,
                    }}
                />
                {/*<Tab.Screen*/}
                {/*    name="Profile"*/}
                {/*    component={ProfileScreen}*/}
                {/*    options={{*/}
                {/*        headerShown: false,*/}
                {/*        tabBarIcon: ({ color }) => <TabBarIcon IconComponent={Ionicons} name="person" color={color} />,*/}
                {/*    }}*/}
                {/*/>*/}
                <Tab.Screen
                    name="Itinerary"
                    component={ItineraryStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => <TabBarIcon IconComponent={AntDesign} name="calendar" color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Matching"
                    component={MatchingTabStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => <TabBarIcon IconComponent={FontAwesome} name="group" color={color} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
