import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SuccessPage from './SuccessPage';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen}  
                options={{headerShown: false}} 
            /> 
            <Stack.Screen 
                name="Success" 
                component={SuccessPage}
                options={{headerShown: false}}
                 
            />
        </Stack.Navigator>
    )
}

export default HomeStack;
