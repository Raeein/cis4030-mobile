import { StyleSheet } from 'react-native';
import Colors from "@/constants/Colors";

export const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 50,
    backgroundColor: Colors.lightGrey,
  },
  h1: {
    fontSize: 25,
    fontWeight: '700',
  },
  h2: {
    fontSize: 20,
    fontWeight: '500',
  }
});