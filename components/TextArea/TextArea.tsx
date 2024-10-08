import { TextInput } from "react-native";
import { styles } from "./styles";
import { ComponentProps } from "react";

export const TextArea = (props: ComponentProps<typeof TextInput>) => {
  return (
    <TextInput
      {...props}
      textAlignVertical="top"
      multiline
      style={styles.textArea}
      testID="textArea"
    />
  );
};
