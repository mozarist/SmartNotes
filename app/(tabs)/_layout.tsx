import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { FileText, Compass } from 'lucide-react-native';
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { colors } from '@/constants/color';
import * as size from '@/constants/sizing';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FileText size={size.iconSize.xl} color={color} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => <Compass size={size.iconSize.xl} color={color} />,
        }}
      />
    </Tabs>
  );
}
