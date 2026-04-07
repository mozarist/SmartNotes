import React from "react";
import {
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import { colors } from "@/constants/color";

type ButtonProps = {
  label: any;
  color?: string;
  labelColor?: string;
  OutlineColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function Button({
  label,
  color = colors.primary,
  labelColor = colors.primaryForeground,
  OutlineColor = "transparent",
  onPress = () => {},
  style,
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: color, borderColor: OutlineColor },
        style,
      ]}
    >
      <Text style={{ ...styles.text, color: labelColor }}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
  },
});
