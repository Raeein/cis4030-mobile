import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from "./AuthScreen";
import SignUpScreen from './SignUpScreen'; // Update the import path as needed
import SignUpPhotoScreen from "./SignUpPhotoScreen";
import SignUpBackgroundScreen from "./SignUpBackgroundScreen";
import SignUpInterestsScreen from "./SignUpInterestsScreen";
import SignUpSuccessScreen from "./SignUpSuccessScreen";

const Stack = createNativeStackNavigator();

function AuthStack({ onAuthentication }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={AuthScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: true, title: 'Sign Up' }}
            />
            <Stack.Screen
                name="SignUpPhoto"
                component={SignUpPhotoScreen}
                options={{ headerShown: true, title: 'Photos' }}
            />
            <Stack.Screen
                name="SignUpBackground"
                component={SignUpBackgroundScreen}
                options={{ headerShown: true, title: 'Background' }}
            />
            <Stack.Screen
                name="SignUpInterests"
                component={SignUpInterestsScreen}
                options={{ headerShown: true, title: 'Interests' }}
            />
            <Stack.Screen
                name="SignUpSuccess"
                component={SignUpSuccessScreen}
                initialParams={{ onAuthentication }}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default AuthStack;
