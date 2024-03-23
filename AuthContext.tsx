import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { isUserOnboarded, setUserOnboarded } from './lib/Onboarding';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const setOnboarded = async (onboarded) => {
    await setUserOnboarded(onboarded);
    setIsOnboarded(onboarded);
  };

  useEffect(() => {
    const checkAuthAndOnboarding = async () => {
      // Check for onboarding status first.
      const onboarded = await isUserOnboarded();
      setIsOnboarded(onboarded);

      const session = await supabase.auth.getSession();
      const authenticated = !!session.data.session;
      setIsAuthenticated(authenticated);

      setIsLoading(false);
    };

    checkAuthAndOnboarding();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const authenticated = !!session;
      setIsAuthenticated(authenticated);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isOnboarded, isLoading, setOnboarded }}>
      {children}
    </AuthContext.Provider>
  );
};
