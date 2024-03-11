import React from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import OrangePrimaryButton from '@/components/OrangePrimaryButton';
import Colors from "@/constants/Colors";
import * as Yup from 'yup';

export default function SignUpScreen({ navigation }) {
  const handleFormSubmit = (values) => {
    console.log('Form submitted!');
    // console.log(values);
    navigation.navigate('SignUpPhoto');
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),

    dateOfBirth: Yup.string()
      .required('Date of birth is required')
      .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Invalid date of birth, format should be MM/DD/YYYY')
      .test('dateOfBirth', 'Date of birth cannot be in the future', value => {
        const today = new Date();
        const parts = value.split('/');
        const dob = new Date(`${parts[2]}-${parts[0]}-${parts[1]}`);
        return dob <= today;
      }),

  });

  let initialValues;
  initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    dateOfBirth: ''
  }

  // if (__DEV__) {
  //   initialValues = {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     email: 'a@a.com',
  //     phoneNumber: '1234567890',
  //     password: 'password',
  //     dateOfBirth: '01/01/2000'
  //   }
  // } else {
  //   initialValues = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phoneNumber: '',
  //     password: '',
  //     dateOfBirth: ''
  //   }
  // }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Let's start by getting to know you better</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          // Check and touch all fields to trigger validation messages
          actions.setTouched({
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
            password: true,
            dateOfBirth: true
          });
          actions.validateForm().then((errors) => {
            // If no errors, submit the form
            if (Object.keys(errors).length === 0) {
              handleFormSubmit(values, actions);
            }
          });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (          <View style={styles.form}>
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
              placeholder="Date of Birth: MM/DD/YYYY"
            />
            {Object.keys(errors).map((key) => touched[key] && <Text style={styles.errorText} key={key}>{errors[key]}</Text>)}
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.lightGrey,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  form: {
    width: '100%',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    padding: 10,
    backgroundColor: Colors.white,
    width: '100%',
  },
  halfInput: {
    width: '48%'
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
