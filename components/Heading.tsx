import { PropsWithChildren } from "react";
import { Text, TextStyle } from "react-native";
import { Colors } from "@/constants/Colors";

interface HeadingProps extends PropsWithChildren {
  level?: 1 | 2 | 3 | 4;
}

export default function Heading({ children, level = 1 }: HeadingProps) {
  const headingStyles: Record<1 | 2 | 3 | 4, TextStyle> = {
    1: { fontSize: 34, fontWeight: "bold", color: Colors.RED },
    2: { fontSize: 28, fontWeight: "bold", color: Colors.RED },
    3: { fontSize: 22, fontWeight: "bold", color: Colors.RED },
    4: { fontSize: 18, fontWeight: "bold", color: Colors.RED },
  };

  return <Text style={headingStyles[level]}>{children}</Text>;
}
