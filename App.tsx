import { StatusBar } from "expo-status-bar";
import { Image, View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import OrderModal from "@/components/OrderModal";
import { useEffect, useState } from "react";

export default function App() {
  const [menuDelDia, setMenuDelDia] = useState<{
    name?: string;
    imageUrl: string;
    price: number;
  }>();

  const { name, imageUrl, price } = menuDelDia || {};

  const initMenuDelDia = () => {
    try {
      fetch("https://dd42-181-84-76-96.ngrok-free.app/api/menu?isDaysMenu=true")
        .then((res) => res.json())
        .then((data) => data[0])
        .then(setMenuDelDia);
    } catch (error) {
      throw new Error("No se pudo hacer la request");
    }
  };

  useEffect(() => {
    initMenuDelDia();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        gap: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.BEIGE,
      }}
    >
      <StatusBar />
      {menuDelDia && (
        <View style={{ gap: 20 }}>
          <Image source={require("@/assets/splash.png")} style={styles.logo} />
          <Heading>MENU DEL DIA</Heading>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Image
              style={{ width: 200, height: 200, borderRadius: 100 }}
              source={{ uri: imageUrl }}
            />
            <View
              style={{
                justifyContent: "center",
                alignContent: "center",
                width: 200,
              }}
            >
              <Text centered>{menuDelDia.name}</Text>
              <Text centered bold bigger price>
                {`$${menuDelDia.price.toLocaleString("es-AR")}`}
              </Text>
            </View>
          </View>
          <OrderModal />
        </View>
      )}
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
