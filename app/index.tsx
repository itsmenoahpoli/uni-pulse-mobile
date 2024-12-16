import React from "react";
import { useRouter } from "expo-router";
import { SplashScreen } from "@components/SplashScreen";

export default (): JSX.Element => {
  const router = useRouter();

  const initializeSplashscreen = () => {
    setTimeout(() => {
      router.push("auth/login");
    }, 200);
  };

  React.useEffect(() => {
    initializeSplashscreen();
  }, []);

  return <SplashScreen />;
};
