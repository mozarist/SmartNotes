import { Image } from "expo-image";
import LottieView from "lottie-react-native";
import { router } from "expo-router";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Button from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/ui/text-input";

export default function Register() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
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

        <Text style={styles.heading}>Daftar dulu ya</Text>

        <Text style={styles.text}>
          Daftarin akun kamu disini, isi yang lengkap ya data yang aku minta,
          jangan sampe ngga!
        </Text>
      </View>

      <KeyboardAvoidingView style={{ width: "100%", gap: 8 }} behavior="padding" keyboardVerticalOffset={16}>
        <Input placeholder="Nama Lengkap" />
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Input placeholder="Konfirmasi Password" secureTextEntry={true} />
      </KeyboardAvoidingView>

      <View style={{ width: "100%", gap: 16 }}>
        <Button
          onPress={() => router.push("/(tabs)")}
          label="Daftar"
          color="green"
        />

        <Text style={styles.text}>
          Sudah terdaftar? <Text onPress={() => router.push("/(auth)/login")} style={styles.link}>Masuk aja</Text>
        </Text>
      </View>
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
