import { StyleSheet, Pressable } from "react-native";
import { colors } from "@/constants/color";
import * as size from "@/constants/sizing";

type CardProps = {
  Color?: string;
  children?: React.ReactNode;
  onPress?: () => void;
};

export default function Card({ Color = colors.card, children, onPress = () => {} }: CardProps) {
  return (
    <Pressable style={{ ...styles.card, backgroundColor: Color }} onPress={onPress}>
      { children }
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    justifyContent: "center",
    gap: size.spacing.md,
    backgroundColor: colors.card,
    borderRadius: size.radius.lg,
    padding: size.spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
