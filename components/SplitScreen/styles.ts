import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  splitScreen: {
    flex: 1,
    gap: 4,
  },
  splitScreen__safeArea: {
    flex: 1,
    backgroundColor: "rbg(209, 209, 209)",
    padding: 4,
    gap: 4,
  },
  splitScreen__row: {
    flexDirection: "row",
  },
  splitScreen__column: {
    flexDirection: "column",
  },
  splitScreen_part: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgb(137, 137, 137)",
    backgroundColor: "#fff",
  },
});
