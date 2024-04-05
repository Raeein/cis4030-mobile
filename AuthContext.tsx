import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { isUserOnboarded, setUserOnboarded } from './lib/Onboarding';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [additionalInfoProvided, setAdditionalInfoProvided] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const setOnboarded = async (onboarded) => {
    await setUserOnboarded(onboarded);
    setIsOnboarded(onboarded);
  };

  const fetchAdditionalInfoProvided = async () => {
    const session = await supabase.auth.getSession()
    const user = await supabase.auth.getUser();
    const id = user.data.user.id;
    console.log("ID: ", id);

    if (session) {
      try {
        const { data, error } = await supabase
          .from('users')
          .select('additional_info_provided')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching additionalInfoProvided:', error.message);
        } else {
          setAdditionalInfoProvided(data?.additionalInfoProvided);
        }
      } catch (error) {
        console.error('Error fetching additionalInfoProvided:', error);
      }
    }
  };

  useEffect(() => {
    const checkAuthAndOnboarding = async () => {
      // Check for onboarding status first.
      const onboarded = await isUserOnboarded();
      console.log("Onboarded in useeffect: ", onboarded);
      setIsOnboarded(onboarded);

      const session = await supabase.auth.getSession();
      const authenticated = !!session.data.session;
      setIsAuthenticated(authenticated);

      if (authenticated) {
        await fetchAdditionalInfoProvided();
      }

      setIsLoading(false);
    };

    checkAuthAndOnboarding();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const authenticated = !!session;
      setIsAuthenticated(authenticated);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isOnboarded, additionalInfoProvided, isLoading, setOnboarded, fetchAdditionalInfoProvided, setAdditionalInfoProvided }}>
      {children}
    </AuthContext.Provider>
  );
};
