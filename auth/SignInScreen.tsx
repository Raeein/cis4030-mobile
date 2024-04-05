import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, KeyboardAvoidingView, Text, TouchableOpacity, Alert } from 'react-native';
import Colors from "@/constants/Colors";
import { signIn } from "@/lib/Auth";
import { Input } from 'react-native-elements';

export default function SignInScreen({ navigation }) {

  // TODO: Remove the default values for email and password
  const [email, setEmail] = useState('t@t.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    try {
      await signIn(email, password);
    }
    catch (error) {
      Alert.alert("Error", error.message);
    }
    setLoading(false);
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
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
    </KeyboardAvoidingView>
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
