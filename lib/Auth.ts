// Auth.js or wherever you handle authentication
import { supabase } from './supabase';

const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });

  console.log(user, error);

  if (error) throw error;
};

const signIn = async (email, password) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  // const user = await supabase.auth.getUser()

  if (error) throw error;
}

const signOut = async () => {
  await supabase.auth.signOut();
};


const checkOnboarding = async (user) => {
  const { data, error } = await supabase
    .from('users')
    .select('onboarded')
    .eq('id', user.id)
    .single();

  if (error) throw error;

  if (!data.onboarded) {
    // Redirect to onboarding screen
  } else {
    // Redirect to main app or dashboard
  }
};

// const onboarding = async() => {
//   let user = await supabase.auth.getUser();
//   const id = user.data.user.id;
//
//   let { data, error } = await supabase
//     .from('users')
//     .select('*')
//     .eq('id', id)
//     .single();
//   if (error) {
//     console.error('Error checking onboarding status:', error);
//     return;
//   }
//   if (data?.onboarded) {
//     console.log('User has completed onboarding');
//     return true;
//   } else {
//     console.log('User has not completed onboarding');
//   }
//   return false;
// }

const isUserAuthenticated = async () => {
  const user = await supabase.auth.getUser();
  return user.data.user !== null;
}

export { signUp, signIn, signOut, isUserAuthenticated };
