import {useRouter, useRootNavigationState, useSegments} from "expo-router";
import {View, Text} from "react-native";
import React from "react";

export default function Index() {
  // Business logic wiil be added later on
  const isLoggedIn: boolean = false;
  const navigationState = useRootNavigationState();
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything
      //  segment is not anything in the auth group.
      !isLoggedIn &&
      !inAuthGroup
    ) {
      // Redirect to the login page.
      router.replace("/(auth)/login");
    } else if (isLoggedIn) {
      // go to tabs root.
      router.replace("/(tabs)/home");
    }
  }, [isLoggedIn, segments, navigationState?.key]);

  return <View>{!navigationState?.key ? <Text>LOADING...</Text> : <></>}</View>;

}