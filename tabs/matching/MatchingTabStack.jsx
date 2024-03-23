import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchesScreen from './MatchesScreen';
import ChatScreen from "./ChatScreen";

const Stack = createNativeStackNavigator();

const MatchingTabStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Matches" component={MatchesScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            {/*<Stack.Screen name="AdditionalScreen" component={AdditionalScreen} />*/}
        </Stack.Navigator>
    );
}

export default MatchingTabStack;
