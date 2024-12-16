import React from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  type TextInputProps,
} from "react-native";

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
      <View className="flex flex-col space-y-3">
        <Text className="text-white font-bold">Sign In to your account</Text>
        <View>
          <AppInput placeholder="Student ID" />
        </View>
        <View>
          <AppInput placeholder="Password" />
        </View>
        <View className="flex flex-row justify-between px-2">
          <Pressable>
            <Text className="text-xs text-white">Forgot Password?</Text>
          </Pressable>
        </View>
        <Pressable className="h-[40px] w-full bg-primary rounded-full justify-center items-center mt-5">
          <Text className="text-md text-black font-bold">Sign In</Text>
        </Pressable>
        <Pressable className="h-[40px] w-full justify-center items-center mt-5">
          <Text className="text-md text-white font-medium">
            Create an Account
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
