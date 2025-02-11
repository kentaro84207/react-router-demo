// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import type { Preview } from "@storybook/react";
import RouterDecorator from "./router-decorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RouterDecorator>
        <Story />
      </RouterDecorator>
    ),
  ],
};

export default preview;
