import { StyleSheet, Button, Image, View, Platform, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import Colors from "@/constants/Colors";
import OrangePrimaryButton from '@/components/OrangePrimaryButton'; 
import { signUpStyles } from './styles';
import SelectDropdown from 'react-native-select-dropdown'

export default function SignUpBackgroundScreen() {
    const HandleNextPress = () => {
        router.push("/(auth)/auth/sign-up-interests");
    }

    const sex = ["Male", "Female"];

    return (
        <View style={signUpStyles.container}>
            <Text style={signUpStyles.h1}>Step 2: Background</Text>
            <SelectDropdown 
                data={sex} 
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
            />
        </View>
    );
}
