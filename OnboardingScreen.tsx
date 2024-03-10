import {StyleSheet, View, Text, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from "@/constants/Colors";

export default function OnboardingScreen({ onComplete }) {

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('hasOnboarded', 'true');
      console.log('Onboarding completed and status saved');
      onComplete();
      // router.replace("/(auth)/auth/");
    } catch (e) {
      console.error('Failed to save the onboarding status', e);
    }
  };
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
      onDone={completeOnboarding}
      onSkip={completeOnboarding}
      pages={[
        {
          backgroundColor: Colors.lightGrey,
          image: <Image source={require('./assets/images/onboarding1.png')} style={{width: 300, height: 300}} />,
          title: 'buddy',
          subtitle: 'find the right guide for your trip',
        },
        {
          backgroundColor: Colors.lightGrey,
          image: <Image source={require('./assets/images/onboarding2.png')} style={{width: 300, height: 300}} />,
          title: 'events',
          subtitle: 'search for the events occurring during your trip',
        },
        {
          backgroundColor: Colors.lightGrey,
          image: <Image source={require('./assets/images/onboarding3.png')} style={{width: 300, height: 300}} />,
          title: 'itinerary',
          subtitle: 'plan your itinerary in real time with your guides',
        },
      ]}
    />
  );
}