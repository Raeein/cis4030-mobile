import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import OrangePrimaryButton from '@/components/OrangePrimaryButton';

export default function AuthScreen({ navigation }) {
  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>buddy</Text>
      <Text style={styles.subheader}>Your adventure awaits</Text>
      <Text style={styles.labelTitle}>Get started</Text>
      <OrangePrimaryButton title="Sign up" onPress={handleSignUpPress} />
      <TouchableOpacity style={styles.signInButton} onPress={handleSignInPress}>
        <Text style={styles.signInButtonText}>Already have an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDEEC4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 5,
  },
  subheader: {
    fontSize: 18,
    color: '#FF5733',
    marginBottom: 20,
  },
  labelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 30,
  },
  signInButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    minWidth: 200,
    alignItems: 'center',
    backgroundColor: '#FFF0E1', // A lighter shade for the button to stand out without border
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signInButtonText: {
    fontSize: 18,
    color: '#FF5733',
  },
});
