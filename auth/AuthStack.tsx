import React, {useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from "./AuthScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from './SignUpScreen'; // Update the import path as needed
import SignUpInfoScreen from "./SignUpInfoScreen";
import SignUpPhotoScreen from "./SignUpPhotoScreen";
import SignUpBackgroundScreen from "./SignUpBackgroundScreen";
import SignUpInterestsScreen from "./SignUpInterestsScreen";
import SignUpSuccessScreen from "./SignUpSuccessScreen";

import { useAuth } from "@/AuthContext";

const Stack = createNativeStackNavigator();

function AuthStack({ onAuthentication, initialRouteName: propInitialRouteName }) {
  const { needsAdditionalInfo, fetchAdditionalInfoProvided } = useAuth(); // Access your custom auth state
  console.log("Need additional info: ", needsAdditionalInfo);

  if ( propInitialRouteName == "SignUpInfo" ) {
    console.log("Prop initial route name is SignUpInfo");
  }
  const determineInitialRouteName = () => {
    if (propInitialRouteName) {
      return propInitialRouteName;
    } else {
      return needsAdditionalInfo ? 'SignUpInfo' : 'Login';
    }
  };

  const initialRouteName = determineInitialRouteName();
  console.log("Initial route name: ", initialRouteName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAdditionalInfoProvided();
      } catch (error) {
        console.error('Failed to fetch additional info:', error);
      }
    };
    fetchData();
  }, [fetchAdditionalInfoProvided]);

        return (
            <Stack.Navigator initialRouteName={initialRouteName}>
                    <Stack.Screen
                        name="Login"
                        component={AuthScreen}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="SignIn"
                        component={SignInScreen}
                        initialParams={{ onAuthentication }}
                        options={{ headerShown: true, title: 'Sign In' }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUpScreen}
                        options={{ headerShown: true, title: 'Sign Up' }}
                    />

                    <Stack.Screen
                        name="SignUpInfo"
                        component={SignUpInfoScreen}
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
