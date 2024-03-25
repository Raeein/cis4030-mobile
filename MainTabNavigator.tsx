import React from 'react';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './tabs/home/HomeScreen';
import ProfileScreen from './tabs/profile/ProfileScreen';
import ItineraryStack from './tabs/itinerary/ItineraryStack';
import MatchingTabStack from './tabs/matching/MatchingTabStack';
import TabBarIcon from "./components/TabBarIcon";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon IconComponent={AntDesign} name="clockcircleo" color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => <TabBarIcon IconComponent={Ionicons} name="person" color={color} />,
          headerRight: () => (
            <Button
              onPress={() => alert('Saved')}
              title="Done"
              // color="#00cc00"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Itinerary"
        component={ItineraryStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon IconComponent={AntDesign} name="calendar" color={color} />,
        }}
      />
      <Tab.Screen
        name="Matching"
        component={MatchingTabStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon IconComponent={FontAwesome} name="group" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
