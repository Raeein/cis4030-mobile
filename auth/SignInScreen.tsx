import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Colors from "@/constants/Colors";
import { supabase } from '../lib/supabase';
import { signIn } from "@/lib/Auth";
import { Button, Input } from 'react-native-elements';

export default function SignInScreen({ route }) {
  const { onAuthentication } = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    try {
      await signIn(email, password);
      Alert.alert("Success", "You have signed in successfully.");

      // onAuthentication();
    }
    catch (error) {
      Alert.alert("Error", error.message);
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
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
      <TouchableOpacity style={styles.signInButton} onPress={signInWithEmail} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.signInButtonText}>Sign In</Text>
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
  inputField: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    borderColor: '#FFA07A',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  signInButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    minWidth: 200,
    marginTop: 20,
  },
  signInButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 5,
  },
});
