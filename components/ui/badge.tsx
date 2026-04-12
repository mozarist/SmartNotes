import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '@/constants/color';
import * as size from '@/constants/sizing';

type BadgeProps = {
    children: React.ReactNode;
    color?: string;
    labelColor?: string;
};

export default function Badge({ children, color = colors['accent/50'], labelColor = colors.primaryForeground }: BadgeProps) {
    return (
        <View style={[styles.badge, { backgroundColor: color }]}>
            <Text style={[styles.label, { color: labelColor }]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        backgroundColor: colors['accent/50'],
        paddingHorizontal: size.spacing.sm,
        paddingVertical: size.spacing.xxs,
        borderRadius: size.radius.full,
        alignSelf: 'flex-start',
    },
    label: {
        color: colors.primaryForeground,
        fontSize: size.fontSize.xs,
        fontWeight: "500",
        letterSpacing: 1.2,
        textTransform: "uppercase",
        textAlign: "center",
    }
});