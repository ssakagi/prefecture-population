import "@testing-library/jest-dom";
import { act, renderHook } from "@testing-library/react";
import { usePrefPopulation } from "@/hooks/usePrefPopulation";

const { result } = renderHook(() => usePrefPopulation());

it("ラベルの再レンダーがトリガされている", () => {
  act(() => result.current.handleChangeSelect("年少人口"));
  expect(result.current.label).toBe("年少人口");
});
