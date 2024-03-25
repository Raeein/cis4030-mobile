import React from 'react';
import { Alert, StyleSheet, View, Text, Button, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ViewProfileScreen from './ViewProfileScreen';
import EditProfileScreen from './EditProfileScreen';

const Tab = createMaterialTopTabNavigator();


export default function ProfileScreenTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="View" component={ViewProfileScreen} />
      <Tab.Screen name="Edit" component={EditProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonSpacing: {
    height: 20, // Adjust the spacing as needed
  },
});
