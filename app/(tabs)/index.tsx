import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/constants/color';
import * as sizing from '@/constants/sizing';

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View>
        <Text style={styles.heading}>My Notes</Text>
        <Text style={styles.subheading}>You have 12 active thoughts today.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: sizing.spacing.xl,
    height: "100%",
    padding: sizing.spacing.xl,
    backgroundColor: "white",
  },
  greeting: {
    fontSize: sizing.fontSize.xl,
    color: colors.foreground,
  },
  heading: {
    fontSize: sizing.fontSize["5xl"],
    fontWeight: "bold",
    color: colors.foreground,
  },
  subheading: {
    fontSize: sizing.fontSize.sm,
    color: colors.text,
  },

});
