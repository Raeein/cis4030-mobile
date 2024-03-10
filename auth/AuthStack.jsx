import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from "./AuthScreen";
import SignUpScreen from './SignUpScreen'; // Update the import path as needed

const Stack = createNativeStackNavigator();

function AuthStack({ onAuthentication }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={AuthScreen} initialParams={{ onAuthentication }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} initialParams={{ onAuthentication }} />
        </Stack.Navigator>
    );
}

export default AuthStack;
