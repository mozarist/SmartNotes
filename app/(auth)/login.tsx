import { Image } from "expo-image";
import LottieView from "lottie-react-native";
import { router } from "expo-router";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Button from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/ui/text-input";
import { colors } from "@/constants/color";
import * as size from "@/constants/sizing";
import Label from "@/components/ui/label";

export default function Login() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        height: "100%",
        paddingHorizontal: 24,
        paddingVertical: 64,
        backgroundColor: "white",
      }}
    >
      <View style={{ alignItems: "center", gap: size.spacing.xs }}>
        <Image
          source={require("@/assets/images/SmartNote-Icon.svg")}
          style={{ width: size.iconSize["3xl"], height: size.iconSize["3xl"] }}
          contentFit="contain"
        />
        <Text style={styles.heading}>Login SmartNote</Text>

        <Text style={styles.text}>
          Start organizing your thoughts with SmartNote.
        </Text>
      </View>

      <KeyboardAvoidingView
        style={{ width: "100%", gap: size.spacing.md }}
        behavior="padding"
        keyboardVerticalOffset={16}
      >
        <View style={{ width: "100%", gap: size.spacing.xs }}>
          <Label>Email</Label>
          <Input placeholder="azzammozarist.xpro@gmail.com" />
        </View>
        <View style={{ width: "100%", gap: size.spacing.xs }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Label>Password</Label>
            <Text
              style={{ color: colors.primary, fontSize: size.fontSize.sm }}
              onPress={() => router.push("/(tabs)")}
            >
              Forgot Password?
            </Text>
          </View>
          <Input placeholder="Password" secureTextEntry={true} />
        </View>
      </KeyboardAvoidingView>

      <View style={{ width: "100%", gap: size.spacing.lg }}>
        <Button
          onPress={() => router.push("/(tabs)")}
          label="Login"
          color={colors.primary}
        />

        <Text style={styles.text}>Or login with</Text>

        <Button
          onPress={() => router.push("/(tabs)")}
          label="Google Account"
          color={colors.secondary}
          labelColor={colors.foreground}
          OutlineColor={colors.border}
          svgIcon="google-icon.svg"
        />
      </View>

      <Text style={styles.text}>
        No account yet?{" "}
        <Text
          style={styles.link}
          onPress={() => router.push("/(auth)/register")}
        >
          Register
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: colors.text,
    fontSize: size.fontSize.sm,
    fontWeight: 500,
    textAlign: "center",
  },
  link: {
    color: colors.primary,
  },
});
