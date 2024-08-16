import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";
import { styles } from "./styles";

interface Props {
  content: string;
}

export const MarkdownPreview = ({ content }: Props) => {
  return (
    <ScrollView style={styles.markdownPreview}>
      <Markdown>{content}</Markdown>
    </ScrollView>
  );
};
