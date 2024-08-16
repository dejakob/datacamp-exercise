import { ReactNode } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Text } from "react-native";

interface Props {
  children: string;
  onPress: () => void;
}

export const Button = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text  style={styles.button_text}>{children}</Text>
    </TouchableOpacity>
  );
};
