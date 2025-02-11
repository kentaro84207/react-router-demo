import type { Meta, StoryObj } from "@storybook/react";
import type { Breed } from "~/features/cats/types";
import { Card } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    cat: {
      id: "1",
      url: "https://cdn2.thecatapi.com/images/MTYwNjIwMw.jpg",
      width: 500,
      height: 333,
      breeds: [
        {
          id: "abys",
          name: "Abyssinian",
        } as Breed,
      ],
    },
  },
};
