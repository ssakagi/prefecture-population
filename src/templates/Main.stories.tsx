import type { Meta, StoryObj } from "@storybook/react";

import Main from "./Main";

const meta: Meta<typeof Main> = {
  component: Main,
};

export default meta;
type Story = StoryObj<typeof Main>;

const prefectures = [
  { prefCode: 1, prefName: "ドゥー県" },
  { prefCode: 2, prefName: "オート=ソーヌ県" },
];

export const Primary: Story = {
  args: { prefectures },
};
