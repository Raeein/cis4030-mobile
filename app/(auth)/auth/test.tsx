import React from 'react';
import { useEffect } from 'react';
import { router } from 'expo-router';
import SuccessFrame from '@/components/SuccessPage'

export default function TestScreen() {

    useEffect(() => {
        setTimeout(() => {
            router.push('/(tabs)/home');
        }, 2000);
    }, []);

    return (
        <SuccessFrame uri={"@/assets/images/excited-people.png"} message={"You're ready to go!"}/>
    );
}
