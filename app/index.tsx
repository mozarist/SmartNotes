import LottieView from "lottie-react-native";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Button from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/color";
import * as size from "@/constants/sizing";

export default function WelcomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        gap: size.spacing.xl,
        paddingHorizontal: size.spacing.xl,
        paddingVertical: size.spacing["4xl"],
        backgroundColor: colors.primaryForeground,
      }}
    >
      <View>
        {/* This view only functions as a gap */}
      </View>

      <View style={{ gap: 8, paddingHorizontal: size.spacing.xl }}>
        <LottieView
          source={require("@/assets/animations/creative-notes.json")}
          autoPlay
          loop
          speed={1}
          style={{ width: 450, height: 300 }}
        />
        <Text style={styles.heading}>SmartNote</Text>

        <Text style={styles.text}>Your thoughts, refined and organized.</Text>
      </View>

      <View style={{ width: "100%", gap: 12 }}>
        <Button
          onPress={() => router.push("/(auth)/register")}
          label="Start Now"
          labelSize="lg"
        />

        <Text style={styles.text}>
          Already have an account?{" "}
          <Text
            onPress={() => router.push("/(auth)/login")}
            style={styles.link}
          >
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: colors.foreground,
    fontSize: size.fontSize["4xl"],
    fontWeight: 700,
    textAlign: "center",
  },
  text: {
    color: colors.text,
    fontSize: size.fontSize.md,
    fontWeight: 500,
    textAlign: "center",
  },
  link: {
    color: colors.primary,
  },
});
