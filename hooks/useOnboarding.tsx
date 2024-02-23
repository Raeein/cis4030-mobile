import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";

export const useCheckOnboardingStatus = () => {

  useEffect(() => {
    const checkStatus = async () => {
      const onboarded = await AsyncStorage.getItem('hasOnboarded');
      const hasOnboarded = onboarded === 'true';
      const isLoggedIn = false; // Placeholder for actual logic

      if (!hasOnboarded) {
        router.replace("/onboarding");
      } else if (!isLoggedIn) {
        router.replace("/(auth)/login");
      } else {
        router.replace("/(tabs)/home");
      }
    };

    checkStatus();
  }, [router]); // Add router to dependency array if it's expected to change, otherwise it can be omitted
};
