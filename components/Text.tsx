import { Colors } from "@/constants/Colors";
import { PropsWithChildren } from "react";
import { Text as RNText } from "react-native";

interface TextProps extends PropsWithChildren {
  bold?: boolean;
  centered?: boolean;
  bigger?: boolean;
  price?: boolean;
}

export default function Text({
  bold,
  centered,
  bigger,
  price,
  children,
}: TextProps) {
  return (
    <RNText
      style={{
        fontSize: bigger ? 20 : 14,
        fontWeight: bold ? 700 : 500,
        color: price ? Colors.GREEN : Colors.RED,
        textAlign: centered ? "center" : "left",
      }}
    >
      {children}
    </RNText>
  );
}
