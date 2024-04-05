import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './auth/AuthStack';
import SignUpInfoScreen from './auth/SignUpInfoScreen';
import { supabase } from '@/lib/supabase';


import OnboardingScreen from './OnboardingScreen';
import 'react-native-url-polyfill/auto'

import { useAuth } from './AuthContext';
import MainTabNavigator from './MainTabNavigator';

const AuthContext = createContext();

const Tab = createBottomTabNavigator();


export default function Root() {
  // AsyncStorage.clear()
  //   .then(() => {
  //     console.log('Storage successfully cleared!');
  //   })
  // supabase.auth.signOut()
  //   .then(() => {
  //       console.log('Signed out successfully!')
  //     }
  //   )
  const { isAuthenticated, isOnboarded, additionalInfoProvided } = useAuth();

  const renderScreen = () => {
    console.log("RENDER SCREEN")
    console.log("isOnboarded in render screen is ", isOnboarded)
    console.log("isAuthenticated", isAuthenticated)
    console.log("additionalInfoProvided in render screen is: ", additionalInfoProvided)
    // if additionalInfoProvided is undefined, set it to false
    let infoProvided;
    if (additionalInfoProvided === undefined) {
      infoProvided = false;
    } else {
      infoProvided = additionalInfoProvided;
    }
    if (!isAuthenticated) {
      console.log("Not authenticated")
      return <AuthStack />;
    }
    if (isAuthenticated && !isOnboarded) {
      console.log("Authenticated but not onboarded")
      return <OnboardingScreen />;
    }
    if (isAuthenticated && !infoProvided) {
      console.log("Authenticated but additional info not provided")
      return <AuthStack initialRouteName='SignUpInfo' />;
    }
    console.log("Authenticated and onboarded")
    return <MainTabNavigator />;
  };

  return (
    <NavigationContainer>
      {renderScreen()}
    </NavigationContainer>
  );

}