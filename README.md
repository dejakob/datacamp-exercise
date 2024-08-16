# Datacamp

## Motivation

### Expo

I decided to set up an Expo project with the following motivation:
- One of the requirements of the project was to deploy to Snack, which is owned by Expo
- The latest React Native docs recommend setting up with Expo: https://reactnative.dev/docs/environment-setup

### Live reload

> Extras if you have time left: Live-rendering on change.

I would argue that in the current architecture, only having a regernation on submit
was harder to achieve, so I decided to leave it in that state.

Basically, to achieve live reload, replace `previewMarkdown` with `rawMarkdown` here:

```tsx
<MarkdownPreview content={rawMarkdown} />
```
