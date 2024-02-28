import {View, Text} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useSegments } from 'expo-router';

export default function Index() {
  if (__DEV__) {
    AsyncStorage.clear();
  }
  const segments = useSegments();
  const checkStatus = async () => {

    const hasOnboarded = await AsyncStorage.getItem('hasOnboarded') === 'true';
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn') === 'true';
    const inAuthGroup = segments[0] === "(auth)";
    // router.replace("/(tabs)/home");
    // return;

    if (!hasOnboarded) {
      router.replace("/onboarding");
    } else if (!isLoggedIn && !inAuthGroup) {
      router.replace("/(auth)/auth");
    } else if (isLoggedIn) {
      router.replace("/(tabs)/home");
    }
  };

  checkStatus();

  return <View><Text>Loading...</Text></View>;
}