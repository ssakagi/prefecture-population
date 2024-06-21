/**
 * @jest-environment node
 */

import * as appHandler from "@/app/api/resas/prefectures/route";
import { testApiHandler } from "next-test-api-route-handler";

it("レスポンスに47都道府県のデータが含まれている", async () => {
  await testApiHandler({
    appHandler,
    async test({ fetch }) {
      const res = await fetch({ method: "GET" });
      const data = await res.json();
      expect(data.result.length).toBe(47);
    },
  });
});
