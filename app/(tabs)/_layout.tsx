import Button from '@/components/ui/button';
import { colors } from '@/constants/color';
import * as size from '@/constants/sizing';
import { Image } from 'expo-image';
import { Drawer } from 'expo-router/drawer';
import { Compass, FileText, Menu, SquarePen, UserRound } from 'lucide-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TopNavBarProps = {
  onMenuPress: () => void;
};

function TopNavBar({ onMenuPress }: TopNavBarProps) {
  return (
    <SafeAreaView edges={['top']} style={styles.headerContainer}>
      <Pressable
        onPress={onMenuPress}
        accessibilityRole="button"
        accessibilityLabel="Open navigation menu"
        style={styles.iconButton}>
        <Menu size={size.iconSize.lg} color={colors.foreground} />
      </Pressable>

      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: size.spacing.xs }}>
        <Image source={require('@/assets/images/SmartNote-Icon.svg')} style={{ width: 20, height: 20 }} contentFit={'contain'} />
        <Text style={styles.headerTitle}>SmartNotes</Text>
      </View>

      <View style={styles.avatarWrapper}>
        <UserRound size={size.iconSize.md} color={colors.primaryForeground} />
      </View>
    </SafeAreaView>
  );
}

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: ({ navigation }) => <TopNavBar onMenuPress={navigation.toggleDrawer} />,
          drawerActiveTintColor: colors.primary,
          drawerInactiveTintColor: colors.muted,
          drawerLabelStyle: styles.drawerLabel,
          drawerStyle: styles.drawer,
        }}>
        <Drawer.Screen
          name="index"
          options={{
            title: 'Home',
            drawerIcon: ({ color }) => <FileText size={size.iconSize.md} color={color} />,
          }}
        />
        <Drawer.Screen
          name="discover"
          options={{
            title: 'Discover',
            drawerIcon: ({ color }) => <Compass size={size.iconSize.md} color={color} />,
          }}
        />
      </Drawer>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.card,
    borderBottomColor: colors.border,
    borderBottomWidth: size.border.thin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: size.spacing.lg,
    paddingVertical: size.spacing.sm,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: size.radius.full,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: size.fontSize['2xl'],
    color: colors.foreground,
    fontWeight: '700',
  },
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: size.radius.full,
    backgroundColor: colors.primary,
  },
  drawer: {
    backgroundColor: colors.card,
    width: 280,
  },
  drawerLabel: {
    fontSize: size.fontSize.md,
    marginLeft: -size.spacing.sm,
  },
});
