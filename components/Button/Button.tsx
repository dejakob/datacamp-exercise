import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props {
  children: string;
  onPress: () => void;
}

export const Button = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.button_text}>{children}</Text>
    </TouchableOpacity>
  );
};
