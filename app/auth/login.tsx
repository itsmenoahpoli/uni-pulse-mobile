import { Text, View } from "react-native";
import { LoginForm } from "@components/index";

export default (): JSX.Element => {
  return (
    <View className="flex-1 h-full">
      <LoginForm />
    </View>
  );
};
