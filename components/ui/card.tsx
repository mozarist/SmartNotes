import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { Children } from "react";

type CardProps = {
  Children: React.ReactNode;
  onPress: () => void;
};

export default function Card({ Children, onPress = () => {} }: CardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      { Children }
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
