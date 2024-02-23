import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";

export const useCheckOnboardingStatus = () => {
  const router = useRouter();
  useEffect(() => {
    const checkStatus = async () => {
      console.log('Checking onboarding status...');
      const onboarded = await AsyncStorage.getItem('hasOnboarded');
      console.log('Onboarding status:', onboarded);
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
  }, [router]);
};
