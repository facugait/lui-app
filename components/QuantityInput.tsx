import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

interface QuantityInputProps {
  onChangeQuantity: (quantity: string) => void;
  initialValue?: string;
}

const QuantityInput = ({
  onChangeQuantity,
  initialValue = "1",
}: QuantityInputProps) => {
  const [quantity, setQuantity] = useState(initialValue);

  return (
    <View
      style={{
        gap: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        {quantity}
      </Text>
      <View
        style={{
          gap: 4,
          flexDirection: "row",
        }}
      >
        <Pressable
          style={[
            styles.button,
            {
              backgroundColor: quantity === "1" ? Colors.GRIS : Colors.RED,
            },
          ]}
          onPress={() => {
            setQuantity((prevState: string) => {
              const newQuantity = Math.max(1, Number(prevState) - 1).toString();
              onChangeQuantity(newQuantity);
              return newQuantity;
            });
          }}
          disabled={quantity === "1"}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable
          style={[styles.increase, styles.button]}
          onPress={() => {
            setQuantity((prevState: string) => {
              const newQuantity = (Number(prevState) + 1).toString();
              onChangeQuantity(newQuantity);
              return newQuantity;
            });
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  increase: {
    backgroundColor: Colors.GREEN,
  },
  decrease: {
    backgroundColor: Colors.RED,
  },
  button: {
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.WHITE,
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 30,
  },
});

export default QuantityInput;
