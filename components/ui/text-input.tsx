import React from "react";
import { StyleSheet, TextInput } from "react-native";

type TextInputProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function Input({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}: TextInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
});
