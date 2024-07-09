import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckField from "../../src/components/CheckField";

const prefectures = [
  { prefCode: 1, prefName: "ドゥー県" },
  { prefCode: 2, prefName: "オート=ソーヌ県" },
];
const onChange = jest.fn(
  (prefName: string, prefCode: number, checked: boolean) => {
    console.log(prefName, prefCode, checked);
  }
);

beforeEach(() =>
  render(<CheckField prefectures={prefectures} onChange={onChange} />)
);

it("全てのチェックボックスが描画されている", () => {
  expect(screen.getAllByRole("checkbox").length).toBe(2);
});

it("ボタンに都道府県名が表示されている", () => {
  expect(screen.getByLabelText("ドゥー県")).toBeInTheDocument();
  expect(screen.getByLabelText("オート=ソーヌ県")).toBeInTheDocument();
});

it("チェックボックスのクリック時にハンドラが呼び出されている", async () => {
  const checkbox = screen.getByLabelText("ドゥー県");
  await userEvent.click(checkbox);
  expect(onChange).toHaveBeenCalled();
});

it("ボタンのクリック時にハンドラが呼び出されている", async () => {
  const button = screen.getByText("オート=ソーヌ県");
  await userEvent.click(button);
  expect(onChange).toHaveBeenCalled();
});
