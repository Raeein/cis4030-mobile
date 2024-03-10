import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Colors from "@/constants/Colors";
import { Formik } from 'formik';
import * as Yup from 'yup';


export default function SignInScreen({ route }) {
  const { onAuthentication } = route.params;

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInPress = () => {
    onAuthentication();
  };

  const handleForgotPasswordPress = () => {
    Alert.alert(
      "Feature Not Available",
      "This feature is not yet implemented.",
      [
        { text: "OK" }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          onAuthentication();
          // Handle authentication here with values.email and values.password
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.inputField}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            <TextInput
              style={styles.inputField}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            <TouchableOpacity style={styles.signInButton} onPress={handleSubmit}>
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <TouchableOpacity onPress={handleForgotPasswordPress}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
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
  forgotPasswordText: {
    marginTop: 20,
    color: '#FF5733',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 5,
  },
});
