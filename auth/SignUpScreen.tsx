import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Colors from "@/constants/Colors";
import { supabase } from '../lib/supabase';
import { Input } from 'react-native-elements';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert("Error", error.message);
    else {
      Alert.alert("Success", "Please check your inbox for email verification!");
      navigation.navigate('SignIn'); // Optionally navigate to SignIn upon successful sign up
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <Input
        label="Email"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        label="Password"
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.signUpButton} onPress={signUpWithEmail} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 30,
  },
  signUpButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    minWidth: 200,
    marginTop: 20,
  },
  signUpButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
});
