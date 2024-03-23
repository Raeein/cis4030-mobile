import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDED_KEY = 'hasOnboarded';

export async function isUserOnboarded() {
  try {
    const hasOnboarded = await AsyncStorage.getItem(ONBOARDED_KEY);
    // If the key exists and is set to 'true', the user has been onboarded
    return hasOnboarded === 'true';
  } catch (error) {
    // If there's an error reading the value, assume not onboarded
    console.error('Error checking onboarding status:', error);
    return false;
  }
}

export async function setUserOnboarded(onboarded) {
  try {
    await AsyncStorage.setItem(ONBOARDED_KEY, onboarded ? 'true' : 'false');
  } catch (error) {
    console.error('Error setting onboarding status:', error);
  }
}
