import React from "react";
import { TextInput, View, type TextInputProps } from "react-native";

const AppInput: React.FC<{} & TextInputProps> = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      className="w-full bg-white rounded-2xl p-4"
    />
  );
};

export const LoginForm: React.FC = () => {
  return (
    <View className="h-full">
      <View className="flex flex-col space-y-4">
        <View>
          <AppInput placeholder="E-mail" />
        </View>
        <View>
          <AppInput placeholder="Password" />
        </View>
      </View>
    </View>
  );
};
