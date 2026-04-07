import { colors } from "@/constants/color";
import * as size from "@/constants/sizing";
import { Image } from "expo-image";
import type { LucideIcon, LucideProps } from "lucide-react-native";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

// Static icon map for Metro bundler compatibility
const svgIconMap: Record<string, any> = {
  "google-icon.svg": require("@/assets/images/google-icon.svg"),
};

const getSvgIcon = (iconName: string) => svgIconMap[iconName];

type ButtonProps = {
  label: React.ReactNode;
  color?: string;
  labelColor?: string;
  labelSize?: keyof typeof size.fontSize;
  OutlineColor?: string;
  rounded?: string | number;
  icon?: LucideIcon;
  iconProps?: Partial<LucideProps>;
  svgIcon?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function Button({
  label,
  color = colors.primary,
  rounded = size.radius.full,
  labelColor = colors.primaryForeground,
  labelSize = "md",
  OutlineColor = "transparent",
  icon: Icon,
  iconProps,
  svgIcon,
  onPress = () => {},
  style,
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: color,
          borderColor: OutlineColor,
          borderRadius: rounded,
        },
        style,
      ]}
    >
      {Icon ? (
        <Icon
          color={iconProps?.color ?? labelColor}
          size={iconProps?.size ?? size.fontSize.lg}
          {...iconProps}
        />
      ) : null}
      {svgIcon ? (
        <Image
          source={getSvgIcon(svgIcon)}
          style={{ width: size.fontSize.lg, height: size.fontSize.lg }}
        />
      ) : null}
      <Text
        style={{
          ...styles.text,
          color: labelColor,
          fontSize: size.fontSize[labelSize],
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: size.spacing.md,
    paddingHorizontal: size.spacing.lg,
    borderRadius: size.radius.full,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  text: {
    fontSize: size.fontSize.md,
    fontWeight: "500",
  },
});
