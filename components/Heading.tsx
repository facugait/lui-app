import { PropsWithChildren } from "react";
import { Text } from "react-native";
import { Colors } from "@/constants/Colors";

interface HeadingProps extends PropsWithChildren {}

export default function Heading({ children }: HeadingProps) {
  return (
    <Text
      style={{
        fontSize: 34,
        fontWeight: "bold",
        color: Colors.text,
      }}
    >
      {children}
    </Text>
  );
}
