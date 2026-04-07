import { Image } from "expo-image";
import LottieView from "lottie-react-native";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Button from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        paddingHorizontal: 24,
        backgroundColor: "white",
      }}
    >
      <LottieView
        source={require("@/assets/animations/chicken-walking.json")}
        autoPlay
        loop
        speed={1}
        style={{ width: 450, height: 300 }}
      />

      <View style={{ gap: 8, paddingHorizontal: 24, }}>
        <Text style={styles.heading}>Pat Cepat, San Pesan!</Text>

        <Text style={styles.text}>
          Pengantaran ke rumah & reservasi online untuk sate Cak Awih
        </Text>
      </View>

      <View style={{ width: "100%", gap: 16 }}>
        <Button onPress={() => router.push("/(auth)/register")} label="Ikutan pesan, yuk!" color="green" />

        <Text style={styles.text}>
          Sudah terdaftar? <Text onPress={() => router.push("/(auth)/login")} style={styles.link}>Masuk aja</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
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
