import React from 'react';
import { Alert, StyleSheet, View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '@/lib/supabase';

export default function ProfileScreen({ navigation }) {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout failed:', error.message);
    } else {
      console.log('Logged out successfully');
    }
  };

  const handleClearStorage = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('Storage Cleared', 'All data in AsyncStorage has been cleared.');
    } catch (e) {
      console.error('Failed to clear AsyncStorage:', e);
      Alert.alert('Error', 'Failed to clear AsyncStorage.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="Logout" onPress={handleLogout} />
      <View style={styles.buttonSpacing} />
      <Button title="Clear Storage" onPress={handleClearStorage} />
    </View>
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
