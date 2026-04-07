import { Text, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import * as Icons from 'lucide-react-native'
import { colors } from '@/constants/color';

type IconName = {
    [K in keyof typeof Icons]: typeof Icons[K] extends React.ComponentType<any> ? K : never
}[keyof typeof Icons]

type ListItemProps = {
    title: string
    iconName?: IconName
    iconColor?: string
    titleColor?: string
    onPress: () => void
}

export default function ListItem({ title, iconName = "User", iconColor = colors.primary, titleColor = colors.foreground, onPress }: ListItemProps) {
    const IconComponent = Icons[iconName] as React.ComponentType<{ size?: number; color?: string }>;

    return (
        <Pressable onPress={onPress} style={styles.ListItem}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={ styles.iconContainer }>
                    <IconComponent size={24} color={iconColor} />
                </View>
                <Text style={[styles.itemLabel, { color: titleColor }]}>{title}</Text>
            </View>

            <Icons.ChevronRight size={24} color="gray" />
        </Pressable >
    )
}

const styles = StyleSheet.create({
    ListItem: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', gap: 12, 
    },
    iconContainer: {
        padding: 8,
        backgroundColor: colors.accent,
    },
    itemLabel: {
        fontSize: 16,
        fontWeight: '500',
    },
});
