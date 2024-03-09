import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import SuccessFrame from '@/components/SuccessPage'

export default function TestScreen() {
    return (
        <SuccessFrame uri={"@/assets/images/excited-people.png"} message={"You're ready to go!"}/>
    );
}
