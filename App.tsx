import { StatusBar } from "expo-status-bar";
import { Image, View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import OrderModal from "@/components/OrderModal";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        gap: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
      }}
    >
      <StatusBar />
      <Image source={require("@/assets/splash.png")} style={styles.logo} />
      <Heading>MENU DEL DIA</Heading>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          style={{ width: 200, height: 200, borderRadius: 100 }}
          source={require("@/assets/images/locro-arg.jpg")}
        />
        <View style={{ justifyContent: "center", alignContent: "center" }}>
          <Text>Locro tradicional</Text>
          <Text centered bold bigger price>
            $4.000
          </Text>
        </View>
      </View>
      <OrderModal />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 205,
    height: 100,
    marginTop: -100,
  },
});
