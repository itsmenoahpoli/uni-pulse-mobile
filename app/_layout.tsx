import * as SplashScreen from "expo-splash-screen";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.hideAsync();

export default (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
};
