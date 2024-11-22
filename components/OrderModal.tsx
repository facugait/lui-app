import React, { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TextInput,
  Linking,
  Text,
  Image,
} from "react-native";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import QuantityInput from "@/components/QuantityInput";
import { Colors } from "@/constants/Colors";
import { Menu } from "@/interfaces";

const OrderModal = ({ menu }: { menu: Menu }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");

  const message = `Hola, quiero el menu del día.\n_Nombre:_ *${name}*\n_Cantidad:_ *${quantity}*`;

  const sendMessageToWhatsApp = async (
    message: string,
    phoneNumber: string
  ) => {
    let url = `whatsapp://send?text=${encodeURIComponent(
      message
    )}&phone=${phoneNumber}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
        cleanAndclose();
      } else {
        alert("WhatsApp not installed");
      }
    } catch (error) {
      console.error("There was an error trying to open WhatsApp", error);
    }
  };

  const cleanAndclose = () => {
    setName("");
    setQuantity("1");
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <Button onPress={() => setModalVisible(!modalVisible)}>
        Hacé tu pedido
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
            <Heading level={3}>INGRESÁ TU ORDEN</Heading>
            <View style={{ gap: 20 }}>
              <View style={styles.menuInfo}>
                <Image
                  style={{ width: 90, height: 50 }}
                  source={{ uri: menu.imageUrl }}
                />
                <View>
                  <Text style={{ fontWeight: "bold" }}>{menu.name}</Text>
                  <Text style={{ color: Colors.GRIS_OSCURO }}>
                    {`$${menu.price.toLocaleString("es-AR")}`}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  gap: 10,
                  flex: 0,
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <View style={{ minHeight: 60 }}>
                  <Text style={{ marginLeft: 4 }}>Tu nombre</Text>
                  <TextInput
                    style={styles.inputName}
                    onChangeText={setName}
                    value={name}
                    placeholder="Ingresá tu nombre"
                    placeholderTextColor={Colors.GRIS_OSCURO}
                  />
                </View>
                <View>
                  <Text>Cantidad</Text>
                  <QuantityInput onChangeQuantity={setQuantity} />
                </View>
              </View>

              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "right",
                  }}
                >
                  {`TOTAL: $${(menu.price * Number(quantity)).toLocaleString(
                    "es-AR"
                  )}`}
                </Text>
              </View>

              <View style={{ gap: 10 }}>
                <Button
                  onPress={() => {
                    sendMessageToWhatsApp(message, "+541161344582");
                  }}
                  icon="@/assets/whatsapp.png"
                >
                  Enviar Pedido por WhatsApp
                </Button>

                <Button variant="secondary" onPress={cleanAndclose}>
                  Cancelar
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  menuInfo: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    flexDirection: "row",
  },
  inputName: {
    height: 40,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.BEIGE_CLARITO,
    borderRadius: 15,
    flex: 4,
    marginTop: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BEIGE,
    width: "100%",
  },
  modalView: {
    gap: 40,
    padding: 25,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "100%",
  },
});

export default OrderModal;
