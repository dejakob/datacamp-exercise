import { Button, MarkdownPreview, SplitScreen, TextArea } from "@/components";
import { useCallback, useState } from "react";
import { KeyboardAvoidingView } from "react-native";

export default function LandingScreen() {
  const [rawMarkdown, setRawMarkdown] = useState("");
  const [previewMarkdown, setPreviewMarkdown] = useState("");

  const handleSubmit = useCallback(() => {
    setPreviewMarkdown(rawMarkdown);
  }, [rawMarkdown]);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SplitScreen footer={<Button onPress={handleSubmit}>Render</Button>}>
        <TextArea value={rawMarkdown} onChangeText={setRawMarkdown} />
        <MarkdownPreview content={previewMarkdown} />
      </SplitScreen>
    </KeyboardAvoidingView>
  );
}
