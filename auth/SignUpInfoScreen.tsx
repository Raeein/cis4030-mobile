import React, { useState } from 'react';
import {View, TextInput, Text, StyleSheet, ScrollView, Platform, Button} from 'react-native';
import { Formik } from 'formik';
import OrangePrimaryButton from '@/components/OrangePrimaryButton';
import Colors from "@/constants/Colors";
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SignUpInfoScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const handleFormSubmit = (values) => {
    console.log('Form submitted!');
    // console.log(values);
    navigation.navigate('SignUpPhoto');
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };


  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),

    dateOfBirth: Yup.date()
      .max(new Date(), 'Date of birth cannot be in the future')
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
            <Button onPress={showDatePicker} title="Choose Date of Birth" />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}

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
