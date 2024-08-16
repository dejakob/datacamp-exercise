import { Button, MarkdownPreview, SplitScreen, TextArea } from "@/components";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

export default function LandingScreen() {
    const [rawMarkdown, setRawMarkdown] = useState('');

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SplitScreen footer={<Button onPress={() => {}}>Render</Button>}>
        <TextArea value={rawMarkdown} onChangeText={setRawMarkdown} />
        <MarkdownPreview content={rawMarkdown} />
      </SplitScreen>
    </KeyboardAvoidingView>
  );
}
