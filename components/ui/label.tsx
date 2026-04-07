import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '@/constants/color';
import * as size from '@/constants/sizing';

export default function Label({ children }: { children: React.ReactNode }) {
  return (
      <Text style={styles.label}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  label: {
    color: colors.text,
    fontSize: size.fontSize.xs,
    fontWeight: "500",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  }
});