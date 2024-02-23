import { useEffect, useState } from 'react';
import {View, Text} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useRootNavigationState, useSegments } from 'expo-router';

export default function Index() {
  if (__DEV__) {
    AsyncStorage.clear();
  }
  const navigationState = useRootNavigationState();
  const segments = useSegments();
  const router = useRouter();

  let [hasOnboarded, setHasOnboarded] = useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const checkStatus = async () => {
      if (!navigationState?.key) return;

      hasOnboarded = await AsyncStorage.getItem('hasOnboarded') === 'true';
      isLoggedIn = await AsyncStorage.getItem('isLoggedIn') === 'true';
      const inAuthGroup = segments[0] === "(auth)";

      if (!hasOnboarded) {
        router.replace("/onboarding");
      } else if (!isLoggedIn && !inAuthGroup) {
        router.replace("/(auth)/login");
      } else if (isLoggedIn) {
        router.replace("/(tabs)/home");
      }
    };

    checkStatus();
  }, [segments, navigationState?.key, router, hasOnboarded, isLoggedIn]);

  return <View><Text>Loading...</Text></View>;
}