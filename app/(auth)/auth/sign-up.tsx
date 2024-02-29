import React from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import OrangePrimaryButton from '@/components/OrangePrimaryButton';
import Colors from "@/constants/Colors";

export default function SignUpScreen() {

  const handleFormSubmit = (values) => {
    console.log('Form submitted!');
    console.log(values);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Let's start by getting to know you better</Text>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          password: '',
          dateOfBirth: ''
        }}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <View style={styles.inputRow}>
              <TextInput
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                style={[styles.textInput, styles.halfInput]}
                value={values.firstName}
                placeholder="First Name"
              />
              <TextInput
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                style={[styles.textInput, styles.halfInput]}
                value={values.lastName}
                placeholder="Last Name"
              />
            </View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              style={styles.textInput}
              value={values.email}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              style={styles.textInput}
              value={values.phoneNumber}
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              style={styles.textInput}
              value={values.password}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TextInput
              onChangeText={handleChange('dateOfBirth')}
              onBlur={handleBlur('dateOfBirth')}
              style={styles.textInput}
              value={values.dateOfBirth}
              placeholder="Date of Birth"
            />
            <OrangePrimaryButton title="Next" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center', // This centers the content vertically
    alignItems: 'center', // This centers the content horizontally
    padding: 20, // Add some padding around the content
    backgroundColor: Colors.lightGrey,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  form: {
    width: '100%', // Use the full width of the container
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    marginBottom: 15, // Add some space between the text inputs
    borderWidth: 1, // Add a border to each text input
    borderColor: '#ccc',
    borderRadius: 50, // Round the corners of the text inputs
    padding: 10, // Add some padding inside the text inputs
    backgroundColor: Colors.white,
    width: '100%',
  },
  halfInput: {
    width: '48%' // Use slightly less than half the width to account for margin
  },
  errorText: {
    color: 'red',
    marginBottom: 10, // Add some space below the error text
  },
  // Add other styles as needed
});
