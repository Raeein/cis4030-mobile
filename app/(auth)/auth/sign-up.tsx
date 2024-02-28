import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useState} from "react";
import OrangePrimaryButton from '@/components/OrangePrimaryButton';
export default function SignUpScreen() {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    dateOfBirth: '',
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const clearInput = (name) => {
    setInputValues({ ...inputValues, [name]: '' });
  };

  const renderClearButton = (name) => {
    if (inputValues[name] && focusedInput === name) {
      return (
        <TouchableOpacity onPress={() => clearInput(name)} style={styles.clearButton}>
          <MaterialIcons name="close" size={24} color="black" />
        </TouchableOpacity>
      );
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Let's start by getting to know you better</Text>

      {Object.entries(inputValues).map(([key, value]) => (
        <View key={key} style={styles.inputRow}>
          <TextInput
            placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()} // This will convert camelCase to Title Case
            value={value}
            onChangeText={(text) => setInputValues({ ...inputValues, [key]: text })}
            onFocus={() => setFocusedInput(key)}
            onBlur={() => setFocusedInput(null)}
            style={styles.input}
            secureTextEntry={key === 'password'}
          />
          {focusedInput === key && value ? (
            <TouchableOpacity onPress={() => clearInput(key)} style={styles.clearButton}>
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
          ) : null}
        </View>
      ))}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  iconInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  inputWithIcon: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  icon: {
    padding: 10,
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  inputRow: {
    flexDirection: 'row', // Aligns items in a row
    alignItems: 'center', // Centers items vertically in the row
    marginBottom: 15, // Adds some space at the bottom of each row
    borderWidth: 1, // Adds a border of 1 pixel around the row
    borderColor: 'lightgray', // Sets the border color
    padding: 10, // Adds padding inside the row
    borderRadius: 5, // Rounds the corners of the row
    width: '90%',
  },
});