import React from 'react';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './tabs/home/HomeStack';
import ProfileScreen from './tabs/profile/ProfileScreen';
import ItineraryStack from './tabs/itinerary/ItineraryStack';
import MatchingTabStack from './tabs/matching/MatchingTabStack';
import TabBarIcon from "./components/TabBarIcon";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useState } from 'react'

interface NewMatch {
  uri: string,
  name: string
}

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const [newMatches, setNewMatch] = useState<NewMatch[]>([]);
  const [newMatchesCount, setMatchCount] = useState(1)

  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen';

    if (routeName === 'Success') {
      return 'none';
    }
    return 'flex';
  };

  const handleMatch = () => {
    // setNewMatch([...newMatches, match]);
    console.log("added new match");
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        // initialParams={handleMatch}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon IconComponent={AntDesign} name="clockcircleo" color={color} />,
          tabBarStyle: {display: getTabBarVisibility(route)}
        })}
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
        initialParams={newMatches}
        component={MatchingTabStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon IconComponent={FontAwesome} name="group" color={color} />,
          tabBarBadge: 1
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
