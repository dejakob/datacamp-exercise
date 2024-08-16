import { Button, MarkdownPreview, SplitScreen, TextArea } from "@/components";
import { useCallback, useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LandingScreen() {
  const [rawMarkdown, setRawMarkdown] = useState("");
  const [previewMarkdown, setPreviewMarkdown] = useState("");

  const loadFromStorage = useCallback(async () => {
    try {
      const mdContents = await AsyncStorage.getItem("md");

      if (!mdContents) {
        return;
      }

      setRawMarkdown(mdContents);
      setPreviewMarkdown(mdContents);
    } catch {
      console.error("AsyncStorage not supported");
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    setPreviewMarkdown(rawMarkdown);

    try {
      await AsyncStorage.setItem("md", rawMarkdown);
    } catch {
      console.error("AsyncStorage not supported");
    }
  }, [rawMarkdown]);

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SplitScreen footer={<Button onPress={handleSubmit}>Render</Button>}>
        <TextArea value={rawMarkdown} onChangeText={setRawMarkdown} />
        <MarkdownPreview content={previewMarkdown} />
      </SplitScreen>
    </KeyboardAvoidingView>
  );
}
