import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import OrangePrimaryButton from '@/components/OrangePrimaryButton';
import { signUpStyles } from './styles';
import interests from '@/assets/info/interests.json'
import countries from '@/assets/info/countries.json'
import DropDownSelect from '@/components/DropDownSelect';
import BubbleBox from '@/components/BubbleBox';

export default function SignUpInterestsScreen({ navigation }) {

  const handleNextPress = () => {
    navigation.navigate('SignUpSuccess');
  }

  return (
    <View style={signUpStyles.container}>
      <Text style={signUpStyles.h1}>Step 3: Interests</Text>
      <View style={styles.interests}>
        <Text style={styles.h2}>Activties</Text>
        <ScrollView contentContainerStyle={styles.interestsCntr}>
          {
            interests.information.map((activity, index) => {
              return (<BubbleBox key={index} name={activity}/>)
            })
          }
        </ScrollView>
      </View>
      <Text style={styles.h2}>I want to travel to</Text>
      <DropDownSelect item={countries} boxText={"1: "} />
      <DropDownSelect item={countries} boxText={"2: "} />
      <DropDownSelect item={countries} boxText={"3: "} />
      <View style={{ width: '100%' }}>
        <OrangePrimaryButton title="Next" onPress={handleNextPress}/>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  interests: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 10
  },
  interestsCntr: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 20
  },
  h2: {
    fontWeight: '700',
    fontSize: 20
  }
})