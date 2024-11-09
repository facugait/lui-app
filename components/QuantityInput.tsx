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
          fontWeight: 700,
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
          children={() => <Text style={styles.buttonText}>-</Text>}
          style={[styles.decrease, styles.button]}
          onPress={() => {
            setQuantity((prevState: string) => {
              const result = (Number(prevState) - 1).toString();
              onChangeQuantity(result);
              return result;
            });
          }}
        />
        <Pressable
          children={() => <Text style={styles.buttonText}>+</Text>}
          style={[styles.increase, styles.button]}
          onPress={() => {
            setQuantity((prevState: string) => {
              const result = (Number(prevState) + 1).toString();
              onChangeQuantity(result);
              return result;
            });
          }}
        />
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

  buttonText: { color: Colors.WHITE, fontWeight: 700, fontSize: 16 },
});

export default QuantityInput;
