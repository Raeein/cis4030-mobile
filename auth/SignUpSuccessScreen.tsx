import React from 'react';
import { useEffect } from 'react';
import SuccessFrame from '@/components/SuccessPage'

export default function SignUpSuccessScreen({ route }) {
  const { onAuthentication } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      onAuthentication();
    }, 2000);

    // Cleanup timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }, []);

  return (
    <SuccessFrame uri={"@/assets/images/excited-people.png"} message={"You're ready to go!"}/>
  );
}
