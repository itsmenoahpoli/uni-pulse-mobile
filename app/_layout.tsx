import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
