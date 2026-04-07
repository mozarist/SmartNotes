import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { Children } from "react";
import { Image } from "expo-image";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react-native";

type CardProps = {
  children: React.ReactNode;
  onPress: () => void;
};

export default function Card({ children, onPress = () => {} }: CardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    justifyContent: "center",
    gap: 12,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
});
