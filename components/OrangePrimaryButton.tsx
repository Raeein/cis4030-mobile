import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';

import Colors from '@/constants/Colors';

export default function OrangePrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
    minWidth: 200,
    alignItems: 'center',
  },
  ButtonText: {
    fontSize: 18,
    color: '#fff'
  },
});