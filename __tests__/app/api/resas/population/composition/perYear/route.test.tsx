/**
 * @jest-environment node
 */

import * as appHandler from "@/app/api/resas/population/composition/perYear/route";
import { testApiHandler } from "next-test-api-route-handler";

it("レスポンスに各ラベルの人口推移データが含まれている", async () => {
  await testApiHandler({
    url: "?prefCode=1",
    appHandler,
    async test({ fetch }) {
      const res = await fetch({ method: "GET" });
      const data = await res.json();
      expect(
        data.result.data.map(
          (value: { label: string; data: { year: number; value: number }[] }) =>
            value.label
        )
      ).toStrictEqual(["総人口", "年少人口", "生産年齢人口", "老年人口"]);
    },
  });
});
