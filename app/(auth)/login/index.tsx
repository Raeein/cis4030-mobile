import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>buddy</Text>
      <Text style={styles.subheader}>your adventure awaits</Text>
      <Text style={styles.labelTitle}>I am a</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>traveller</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>guide</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton}>
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
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  labelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5733', // Adjust your color
  },
  button: {
    backgroundColor: '#FFA07A', // Adjust your button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
    minWidth: 200,
    alignItems: 'center',
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
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});