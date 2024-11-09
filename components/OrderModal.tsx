import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TextInput } from "react-native";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import QuantityInput from "@/components/QuantityInput";
import { Colors } from "@/constants/Colors";

const OrderModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");

  return (
    <>
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
            <Heading level={3}>INGRESA TU ORDEN</Heading>
            <View style={{ gap: 20 }}>
              <View
                style={{
                  gap: 10,
                  flex: 0,
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <TextInput
                  style={styles.inputName}
                  onChangeText={setName}
                  value={name}
                  placeholder="Ingresa tu nombre"
                />
                <QuantityInput onChangeQuantity={setQuantity} />
              </View>

              <View style={{ gap: 10 }}>
                <Button onPress={() => setModalVisible(!modalVisible)}>
                  Enviar Pedido
                </Button>

                <Button
                  variant="secondary"
                  onPress={() => setModalVisible(!modalVisible)}
                >
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
  inputName: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    flex: 4,
  },
  inputQuantity: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BEIGE,
  },
  modalView: {
    gap: 40,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "100%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default OrderModal;
