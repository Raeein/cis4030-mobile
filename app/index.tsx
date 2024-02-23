import {useRouter, useRootNavigationState, useSegments} from "expo-router";
import {View, Text} from "react-native";
import {useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useCheckOnboardingStatus} from "@/hooks/useOnboarding";

export default function Index() {
  useCheckOnboardingStatus();

  return <View><Text>Loading...</Text></View>;
}