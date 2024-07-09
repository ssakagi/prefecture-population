import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import CheckField from "./CheckField";

const meta: Meta<typeof CheckField> = {
  component: CheckField,
};

export default meta;
type Story = StoryObj<typeof CheckField>;

const CheckFieldWithHooks = () => {
  const [prefectures, setPrefectures] = useState([
    { prefCode: 1, prefName: "ドゥー県" },
    { prefCode: 2, prefName: "オート=ソーヌ県" },
  ]);

  const onChange = (prefName: string, prefCode: number, checked: boolean) =>
    setPrefectures(
      prefectures.map((value) =>
        value.prefCode === prefCode ? { prefCode, prefName: "兵庫県" } : value
      )
    );
  return <CheckField prefectures={prefectures} onChange={onChange} />;
};

export const Primary: Story = {
  render: () => <CheckFieldWithHooks />,
};
