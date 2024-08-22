import LandingScreen from "../index";
import {
  render,
  screen,
  userEvent,
  waitFor,
} from "@testing-library/react-native";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: () => Promise.resolve(),
  setItem: () => Promise.resolve(),
}));

describe("Landing Screen", () => {
  beforeEach(() => {
    // Not using fake timers will result in loads of warnings
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("should preview markdown after pressing submit", async () => {
    render(<LandingScreen />);

    // Enter some markdown into the textarea
    await waitFor(async () => {
      await userEvent.clear(screen.getByTestId("textArea"));
    });
    await waitFor(async () => {
      await userEvent.type(
        screen.getByTestId("textArea"),
        "# Hello world\n## Subtitle\n![Example image](https://picsum.photos/100/100)"
      );
    });

    // Press submit
    await waitFor(async () => {
      await userEvent.press(screen.getByTestId("button"));
    });

    // Verify the markdown
    {
      const title = screen.getByTestId("markdownPreview").find((node) => {
        return node.children.toString() === "Hello world";
      });
      // Let's check if the tile has a large font color
      // This might be the only thing that can be used to verify this
      expect(title.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            fontSize: 32,
          }),
        ])
      );

      const subtitle = screen.getByTestId("markdownPreview").find((node) => {
        return node.children.toString() === "Subtitle";
      });
      // Font size is smaller for a subtitle
      expect(subtitle.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            fontSize: 24,
          }),
        ])
      );

      const image = screen.getByTestId("markdownPreview").find((node) => {
        return node.type.toString() === "Image";
      });
      expect(image.props.accessibilityLabel).toBe("Example image");
    }
  });
});
