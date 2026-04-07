import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { colors } from "@/constants/color";
import * as size from "@/constants/sizing";

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
      placeholderTextColor={colors.muted}
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
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: size.spacing.md,
    paddingVertical: size.spacing.md,
    fontSize: 16,
  },
});
