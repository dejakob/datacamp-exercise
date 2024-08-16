import { SplitScreen, TextArea } from "@/components";
import { Button, KeyboardAvoidingView, Text, View } from "react-native";

export default function LandingScreen() {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SplitScreen footer={<Button title="Hello"></Button>}>
        <TextArea />
        <View>
          <Text>B</Text>
        </View>
      </SplitScreen>
    </KeyboardAvoidingView>
  );
}
