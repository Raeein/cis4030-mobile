import {useRouter, useRootNavigationState, useSegments} from "expo-router";
import {View, Text} from "react-native";
import React from "react";

export default function Index() {
  // Business logic will be added later on
  const hasOnboarded = false;
  const isLoggedIn = false;
  const navigationState = useRootNavigationState();
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!hasOnboarded) {
      router.replace("/onboarding");
    } else if (!isLoggedIn && !inAuthGroup) {
      router.replace("/(auth)/login");
    } else if (isLoggedIn) {
      router.replace("/(tabs)/home");
    }
  }, [isLoggedIn, segments, navigationState?.key]);

  return <View>{!navigationState?.key ? <Text>LOADING...</Text> : <></>}</View>;

}