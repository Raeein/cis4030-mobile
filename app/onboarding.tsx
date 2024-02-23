import {StyleSheet, View, Text, Image} from 'react-native';
import { router} from "expo-router";
import Onboarding from 'react-native-onboarding-swiper';
import Colors from "@/constants/Colors";

export default function OnboardingScreen() {

  const onDone = () => {
    router.replace("/(auth)/login");
  }
  const Dot = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? Colors.primary : 'rgba(0, 0, 0, 0.3)';
    } else {
      backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
    }
    return (
      <View
        style={{
          width: 12, // Increased size
          height: 12, // Increased size
          marginHorizontal: 3,
          borderRadius: 6, // Half the size of width/height to create a circle
          backgroundColor,
        }}
      />
    );
  };

  return (
    <Onboarding
      DotComponent={Dot}
      onDone={onDone}
      onSkip={onDone}
      pages={[
        {
          backgroundColor: Colors.lightGrey,
          // add the correct images
          // image: <Image source={require('@/assets/images/onboarding1.png')} />,
          image: <Image source={require('@/assets/images/splash.png')} style={{width: 300, height: 300}} />,
          title: 'buddy',
          subtitle: 'find the right guide for your trip',
        },
        {
          backgroundColor: Colors.lightGrey,
          image: <View />,
          title: 'events',
          subtitle: 'search for the events occurring during your trip',
        },
        {
          backgroundColor: Colors.lightGrey,
          image: <View />,
          title: 'itinerary',
          subtitle: 'plan your itinerary in real time with your guides',
        },
      ]}
    />
  );
}