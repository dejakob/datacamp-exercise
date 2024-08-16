import { Button, SplitScreen, TextArea } from "@/components";
import { KeyboardAvoidingView, Text, View } from "react-native";

export default function LandingScreen() {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SplitScreen footer={<Button onPress={() => {}}>Render</Button>}>
        <TextArea />
        <View>
          <Text>B</Text>
        </View>
      </SplitScreen>
    </KeyboardAvoidingView>
  );
}
