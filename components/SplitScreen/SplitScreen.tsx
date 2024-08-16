import { ReactNode, Children } from "react";
import { View, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: ReactNode;
  footer?: ReactNode;
}

export const SplitScreen = ({ children, footer }: Props) => {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.splitScreen__safeArea}>
      <View
        style={[
          styles.splitScreen,
          width > height ? styles.splitScreen__row : styles.splitScreen__column,
        ]}
      >
        {Children.map(children, (child) => (
          <View key={child?.toString()} style={styles.splitScreen_part}>
            {child}
          </View>
        ))}
      </View>
      {footer}
    </SafeAreaView>
  );
};
