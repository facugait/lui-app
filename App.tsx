import { StatusBar } from "expo-status-bar";
import { Image, Modal, View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

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
      <Button onPress={() => setModalVisible(!modalVisible)}>
        Hace tu pedido
      </Button>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        presentationStyle="fullScreen"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Hello World!</Text>
            <Button onPress={() => setModalVisible(!modalVisible)}>
              Hide Modal
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 205,
    height: 100,
    marginTop: -100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  modalView: {
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "80%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
