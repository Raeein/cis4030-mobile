import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import OrangePrimaryButton from '@/components/OrangePrimaryButton';
export default function AuthScreen({navigation, route}) {
  const { onAuthentication } = route.params;
  const handleTravelerPress = () => {
    onAuthentication();
    // navigation.navigate('SignUp');
    // router.push("/(auth)/auth/sign-up");
  };

  const handleGuidePress = () => {
    // router.push("/(auth)/auth/sign-up");
  };

  const handleSignInPress = () => {
    // router.push("/(auth)/auth/sign-up-photo");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>buddy</Text>
      <Text style={styles.subheader}>your adventure awaits</Text>
      <Text style={styles.labelTitle}>I am a</Text>
      <OrangePrimaryButton title="traveller" onPress={handleTravelerPress} />
      <OrangePrimaryButton title="guide" onPress={handleGuidePress} />
      <TouchableOpacity style={styles.signInButton} onPress={handleSignInPress}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDEEC4', // Set your background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF5733', // Adjust your color
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    color: '#FF5733', // Adjust your color
    marginBottom: 30,
  },
  labelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5733', // Adjust your color
  },
  signInButton: {
    backgroundColor: 'transparent', // Adjust your button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
    minWidth: 200,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFA07A', // Border color
  },
  signInButtonText: {
    fontSize: 18,
    color: '#FFA07A', // Adjust your button color
  },
});