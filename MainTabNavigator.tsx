import React from 'react';
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

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen';

    if (routeName === 'Success') {
      return 'none';
    }
    return 'flex';
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
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
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon IconComponent={Ionicons} name="person" color={color} />,
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
