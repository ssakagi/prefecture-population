import type { Meta, StoryObj } from "@storybook/react";

import Graph from "./Graph";

const meta: Meta<typeof Graph> = {
  component: Graph,
};

export default meta;
type Story = StoryObj<typeof Graph>;

const populationdata = [
  {
    prefName: "兵庫県",
    data: [
      { year: 0, value: 0 },
      { year: 1, value: 0 },
    ],
  },
];

export const Primary: Story = {
  args: {
    populationdata,
    label: "総人口",
  },
};
