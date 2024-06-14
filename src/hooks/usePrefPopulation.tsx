import { useState } from "react";
import axios from "axios";

export function usePrefPopulation() {
  const [prefPopulation, setPrefPopulation] = useState<
    {
      prefName: string;
      data: { label: string; data: { year: number; value: number }[] }[];
    }[]
  >([]);
  const [labelId, setLabelId] = useState(0);

  async function handleClickCheck(
    prefName: string,
    prefCode: number,
    checked: boolean
  ) {
    // チェックをつけた処理
    if (checked) {
      if (prefPopulation.some((value) => value.prefName === prefName)) return;
      const res = await axios.get(
        `/api/resas/population/composition/perYear?prefCode=${prefCode}`,
        {
          headers: { "X-API-KEY": process.env.API_KEY },
        }
      );
      const data = res.data;
      setPrefPopulation([
        ...prefPopulation,
        {
          prefName: prefName,
          data: data.result.data,
        },
      ]);
    }
    // チェックを外した処理
    else {
      setPrefPopulation(
        prefPopulation.filter((value) => value.prefName !== prefName)
      );
    }
  }

  const populationdata = prefPopulation.map((value) => ({
    prefName: value.prefName,
    data: value.data[labelId],
  }));
  return { populationdata, handleClickCheck };
}
