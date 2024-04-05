import React from 'react';
import { useEffect } from 'react';
import SuccessFrame from '@/tabs/home/SuccessPage';
import { useAuth } from "@/AuthContext";

export default function SignUpSuccessScreen() {
  const { setAdditionalInfoProvided } = useAuth();


  useEffect(() => {
    const timer = setTimeout(() => {
      setAdditionalInfoProvided(true);
    }, 2000);

    // Cleanup timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }, []);

  return (
    <SuccessFrame uri={"@/assets/images/excited-people.png"} message={"You're ready to go!"}/>
  );
}
