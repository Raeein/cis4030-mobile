import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import OrangePrimaryButton from '@/components/OrangePrimaryButton'; 
import { signUpStyles } from './styles';
import sex from '@/assets/info/sex.json'
import hometowns from '@/assets/info/hometown.json'
import ethnicity from '@/assets/info/ethnicity.json'
import jobs from '@/assets/info/job-title.json'
import DropDownSelect from '@/components/DropDownSelect';

interface DropdownInfo {
    data: string
    information: string[]
}

export default function SignUpBackgroundScreen() {
    const HandleNextPress = () => {
        router.push("/(auth)/auth/sign-up-interests");
    }

    const dropDowns: DropdownInfo[] = [sex, hometowns, ethnicity, jobs]

    return (
        <View style={signUpStyles.container}>
            {
                dropDowns.map((item) => {
                    return (<DropDownSelect item={item} />)
                })
            }
        </View>
    );
}


// I want to render 4 select boxes each with their own defaultButtonText, and data
// Dict -- > { defaultButtonText: data }
