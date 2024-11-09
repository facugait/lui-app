import React, { useState } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";

const OrderModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
            <Text>Hello World!</Text>
            <Button onPress={() => setModalVisible(!modalVisible)}>
              Hide Modal
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

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

export default OrderModal;
