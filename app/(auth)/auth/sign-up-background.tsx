import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import OrangePrimaryButton from '@/components/OrangePrimaryButton'; 
import { signUpStyles } from './styles';
import sex from '@/assets/info/sex.json'
import hometowns from '@/assets/info/hometown.json'
import ethnicity from '@/assets/info/ethnicity.json'
import jobs from '@/assets/info/job-title.json'
import languages from '@/assets/info/languages.json'
import DropDownSelect from '@/components/DropDownSelect';
import BubbleBox from '@/components/BubbleBox';
import { ProfileInfo  } from '@/types';

export default function SignUpBackgroundScreen() {
    const handleNextPress = () => {
        router.push("/(auth)/auth/sign-up-interests");
    }

    const dropDowns: ProfileInfo[] = [sex, hometowns, ethnicity, jobs]

    return (
        <View style={signUpStyles.container}>
            <Text style={signUpStyles.h1}>Step 2: Background</Text>
            {
                dropDowns.map((item) => {
                    return (<DropDownSelect item={item} />)
                })
            }
            <View style={styles.languages}>
                <Text style={styles.h2}>Languages</Text>
                <ScrollView contentContainerStyle={styles.langContainer}>
                {
                    languages.information.map((lang) => {
                        return (<BubbleBox name={lang}/>)
                    })
                }
                </ScrollView>
            </View>
            <View style={{ width: '100%' }}>
                <OrangePrimaryButton title="Next" onPress={handleNextPress}/>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    languages: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 10
    },
    langContainer: {
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