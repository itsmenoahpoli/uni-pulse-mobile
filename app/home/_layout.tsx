import { Slot } from "expo-router";
import { View } from "react-native";

export default (): JSX.Element => {
  return (
    <View className="flex-1 bg-gray-100">
      <Slot />
    </View>
  );
};
