import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './auth/AuthStack';

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
  const { isAuthenticated, isOnboarded, isLoading } = useAuth();

  const renderScreen = () => {
    if (!isOnboarded) {
      return <OnboardingScreen />;
    } else if (!isAuthenticated) {
      return <AuthStack />;
    } else {
      return <MainTabNavigator />;
    }
  };

  return (
    <NavigationContainer>
      {renderScreen()}
    </NavigationContainer>
  );

}