import { Colors } from "@/constants/Colors";
import { PropsWithChildren } from "react";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";

interface ButtonProps extends PropsWithChildren {
  onPress: () => void;
  variant?: "primary" | "secondary";
  icon?: string;
}

export default function ButtonComponent({
  onPress,
  variant = "primary",
  icon,
  children,
}: ButtonProps) {
  type BgStyleType = {
    backgroundColor: Colors;
    borderWidth?: number;
    paddingVertical: number;
    paddingHorizontal: number;
    borderRadius: number;
    borderColor?: Colors;
    alignItems: "center";
  };

  const bgStyles = (
    pressed: boolean
  ): { primary: BgStyleType; secondary: BgStyleType } => ({
    primary: {
      backgroundColor: pressed ? Colors.RED_CLARITO : Colors.RED,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: "center",
    },
    secondary: {
      backgroundColor: pressed ? Colors.GRIS_CLARITO : Colors.GRIS,
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      borderColor: Colors.BLACK,
      alignItems: "center",
    },
  });

  type TextStyleType = {
    color: string;
    fontWeight: 500;
  };

  const textStyles = (
    pressed: boolean
  ): {
    primary: TextStyleType;
    secondary: TextStyleType;
  } => ({
    primary: {
      color: pressed ? Colors.BEIGE : Colors.WHITE,
      fontWeight: 500,
    },
    secondary: {
      color: Colors.BLACK,
      fontWeight: 500,
    },
  });

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => bgStyles(pressed)[variant]}
    >
      {({ pressed }) => (
        <View>
          <Text style={textStyles(pressed)[variant]}>{children}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  whatsappIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
