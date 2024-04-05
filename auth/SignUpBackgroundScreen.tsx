import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import OrangePrimaryButton from '@/components/OrangePrimaryButton';
import { signUpStyles } from './styles';
import sex from '@/assets/info/sex.json';
import hometowns from '@/assets/info/hometown.json';
import ethnicity from '@/assets/info/ethnicity.json';
import jobs from '@/assets/info/job-title.json';
import languages from '@/assets/info/languages.json';
import DropDownSelect from '@/components/DropDownSelect';
import BubbleBox from '@/components/BubbleBox';
import { ProfileInfo } from '@/types';

export default function SignUpBackgroundScreen({ navigation }) {

  const handleNextPress = () => {
    navigation.navigate('SignUpInterests');
  };

  const dropDowns: ProfileInfo[] = [sex, hometowns, ethnicity, jobs];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={signUpStyles.h1}>Step 2: Background</Text>
      {dropDowns.map((item, index) => (
        <DropDownSelect key={index} item={item} select={() => {}}/>
      ))}
      <View style={styles.languages}>
        <Text style={styles.h2}>Languages</Text>
        <View style={styles.langContainer}>
          {languages.information.map((lang, index) => (
            <BubbleBox key={index} name={lang} />
          ))}
        </View>
      </View>
      <View style={{ width: '100%', paddingBottom: 20 }}>
        <OrangePrimaryButton title="Next" onPress={handleNextPress}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  languages: {
    paddingTop: 40,
    paddingBottom: 10,
  },
  langContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 20,
  },
  h2: {
    fontWeight: '700',
    fontSize: 20,
  },
});
