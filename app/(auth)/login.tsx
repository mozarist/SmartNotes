import { Image } from "expo-image";
import LottieView from "lottie-react-native";
import { router } from "expo-router";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Button from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/ui/text-input";

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

      <View style={{ alignItems: "center", gap: 8 }}>
        <LottieView
          source={require("@/assets/animations/register.json")}
          autoPlay
          loop
          speed={0.75}
          style={{ width: 200, height: 175 }}
        />
        <Text style={styles.heading}>Login dulu kali</Text>

        <Text style={styles.text}>
          Masuk pake akun kamu yang udah didaftarin ya!
        </Text>
      </View>

      <KeyboardAvoidingView style={{ width: "100%", gap: 8 }} behavior="padding" keyboardVerticalOffset={16}>
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
      </KeyboardAvoidingView>

      <View style={{ width: "100%", gap: 8 }}>
        <Button
          onPress={() => router.push("/(tabs)")}
          label="Masuk"
          color="green"
        />

        <Button
          onPress={() => router.push("/(tabs)")}
          label="Kamu admin? Masuk sini"
          color="darkgreen"
        />
      </View>

      <Text style={styles.text}>
        Belum punya akun? {" "}
        <Text style={styles.link} onPress={() => router.push("/(auth)/register")}>Daftar dulu</Text>
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
    color: "#474747",
    fontSize: 14,
    fontWeight: 500,
    textAlign: "center",
  },
  link: {
    color: "green",
    textDecorationLine: "underline",
  },
});
