import { Colors } from "@/constants/Colors";
import { PropsWithChildren } from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps extends PropsWithChildren {
  onPress: () => void;
}

export default function ButtonComponent({ onPress, children }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? Colors.secondary : Colors.text,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
        },
      ]}
    >
      {({ pressed }) => (
        <Text
          style={{
            color: pressed ? Colors.background : "#FFFFFF",
            fontWeight: 500,
          }}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
}
