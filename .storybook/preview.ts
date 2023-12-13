import type { Preview } from "@storybook/react";
import "../src/App.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "background",
      values: [
        {
          name: "background",
          value: "#39353a",
        },
      ],
    },
  },
};

export default preview;
